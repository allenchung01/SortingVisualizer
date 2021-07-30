// Sorts the given array in ascending order
// using merge sort. Executes callback functions
// during traversal and swaps on the array. Time
// determines the animation speed.
function mergeSort(arr, onTraversal = () => {}, onSwap = () => {}, time = 0) {
  _mergeSort(arr, 0, arr.length - 1, onTraversal, onSwap, time);
}

function _mergeSort(arr, l, r, onTraversal, onSwap, time) {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    // Sort left and right arrays.
    _mergeSort(arr, l, m, onTraversal, onSwap, time);
    _mergeSort(arr, m + 1, r, onTraversal, onSwap, time);
    // Merge the two sorted arrays.
    merge(arr, l, m, r, onTraversal, onSwap, time);
  }
}

function merge(arr, l, m, r, onTraversal, onSwap, time) {
  let lSize = m - l + 1;
  let rSize = r - m;
  let L = new Array(lSize);
  let R = new Array(rSize);
  // Copy values into left and right arrays.
  for (let i = 0; i < lSize; i++) {
    L[i] = arr[l + i];
  }
  for (let i = 0; i < rSize; i++) {
    R[i] = arr[m + 1 + i];
  }
  // Merge arrays back into original array.
  let i = 0;
  let j = 0;
  let k = l;
  while (i < lSize && j < rSize) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  // Copy remaining elements if there are any.
  for (i; i < lSize; i++) {
    arr[k] = L[i];
    k++;
  }
  for (j; j < rSize; j++) {
    arr[k] = R[j];
    k++;
  }
}

module.exports = mergeSort;
