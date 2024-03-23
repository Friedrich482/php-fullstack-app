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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Images slider</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon" />
    <script src="../../dist/projects/images_slider/script.js" defer></script>
</head>

<body class="bg-gray-900 flex justify-center items-center flex-col gap-5">
    <h1 class=" text-5xl text-white MV-boli mb-1 text-center">Images slider 🖼</h1>
    <div class="flex items-center justify-center flex-col sm:w-[550px]">
        <div id="container" class="flex items-center justify-center flex-col p-1">
            <div id="slides" class="flex items-center justify-center flex-col aspect-square min-w-72 shadow-xl shadow-black">
                <img src="./img/01.webp" alt="img" class="slide min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="img/02.webp" alt="img" class="slide min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/03.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/04.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/05.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/06.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/07.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/08.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/09.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/10.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/11.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">
                <img src="./img/12.webp" alt="img" class="slide  min-w-72 w-96 aspect-square hidden animation-fade transform duration-1000 rounded-xl border-4 border-violet-600 ">

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
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
                <div class="pinsItem size-3 rounded-full bg-white"></div>
            </div>
            <div class=" w-full slider-custom:w-[135%] flex justify-between items-center place-self-center relative slider-custom:bottom-64 cursor-pointer">
                <div class="transition duration-1000 group" id="leftButtonWrapper">
                    <button aria-label ="left-button" id="lButton" class="dButtons size-12 rounded-lg text-3xl text-center bg-black border-8 border-white group-hover:bg-gray-900 group-hover:border-violet-600 group-active:bg-gray-800 group-active:border-white" onclick="prevSlide(); event.stopPropagation()"></button>
                </div>
                <div class="transition duration-1000 group" id="rightButtonWrapper">
                    <button  aria-label ="right-button" id="rButton" class="dButtons size-12 rounded-lg text-3xl text-center bg-black border-8 border-white group-hover:bg-gray-900 group-hover:border-violet-600 group-active:bg-gray-800 group-active:border-white" onclick="nextSlide(); event.stopPropagation()"></button>
                </div>
            </div>
            <button id="admireButton" class="outline-none text-lg transform duration-500 bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2 w-3/6 min-w-32 relative bottom-10">Admire</button>
        </div>
    </div>
</body>

</html>
<?php include "../../include/footer.php";
?>
