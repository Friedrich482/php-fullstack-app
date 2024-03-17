<?php
session_start();
include "../../include/database.php";

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../../login/login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" />
  <title>Snake Game</title>
  <link rel="stylesheet" href="../../css/style.css" />
  <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
  <script src="../../dist/projects/snake_game/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col gap-1 snakebgImg">
  <dialog id="difficultyLevelDialog" class="flex items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-green-500 rounded-bl-[100px] rounded-tr-[100px] min-w-20 max-w-60 sm:min-w-72 sm:p-2 gap-2 z-10 text-[whitesmoke] h-80 outline-none backdrop:backdrop-blur-sm" autofocus>
    <h2 class="text-2xl text-center w-11/12">
      Chose the level of difficulty :
    </h2>

    <form class="flex items-center justify-center flex-col text-2xl gap-2" id="difficultyForm">
      <div class="w-full transition duration-300 hover:scale-110 group cursor-pointer">
        <input type="radio" name="difficulty" id="level-easy" value="easy" class="size-4 cursor-pointer accent-lime-500" checked />
        <label for="level-easy" class="cursor-pointer">Easy</label>
      </div>
      <div class="w-full transition duration-300 hover:scale-110 group cursor-pointer">
        <input type="radio" name="difficulty" id="level-normal" value="normal" class="size-4 cursor-pointer accent-yellow-400" />
        <label for="level-normal" class="cursor-pointer">Normal</label>
      </div>
      <div class="w-full transition duration-300 hover:scale-110 group cursor-pointer">
        <input type="radio" name="difficulty" id="level-hard" value="hard" class="size-4 cursor-pointer accent-red-700" />
        <label for="level-hard" class="cursor-pointer">Hard 💪</label>
      </div>
      <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-green-400 to-lime-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-lime-800 hover:to-green-400 active:bg-gradient-to-br active:from-green-400 active:to-lime-800">
        <input type="submit" value="Confirm" id="confirmButton" class="cursor-pointer bg-gray-900 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:text-red-600 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
      </div>
    </form>
  </dialog>
  <dialog id="restartGameDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-green-500 rounded-bl-[100px] rounded-tr-[100px] min-w-20 max-w-60 sm:min-w-72 sm:p-2 gap-2 z-10 text-[whitesmoke] h-80 outline-none backdrop:backdrop-blur-sm" autofocus>
    <h2 class="text-4xl text-center w-full text-red-600">You lose !</h2>
    <p id="gameOverScore" class="text-center"></p>
    <form action="snake.php" class="flex items-center justify-center flex-col gap-4" method="post" id="tryAgainForm">
      <p>Do you want to restart ?</p>
      <div class="flex items-center justify-center flex-col gap-5">
        <!-- "Yes" button -->

        <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-green-400 to-lime-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-lime-800 hover:to-green-400 active:bg-gradient-to-br active:from-green-400 active:to-lime-800">
          <input type="button" value="Yes ✅" id="yesButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
        </div>

        <!-- "No" button -->

        <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-green-400 to-lime-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-lime-800 hover:to-green-400 active:bg-gradient-to-br active:from-green-400 active:to-lime-800">
          <input type="submit" value="No ❌" id="noButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
        </div>
      </div>
    </form>
  </dialog>
  <h1 class="text-5xl text-white permanent-marker">Snake Game</h1>
  <canvas id="gameBoard" width="400" height="400" class="mt-2 border-4 border-green-700 rounded-2xl"></canvas>
  <label id="scoreText" class="text-5xl consolas text-white">0</label>
  <button id="restartButton" class="text-2xl rounded-2xl p-2 min-w-36 text-white bg-black permanent-marker hover:scale-110 transition duration-500 active:bg-slate-900 active:outline active:outline-white active:outline-2">
    Restart
  </button>
</body>

</html>

<?php require "../../include/footer.php"; ?>

<?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_COOKIE["score"])) {
        $score = $_COOKIE["score"];
        // Insertion of the score in the database

        // Get the actual best score of the user form the database
        $sql = "SELECT snake_best_score FROM users WHERE id = $1";
        $params = [$_SESSION["id"]];
        pg_prepare($conn, "fetch_best_score", $sql);
        $result = pg_execute($conn, "fetch_best_score", $params);
        $row = pg_fetch_assoc($result);
        $best_score = $row["snake_best_score"];

        // Compare the best score got from the the database to the score made by the user on the actual game
        if ($score > $best_score) {
            // Update the best score of the user
            $update_sql =
                "UPDATE users SET snake_best_score = $1 WHERE id = $2";
            $update_params = [$score, $_SESSION["id"]];
            pg_prepare($conn, "update_best_score", $update_sql);
            $update_result = pg_execute(
                $conn,
                "update_best_score",
                $update_params
            );
            // echo "You beat your own high score !";
        } else {
            // echo "You weren't able to beat your own high score. Try again !";
        }
    } else {
        // No data received
        // echo "No score sent.";
    }
}
