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
    <title>My timer</title>
    <script src="stopwatch.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col gap-4 bg-gray-900">
    <img src="./img/stopwatch.png" alt="stopwatch" id="stopwatch" class="h-48 w-48">

    <div id="container" class="flex items-center justify-center flex-col gap-4 rounded-md p-6 text-center bg-gray-950 border-2 border-violet-600">
        <div id="displayTime" class=" w-full text-justify text-8xl text-violet-600 seven-segment MV-boli">00:00:00:000</div>
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