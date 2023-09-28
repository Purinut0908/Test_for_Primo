import { merge } from '../src/merge';

test('Merges two sorted arrays', () => {
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  const merged = merge(arr1, arr2);
  expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Merges arrays of different lengths', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5];
  const merged = merge(arr1, arr2);
  expect(merged).toEqual([1, 2, 3, 4, 5]);
});

test('Merges arrays with duplicate elements', () => {
  const arr1 = [1, 2, 3, 3, 5];
  const arr2 = [2, 4, 4, 6];
  const merged = merge(arr1, arr2);
  expect(merged).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 6]);
});