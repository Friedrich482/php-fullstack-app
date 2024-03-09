"use strict";
const displayTime = document.querySelector("#displayTime");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
let elapsedTime = 0;
let hours = 0;
let minutes = 0;
let paused = true;
let seconds = 0;
let milliseconds = 0;
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
        milliseconds = elapsedTime % 1000;
        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
        function pad(unit) {
            return unit < 10 ? "0" + unit : unit;
        }
        function padms(unit) {
            if (unit < 10) {
                return "00" + unit;
            }
            else if (unit >= 10 && unit < 100) {
                return "0" + unit;
            }
            else {
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
