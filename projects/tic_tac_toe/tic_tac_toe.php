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
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="../../css/style.css">
    <script src="../../dist/projects/tic_tac_toe/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col gap-5 newYorkImg">
    <h1 class="text-5xl text-center MV-boli text-orange-400">Tic Tac Toe game</h1>
    <div id="cells" class="border-4 border-sky-400 rounded-sm grid grid-cols-3 backdrop-blur-sm min-w-[296px]">
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="0"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="1"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="2"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="3"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="4"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="5"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="6"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="7"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none cell flex items-center justify-center bg-transparent" cellIndex="8"></div>
    </div>
    <label id="displayStatus" class="text-4xl text-center backdrop-blur-sm text-red-600">// Display the status...</label>
    <button id="restartButton" class="outline-none text-lg bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2 transition duration-500">Restart Game</button>

    <dialog id="restartTicDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-sky-500 rounded-bl-[100px] rounded-tr-[100px] min-w-20 max-w-60 sm:min-w-72 sm:p-2 gap-2 z-10 text-[whitesmoke] h-80 outline-none backdrop:backdrop-blur-sm" autofocus>
        <h2 class="text-4xl text-center w-full text-red-600" id="gameResults"></h2>
        <form action="tic_tac_toe.php" class="flex items-center justify-center flex-col gap-4" method="post">
            <label>Do you want to restart ?</label>
            <div class="flex items-center justify-center flex-col gap-5">

                <!-- "Yes" button -->

                <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-sky-400 to-blue-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-800 hover:to-sky-400 active:bg-gradient-to-br active:from-sky-400 active:to-blue-800">
                    <input type="button" value="Yes ✅" id="yesButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-green-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
                </div>

                <!-- "No" button -->

                <div class="text-base w-[8.25rem] p-[2px] bg-gradient-to-br from-sky-400 to-blue-800 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-800 hover:to-sky-400 active:bg-gradient-to-br active:from-sky-400 active:to-blue-800">
                    <input type="submit" value="No ❌" id="noButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-green-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
                </div>
            </div>
        </form>
    </dialog>

</body>

</html>
<?php
include("../../include/footer.php");
?>