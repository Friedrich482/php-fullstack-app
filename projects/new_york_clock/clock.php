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
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    />
    <link
      href="https://fonts.cdnfonts.com/css/seven-segment"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../../css/style.css" />
    <title>Clock</title>
  </head>
  <body class=" bg-red-700">
    <br /><br />
    <div id="container">
      <div id="displayTime">00:00:00</div>
      <p id="para2"></p>
      <p id="para1"></p>
      <label for="inputMs">Display milliseconds too: </label>
      <input type="checkbox" id="inputMs" />
    </div>

    <script src="clock.js"></script>
  </body>
</html>
<?php include "../../include/footer.php"; ?>
