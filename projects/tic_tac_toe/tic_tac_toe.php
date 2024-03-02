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
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="../../css/style.css">
</head>

<body class="flex items-center justify-center flex-col gap-5 newYorkImg">
    <h1 class="text-5xl MV-boli text-orange-400">Tic Tac Toe game</h1>
    <div id="cells" class="border-4 border-sky-400 rounded-sm grid grid-cols-3 backdrop-blur-sm">
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="0"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="1"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="2"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="3"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="4"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="5"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="6"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="7"></div>
        <div class="border-2 border-black text-5xl size-24 text-center MV-boli text-white select-none" cellIndex="8"></div>
    </div>
    <label id="displayStatus" class="text-4xl text-center backdrop-blur-sm text-red-600">// Display the status...</label>
    <button id="restartButton" class="outline-none text-lg bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2">Restart Game</button>
    <script src="script.js"></script>
</body>

</html>
<?php
include("../../include/footer.php");
?>