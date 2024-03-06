"use strict";
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const gameButtons = document.querySelectorAll(".gameButton");
const playerImg = document.querySelector("#playerImg");
const computerImg = document.querySelector("#computerImg");
const labelResult = document.querySelector("#labelResult");
const playerScoreDiv = document.querySelector("#displayPlayerScore");
const computerScoreDiv = document.querySelector("#displayComputerScore");
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
        labelResult.textContent = `${checkWinnerTic()}`;
        updateScore();
    });
});
function computerPlays() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    computer = buttonContent(gameButtons[randNum - 1]);
    computerText.textContent = `${computer}`;
}
function checkWinnerTic() {
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
    if (checkWinnerTic() === "YOU WIN !") {
        playerScore += 1;
        playerScoreDiv.textContent = `${playerScore}`;
    }
    else if (checkWinnerTic() === "YOU LOSE !") {
        computerScore += 1;
        computerScoreDiv.textContent = `${computerScore}`;
    }
}
