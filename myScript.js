import SortingContainer from "./sorting_container/sortingContainer.js";

const sortingContainer = new SortingContainer();
sortingContainer.initialize();

document.getElementById("bubblesort-button").onclick = () =>
  sortingContainer.bubbleSort();

document.getElementById("quicksort-button").onclick = () =>
  sortingContainer.quickSort();

document.getElementById("shuffle-button").onclick = () =>
  sortingContainer.shuffle();
