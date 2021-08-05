// Sorts the given array in ascending order
// using merge sort. Executes callback functions
// during traversal and swaps on the array. Time
// determines the animation speed.
export default async function mergeSort(
  arr,
  onTraversal = () => {},
  onInsert = () => {},
  time = 0
) {
  await _mergeSort(arr, 0, arr.length - 1, onTraversal, onInsert, time);
}

async function _mergeSort(arr, l, r, onTraversal, onInsert, time) {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    // Sort left and right arrays.
    await _mergeSort(arr, l, m, onTraversal, onInsert, time);
    await _mergeSort(arr, m + 1, r, onTraversal, onInsert, time);
    // Merge the two sorted arrays.
    await merge(arr, l, m, r, onTraversal, onInsert, time);
  }
}

async function merge(arr, l, m, r, onTraversal, onInsert, time) {
  let lSize = m - l + 1;
  let rSize = r - m;
  let L = new Array(lSize);
  let R = new Array(rSize);
  // Copy values into left and right arrays.
  for (let i = 0; i < lSize; i++) {
    onTraversal(l + i);
    L[i] = arr[l + i];
  }
  for (let i = 0; i < rSize; i++) {
    onTraversal(m + 1 + i);
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
      onInsert(k, l + i);
    } else {
      arr[k] = R[j];
      onInsert(k, m + 1 + j);
      j++;
    }
    k++;
    await sleep(time);
  }
  // Copy remaining elements if there are any.
  for (i; i < lSize; i++) {
    arr[k] = L[i];
    onInsert(k, l + i);
    k++;
    await sleep(time);
  }
  for (j; j < rSize; j++) {
    arr[k] = R[j];
    onInsert(k, m + 1 + j);
    k++;
    await sleep(time);
  }
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

//module.exports = mergeSort;
