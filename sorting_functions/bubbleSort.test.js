const { test, expect } = require("@jest/globals");
const bubbleSort = require("./bubbleSort");

test("bubble sort sorts", () => {
  // Randomly assorted.
  expect(bubbleSort([3, 7, 1, 4, 9, 6, 2, 8, 5])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  // Reverse order.
  expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  // Already sorted.
  expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  // Duplicate values.
  expect(bubbleSort([1, 2, 3, 4, 4, 6, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 4, 6, 7, 8, 9,
  ]);
  // All same elements.
  expect(bubbleSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  // One element.
  expect(bubbleSort([1])).toEqual([1]);
  // Two elements.
  expect(bubbleSort([2, 1])).toEqual([1, 2]);
  // Empty array.
  expect(bubbleSort([])).toEqual([]);
});
