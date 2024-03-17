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
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../../css/style.css" />
    <title>Stopwatch</title>
    <script src="../../dist/projects/stopwatch/script.js" defer></script>
  </head>

  <body class="flex flex-col items-center justify-center gap-6 bg-gray-950">
    <img
      src="./img/stopwatch.svg"
      alt="stopwatch"
      id="stopwatch"
      class="mt-8 aspect-square size-52 transform rounded-xl pb-1 duration-1000 hover:border-r-4 hover:border-t-4 hover:border-r-violet-600 hover:border-t-violet-600 hover:shadow-lg hover:shadow-violet-600"
    />

    <div
      id="container"
      class="flex transform flex-col items-center justify-center gap-4 rounded-lg border-2 border-double border-violet-600 bg-gray-950 p-6 text-center duration-500"
    >
      <div
        id="displayTime"
        class="seven-segment flex w-full items-center justify-center text-8xl text-violet-600"
      >
        <span class="w-24">00</span>: <span class="w-24">00</span>:
        <span class="w-24">00</span>:
        <span class="w-48">000</span>
      </div>
      <div class="flex items-center justify-center gap-4">
        <button
          id="startButton"
          class="transiton consolas w-full cursor-pointer rounded-lg border-2 border-violet-600 p-2 text-xl text-white duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500"
        >
          Start
        </button>
        <button
          id="pauseButton"
          class="transiton consolas w-full cursor-pointer rounded-lg border-2 border-violet-600 p-2 text-xl text-white duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500"
        >
          Pause
        </button>
        <button
          id="resetButton"
          class="transiton consolas w-full cursor-pointer rounded-lg border-2 border-violet-600 p-2 text-xl text-white duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500"
        >
          Reset
        </button>
      </div>
    </div>
  </body>
</html>
<?php include "../../include/footer.php"; ?>
