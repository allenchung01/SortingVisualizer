const { traverse } = require("@babel/types");

/*export default */ async function selectionSort(
  arr,
  onTraversal = () => {},
  onSwap = () => {},
  time = 0
) {
  // Increment i as sorted elements are placed to the left.
  for (let i = 0; i < arr.length; i++) {
    onTraversal(i);
    // Find minimum element in unsorted array.
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      onTraversal(j);
      if (arr[j] < arr[min]) {
        min = j;
      }
      await sleep(time);
    }
    // Swap minimum element with element at end of sorted array.
    [arr[i], arr[min]] = [arr[min], arr[i]];
    onSwap(i, min);
    await sleep(time);
  }
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

module.exports = selectionSort;
