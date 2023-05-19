
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
  minusMinutes = Number(minutesDisplay.textContent) - 5;

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
});

buttonPause.addEventListener("click", () => {
  clearTimeout(timerTimeOut);
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
});

buttonForest.addEventListener("click", () => {
  console.log("Certo");
  buttonForest.classList.add("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.remove("select");
  buttonFire.classList.remove("select");
});

buttonRain.addEventListener("click", () => {
  buttonForest.classList.remove("select");
  buttonRain.classList.add("select");
  buttonCoffeStore.classList.remove("select");
  buttonFire.classList.remove("select");

});

buttonCoffeStore.addEventListener("click", () => {
  buttonForest.classList.remove("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.add("select");
  buttonFire.classList.remove("select");
});

buttonFire.addEventListener("click", () => {
  buttonFire.classList.add("select");
  buttonForest.classList.remove("select");
  buttonRain.classList.remove("select");
  buttonCoffeStore.classList.remove("select");
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
