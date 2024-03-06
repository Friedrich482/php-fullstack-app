"use strict";
//  ? DOM elements
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const gameButtons = document.querySelectorAll(".gameButton");
const playerImg = document.querySelector("#playerImg");
const computerImg = document.querySelector("#computerImg");
const labelResult = document.querySelector("#labelResult");
const restartShifumiDialog = document.querySelector("#restartShifumiDialog");
const resultsShifumi = document.querySelector("#resultShifumi");
const scoreShifumi = document.querySelector("#scoreShifumi");
const playerScoreDiv = document.querySelector("#displayPlayerScore");
const computerScoreDiv = document.querySelector("#displayComputerScore");
const quitGameButton = document.querySelector("#quitGameButton");
// ? Game elements
let player;
let computer;
let playerScore = 0;
let computerScore = 0;
function buttonContent(button) {
    var _a, _b;
    if (((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.indexOf("👊")) != -1) {
        return "ROCK";
    }
    else if (((_b = button.textContent) === null || _b === void 0 ? void 0 : _b.indexOf("🖐")) != -1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        player = buttonContent(button);
        playerText.textContent = `${player}`;
        computerPlays();
        labelResult.textContent = `${checkWinnerShifumi()}`;
        updateScore();
    });
});
function computerPlays() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    computer = buttonContent(gameButtons[randNum - 1]);
    computerText.textContent = `${computer}`;
}
function checkWinnerShifumi() {
    if (computer === player) {
        return "DRAW !";
    }
    switch (computer) {
        case "ROCK":
            if (player === "PAPER") {
                return win();
            }
            else {
                return lose();
            }
        case "PAPER":
            if (player === "SCISSORS") {
                return win();
            }
            else {
                return lose();
            }
        case "SCISSORS":
            if (player === "ROCK") {
                return win();
            }
            else {
                return lose();
            }
    }
}
function win() {
    return "YOU WIN !";
}
function lose() {
    return "YOU LOSE !";
}
function updateScore() {
    if (checkWinnerShifumi() === "YOU WIN !") {
        playerScore += 1;
        playerScoreDiv.textContent = `${playerScore}`;
    }
    else if (checkWinnerShifumi() === "YOU LOSE !") {
        computerScore += 1;
        computerScoreDiv.textContent = `${computerScore}`;
    }
}
quitGameButton.addEventListener("click", () => manageRestartDialog());
function manageRestartDialog() {
    setTimeout(() => {
        toggleShifumiDialog(restartShifumiDialog);
    }, 500);
    if (playerScore > computerScore) {
        resultsShifumi.textContent = "YOU WIN";
        resultsShifumi.classList.toggle("text-green-400");
    }
    else if (playerScore < computerScore) {
        resultsShifumi.textContent = "YOU LOSE";
        resultsShifumi.classList.toggle("text-red-600");
    }
    else {
        resultsShifumi.textContent = "DRAW";
    }
    scoreShifumi.innerHTML = `Player : <span class=" text-red-500">${playerScore}&nbsp;</span>- <span class=" text-blue-500">${computerScore}</span> : Computer`;
}
function toggleShifumiDialog(element) {
    element.showModal();
    element.classList.toggle("hidden");
    element.classList.toggle("flex");
}