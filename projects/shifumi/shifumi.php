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
        <div class="display">
            <p id="playerText">Player :</p><img src="" id="playerImg" style="display: none;"><br>
            <p id="computerText">Computer :</p><img src=""  id="computerImg" style="display: none;"><br>
            <p id="resultText">Result : <label id="labelResult"></label></p><br>
        </div>
       
        <div id="buttons" class="flex items-center justify-center">
            <button class = 'gameButton'>👊</button>
            <button class = 'gameButton'>🖐</button>
            <button class = 'gameButton'>✌</button>
        </div>

        <div class="display">
            <p>Player's score : <span id="displayPlayerScore">0</span></p>
            <p>Computer's score : <span id="displayComputerScore">0</span></p>
        </div>

    </div>
</body>
</html>