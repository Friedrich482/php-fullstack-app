"use strict";
const displayScreen = document.getElementById("displayScreen");
let egal = false;
managePar();
function appendToDisplay(element) {
    if (egal) {
        clearDisplay();
        egal = false;
    }
    displayScreen.textContent += element;
}
function clearDisplay() {
    displayScreen.textContent = "";
}
function removeTrailingZeros(numberString, precision) {
    let regex = new RegExp(`\\.?0{${precision},}$`);
    return numberString.replace(regex, "");
}
function calculate() {
    if (displayScreen.textContent === "")
        return;
    try {
        if (String(eval(displayScreen.textContent || "")).length > 8) {
            displayScreen.textContent = removeTrailingZeros(eval(displayScreen.textContent || "").toFixed(7), 4);
            console.log(displayScreen.textContent);
        }
        else
            displayScreen.textContent = eval(displayScreen.textContent || "");
    }
    catch (error) {
        displayScreen.textContent = "ERROR";
    }
    egal = true;
}
function managePar() {
    const parButtons = document.querySelectorAll(".parButton");
    for (const button of parButtons) {
        button.addEventListener("click", () => {
            const value = button.textContent || "";
            displayScreen.textContent += value;
        });
    }
}
function eraser() {
    displayScreen.textContent = displayScreen.textContent.slice(0, -1);
}
//Defining a clock for the calculator
const clock = document.querySelector("#clock");
const hoursDiv = document.querySelector("#hours");
const minsDiv = document.querySelector("#mins");
const secondsDiv = document.querySelector("#seconds");
const dateDiv = document.querySelector("#date");
let timeDivs = [clock, dateDiv];
function clocker() {
    let date = new Date();
    let hours = pad(date.getHours());
    let minutes = pad(date.getMinutes());
    let seconds = pad(date.getSeconds());
    function pad(unit) {
        return unit < 10 ? "0" + unit : unit.toString();
    }
    if (hoursDiv)
        hoursDiv.innerHTML = `${hours} <span class="relative bottom-[3.5px]"> : &nbsp;</span>`;
    if (minsDiv)
        minsDiv.innerHTML = `${minutes} <span class="relative bottom-[3.5px]"> :</span>`;
    if (secondsDiv)
        secondsDiv.textContent = `${seconds}`;
}
let switched = false;
let realTime = setInterval(clocker, 1000);
function toggleTime() {
    if (!switched) {
        const date = new Date();
        if (dateDiv)
            dateDiv.textContent = `${date.toLocaleDateString()}`;
        clearInterval(realTime);
    }
    switched = !switched;
    toogleTimeDivs();
}
timeDivs.forEach((timeDiv) => {
    timeDiv === null || timeDiv === void 0 ? void 0 : timeDiv.addEventListener("click", toggleTime);
});
function toogleTimeDivs() {
    timeDivs.forEach((timeDiv) => {
        timeDiv === null || timeDiv === void 0 ? void 0 : timeDiv.classList.toggle("hidden");
        timeDiv === null || timeDiv === void 0 ? void 0 : timeDiv.classList.toggle("flex");
    });
}
window.addEventListener("keydown", (event) => {
    const key = event.key;
    if (Number(key) || key === "0") {
        appendToDisplay(key);
    }
    const otherKeys = ["(", ")", ".", "+", "-", "*", "/"];
    for (const otherKey of otherKeys) {
        if (key === otherKey)
            appendToDisplay(otherKey);
    }
    switch (key) {
        case "=":
            calculate();
            break;
        case "Enter":
            calculate();
            break;
        case "Backspace":
            eraser();
            break;
        case " ":
            clearDisplay();
            break;
        default:
            break;
    }
});
