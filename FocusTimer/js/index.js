import Sound from "./audio.js";

const buttonPlay = document.querySelector("#play");
const buttonStop = document.querySelector("#stop");
const buttonPause = document.querySelector("#pause");
const buttonPlus = document.querySelector("#plusTime");
const buttonMinus = document.querySelector("#minusTime");

const buttonForest = document.querySelector("#forest");
const buttonRain = document.querySelector("#rain");
const buttonCoffeStore = document.querySelector("#coffeStore");
const buttonFire = document.querySelector("#fire");
const cards = document.querySelectorAll(".card");

let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let timerTimeOut;

buttonPlus.addEventListener("click", () => {
  moreMinutes = Number(minutesDisplay.textContent) + 5;
  minutesDisplay.textContent = String(moreMinutes).padStart(2, "0");
});

buttonMinus.addEventListener("click", () => {
  let minusMinutes = Number(minutesDisplay.textContent) - 5;

  minutesDisplay.textContent = String(minusMinutes).padStart(2, "0");
  if (minusMinutes < 0) {
    console.log("Passou aqui");
    return (minutesDisplay.textContent = String("00"));
  }
});

buttonPlay.addEventListener("click", () => {
  countdown();
  console.log("Play");
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  Sound().pressButton();
});

buttonPause.addEventListener("click", () => {
  clearTimeout(timerTimeOut);
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  Sound().pressButton();
});

buttonForest.addEventListener("click", () => {
  console.log("Certo");
  buttonForest.classList.add("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.remove("select");
  buttonFire.classList.remove("select");
  Sound().pressButton();
  Sound().playFlorest();
});

buttonRain.addEventListener("click", () => {
  buttonForest.classList.remove("select");
  buttonRain.classList.add("select");
  buttonCoffeStore.classList.remove("select");
  buttonFire.classList.remove("select");
  Sound().pressButton();
  Sound().playRain();
});

buttonCoffeStore.addEventListener("click", () => {
  buttonForest.classList.remove("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.add("select");
  buttonFire.classList.remove("select");
  Sound().pressButton();
});

buttonFire.addEventListener("click", () => {
  buttonFire.classList.add("select");
  buttonForest.classList.remove("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.remove("select");
  Sound().pressButton();
});

function countdown() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (seconds <= 0) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes) - 1;
    }
    seconds = seconds - 1;
    console.log(seconds);
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    countdown();
  }, 1000);
}
