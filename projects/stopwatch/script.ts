const displayTime = document.querySelector("#displayTime") as HTMLDivElement;
const startButton = document.querySelector("#startButton") as HTMLButtonElement;
const pauseButton = document.querySelector("#pauseButton") as HTMLButtonElement;
const resetButton = document.querySelector("#resetButton") as HTMLButtonElement;

let elapsedTime = 0;
let hours = 0;
let minutes = 0;
let paused = true;
let seconds = 0;
let milliseconds = 0;
let timerId: number;
let timeStart: number;

startButton.addEventListener("click", () => {
  if (paused) {
    paused = false;
    timeStart = Date.now() - elapsedTime;
    timerId = setInterval(refreshTime, 1);
  }

  function refreshTime() {
    let elapsedTime = Date.now() - timeStart;

    milliseconds = elapsedTime % 1000;
    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    function pad(unit: number) {
      return unit < 10 ? "0" + unit : unit;
    }

    function padms(unit: number) {
      if (unit < 10) {
        return "00" + unit;
      } else if (unit >= 10 && unit < 100) {
        return "0" + unit;
      } else {
        return unit;
      }
    }

    milliseconds = Number(padms(milliseconds));
    seconds = Number(pad(seconds));
    minutes = Number(pad(minutes));
    hours = Number(pad(hours));

    displayTime.textContent =
      `${hours}:${minutes}:${seconds}` + `:${milliseconds}`;
  }
});

pauseButton.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - timeStart;
    clearInterval(timerId);
  }
});

resetButton.addEventListener("click", () => {
  paused = true;
  displayTime.textContent = "00:00:00:000";
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  elapsedTime = 0;
  clearInterval(timerId);
});
