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
    <title>Shifumi Game</title>
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../../css/style.css" />
    <script src="../../dist/projects/shifumi/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col bg-gray-900 text-white consolas gap-10">
    <dialog id="restartShifumiDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-violet-600 rounded-bl-[100px] rounded-tr-[100px] min-w-20 max-w-72 sm:min-w-70 sm:p-2 gap-2 z-10 text-[whitesmoke] h-80 outline-none backdrop:backdrop-blur-sm" autofocus>
        <h2 class="text-2xl text-center w-11/12" id="resultShifumi">

        </h2>
        <p id="scoreShifumi" class=" whitespace-nowrap"></p>
        <form action="shifumi.php" class="flex items-center justify-center flex-col gap-4" method="post" id="restartShifumiGameForm">
            <label>Do you want to restart ?</label>
            <div class="flex items-center justify-center flex-col gap-5">

                <!-- "Yes" button -->

                <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-violet-400 to-purple-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-800 hover:to-violet-400 active:bg-gradient-to-br active:from-violet-400 active:to-purple-800">
                    <input type="button" value="Yes ✅" id="yesShifumiButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
                </div>

                <!-- "No" button -->

                <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-violet-400 to-purple-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-800 hover:to-violet-400 active:bg-gradient-to-br active:from-violet-400 active:to-purple-800">
                    <input type="submit" value="No ❌" id="" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
                </div>
            </div>
        </form>
    </dialog>
    <h1 class="text-5xl text-center">Shifumi game <div class="font-sans inline-block">👊🖐✌</div>
    </h1>
    <div id="gameContainer" class="flex items-center justify-center flex-col border-4 border-violet-700 border-double gap-4 rounded-2xl p-4 min-w-[29.5rem]">
        <div class="text-2xl font-bold flex items-center justify-center flex-col gap-6 w-full">
            <p class="text-start w-4/6 flex items-center">
                <span>Player :&nbsp;</span>
                <span id="playerText" class=" bg-slate-700 text-center rounded-lg place-self-start cursor-not-allowed min-w-32 relative left-9"></span>
            </p>
            <p class="text-start w-4/6 flex items-center">
                <span>Computer :&nbsp;</span>
                <span id="computerText" class="bg-slate-700 text-center rounded-lg place-self-start cursor-not-allowed min-w-32 relative left-3"></span>
            </p>
            <p id="resultText" class="text-start w-5/6 flex items-center">
                <span class="text-center indent-2 w-3/6">Result :&nbsp;</span>
                <span id="labelResult" class=" bg-slate-700 text-center rounded-lg place-self-start cursor-not-allowed min-w-36 relative left-3"></span>
            </p>
        </div>

        <div id="buttons" class="flex items-center justify-center font-sans">
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">👊
            </button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">🖐
            </button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700 active:bg-slate-500 gameButton">✌
            </button>
        </div>

        <div class="flex justify-center items-start flex-col relative right-5 gap-3">
            <div class="flex justify-center items-center">
                <p class="text-start w-full text-xl">Player's score : </p>
                <div id="displayPlayerScore" class="relative left-6 bg-slate-700 w-12 h-7 text-xl text-center rounded-lg cursor-not-allowed text-red-600">0</div>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-start w-full text-xl">Computer's score :</p>
                <div id="displayComputerScore" class="relative left-1 bg-slate-700 w-12 h-7 text-xl text-center rounded-lg place-self-start cursor-not-allowed text-blue-600">0</div>
            </div>
        </div>
    </div>
    <button id="quitGameButton" class="outline-none text-lg transform duration-500 bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2 w-3/6 min-w-32">Quit game</button>
</body>

</html>
<?php include "../../include/footer.php"; ?>
<?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_COOKIE["playerScore"])) {
        $playerScore = $_COOKIE["playerScore"]; // ? Insertion of the score in the database
        // ? Get the actual best score of the user form the database
        $sql = "SELECT shifumi_best_score FROM users WHERE id = $1";
        $params = [$_SESSION["id"]];
        pg_prepare($conn, "fetch_best_score", $sql);
        $result = pg_execute($conn, "fetch_best_score", $params);
        $row = pg_fetch_assoc($result);
        $best_score = $row["shifumi_best_score"]; // ? Compare the best score got from the the database to the score made by the user on the actual game
        if ($playerScore > $best_score) {
            // ? Update the best score of the user
            $update_sql =
                "UPDATE users SET shifumi_best_score = $1 WHERE id = $2";
            $update_params = [$playerScore, $_SESSION["id"]];
            pg_prepare($conn, "update_best_score", $update_sql);
            $update_result = pg_execute(
                $conn,
                "update_best_score",
                $update_params
            ); // echo "You beat your own high score !";
        } else {
            // echo "You weren't able to beat your own high score. Try again !";
        }
    } else {
        // ? No data received
        // echo "No score sent.";
    }
    header("Location: ../../home/home.php");
    exit();
} ?>
