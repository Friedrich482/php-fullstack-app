"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const difficultyLevelDialog = document.querySelector("#difficultyLevelDialog");
const difficultyForm = document.querySelector("#difficultyForm");
const gameOverDialog = document.querySelector("#restartGameDialog");
const gameOverScore = document.querySelector("#gameOverScore");
// Radio Buttons
const easyRadioButton = document.querySelector("#level-easy");
const normalRadioButton = document.querySelector("#level-normal");
const hardRadioButton = document.querySelector("#level-hard");
const radioButtons = [easyRadioButton, normalRadioButton, hardRadioButton];
// Game elements
const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
context.fillStyle = "blue";
const scoreText = document.querySelector("#scoreText");
const restartButton = document.querySelector("#restartButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const gameBackground = "black";
const snakeColor = "#3de320";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let level;
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
let resetWithEnterKey = (event) => {
    event.key == "Enter" ? resetGame() : true;
};
// ? This section is reserved for the audio variables
let eating_sound = new Audio("./sounds/eating.mp3");
let swipe_sound = new Audio("./sounds/swipe.mp3");
let game_over_sound = new Audio("./sounds/game_over.mp3");
let game_start_sound = new Audio("./sounds/game_start.mp3");
let chrono = new Audio("./sounds/chrono.mp3");
// ? This function as indicated by its name, displays a coundown after the player have choosen a level of difficulty
function displayCountdown() {
    return __awaiter(this, void 0, void 0, function* () {
        // window.removeEventListener("keydown", resetWithEnterKey)
        blockResetWithEnterKey();
        // Plays the chrono sound
        chrono.play();
        for (let i = 3; i >= 0; i--) {
            context.fillStyle = "black";
            context.fillRect(0, 0, gameWidth, gameHeight);
            context.font = "100px Permanent Marker";
            context.fillStyle = "red";
            context.textAlign = "center";
            context.fillText(i.toString(), gameWidth / 2, gameHeight / 2);
            // Wait 1 second before the following number
            yield new Promise((resolve) => setTimeout(resolve, 1000));
        }
    });
}
function toggleDialog(element) {
    element.classList.toggle("hidden");
    element.classList.toggle("flex");
}
function chooseDifficultyLevel(radioButton) {
    let level = radioButton.value;
    switch (level) {
        case "easy":
            return 200;
        case "normal":
            return 100;
        case "hard":
            return 50;
    }
    // ? By default, the level normal will be chosen but this case can't be reached !
    return 100;
}
// ! The program starts here 👇
difficultyLevelDialog.showModal();
clearBoard();
difficultyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    toggleDialog(difficultyLevelDialog);
    difficultyLevelDialog.close();
    displayCountdown();
    setTimeout(() => {
        radioButtons.forEach((radioButton) => {
            if (radioButton.checked) {
                level = chooseDifficultyLevel(radioButton);
            }
        });
        gameStart();
    }, 4000);
});
// Notice that the time I wait before starting the game (5 seconds) is the same ass the time neeeded to display the countdown
window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", resetGame);
function gameStart() {
    game_start_sound.play();
    running = true;
    scoreText.textContent = `${score}`;
    createFood();
    nextTick();
}
function nextTick() {
    if (running) {
        setTimeout(() => {
            swipe_sound.play();
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, level);
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
        return (Math.round((Math.random() * (max - min + min)) / unitSize) * unitSize);
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
        eating_sound.play();
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
    let MovingUp = yVelocity == -unitSize;
    let MovingDown = yVelocity == unitSize;
    let MovingRight = xVelocity == unitSize;
    let MovingLeft = xVelocity == -unitSize;
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
    if (snake[0].x <= 0 ||
        (snake[1].y === 25 && snake[0].y === 0) ||
        snake[0].x >= gameWidth - unitSize ||
        snake[0].y >= gameHeight - unitSize) {
        running = false;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
}
function displayGameOver() {
    game_over_sound.play();
    window.addEventListener("keydown", resetWithEnterKey);
    context.font = "50px Permanent Marker";
    context.fillStyle = "#8011d0";
    context.textAlign = "center";
    context.fillText("GAME OVER !", gameWidth / 2, gameHeight / 2);
    running = false;
    setTimeout(() => {
        toggleDialog(gameOverDialog);
        gameOverDialog.showModal();
        gameOverScore.textContent = `Your score is : ${score}`;
    }, 2000);
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
    clearBoard();
    displayCountdown();
    setTimeout(() => {
        gameStart();
    }, 5000);
}
function blockResetWithEnterKey() {
    window.removeEventListener("keydown", resetWithEnterKey);
}
const footer = document.querySelector("footer");
footer.classList.add("text-white", "MV-boli");
const imageFooter = footer.querySelector("img");
imageFooter.src = "../../assets/icons/rocket.gif";
