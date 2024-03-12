<?php
session_start();
include "../../include/database.php";

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../../login/login.php");
    exit();
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Location: ../../home/home.php");

    exit();
}
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" />
  <link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/style.css" />
  <title>Clock</title>
  <script src="../../dist/projects/new_york_clock/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col consolas clockNewYorkImg h-[100dvh]">
  <div id="container" class="rounded-lg p-2 text-center bg-gray-600 flex items-center justify-center flex-col border-double border-cyan-600 border-8">
    <div id="displayTime" class="text-center text-7xl text-cyan-500 backdrop-blur-sm hover:bg-blue-200">00:00:00</div>
    <p id="para2" class="flex text-center text-4xl text-sky-600"></p>
    <p id="para1" class="flex text-center text-3xl text-sky-600 "></p>
    <form>
      <label for="inputMs" class="text-center text-xs text-sky-600 inline-block backdrop-blur-sm hover:text-xl hover:border-b-2 hover:border-b-blue-200">Display milliseconds too: </label>
      <input type="checkbox" id="inputMs" />
    </form>
  </div>

</body>

</html>
<?php include "../../include/footer.php"; ?>
