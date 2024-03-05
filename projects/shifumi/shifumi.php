<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shifumi Game</title>
    <link rel="stylesheet" href="../../css/style.css">
    <script src="" defer></script>
</head>

<body class="flex items-center justify-center flex-col bg-gray-800 pt-[20%] text-white">
    <div id="gameContainer" class="flex items-center justify-center flex-col border-2 border-violet-700 gap-1 rounded-2xl p-4">
        <div class="text-2xl consolas font-bold flex items-center justify-center flex-col gap-6">
            <div class="grid grid-cols-2 grid-rows-2 gap-y-6 w-full">
                <p id="playerText" class="text-center flex items-center justify-center">Player :</p>
                <img src="" id="playerImg" class="ml-4 inline size-12 rounded-xl border-2 inset-1 border-violet-600">
                <p id="computerText" class="text-center flex items-center justify-center">Computer :</p>
                <img src="" id="computerImg" class="ml-4 inline size-12 rounded-xl border-2 inset-1 border-violet-600">
            </div>
            <p id="resultText" class="min-w-72">
                Result :
                <label id="labelResult"></label>
            </p>
        </div>

        <div id="buttons" class="flex items-center justify-center">
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700">👊</button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700">🖐</button>
            <button class="border-2 border-violet-600 font-bold text-3xl w-32 min-w-10 rounded-xl m-1 text-white transiton duration-700 hover:border-white backdrop-blur-sm p-2 active:border-yellow-700">✌</button>
        </div>

        <div class="display">
            <p>Player's score : <span id="displayPlayerScore" class="">0</span></p>
            <p>Computer's score : <span id="displayComputerScore" class="border-black bg-slate-700 h-7 block">0</span></p>
        </div>

    </div>
</body>

</html>