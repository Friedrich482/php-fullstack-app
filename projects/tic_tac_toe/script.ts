let cells = document.querySelectorAll(".cell") as NodeListOf<HTMLDivElement>;
let restartButtonTic = document.querySelector(
  "#restartButton"
) as HTMLButtonElement;
let displayStatus = document.querySelector("#displayStatus") as HTMLLabelElement;
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
let swipe_sound_tic = new Audio("./sounds/swipe.mp3");

initializeGame();

function initializeGame() {
  runningTic = true;
  cells.forEach((cell) => {
    let cellIndex = Number(cell.getAttribute("cellIndex") as string);
    cell.addEventListener("click", () => {
      if (actualCellsContent[cellIndex] != "" || !runningTic) {
        return;
      }
      updateCell(cell, cellIndex);
      checkWinner();
    });
  });
  restartButton.addEventListener("click", restartGame);
  displayStatus.textContent = `${currentPlayer}'s turn`;
}

function updateCell(cell: HTMLDivElement, index: number) {
  actualCellsContent[index] = currentPlayer;
  cell.textContent = `${currentPlayer}`;
  if (currentPlayer === "X") {
    cell.classList.add("bg-blue-600");
  } else {
    cell.classList.add("bg-red-600");
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
    displayStatus.textContent = `${currentPlayer} wins !`;
    runningTic = false;
  } else if (actualCellsContent.indexOf("") === -1) {
    displayStatus.textContent = ` DRAW !`;
  } else {
    changePlayer();
  }
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
    cell.style.backgroundColor = "transparent";
  });

  runningTic = true;
}
const footerTic = document.querySelector("footer") as HTMLElement;
footerTic.classList.add("text-white", "MV-boli", "backdrop-blur-sm");
const imageFooterTic = footerTic.querySelector("img") as HTMLImageElement;
imageFooterTic.src = "../../assets/icons/rocket.gif";
