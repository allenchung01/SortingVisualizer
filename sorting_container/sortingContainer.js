import bubbleSort from "../sorting_functions/bubble_sort/bubbleSort.js";
import quickSort from "../sorting_functions/quick_sort/quickSort.js";
import mergeSort from "../sorting_functions/merge_sort/mergeSort.js";
import insertionSort from "../sorting_functions/insertion_sort/insertionSort.js";
import selectionSort from "../sorting_functions/selection_sort/selectionSort.js";

const MAX_VALUE = 99;
const NUM_BARS = 100;
const BAR_WIDTH = 5;

export default function SortingContainer() {
  // Initialize values to random numbers.
  this.values = Array(NUM_BARS)
    .fill()
    .map(() => {
      return Math.floor(Math.random() * MAX_VALUE);
    });
  this.prevSwapI = null;
  this.prevSwapJ = null;
  this.prevTraverse = null;
}

SortingContainer.prototype.initialize = function () {
  // Set up grid dimensions.
  const sortingContainer = document.getElementById("sorting-container");
  sortingContainer.style.setProperty(
    "grid-template-columns",
    `repeat(${NUM_BARS}, ${BAR_WIDTH}px)`
  );
  // Generate bars.
  for (let value of this.values) {
    const bar = document.createElement("div");
    const percent = (value / MAX_VALUE) * 100;
    bar.className = "bar";
    bar.style.height = `${percent}%`;
    sortingContainer.appendChild(bar);
  }
};

SortingContainer.prototype.shuffle = function () {
  const bars = document.getElementsByClassName("bar");
  // Randomize values and update bars.
  for (let i in this.values) {
    this.values[i] = Math.floor(Math.random() * MAX_VALUE);
    const percent = (this.values[i] / MAX_VALUE) * 100;
    bars[i].style.height = `${percent}%`;
  }
};

SortingContainer.prototype.bubbleSort = function () {
  const bars = document.getElementsByClassName("bar");
  bubbleSort(
    this.values,
    (i) => this.traverse(bars, i),
    (i, j) => this.swap(bars, i, j),
    5
  );
};

SortingContainer.prototype.quickSort = function () {
  const bars = document.getElementsByClassName("bar");
  quickSort(
    this.values,
    (i) => this.traverse(bars, i),
    (i, j) => this.swap(bars, i, j),
    5
  );
};

SortingContainer.prototype.mergeSort = function () {
  const bars = document.getElementsByClassName("bar");
  mergeSort(
    this.values,
    (i) => this.traverse(bars, i),
    (i, j) => this.insert(bars, i, j),
    5
  );
};

SortingContainer.prototype.insertionSort = function () {
  const bars = document.getElementsByClassName("bar");
  insertionSort(
    this.values,
    (i) => this.traverse(bars, i),
    (i, j) => this.swap(bars, i, j),
    5
  );
};

SortingContainer.prototype.selectionSort = function () {
  const bars = document.getElementsByClassName("bar");
  selectionSort(
    this.values,
    (i) => this.traverse(bars, i),
    (i, j) => this.swap(bars, i, j),
    5
  );
};

// Perform UI updates when index i is swapped with index j.
SortingContainer.prototype.swap = function (bars, i, j) {
  // Remove swap state from previous bars.
  if (this.prevSwapI && this.prevSwapJ) {
    bars[this.prevSwapI].classList.remove("is-swapping");
    bars[this.prevSwapJ].classList.remove("is-swapping");
  }
  // Swap bars.
  const temp = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = temp;
  // Add swap state to bars.
  bars[i].classList.add("is-swapping");
  bars[j].classList.add("is-swapping");
  this.prevSwapI = i;
  this.prevSwapJ = j;
};

// Perform UI updates when inserting into index i during merge sort.
SortingContainer.prototype.insert = function (bars, i, j) {
  // Remove swap state from previous bars.
  if (this.prevSwapI && this.prevSwapJ) {
    bars[this.prevSwapI].classList.remove("is-swapping");
    bars[this.prevSwapJ].classList.remove("is-swapping");
  }
  // Swap bars.
  const percent = (this.values[i] / MAX_VALUE) * 100;
  bars[i].style.height = `${percent}%`;
  // Add swap state to bars.
  bars[i].classList.add("is-swapping");
  bars[j].classList.add("is-swapping");
  this.prevSwapI = i;
  this.prevSwapJ = j;
};

// Perform UI updates as index i updates while traversing the array.
SortingContainer.prototype.traverse = function (bars, i) {
  // Remove traverse state from previous bar.
  if (this.prevTraverse) {
    bars[this.prevTraverse].classList.remove("is-traversing");
  }
  // Add traverse state to bar.
  bars[i].classList.add("is-traversing");
  this.prevTraverse = i;
};
