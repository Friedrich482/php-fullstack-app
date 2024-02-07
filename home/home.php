<?php
    session_start();
    include("../include/database.php");


    // Check if the user is logged in. Otherwise, redirect him to the login page.

    if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
        header('Location: ../login/login.php');
        exit;
    }

?>

<?php
    // incrementation of the counter of visits everytime you visit the page

    $sql = "UPDATE users SET visits = visits + 1 WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $_SESSION['id']);

    $stmt->execute();

    $stmt->close();

    // display of the actual value of the counter of visits

    $sql = "SELECT visits FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $_SESSION["id"]);
    $stmt->execute();


    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    $number_of_visits = $row['visits'];

    $stmt->close();
    $conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home 🏠</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="script.js" defer></script>
</head>
<body class="flex items-center justify-center flex-wrap text-center flex-col gap-[1.25rem] backgroundImg text-[whitesmoke] MV-boli">
    

    <header class="w-full flex gap-3 flex-col">

        <!-- Navbar for big screens -->

        <div class="hidden sm:grid grid-cols-5 gap-0 place-items-center w-full bg-black text-white h-20 text-xl" id="navbar">
            
            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-r-2  border-r-white transform duration-500 hover:border-b-8 hover:border-l-8 hover:border-b-white hover:border-l-white hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/home.png" alt="home icon" class="w-6 h-6 relative bottom-1">
                <span>Home</span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-r-2 border-r-white transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/circle-user.png" alt="user icon" class="w-6 h-6 relative bottom-1">
                <span class="">Profile</span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-r-2 border-r-white transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/wrench.png" alt="tool icon" class="w-6 h-6 relative bottom-1">
                <span class="">Tools</span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-r-2 border-r-white transform duration-500 hover:border-b-8 hover:border-b-white hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/info.png" alt="info icon" class="w-6 h-6 relative bottom-1">
                <span class="">About</span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 transform duration-500 hover:border-b-8 hover:border-r-8 hover:border-b-white hover border-r-2:border-r-white hover:bg-gray-800 active:bg-slate-950">
                <span class="">Logout</span>
                <img src="../assets/icons/navbarIcons/exit.png" alt="info icon" class="w-6 h-6 relative bottom-1">
            </div>

        </div>

        <!-- Navbar for small screens -->

        <button class=" sm:hidden h-9 w-9 bg-black p-1 border-[0.5px] border-gray-500 rounded-sm hover:border-white relative left-4 top-2" id="menuBurgerButton">
            <img src="../assets/icons/navbarIcons/menu-burger.png" alt="menu-burger icon" class="" id="menuBurgerImg">
        </button>
        
        <div class=" group opacity-0 sm:hidden w-full bg-black items-center justify-center flex-col transit" id="verticalNavbar">
            
            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/home.png" alt="home icon" class="w-6 h-6 relative bottom-1">
                <span><a href="#animatedText" class="no-underline">Home</a></span>
                
            </div>
        
            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/circle-user.png" alt="user icon" class="w-6 h-6 relative bottom-1">
                <span class="">Profile</span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/wrench.png" alt="tool icon" class="w-6 h-6 relative bottom-1">
                <span class=""><a href="#toolsGrid">Tools</a></span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950">
                <img src="../assets/icons/navbarIcons/info.png" alt="info icon" class="w-6 h-6 relative bottom-1">
                <span class=""><a href="#footer">About</a></span>
            </div>

            <div class="group text-center flex items-center justify-center gap-2 h-full w-full p-0 border-b border-b-white transform duration-500 hover:border-l-8 hover:border-l-purple-700 group-hover:border-b-0 hover:bg-gray-800 active:bg-slate-950">
                <span class="">Logout</span>
                <img src="../assets/icons/navbarIcons/exit.png" alt="info icon" class="w-6 h-6 relative bottom-1">
            
            </div>
        </div>
    </header>

    

    <!-- <div class="flex items-center justify-center flex-col gap-2 w-full">
        <button id="visitsDisplayerButton" class="border-4 font-[cursive] rounded-2xl min-w-[5.625rem] text-2xl text-red-600 p-1 bg-black"><i class="fi fi-rr-angle-down"></i></button>
        <div id="visits" style="display: none;" class="text-4xl text-center min-w-24 min-h-3">
            You have visited this page <label><?php echo $number_of_visits?></label> times
        </div>
    </div> -->

    <!-- Title with animation -->

    <div>
        <h1 class=" flex flex-row text-3xl sm:text-5xl text-center animated-text gradient-text bg-gradient-to-r from-purple-500 via-teal-500 to-pink-500 pr-5 h-36 sm:h-28" id="animatedText">
            Welcome <?php echo "{$_SESSION['username']}"?>, on my site 
        </h1>
    </div>
        
    <main class="flex items-center justify-center flex-col gap-3 sm:w-[620px] z-0">
        <div class="flex items-center justify-center flex-col gap-5 m-3">
            <div class="text-lg sm:text-2xl h-[1150px] mysql-custom:h-[1000px]" id="mainText">
                👉 Hello, dear visitor, my name is Friedrich482.<br><br>
                
                👉 I am a junior developper 👨‍💻.
                
                <br><br>
                👉 I am currently learning TypeScript and how to use it in my projects.<br><br>
                👉 ... Nothing more than that to say about me, except the fact that I like 🤩 videos games 🎮.<br>
                👉 And really enjoy learn new things in programmation, 👨‍💻 especially Web Developpement and machine learning .

                <br><br>
                This page is my first try
                on a CRUD (Create-Read-Update-Delete) project. It was made with:
            
                <ul class="list-disc ml-20 mr-20 mt-8 mb-8  sm:ml-36 sm:mr-36 gap-1">
                    <li class="mb-2">PHP</li>
                    <li class="mb-2">JavaScript</li>
                    <li class="mb-2">MySQL (as the DB)</li>
                    <li class="mb-2">Tailwind CSS</li>
                </ul>            

                You will also find some of the projects I have done with JavaScript when learning it. Enjoy them and have a nice day.
                <br>(If you don't see them, scroll down or use the navbar)
            </div>
            <br>
            <!-- <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div> -->
        
        </div>
        <!-- Tools grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-10 pt-6" id="toolsGrid">
            
            <!-- Calculator card -->

            <div class="group bg-orange-300 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-lg hover:shadow-white">

                <div class="calcImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-orange-300">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700  shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">This is my space calculator !</p>
                </div>

            </div>

            <!-- Comprehensive fetch weather app card -->

            <div class="group bg-yellow-300 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="weatherImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-yellow-300">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Comprehensive Fetch Weather App</p>
                </div>

            </div>

            <!-- Snake game card -->

            <div class="group bg-lime-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="snakeImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-lime-600">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Welcome in my snake game !</p>
                </div>

            </div>

            <!-- Tic tac toe game card -->

            <div class="group bg-slate-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="ticImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-slate-200">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Play Tic Tac Toe against someone!</p>
                </div>

            </div>

            <!-- Shifumi game card -->

            <div class="group bg-red-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="rpsImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-red-600">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Shifumi (against the computer only)</p>
                </div>

            </div>

            <!-- Images slider card -->

            <div class="group bg-indigo-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="sliderImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-indigo-200">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Welcome in my Images Slider !</p>
                </div>

            </div>

            <!-- Stopwatch card -->

            <div class="group bg-sky-600 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="stopwatchImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-sky-600">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Dynamic Stopwatch. Play with time !</p>
                </div>

            </div>

            <!-- Clock card -->

            <div class="group bg-blue-900 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="clockImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-blue-900">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">My simple New York clock !</p>
                </div>

            </div>

            <!-- To-do-list -->

            <div class="group bg-rose-200 w-5/6 max-w-96 aspect-square text-center flex items-center justify-center flex-col gap-0 text-2xl rounded-md transform duration-700 hover:scale-110 text-black hover:shadow-xl hover:shadow-white">

                <div class="todoImg h-3/5 w-full rounded-t-md  transform duration-700 group-hover:border-b-4 group-hover:border-b-rose-200">

                </div>

                <div class="bg-black text-white h-2/5 text-center flex items-center justify-center rounded-b-md transform duration-700 shadow-sm shadow-white group-hover:shadow-none">
                    <p class="text-center">Classic To-do-List. Write down your tasks !</p>
                </div>

            </div>

        </div>

        <div class="h-7"></div>

        <!-- Logout button -->

        <div class="w-[8.25rem] p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
            <input type="button" value="Logout" id="logout" name="logout" class="cursor-pointer bg-gray-900 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2  hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
        </div>
    </main>
    

    <!-- Dialog for logout -->

    <dialog id="confirmDeconnexionDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-6 z-10 text-[whitesmoke] h-80">
        <form action="" method="post">
            <label class="text-2xl">Are you sure to log out ?</label>

            <div class="flex items-center justify-center flex-col gap-5">

                <!-- Yes button -->

                <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
                    <input type="submit" value="Yes ✅" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
                </div>
                
                <!-- No button -->

                <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
                    <input type="button" value="No ❌" id="denyButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
                </div>
                
            </div>
            
        </form>
    </dialog>


</body>
</html>
<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $_SESSION['loggedin'] = false;
        session_destroy();
        header("Location: ../login/login.php");
    }
?>
<?php
    include("../include/footer.php");
?>

