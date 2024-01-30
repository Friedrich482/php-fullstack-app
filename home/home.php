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
    <div class="flex items-center justify-center flex-col gap-2 w-full">
        <button id="visitsDisplayerButton" class="border-4 font-[cursive] rounded-2xl min-w-[5.625rem] text-2xl text-red-600 p-1 bg-black"><i class="fi fi-rr-angle-down"></i></button>
        <div id="visits" style="display: none;" class="text-4xl text-center min-w-24 min-h-3">
            You have visited this page <label><?php echo $number_of_visits?></label> times
        </div>
    </div>

    <!-- <i class="fi fi-rr-menu-burger"></i> -->

    <h1 class="text-4xl text-center animated-text min-h-10" id="animatedText">Welcome <?php echo "{$_SESSION['username']}"?>, on my page <lord-icon style="display:inline-block"  src="https://cdn.lordicon.com/pcwupfyl.json" trigger="loop" style="width:100px;height:100px"></lord-icon></h1>
        
    <p class="text-3xl">What are we doing today ? 🙃 &nbsp;</p>
    <br><br><br>
    <!-- <i class="fi fi-rr-cross-small"></i> -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum corrupti commodi repudiandae velit quibusdam placeat, sit nobis fugiat dolore ratione, impedit, aperiam delectus autem explicabo officia quod rem. Consectetur?</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti, sed officiis sequi quis totam consequatur illo doloribus recusandae consectetur laborum enim! Illo blanditiis harum, autem labore recusandae reiciendis error!
    <br><br><br><br><br><br><br><br><br><br>
    <form action="home.php" method="post">
        <input type="button" value="Logout" name="logout" id="logout" class="rounded-[1.25rem] text-xl min-w-[20vh] border-[3px] border-solid border-cyan-400 bg-black text-[whitesmoke] p-1 box-border font-[consolas] font-bold hover:bg-white hover:border-[darkmagenta] hover:text-black shadow-lg active:bg-gray-500 active:text-white">
    </form>

    <form action="" method="post" style="display:none;" id="confirmForm" class="flex items-center justify-center gap-5">
        <label class="text-[1.875rem]">Are you sure to log out ?</label><br>
        <div class="flex items-center justify-center gap-5">
            <input class="rounded-[1.25rem] text-xl min-w-[20vh] border-[3px] border-solid border-cyan-400 bg-black text-[whitesmoke] p-1 box-border font-[consolas] font-bold hover:bg-white hover:border-[darkmagenta] hover:text-black shadow-lg" type="submit" value="Yes ✅">
            <input class="rounded-[1.25rem] text-xl min-w-[20vh] border-[3px] border-solid border-cyan-400 bg-black text-[whitesmoke] p-1 box-border font-[consolas] font-bold hover:bg-white hover:border-[darkmagenta] hover:text-black shadow-lg" type="button" value="No ❌" id="denyButton">
        </div>

    </form>

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

