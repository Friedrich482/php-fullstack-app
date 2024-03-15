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
  <link rel="stylesheet" href="../../css/style.css" />
  <link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet" />
  <link rel="shortcut icon" href="./img/calculator.ico" type="image/x-icon" />
  <title>Simple Calculator</title>
  <script src="../../dist/projects/space_calculator/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-col spaceImg gap-8">
  <div id="container" class="flex items-center justify-center relative top-4 flex-col calc-border rounded-3xl p-4 text-center calc-gradient w-10/12 min-w-[19.05rem] max-w-[21rem]">
    <div id="clock" class="rounded-lg relative self-end bottom-2 border-none text-lg text-center font-extrabold bg-[#4d4848d3] text-red-500 seven-segment w-24 h-7 grid grid-cols-3 hover:shadow-md hover:shadow-black">
      <div id="hours" class="text-right">
        <span class="hoursSpan">00</span>
        <span class="relative bottom-[3.5px]">:</span>
      </div>
      <div id="mins" class="text-center">
        <span>00</span> <span class="relative bottom-[3.5px]">:</span>
      </div>
      <div id="seconds" class="text-left">00</div>
    </div>

    <div id="date" class="hidden rounded-lg relative self-end bottom-2 border-none text-lg text-center font-extrabold bg-[#4d4848d3] text-red-500 seven-segment w-24 h-7 hover:shadow-md hover:shadow-black"></div>

    <div id="displayScreen" class="bg-[#4d4848d3] rounded-xl border-none text-right indent-1 text-7xl seven-segment overflow-hidden text-gray-950 min-h-[72px] hover:shadow-md hover:shadow-black w-full"></div>
    <br />

    <div id="buttons" class="grid grid-cols-4 grid-rows-5 place-items-center h-96 gap-4 p-4">
      <button onclick="appendToDisplay('7')" class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300">
        7
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('8')">
        8
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('9')">
        9
      </button>

      <button class="operationButton bg-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('/')">
        &div;
      </button>

      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('4')">
        4
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('5')">
        5
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('6')">
        6
      </button>

      <button class="operationButton bg-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('*')">
        &times;
      </button>

      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('1')">
        1
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('2')">
        2
      </button>
      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('3')">
        3
      </button>

      <button class="operationButton bg-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('-')">
        &minus;
      </button>

      <button class="bg-[#080707bf] text-white h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('0')">
        0
      </button>
      <button  aria-label = "comma-button" class="commaButton bg-white flex items-center justify-center h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('.')">
        <div class="h-[6px] w-[6px] bg-black rounded-full"></div>
      </button>
      <button class="bg-[#440b4b77] h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="clearDisplay()" id="clearButton">
        C
      </button>
      <button class="operationButton bg-white h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="appendToDisplay('+')">
        &plus;
      </button>

      <button class="parButton bg-white h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300">
        &lpar;
      </button>
      <button class="parButton bg-white h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300">
        &rpar;
      </button>

      <button class="eraseButton bg-white h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="eraser()">
        &LeftArrow;
      </button>
      <button class="equalityButton bg-white h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-[#13cdc7bc] cursor-pointer hover:border-sky-200 hover:border-solid hover:bg-transparent hover:text-black active:border-blue-300" onclick="calculate()">
        &equals;
      </button>
    </div>
  </div>
</body>

</html>

<?php include "../../include/footer.php";

?>
