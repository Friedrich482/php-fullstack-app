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
        <h1 class="text-3xl sm:text-5xl text-center animated-text min-h-10 sm:min-h-12 gradient-text bg-gradient-to-r from-purple-500 via-teal-500 to-pink-500 pr-5 h-32" id="animatedText">
            Welcome <?php echo "{$_SESSION['username']}"?>, on my page 
        </h1>
    </div>
        
    <br><br><br>
    <!-- <lord-icon style="display:inline-block"  src="https://cdn.lordicon.com/pcwupfyl.json" trigger="loop" style="width:100px;height:100px"></lord-icon> -->
    <!-- <i class="fi fi-rr-cross-small"></i> -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum corrupti commodi repudiandae velit quibusdam placeat, sit nobis fugiat dolore ratione, impedit, aperiam delectus autem explicabo officia quod rem. Consectetur?</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti, sed officiis sequi quis totam consequatur illo doloribus recusandae consectetur laborum enim! Illo blanditiis harum, autem labore recusandae reiciendis error!
    <br><br><br><br><br><br><br><br><br><br>

    <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
        <input type="button" value="Logout" id="logout" name="logout" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-500 min-w-32 active:font-thin active:bg-slate-800">
    </div>

    <dialog id="confirmDeconnexionDialog" class="hidden items-center justify-center flex-col bg-slate-700 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-6 z-10 text-[whitesmoke] h-80">
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

