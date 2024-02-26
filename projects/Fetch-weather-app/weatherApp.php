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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fetch Weather App ❄🌨</title>
  <link href="https://db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli+V1" rel="stylesheet" />
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="../../css/style.css" />
  <script src="../../dist/projects/fetch-weather-app/script.js" defer></script>
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

<body class="weatherDayImg flex items-center justify-between flex-col MV-boli flex-wrap text-black gap-0 m-1">
  <h1 class="flex items-center justify-center flex-wrap text-6xl mb-0 gap-0 m-0">
    <span id="spanTittle" class="text-center">Weather App</span>

    <img src="icons/titleIcons/snow.svg" class="size-[4.5rem]" />

    <img src="icons/titleIcons/tornado.svg" class="size-[4.5rem]" />

    <img src="icons/titleIcons/clear-day.svg" class="size-[4.5rem]" id="sunOrMoon" />
  </h1>
  <form action="" method="post" id="weatherForm" class="mt-1 flex items-center justify-center flex-wrap gap-4">
    <input type="text" placeholder="Enter a city..." id="cityEntered" required class="text-black bg-slate-300 text-lg rounded-lg border-2 outline-none border-pink-950 text-center p-1 MV-boli" />
    <input type="submit" value="Submit" class="text-lg bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900" id="submitButton" />
  </form>

  <div id="card" class="hidden mt-8 items-center justify-center mb-8"></div>
  <p id="errorDisplay" class="hidden flew-wrap flex-col items-center justify-center gap-4 text-center MV-boli text-xl text-red-600"></p>
</body>

</html>

<?php
include("../../include/footer.php");
?>