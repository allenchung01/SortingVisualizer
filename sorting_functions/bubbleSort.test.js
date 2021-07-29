const { test, expect } = require("@jest/globals");
const bubbleSort = require("./bubbleSort");

test("bubble sort sorts", () => {
  // Randomly assorted.
  bubbleSort([3, 7, 1, 4, 9, 6, 2, 8, 5]).then((arr) => {
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  // Reverse order.
  bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]).then((arr) => {
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  // Already sorted.
  bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]).then((arr) => {
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  // Duplicate values.
  bubbleSort([1, 2, 3, 4, 4, 6, 7, 8, 9]).then((arr) => {
    expect(arr).toEqual([1, 2, 3, 4, 4, 6, 7, 8, 9]);
  });
  // All same elements.
  bubbleSort([1, 1, 1, 1, 1]).then((arr) => {
    expect(arr).toEqual([1, 1, 1, 1, 1]);
  });
  // One element.
  bubbleSort([1]).then((arr) => {
    expect(arr).toEqual([1]);
  });
  // Two elements.
  bubbleSort([2, 1]).then((arr) => {
    expect(arr).toEqual([1, 2]);
  });
  // Empty array.
  bubbleSort([]).then((arr) => {
    expect(arr).toEqual([]);
  });
});
