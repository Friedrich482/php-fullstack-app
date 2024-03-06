<?php
session_start();
include("../../include/database.php");

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../../login/login.php");
    exit;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Location: ../../home/home.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shifumi Game</title>
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../../css/style.css" />
    <script src="../../dist/projects/shifumi/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col bg-gray-800 pt-[20%] text-white consolas">
    <div id="gameContainer" class="flex items-center justify-center flex-col border-2 border-violet-700 gap-4 rounded-2xl p-4 min-w-[29.5rem]">
        <div class="text-2xl font-bold flex items-center justify-center flex-col gap-6">
            <div class="grid grid-cols-2 grid-rows-2 gap-y-3 w-full">
                <p id="playerText" class="text-start w-full flex items-center">
                    Player :
                </p>
                <img id="playerImg" class="ml-4 inline size-12 rounded-xl border-2 inset-1 border-violet-600" />
                <p id="computerText" class="text-start w-full flex items-center">
                    Computer :
                </p>
                <img id="computerImg" class="ml-4 inline size-12 rounded-xl border-2 inset-1 border-violet-600" />
            </div>
            <p id="resultText" class="min-w-72">
                Result :
                <label id="labelResult"></label>
            </p>
        </div>

        <div id="buttons" class="flex items-center justify-center font-sans">
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">
                👊
            </button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">
                🖐
            </button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">
                ✌
            </button>
        </div>

        <div class="grid place-items-center grid-cols-2 grid-rows-2 gap-y-3 relative left-14">
            <p class="text-start w-full text-xl indent-5">Player's score : </p>
            <div id="displayPlayerScore" class="left-8 relative border-black bg-slate-700 w-12 h-7 text-xl text-center rounded-lg place-self-start cursor-not-allowed">0</div>
            <p class="text-start w-full text-xl indent-5">Computer's score :</p>
            <div id="displayComputerScore" class="left-8 relative border-black bg-slate-700 w-12 h-7 text-xl text-center rounded-lg place-self-start cursor-not-allowed">0</div>
        </div>
    </div>
</body>

</html>