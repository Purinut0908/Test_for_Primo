"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("../src/merge");
test('Merges two sorted arrays', function () {
    var arr1 = [1, 3, 5, 7];
    var arr2 = [2, 4, 6, 8];
    var merged = (0, merge_1.merge)(arr1, arr2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test('Merges arrays of different lengths', function () {
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5];
    var merged = (0, merge_1.merge)(arr1, arr2);
    expect(merged).toEqual([1, 2, 3, 4, 5]);
});
test('Merges arrays with duplicate elements', function () {
    var arr1 = [1, 2, 3, 3, 5];
    var arr2 = [2, 4, 4, 6];
    var merged = (0, merge_1.merge)(arr1, arr2);
    expect(merged).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 6]);
});
