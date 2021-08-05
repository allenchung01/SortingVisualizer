// Sorts the given array in ascending order
// using bubble sort. Executes callback functions
// during traversal and swaps on the array. Time
// determines the animation speed.
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
        postMessage({ str: "traverse", index: j });
        //onTraversal(j);
        if (_arr[j] > _arr[j + 1]) {
          // Perform swap.
          [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
          didSwap = true;
          postMessage({ str: "swap", index1: j, index2: j + 1 });
          //nSwap(j, j + 1);
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

onmessage = function (e) {
  if (e.data.str == "run") {
    const { arr, time } = e.data.params;
    bubbleSort(arr, time);
  }
};

//module.exports = bubbleSort;
