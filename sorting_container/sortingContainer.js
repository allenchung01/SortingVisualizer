import bubbleSort from "../sorting_functions/bubbleSort.js";

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
    bar.innerHTML = value;
    sortingContainer.appendChild(bar);
  }
};

SortingContainer.prototype.bubbleSort = function () {
  console.log(this.values);
  const sortedValues = bubbleSort(this.values);
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < NUM_BARS; i++) {
    const percent = (sortedValues[i] / MAX_VALUE) * 100;
    bars[i].style.height = `${percent}%`;
  }
};
