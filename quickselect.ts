// https://github.com/mourner/quickselect/blob/master/index.js
export default function quickselect<T>(arr: T[], k: number, left: number, right: number, compare: (x: T, y: T) => number) {
    quickselectStep(arr, k, left, right, compare);
}

function quickselectStep<T>(arr: T[], k: number, left: number, right: number, compare: (x: T, y: T) => number) {
    while (right > left) {
        if (right - left > 600) {
            let n = right - left + 1;
            let m = k - left + 1;
            let z = Math.log(n);
            let s = 0.5 * Math.exp(2 * z / 3);
            let sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            let newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            let newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselectStep(arr, k, newLeft, newRight, compare);
        }

        let t = arr[k];
        let i = left;
        let j = right;

        swap(arr, left, k);
        if (compare(arr[right], t) > 0) swap(arr, left, right);

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) i++;
            while (compare(arr[j], t) > 0) j--;
        }

        if (compare(arr[left], t) === 0) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap<T>(arr: T[], i: number, j: number) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
