"use strict";
const gameBoard = document.getElementById("gameBoard");
const context = gameBoard.getContext("2d");
context.fillStyle = "blue";
const scoreText = document.getElementById("scoreText");
const restartButton = document.getElementById("restartButton");
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
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
];
window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", resetGame);
gameStart();
function gameStart() {
    running = true;
    scoreText.textContent = `${score}`;
    createFood();
    nextTick();
}
function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100);
    }
    else {
        displayGameOver();
    }
}
function clearBoard() {
    context.fillStyle = gameBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
    function randomFood(min, max) {
        return Math.round((Math.random() * (max - min + min)) / unitSize) * unitSize;
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
    }
    else {
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
function changeDirection(event) {
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
    if (snake[0].x <= 0 || snake[1].y === 25 && snake[0].y === 0 || snake[0].x >= gameWidth - unitSize || snake[0].y >= gameHeight - unitSize) {
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
    context.fillStyle = "white";
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
const footer = document.querySelector("footer");
const imageFooter = footer.querySelector("img");
imageFooter.src = "../../assets/icons/rocket.gif";
