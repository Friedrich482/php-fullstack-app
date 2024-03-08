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
    <script src="../../dist/projects/images_slider/script.js" defer></script>
</head>

<body class="bg-gray-900 flex justify-center items-center flex-col gap-8">
    <h1 class=" text-5xl text-white MV-boli">Images slider 🖼</h1>
    <div class="flex items-center justify-center flex-col sm:w-[550px]">
        <div id="container" class="flex items-center justify-center flex-col">
            <div id="slides" class="flex items-center justify-center flex-col">
                <img src="./img/01.jpg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="img/02.jpg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/03.jpg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/04.jpg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/05.jpg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/06.jpeg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/07.jpeg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/08.jpeg" alt="img" class="slide size-96 hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
            </div>
            <div id="pins" class="text-3xl text-white flex items-center justify-center gap-2 h-12">
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
            </div>
            <div class="w-[135%] flex justify-between items-center place-self-center relative bottom-64 ">
                <div class="transition duration-1000 group">
                    <button id="lButton" class="dButtons size-12 rounded-lg text-3xl text-center bg-black border-8 border-white group-hover:bg-gray-900 group-hover:border-violet-600 group-active:bg-gray-800 group-active:border-white" onclick="prevSlide()"></button>
                </div>
                <div class="transition duration-1000 group">

                    <button id="rButton" class="dButtons size-12 rounded-lg text-3xl text-center bg-black border-8 border-white group-hover:bg-gray-900 group-hover:border-violet-600 group-active:bg-gray-800 group-active:border-white" onclick="nextSlide()"></button>
                </div>
            </div>
            <button id="admireButton" class="outline-none text-lg transform duration-500 bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2 w-3/6 min-w-32">Admire</button>
        </div>
    </div>
</body>

</html>
<?php
include("../../include/footer.php");
?>