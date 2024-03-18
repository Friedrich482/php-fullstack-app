<?php
session_start();
include "../include/database.php";

// This section checks if the user click on logout button (it's a form)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION["loggedin"] = false;
    session_destroy();
    $cookies = $_COOKIE;
    foreach ($cookies as $key => $value) {
        setcookie($key, "", time() - 3600, "/");
    }
    header("Location: ../login/login.php");
    exit();
}

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../login/login.php");
    exit();
}
?>

<?php
// Incrementation of the counter of visits each time the page is visited by the user

$sql = "UPDATE users SET visits = visits + 1 WHERE id = $1 RETURNING visits";
$params = [$_SESSION["id"]];
pg_prepare($conn, "update_and_select_visits", $sql);
$result = pg_execute($conn, "update_and_select_visits", $params);
$row = pg_fetch_assoc($result);
$number_of_visits = $row["visits"];

$sql = "SELECT snake_best_score FROM users WHERE id = $1";
$params = [$_SESSION["id"]];
pg_prepare($conn, "fetch_best_score", $sql);
$result = pg_execute($conn, "fetch_best_score", $params);
$row = pg_fetch_assoc($result);
$snake_best_score = $row["snake_best_score"];
?>

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home </title>
  <link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="../css/style.css" />
  <script src="../dist/home/script.js" defer></script>
</head>

