<?php
session_start();
include("../../include/database.php");

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../../login/login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap">
    <title>Snake Game</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <canvas id="gameBoard" width="400" height="400"></canvas>
    <label id="scoreText">0</label>
    <button id="restartButton">Restart</button>
</body>

</html>

<?php
include("../../include/footer.php");
?>
