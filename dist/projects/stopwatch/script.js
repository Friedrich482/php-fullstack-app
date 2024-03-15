"use strict";
const displayTime = document.querySelector("#displayTime");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
let elapsedTime = 0;
let hours = "0";
let minutes = "0";
let seconds = "0";
let milliseconds = "0";
let paused = true;
let timerId;
let timeStart;
startButton.addEventListener("click", () => {
  if (paused) {
    paused = false;
    timeStart = Date.now() - elapsedTime;
    timerId = setInterval(refreshTime, 1);
  }
  function refreshTime() {
    let elapsedTime = Date.now() - timeStart;
    milliseconds = (elapsedTime % 1000).toString();
    seconds = Math.floor((elapsedTime / 1000) % 60).toString();
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString();
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60).toString();
    function pad(unit) {
      return unit.length < 2 ? "0" + unit : unit;
    }
    function padms(unit) {
      if (unit.length < 2) {
        return "00" + unit;
      } else if (unit.length === 2) {
        return "0" + unit;
      } else {
        return unit;
      }
    }
    milliseconds = padms(milliseconds);
    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    displayTime.innerHTML = `<span class="w-24">${hours}</span>:<span class="w-24">${minutes}</span>:<span class="w-24">${seconds}</span>:<span class="w-48">${milliseconds}</span>`;
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
  displayTime.innerHTML = `<span class="w-24">00</span>:<span class="w-24">00</span>:<span class="w-24">00</span>:<span class="w-48">000</span>`;
  hours = "0";
  minutes = "0";
  seconds = "0";
  milliseconds = "0";
  elapsedTime = 0;
  clearInterval(timerId);
});
const footerStopwatch = document.querySelector("footer");
footerStopwatch.classList.add("text-white", "MV-boli");
const imageFooterStopwatch = footerStopwatch.querySelector("img");
imageFooterStopwatch.src = "../../assets/icons/rocket.svg";
footerStopwatch.classList.add("mt-8");
