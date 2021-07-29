// Returns a sorted version of the given array in ascending order.
export default function bubbleSort(arr) {
  const _arr = arr.slice();
  let didSwap = false;
  do {
    didSwap = false;
    for (let i = 0; i < _arr.length - 1; i++) {
      if (_arr[i] > _arr[i + 1]) {
        [_arr[i], _arr[i + 1]] = [_arr[i + 1], _arr[i]];
        didSwap = true;
      }
    }
  } while (didSwap);
  return _arr;
}

//module.exports = bubbleSort;
