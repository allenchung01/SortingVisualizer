// Sorts the given array in ascending order.
// and executes functions during traversal
// and swaps on the array. Time determines
// animation speed.
export default function quickSort(
  arr,
  onTraversal = () => {},
  onSwap = () => {},
  time = 0
) {
  _quicksort(arr, 0, arr.length - 1, onTraversal, onSwap, time);
}

async function _quicksort(arr, low, high, onTraversal, onSwap, time) {
  if (low < high) {
    let pi = await partition(arr, low, high, onTraversal, onSwap, time);
    await _quicksort(arr, low, pi - 1, onTraversal, onSwap, time);
    await _quicksort(arr, pi + 1, high, onTraversal, onSwap, time);
  }
}

async function partition(arr, low, high, onTraversal, onSwap, time) {
  let pivot = arr[high];
  let leftPos = low;
  for (let i = low; i < high; i++) {
    onTraversal(i);
    if (arr[i] < pivot) {
      // Move element to left of pivot.
      [arr[leftPos], arr[i]] = [arr[i], arr[leftPos]];
      onSwap(leftPos, i);
      leftPos++;
    }
    await sleep(time);
  }
  // Move pivot into position.
  [arr[leftPos], arr[high]] = [arr[high], arr[leftPos]];
  onSwap(leftPos, high);
  return leftPos;
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

//module.exports = quickSort;
