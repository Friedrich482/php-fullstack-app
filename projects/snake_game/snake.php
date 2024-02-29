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
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    />
    <title>Snake Game</title>
    <link rel="stylesheet" href="../../css/style.css" />
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
    <script src="../../dist/projects/snake_game/script.js" defer></script>
  </head>

  <body class="flex items-center justify-center flex-col gap-1 snakeImg">
    <h1 class="text-5xl text-white">Snake Game</h1>
    <canvas
      id="gameBoard"
      width="400"
      height="400"
      class="mt-2 border-4 border-green-700 rounded-2xl"
    ></canvas>
    <label id="scoreText" class="text-5xl consolas text-white">0</label>
    <button
      id="restartButton"
      class="text-2xl rounded-2xl p-2 min-w-36 bg-blak text-white bg-black permanent-marker hover:scale-110 transition duration-500 active:bg-slate-900"
    >
      Restart
    </button>
  </body>
</html>

<?php
  include("../../include/footer.php");
?>
