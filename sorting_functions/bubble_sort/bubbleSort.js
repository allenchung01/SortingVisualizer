// Returns a sorted version of the given array
// in ascending order.
export default async function bubbleSort(
  arr,
  onTraversal = () => {},
  onSwap = () => {},
  time = 0
) {
  const _arr = arr.slice();
  let didSwap = false;
  do {
    for (let i = 0; i < _arr.length - 1; i++) {
      didSwap = false;
      for (let j = 0; j < _arr.length - 1 - i; j++) {
        onTraversal(j);
        if (_arr[j] > _arr[j + 1]) {
          // Perform swap.
          [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
          didSwap = true;
          onSwap(j, j + 1);
        }
        await sleep(time);
      }
    }
  } while (didSwap);
  return _arr;
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, time);
  });
}

//module.exports = bubbleSort;
