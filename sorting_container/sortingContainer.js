export default function SortingContainer() {
  const MAX_VALUE = 40;

  // Initialize values to random numbers.
  this.values = Array(MAX_VALUE)
    .fill()
    .map(() => {
      return Math.floor(Math.random() * MAX_VALUE);
    });

  // Return innerHTML to display values.
  this.display = function () {
    let innerHTML = "";
    for (let value of this.values) {
      console.log(value);
      innerHTML += `<div>${value}</div>`;
    }
    document.getElementById("sorting-container").innerHTML = innerHTML;
  };
}
