const container2 = document.querySelector(".container2");
const container = document.querySelector(".container");
const container3 = document.querySelector(".container3");
const crossOptionn = document.querySelector(".crossOption");
const queryBox = document.querySelector(".queryBox");
function popUp() {
  container2.style.display = "flex";
  container.style.opacity = "0.5";
  container2.style.opacity = "1";
}

function cross() {
  container2.style.display = "none";
  container.style.opacity = "1";
  container2.style.opacity = "1";
}

function submissionConfirmation() {
  if (queryBox.value == "") {
    window.alert("Kindly enter some query");
  } else {
    container3.style.display = "flex";
    container2.style.opacity = "0.15";
    container.style.opacity = "0.1";
  }
  setTimeout(() => {
    container3.style.display = "none";
    container2.style.display = "none";
    container.style.display = "block";
    container.style.opacity = "1";
  }, 4000);
}
