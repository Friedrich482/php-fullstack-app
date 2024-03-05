<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shifumi Game</title>
    <link rel="stylesheet" href="../../css/style.css">
    <script src="" defer></script>
</head>

<body class="flex items-center justify-center bg-gray-800 m-0">
    <div id="gameContainer" class="flex items-center justify-center flex-col border-2 border-pink-700 gap-1 rounded-2xl bg-sky-300">
        <div class="text-2xl consolas font-bold">
            <p id="playerText" class=" inline-block min-w-72">Player :</p>
            <img src="" id="playerImg" class=" inline size-12 rounded-xl border-4 inset-1 border-yellow-500"><br>
            <p id="computerText" class=" inline-block min-w-72">Computer :</p>
            <img src="" id="computerImg" class=" inline size-12 rounded-xl border-4 inset-1 border-yellow-500"><br>
            <p id="resultText" class=" inline-block min-w-72 bg-blue-600">
                Result :
                <label id="labelResult"></label>
            </p>
            <br>
        </div>

        <div id="buttons" class="flex items-center justify-center">
            <button class=" MV-boli border-4 border-red-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white bg-black hover:border-yellow-400 bg-transparent hover:text-black backdrop-blur-sm active:border-sky-600 active:bg-black ">👊</button>
            <button class=" MV-boli border-4 border-red-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white bg-black hover:border-yellow-400 bg-transparent hover:text-black backdrop-blur-sm active:border-sky-600 active:bg-black ">🖐</button>
            <button class=" MV-boli border-4 border-red-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white bg-black hover:border-yellow-400 bg-transparent hover:text-black backdrop-blur-sm active:border-sky-600 active:bg-black ">✌</button>
        </div>

        <div class="display">
            <p>Player's score : <span id="displayPlayerScore" class=" bg-green-500">0</span></p>
            <p>Computer's score : <span id="displayComputerScore" class="bg-red-600">0</span></p>
        </div>

    </div>
</body>

</html>