import SortingContainer from "./sorting_container/sortingContainer.js";

const sortingContainer = new SortingContainer();
sortingContainer.initialize();

document.getElementById("sort-button").onclick = () =>
  sortingContainer.bubbleSort();

document.getElementById("shuffle-button").onclick = () =>
  sortingContainer.shuffle();