<body class="flex items-center justify-center flex-wrap text-center flex-col gap-[1.25rem] backgroundImg text-[whitesmoke] MV-boli">
  <header class="w-full flex gap-3 flex-col" id="header">
    <!-- Navbar for large screens -->

    <div class="hidden sm:grid grid-cols-5 gap-0 place-items-center w-full bg-black text-white h-20 text-xl" id="navbar">
      <!-- Home -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 transform duration-500 hover:border-b-8 hover:border-l-8 hover:border-b-white hover:border-l-white hover:bg-gray-800 active:bg-slate-950" id="largeHome">
        <img src="../assets/icons/navbarIcons/home.svg" alt="home icon" class="w-6 h-6 relative bottom-1" />
        <span><a href="#animatedText" class="no-underline">Home</a></span>
      </div>

      <!-- Profile -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950" id="largeProfile">
        <img src="../assets/icons/navbarIcons/circle-user.svg" alt="user icon" class="w-6 h-6 relative bottom-1" />
        <span class="">Profile</span>

        <!-- Ping element for notification -->
        <span class="flex relative" id="bigNotification">
          <span class="h-3 w-3 rounded-full bg-sky-400 absolute inline-flex animate-ping z-0 opacity-75"></span>
          <span class="h-3 w-3 rounded-full bg-sky-500 relative inline-flex z-10"></span>
        </span>
      </div>

      <!-- Tools -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950" id="largeTools">
        <img src="../assets/icons/navbarIcons/wrench.svg" alt="tool icon" class="w-6 h-6 relative bottom-1" />
        <span class=""><a href="#toolsGrid">Tools</a></span>
      </div>

      <!-- About -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950" id="largeAbout">
        <img src="../assets/icons/navbarIcons/info.svg" alt="info icon" class="w-6 h-6 relative bottom-1" />
        <span class=""><a href="#footer">About</a></span>
      </div>

      <!-- Logout -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 cursor-pointer transform duration-500 hover:border-b-8 hover:border-r-8 hover:border-b-white hover border-r-2:border-r-white hover:bg-gray-800 active:bg-slate-950" id="logoutLargeScreens">
        <img src="../assets/icons/navbarIcons/exit.svg" alt="info icon" class="w-6 h-6 relative bottom-1" />
        <span class="">Logout</span>
      </div>
    </div>

    <!-- Navbar for small screens -->

    <!-- Menu Burger button -->

    <button class="sm:hidden h-9 w-9 bg-black p-1 border-[0.5px] border-gray-500 rounded-sm hover:border-white relative left-4 top-2" id="menuBurgerButton">
      <img src="../assets/icons/navbarIcons/menu-burger.svg" alt="menu-burger icon" class="" id="menuBurgerImg" />
    </button>

    <!-- Ping element for notification (here for the menu burger button) -->

    <span class="sm:hidden flex relative bottom-11 left-11 w-4" id="pingNotificationBurger">
      <span class="h-3 w-3 rounded-full bg-sky-400 absolute inline-flex animate-ping z-0 opacity-75"></span>
      <span class="h-3 w-3 rounded-full bg-sky-500 relative inline-flex z-10"></span>
    </span>

    <div class="group opacity-0 sm:hidden w-full bg-black items-center justify-center flex-col transit" id="verticalNavbar">
      <!-- Home -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950" id="smallHome">
        <img src="../assets/icons/navbarIcons/home.svg" alt="home icon" class="w-6 h-6 relative bottom-1" />
        <span><a href="#animatedText" class="no-underline">Home</a></span>
      </div>

      <!-- Profile -->

      <div class="group text-center flex items-center justify-center h-full w-full cursor-pointer p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950" id="smallProfile">
        <!-- <div class="w-3"></div> -->
        <img src="../assets/icons/navbarIcons/circle-user.svg" alt="user icon" class="w-6 h-6 relative bottom-1 ml-6" id="profileImageSmallScreen"/>
        <span class="ml-3" id="profileSmallScreen">Profile</span>

        <!-- Ping element for notification -->
        <span class="flex relative left-1/4" id="smallNotification">
          <span class="h-3 w-3 rounded-full bg-sky-400 absolute inline-flex animate-ping z-0 opacity-75"></span>
          <span class="h-3 w-3 rounded-full bg-sky-500 relative inline-flex z-10"></span>
        </span>
      </div>

      <!-- Tools -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950" id="smallTools">
        <img src="../assets/icons/navbarIcons/wrench.svg" alt="tool icon" class="w-6 h-6 relative bottom-1" />
        <span class=""><a href="#toolsGrid">Tools</a></span>
      </div>

      <!-- About -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full cursor-pointer p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950" id="smallAbout">
        <img src="../assets/icons/navbarIcons/info.svg" alt="info icon" class="w-6 h-6 relative bottom-1" />
        <span class=""><a href="#footer">About</a></span>
      </div>

      <!-- Logout -->

      <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 cursor-pointer border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950" id="logoutSmallScreens">
        <img src="../assets/icons/navbarIcons/exit.svg" alt="info icon" class="w-6 h-6 relative bottom-1" />
        <span class="">Logout</span>
      </div>
    </div>

    <!-- Dialog for user's profile -->

    <dialog id="profileDialog" class="hidden items-center justify-center flex-col bg-slate-800 sm:opacity-100 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-64 w-[330px] min-h-[560px] gap-6 z-10 text-[whitesmoke]">
      <div class="flex items-center justify-center gap-3">
        <img src="../assets/icons/navbarIcons/info.svg" alt="info icon" class="h-12 w-12 sm:h-10 sm:w-10" />
        <h2 class="text-3xl text-violet-500">About Me</h2>
      </div>
      <hr class="text-white w-11/12" />

      <!-- Username section -->

      <div class="flex items-center justify-center w-full">
        <span class="w-1/4 flex items-center justify-center">
          <img src="../assets/icons/navbarIcons/circle-user.svg" alt="User" class="h-12 w-12" />
        </span>

        <span class="w-3/4 text-start items-start">
          Username :
          <span class="text-blue-500">
            <?php echo "{$_SESSION["username"]}"; ?>
          </span>
        </span>
      </div>

      <!-- Counter of visits -->

      <div class="flex items-center justify-center w-full">
        <span class="w-1/4 flex items-center justify-center">
          <img src="../assets/icons/stats.svg" alt="stats icon" class="h-12 w-12" />
        </span>

        <span class="w-3/4 text-start items-start">
          Number of visits :
          <span class="text-blue-500">
            <?php if ($number_of_visits !== null) {
                echo $number_of_visits;
            } else {
                echo "0";
            } ?>
          </span>
        </span>
      </div>

      <!-- Best Score at Snake Game section -->

      <div class="flex items-center justify-center w-full">
        <span class="w-1/4 flex items-center justify-center">
          <svg class="h-12 w-12" viewBox="0 0 430 430" fill="green" xmlns="http://www.w3.org/2000/svg">
            <path d="M80.6 98.0996H50" stroke="red" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M164.9 120H296.6C318.2 120 336.5 137.7 336.3 159.3C336.2 170 331.9 179.6 324.9 186.6C317.8 193.7 308.1 198 297.3 198H167C165.4 198 163.9 198 162.4 198.1C141.7 199.3 123 208.1 109.2 221.9C94.2 236.9 85 257.7 85.3 280.6C85.8 325.5 123.1 361.4 168 361.4H303.1C303.1 337.9 284 318.8 260.5 318.8H168.9C147.3 318.8 129 301.1 129.2 279.5C129.3 268.8 133.6 259.2 140.6 252.2C147.7 245.1 157.4 240.8 168.2 240.8H298.5C300.1 240.8 301.6 240.8 303.1 240.7C323.8 239.5 342.5 230.7 356.2 216.9C371.2 201.9 380.4 181.2 380.1 158.2C379.6 113.3 342.3 77.4004 297.4 77.4004H164.9" stroke="#FFF" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M164.9 120C158.4 126.7 148.9 130.5 138.8 129.1L99.3 123.8C88.7 122.4 80.7 113.3 80.7 102.6V94.7C80.7 84 88.6 74.9 99.3 73.5L138.8 68.2C140.1 68.1 141.5 68 142.8 68C151.4 68 159.2 71.6 164.8 77.4" stroke="#FFF" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M124.4 70.2998V79.3998" stroke="#FFF" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M124.4 118.3V127.2" stroke="#FFF" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>

        <span class="w-3/4 text-start items-start h-full">
          Best score at Snake :
          <span class="text-blue-500">
            <?php if ($snake_best_score !== null) {
                echo $snake_best_score;
            } else {
                echo "0";
            } ?>
          </span>
        </span>
      </div>

      <!-- Best score at Shifumi Section -->

      <div class="flex items-center justify-center w-full">
        <span class="w-1/4 flex items-center justify-center">
          <img src="../assets/icons/hand-horns.svg" alt="rock icon" class="h-12 w-12" />
        </span>

        <span class="w-3/4 text-start items-start">
          Best score at RPC :
          <span class="text-blue-500">
            <?php if ($number_of_visits !== null) {
                echo $number_of_visits;
            } else {
                echo "0";
            } ?>
            <!-- Here as well ... -->
          </span>
        </span>
      </div>

      <!-- Clock section 🕐 -->

      <div class="text-sm h-20 flex items-center justify-center flex-col" id="dateDiv">
        <span class="opacity-0">date</span>
        <br />
        <span class="opacity-0">hour</span>
      </div>

      <!-- Close button -->

      <div class="w-[8.25rem] p-[2px] bg-gradient-to-br from-purple-700 to-red-500 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500">
        <input type="button" value="Close" id="closeProfile" class="cursor-pointer bg-gray-900 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
      </div>
      <div class="h-3 hidden sm:flex"></div>
    </dialog>
  </header>

  <!-- Title with animation -->

  <div>
    <h1 class="flex flex-row text-3xl sm:text-5xl text-center animated-text gradient-text bg-gradient-to-r from-purple-500 via-teal-500 to-pink-500 pr-5 h-28 sm:h-28" id="animatedText">
      Welcome
      <?php echo "{$_SESSION["username"]}"; ?>, on my site
    </h1>
  </div>

  <!-- "Go back to top" button-->

  <div class="group h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-2xl bottom-5 right-5 hidden fixed z-50 items-center justify-center cursor-pointer hover:bg-slate-200" title="Go back to the top" id="backToTop">
    <a href="#header"><img src="../assets/icons/top.svg" alt="back to up !" class="scroll-smooth h-5 w-5 sm:h-7 sm:w-7 group-hover:animate-bounce" /></a>
  </div>

  <main class="flex items-center justify-center flex-col gap-3 sm:w-[620px] z-0">
    <div class="flex items-center justify-center flex-col gap-5 m-3">
      <div class="text-lg sm:text-2xl min-h-[850px] text-pretty" id="mainText">
        👉 Hello, dear visitor, my name is Friedrich482.<br /><br />

        👉 I am a junior developper 👨‍💻.

        <br /><br />
        👉 I am currently learning TypeScript and how to use it in my
        projects.<br /><br />
        👉 ... Nothing more than that to say about me, except the fact that I
        like 🤩 videos games 🎮.<br />
        👉 And really enjoy learn new things in programmation, 👨‍💻 especially
        Web Developpement and machine learning .

        <br /><br />
        This page is my first try on a CRUD (Create-Read-Update-Delete)
        project. It was made with:

        <ul class="list-disc ml-20 mr-20 mt-8 mb-8 sm:ml-36 sm:mr-36 gap-1">
          <li class="mb-2">PHP</li>
          <li class="mb-2">TypeScript</li>
          <li class="mb-2">PostgreSQL (as the DB)</li>
          <li class="mb-2">Tailwind CSS</li>
        </ul>

        You will also find some of the projects I have done with JavaScript
        when learning it. Enjoy them and have a nice day.
        <br />(If you don't see them, scroll down or click on the bouncing
        button)
      </div>
      <!-- Boucing button ⬇ -->

      <div class="hidden cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full items-center justify-center relative sm:bottom-0 mysql-custom:bottom-0 sm-custom:bottom-0" id="arrowDownbutton">
        <svg class="w-6 h-6 text-violet-500 transition duration-500 hover:scale-110" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <a href="#toolsGrid"></a>
      </div>
    </div>

    <!-- Tools grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-10 pt-6" id="toolsGrid">
      <!-- Calculator card -->

      <div class="group bg-orange-300 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-lg hover:shadow-white cursor-pointer" id="spaceCalculator">
        <a href="../projects/space_calculator/calculator.php"></a>
        <div class="calcImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-orange-300"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">This is my space calculator !</p>
        </div>
      </div>

      <!-- Comprehensive fetch weather app card -->

      <div class="group bg-yellow-300 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="fetchWeatherApp">
        <a href="../projects/fetch-weather-app/weatherApp.php"></a>
        <div class="weatherImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-yellow-300"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">Comprehensive Fetch Weather App</p>
        </div>
      </div>

      <!-- Snake game card -->

      <div class="group bg-lime-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="snakeGame">
        <a href="../projects/snake_game/snake.php"></a>
        <div class="snakeImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-lime-600"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">Welcome in my snake game !</p>
        </div>
      </div>

      <!-- Tic tac toe game card -->

      <div class="group bg-slate-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="ticTacToe">
        <a href="../projects/tic_tac_toe/tic_tac_toe.php"></a>
        <div class="ticImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-slate-200"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">Play Tic Tac Toe against someone!</p>
        </div>
      </div>

      <!-- Shifumi game card -->

      <div class="group bg-red-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="shifumi">
        <a href="../projects/shifumi/shifumi.php"></a>
        <div class="rpsImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-red-600"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">Shifumi (against the computer only)</p>
        </div>
      </div>

      <!-- Images slider card -->

      <div class="group bg-indigo-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="imagesSlider">
        <a href="../projects/images_slider/slider.php"></a>

        <div class="sliderImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-indigo-200"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">Welcome in my Images Slider !</p>
        </div>
      </div>

      <!-- Stopwatch card -->

      <div class="group bg-sky-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="stopwatch">
      <a href="../projects/stopwatch/stopwatch.php"></a>  
      <div class="stopwatchImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-sky-600"></div>
      
      <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
        <p class="text-center">Dynamic Stopwatch. Play with time !</p>
      </div>
    </div>
    
    <!-- Clock card -->
    
    <div class="group bg-blue-900 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="newYorkClock">
        <a href="../projects/new_york_clock/clock.php"></a>  
        <div class="clockImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-blue-900"></div>
        
        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">My simple New York clock !</p>
        </div>
      </div>
      
      <!-- To-do-list -->
      
      <div class="group bg-rose-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white cursor-pointer" id="toDoList">
        <a href="../projects/to_do_list/to_do_list.php"></a>  
        <div class="todoImg h-3/5 w-full rounded-t-md transform duration-700 group-hover:border-b-4 group-hover:border-b-rose-200"></div>

        <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
          <p class="text-center">
            Classic To-do-List. Write down your tasks !
          </p>
        </div>
      </div>
    </div>

    <div class="h-7"></div>

    <!-- Logout button -->

    <div class="w-[8.25rem] p-[2px] bg-gradient-to-br from-purple-700 to-red-500 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500">
      <input type="button" value="Logout" id="logout" name="logout" class="cursor-pointer bg-gray-900 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
    </div>
  </main>

  <!-- Dialog for logout -->

  <dialog id="confirmDeconnexionDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-6 z-10 text-[whitesmoke] h-80">
    <form action="home.php" method="post">
      <label class="text-2xl">Are you sure to log out ?</label>

      <div class="flex items-center justify-center flex-col gap-5">
        <!-- Yes button -->

        <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
          <input type="submit" value="Yes ✅" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
        </div>

        <!-- No button -->

        <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500 rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
          <input type="button" value="No ❌" id="denyButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800" />
        </div>
      </div>
    </form>
  </dialog>
</body>

</html>

<?php include "../include/footer.php";
?>
