// Sorts the given array in ascending order
// using insertion sort. Executes callback functions
// during traversal and swaps on the array. Time
// determines the animation speed.
export default async function insertionSort(
  arr,
  onTraversal = () => {},
  onSwap = () => {},
  time = 0
) {
  for (let i = 1; i < arr.length; i++) {
    onTraversal(i);
    let j = i;
    // Swap element until everything before it is smaller.
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      onSwap(j, j - 1);
      j--;
      await sleep(time);
    }
    await sleep(time);
  }
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

//module.exports = insertionSort;
