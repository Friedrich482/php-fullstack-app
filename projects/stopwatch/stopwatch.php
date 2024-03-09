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
    <link rel="stylesheet" href="style.css">
    <title>My timer</title>
</head>

<body>
    <img src="stopwatch.png" alt="stopwatch" id="stopwatch">
    <br><br>
    <div id="container">
        <div id="displayTime">00:00:00:000</div><br>
        <button id="startButton">Start</button>
        <button id="pauseButton">Pause</button>
        <button id="resetButton">Reset</button>

    </div>
    <script src="stopwatch.js"></script>
</body>

</html>
<?php
include("../../include/footer.php");
?>