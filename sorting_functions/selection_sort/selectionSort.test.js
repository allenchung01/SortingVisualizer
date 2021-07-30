const { test, expect } = require("@jest/globals");
const selectionSort = require("./selectionSort.js");

test("merge sort sorts", async () => {
  // Randomly assorted.
  let arr = [3, 7, 1, 4, 9, 6, 2, 8, 5];
  await selectionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // Reverse order.
  arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  await selectionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // Already sorted.
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  await selectionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // Duplicate values.
  arr = [1, 2, 3, 4, 4, 6, 7, 8, 9];
  await selectionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 4, 6, 7, 8, 9]);
  // All same elements.
  arr = [1, 1, 1, 1, 1];
  await selectionSort(arr);
  expect(arr).toEqual([1, 1, 1, 1, 1]);
  // One element.
  arr = [1];
  await selectionSort(arr);
  expect(arr).toEqual([1]);
  // Two elements.
  arr = [2, 1];
  await selectionSort(arr);
  expect(arr).toEqual([1, 2]);
  // Empty array.
  arr = [];
  await selectionSort(arr);
  expect(arr).toEqual([]);
});
