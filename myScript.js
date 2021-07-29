let isTitleBlue = false;

function toggleTitle() {
  isTitleBlue
    ? (document.getElementById("main-title").style.color = "red")
    : (document.getElementById("main-title").style.color = "blue");
  isTitleBlue = !isTitleBlue;
  console.log(isTitleBlue);
}

document.getElementById("main-title").style.color = "red";

document.getElementById("main-title").onclick = toggleTitle;
