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

<body class="flex items-center justify-center flex-col gap-4 bg-gray-800">
    <img src="stopwatch.png" alt="stopwatch" id="stopwatch" class="h-48 w-48">

    <div id="container" class=" rounded-md p-5 text-center bg-gray-950 w-[550px] flex items-center justify-center flex-col">
        <div id="displayTime" class=" w-full text-justify indent-11 text-8xl text-red-600 seven-segment MV-boli">00:00:00:000</div>
        <button id="startButton" class="text-xl rounded-lg p-1 w-full text-red-600 bg-gray-950 cursor-pointer consolas hover:border-sky-300 active:bg-sky-400">Start</button>
        <button id="pauseButton" class="text-xl rounded-lg p-1 w-full text-red-600 bg-gray-950 cursor-pointer consolas hover:border-sky-300 active:bg-sky-400">Pause</button>
        <button id="resetButton" class="text-xl rounded-lg p-1 w-full text-red-600 bg-gray-950 cursor-pointer consolas hover:border-sky-300 active:bg-sky-400">Reset</button>

    </div>
</body>

</html>
<?php
include("../../include/footer.php");
?>