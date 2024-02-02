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
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
</head>
<body class="flex items-center justify-center flex-wrap text-center flex-col gap-[1.25rem] backgroundImg text-[whitesmoke] MV-boli">
    
    <!-- <div class="flex items-center justify-center flex-col gap-2 w-full">
        <button id="visitsDisplayerButton" class="border-4 font-[cursive] rounded-2xl min-w-[5.625rem] text-2xl text-red-600 p-1 bg-black"><i class="fi fi-rr-angle-down"></i></button>
        <div id="visits" style="display: none;" class="text-4xl text-center min-w-24 min-h-3">
            You have visited this page <label><?php echo $number_of_visits?></label> times
        </div>
    </div> -->

    <!-- <i class="fi fi-rr-menu-burger"></i> -->
    <div>
        <h1 class="flex flex-row text-3xl sm:text-5xl text-center animated-text gradient-text bg-gradient-to-r from-purple-500 via-teal-500 to-pink-500 pr-5 h-36 sm:h-28" id="animatedText">
            Welcome <?php echo "{$_SESSION['username']}"?>, on my site 
        </h1>
    </div>
        
    <!-- <lord-icon style="display:inline-block"  src="https://cdn.lordicon.com/pcwupfyl.json" trigger="loop" style="width:100px;height:100px"></lord-icon> -->
    <!-- <i class="fi fi-rr-cross-small"></i> -->

    <main class="flex items-center justify-center flex-col gap-3 sm:w-[640px] m-1">
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
            
            <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
        
        </div>
        
        
        <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-10 pt-6">
            <div class="w-5/6 h-72 bg-red-300">Calculator</div>
            <div class="w-5/6 h-72 bg-yellow-300">Fetch Weather App</div>
            <div class="w-5/6 h-72 bg-blue-300">Snake Game</div>
            <div class="w-5/6 h-72 bg-purple-300">Tic Tac Toe</div>
            <div class="w-5/6 h-72 bg-orange-300">Rock-Paper-Scissors (against the computer only)</div>
            <div class="w-5/6 h-72 bg-sky-300">Images Slider</div>
            <div class="w-5/6 h-72 bg-green-300">Stopwatch</div>
            <div class="w-5/6 h-72 bg-rose-300">Clock</div>
            <div class="w-5/6 h-72 bg-slate-300">To-do-List</div>
        </div>
        <div class="w-[8.25rem] p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
            <input type="button" value="Logout" id="logout" name="logout" class="cursor-pointer bg-gray-900 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2  hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
        </div>
    </main>
    

    <dialog id="confirmDeconnexionDialog" class="hidden items-center justify-center flex-col bg-slate-800 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-6 z-10 text-[whitesmoke] h-80">
        <form action="" method="post">
            <label class="text-2xl">Are you sure to log out ?</label>

            <div class="flex items-center justify-center flex-col gap-5">
                <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
                    <input type="submit" value="Yes ✅" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
                </div>
                
                <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
                    <input type="button" value="No ❌" id="denyButton" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
                </div>
                
            </div>
            
        </form>
    </dialog>

   <br><br>
   <script src="https://cdn.lordicon.com/lordicon.js"></script>
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

