const difficultyLevelDialog = document.querySelector("#difficultyLevelDialog") as HTMLDialogElement;
// const difficultyForm = document.querySelector("#")
const gameBoard = document.querySelector("#gameBoard") as HTMLCanvasElement;
const context = gameBoard.getContext("2d") as CanvasRenderingContext2D;
context.fillStyle = "blue";

const scoreText = document.getElementById("scoreText") as HTMLLabelElement;
const restartButton = document.getElementById(
  "restartButton"
) as HTMLButtonElement;
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const gameBackground = "black";
const snakeColor = "#3de320";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX: number;
let foodY: number;
let score = 0;

let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];

document.addEventListener("DOMContentLoaded", () =>{
    difficultyLevelDialog.showModal();
})

window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", resetGame);

resetWithEnterKey();
gameStart();

function gameStart(): void {
  running = true;
  scoreText.textContent = `${score}`;
  createFood();
  nextTick();
}

function nextTick(): void {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 100);
  } else {
    displayGameOver();
  }
}
function clearBoard() {
  context.fillStyle = gameBackground;
  context.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
  function randomFood(min: number, max: number): number {
    return (
      Math.round((Math.random() * (max - min + min)) / unitSize) * unitSize
    );
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood() {
  context.fillStyle = foodColor;
  context.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);

  if (snake[0].x == foodX && snake[0].y == foodY) {
    score++;
    scoreText.textContent = `${score}`;
    createFood();
  } else {
    snake.pop();
  }
}

function drawSnake() {
  context.fillStyle = snakeColor;
  context.strokeStyle = snakeBorder;
  snake.forEach((snakePart) => {
    context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}
function changeDirection(event: KeyboardEvent) {
  const keyPressed = event.key;
  const LEFT = "ArrowLeft";
  const UP = "ArrowUp";
  const RIGHT = "ArrowRight";
  const DOWN = "ArrowDown";

  let MovingUp = (yVelocity == -unitSize);
  let MovingDown = (yVelocity == unitSize);
  let MovingRight = (xVelocity == unitSize);
  let MovingLeft = (xVelocity == -unitSize);

  switch (true) {
    case keyPressed == LEFT && !MovingRight:
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case keyPressed == RIGHT && !MovingLeft:
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case keyPressed == UP && !MovingDown:
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case keyPressed == DOWN && !MovingUp:
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
}
function checkGameOver() {
  if (
    snake[0].x <= 0 ||
    (snake[1].y === 25 && snake[0].y === 0) ||
    snake[0].x >= gameWidth - unitSize ||
    snake[0].y >= gameHeight - unitSize
  ) {
    running = false;
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      running = false;
    }
  }
}

function displayGameOver() {
  context.font = "40px Permanent Marker";
  context.fillStyle = "red";
  context.textAlign = "center";
  context.fillText("GAME OVER !", gameWidth / 2, gameHeight / 2);
  running = false;
}

function resetGame() {
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
}
function resetWithEnterKey(): void {
  window.addEventListener("keydown", (event) => {
    event.key == "Enter" ? resetGame() : true;
  });
}
const footer = document.querySelector("footer") as HTMLElement;
const imageFooter = footer.querySelector("img") as HTMLImageElement;
imageFooter.src = "../../assets/icons/rocket.gif";
