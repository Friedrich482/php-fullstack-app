<?php
session_start();
include("../include/database.php");
// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../login/login.php");
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Weather App ❄🌨</title>
    <link href="https://db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli+V1" rel="stylesheet">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../css/style.css">
    <script src="script.js" defer></script>
</head>

<!-- <dialog id="apiKeyDialog">
    <form action="" method="post" id="apiKeyForm">
        <label for="apiKeyField">Enter your <a href="https://openweathermap.org/" style="color: rgba(18, 227, 178, 0.829); text-decoration: none;" target="_blank">openweathermap.org</a> API key :</label>
        <div class="passField">
            <input type="password" name="" class="apiKeyField" required>
            <img srcscr="icons/passwordIcons/eye.svg" alt="eye" class="eye" title="Show API key">
        </div>
        <input type="submit" value="Submit" class="submitButtons">
    </form>
    <span class="helpSpan">
        <a class="helpSpan" href="https://github.com/Friedrich482/Comprehensive-Weather-Fetch-App/tree/main?tab=readme-ov-file#how-to-get-an-api-from-openweathermaporg" target="_blank">How top get an openweathermap API key ?</a>
    </span>
</dialog> -->

<body class="weatherDayImg flex items-center justify-between flex-col MV-boli flex-wrap text-black gap-0 m-0">
    <h1><span id="spanTittle">Weather App</span>
        <img src="icons/titleIcons/snow.svg" class="titleIcons">
        <img src="icons/titleIcons/tornado.svg" class="titleIcons">
        <img src="icons/titleIcons/clear-day.svg" class="titleIcons" id="sunOrMoon">
    </h1>
    <form action="" method="post" id="weatherForm">
        <input type="text" placeholder="Enter a city..." id="cityEntered" required>
        <input type="submit" value="Submit" class="submitButtons">
    </form>

    <div id="card" style="display:none">


    </div>
    <p id="errorDisplay">

    </p>
</body>

</html>

<?php 
    include("../../include/footer.php")
?>