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
    <title>Images slider</title>
    <link rel="stylesheet" href="../../css/style.css">
    <script src="script.js" defer></script>
</head>

<body class="bg-gray-800">
    <div id="container" class="flex items-center justify-center flex-col">
        <div id="slides" class="flex items-center justify-center flex-col">
            <img src="img/01.jpg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/02.jpg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/03.jpg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/04.jpg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/05.jpg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/06.jpeg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/07.jpeg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
            <img src="img/08.jpeg" alt="img" class="slide size-96 hidden animation-fade duration-1000 rounded-lg border-4 border-sky-400 ">
        </div>
        <ul id="pins" class="text-3xl text-white flex items-center justify-center gap-2">
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
            <li class="pinsItem"></li>
        </ul>
        <button id="lButton" class="dButtons absolute top-2/4 h-12 rounded-lg border-2 border-black text-3xl text-center bg-black left-0" onclick="prevSlide()">&lsaquo;</button>

        <button id="rButton" class="dButtons absolute top-2/4 h-12 rounded-lg border-2 border-black text-3xl text-center bg-black right-0" onclick="nextSlide()">&rsaquo;</button>
        <br><br>
        <button id="admireButton" class="outline-none text-lg transform duration-500 bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2 w-3/6 min-w-32">Admire</button>
    </div>
</body>

</html>
<?php
include("../../include/footer.php");
?>