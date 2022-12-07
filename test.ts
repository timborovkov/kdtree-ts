import { KDTree } from "./";

describe('KDTree', () => {

    it('knnSearch', () => {
        let points = [[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, 1.0, 0.0]];
        let tree = new KDTree(points, 3);
        let ans = tree.knnSearch([1.0, 0.0, 0.0], 1);
        expect(ans).toEqual([0]);
    });

    it('radiusSearch', () => {
        let points = [[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, 1.0, 0.0]];
        let tree = new KDTree(points, 3);
        let ans = tree.radiusSearch([1.0, 0.0, 0.0], 0.1);
        expect(ans).toEqual([0]);

        ans = tree.radiusSearch([0.0, 0.0, 1.0], 0.1);
        expect(ans).toEqual([1]);

        ans = tree.radiusSearch([0.0, 1.0, 0.0], 0.1);
        expect(ans).toEqual([2]);
    });

});
