"use strict";
const cells = document.querySelectorAll(".cell");
const restartButtonTic = document.querySelector("#restartButton");
const displayStatus = document.querySelector("#displayStatus");
const restartTicDialog = document.querySelector("#restartTicDialog");
const gameResults = document.querySelector("#gameResults");
const scoreP = document.querySelector("#scoreP");
const yesTicButton = document.querySelector("#yesButton");
const noTicButton = document.querySelector("#noTicButton");
let runningTic = false;
let currentPlayer = "X";
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let actualCellsContent = ["", "", "", "", "", "", "", "", ""];
let scoreX = 0;
let scoreY = 0;
let winner;
let swipe_sound_tic = new Audio("./sounds/swipe.mp3");
function toggleTicDialog(element) {
    element.showModal();
    element.classList.toggle("hidden");
    element.classList.toggle("flex");
}
function toggleRedColor(element) {
    element.classList.toggle("bg-transparent");
    element.classList.toggle("bg-red-600");
}
function toggleBlueColor(element) {
    element.classList.toggle("bg-transparent");
    element.classList.toggle("bg-blue-600");
}
function removeColor(element) {
    if (element.classList.contains("bg-blue-600")) {
        element.classList.remove("bg-blue-600");
        element.classList.add("bg-transparent");
    }
    if (element.classList.contains("bg-red-600")) {
        element.classList.remove("bg-red-600");
        element.classList.add("bg-transparent");
    }
}
initializeGame();
function initializeGame() {
    runningTic = true;
    cells.forEach((cell) => {
        let cellIndex = Number(cell.getAttribute("cellIndex"));
        cell.addEventListener("click", () => {
            if (actualCellsContent[cellIndex] != "" || !runningTic) {
                return;
            }
            updateCell(cell, cellIndex);
            checkWinner();
            swipe_sound_tic.play();
        });
    });
    restartButton.addEventListener("click", restartGame);
    displayStatus.textContent = `${currentPlayer}'s turn`;
}
function updateCell(cell, index) {
    actualCellsContent[index] = currentPlayer;
    cell.textContent = `${currentPlayer}`;
    if (currentPlayer === "X") {
        toggleBlueColor(cell);
    }
    else {
        toggleRedColor(cell);
    }
}
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        let cellA = actualCellsContent[winConditions[i][0]];
        let cellB = actualCellsContent[winConditions[i][1]];
        let cellC = actualCellsContent[winConditions[i][2]];
        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            runningTic = false;
            break;
        }
    }
    if (roundWon) {
        afterGame(`${currentPlayer} wins !`);
        winner = currentPlayer;
        scoreManagement();
        runningTic = false;
    }
    else if (actualCellsContent.indexOf("") === -1) {
        afterGame(`DRAW !`);
    }
    else {
        changePlayer();
    }
}
function afterGame(text) {
    setTimeout(() => {
        toggleTicDialog(restartTicDialog);
    }, 2000);
    gameResults.textContent = text;
    displayStatus.textContent = text;
}
function scoreManagement() {
    winner === "X" ? (scoreX += 1) : (scoreY += 1);
    scoreP.innerHTML = `X : <span class="text-blue-600">${scoreX}</span> - <span class="text-red-600">${scoreY}</span> : Y`;
}
function changePlayer() {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    displayStatus.textContent = `${currentPlayer}'s turn `;
}
function restartGame() {
    currentPlayer = "X";
    actualCellsContent = ["", "", "", "", "", "", "", "", ""];
    displayStatus.textContent = `${currentPlayer}'s turn`;
    cells.forEach((cell) => {
        cell.textContent = "";
        removeColor(cell);
    });
    runningTic = true;
}
yesTicButton.addEventListener("click", () => {
    restartGame();
    toggleTicDialog(restartTicDialog);
    restartTicDialog.close();
});
const footerTic = document.querySelector("footer");
footerTic.classList.add("text-white", "MV-boli", "backdrop-blur-sm");
const imageFooterTic = footerTic.querySelector("img");
imageFooterTic.src = "../../assets/icons/rocket.svg";
