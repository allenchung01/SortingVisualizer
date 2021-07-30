/*export default */ async function insertionSort(
  arr,
  onTraversal = () => {},
  onSwap = () => {},
  time = 0
) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    // Swap element until everything before it is smaller.
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
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

module.exports = insertionSort;
