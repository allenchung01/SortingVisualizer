import SortingContainer from "./sorting_container/sortingContainer.js";

const sortingContainer = new SortingContainer();
sortingContainer.initialize();

document.getElementById("bubblesort-button").onclick = () =>
  sortingContainer.bubbleSort();

document.getElementById("quicksort-button").onclick = () =>
  sortingContainer.quickSort();

document.getElementById("mergesort-button").onclick = () =>
  sortingContainer.mergeSort();

document.getElementById("insertionsort-button").onclick = () =>
  sortingContainer.insertionSort();

document.getElementById("shuffle-button").onclick = () =>
  sortingContainer.shuffle();
