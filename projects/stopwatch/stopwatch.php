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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap">
    <link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
    <title>Stopwatch</title>
    <script src="../../dist/projects/stopwatch/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col gap-6 bg-gray-950">
    <img src="./img/stopwatch.svg" alt="stopwatch" id="stopwatch" class="size-52 hover:shadow-lg hover:shadow-violet-600 transition duration-1000 rounded-xl mt-8 pb-1">

    <div id="container" class="flex items-center justify-center flex-col gap-4 rounded-lg p-6 text-center bg-gray-950 border-2 border-violet-600">
        <div id="displayTime" class=" flex justify-center items-center w-full text-8xl text-violet-600 seven-segment">
            <span class="w-24">00</span>:
            <span class="w-24">00</span>:
            <span class="w-24">00</span>:
            <span class="w-48">000</span>
        </div>
        <div class="flex items-center justify-center gap-4">
            <button id="startButton" class="text-xl rounded-lg p-2 w-full text-white border-2 border-violet-600 transiton duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500 cursor-pointer consolas">Start</button>
            <button id="pauseButton" class="text-xl rounded-lg p-2 w-full text-white border-2 border-violet-600 transiton duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500 cursor-pointer consolas">Pause</button>
            <button id="resetButton" class="text-xl rounded-lg p-2 w-full text-white border-2 border-violet-600 transiton duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500 cursor-pointer consolas">Reset</button>
        </div>

    </div>
</body>

</html>
<?php
include("../../include/footer.php");
?>