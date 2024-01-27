<?php
    session_start();
    include("../include/database.php");
    include("../include/header.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login 🔑</title>
    <link rel="stylesheet" href="../css/style.css">
    
</head>
<body class="flex items-center justify-center flex-wrap text-center flex-col gap-[1.25rem] backgroundImg text-[whitesmoke] MV-boli">
    <p><b>Please fill this form to <i style="color: cyan;">login</i></b></p>
    <form action="login_process.php" method="post" id="loginForm" class="flex items-center justify-center flex-col">
        
        <label for="username">Enter your username :</label><br>
        <input type="text" name="username" id="username" required placeholder="Ex : Paladin67" class="text-center rounded-2xl border-[3px] border-solid border-[darkmagenta] min-w-52 min-h-9 text-black"><br>

        <label for="password">Enter your password :</label><br>
        <div class="flex items-center justify-center gap-4 w-[100vh]">
            <input type="password" name="password"  id="password" placeholder="*********" class="text-center rounded-2xl border-[3px] border-solid border-[darkmagenta] min-w-52 min-h-9 relative left-7 text-black">
            <img src="../assets/eye/eye_slashed.jpg" id="eyeSlashed" alt="Eye slashed" title="Display the password" class="h-[1.25rem] w-[1.25rem] relative right-[1rem] select-none"><br>
        </div>
        <br><br>
        
        <input type="submit" value="Submit" id="submit" name="submit" class="text-center rounded-2xl border-[3px] border-solid border-cyan-500 min-h-9 text-[1.25rem] min-w-[20vh] bg-black text-[whitesmoke] p-[0.314rem] box-border font-[consolas] font-bold hover:bg-white hover:border-[darkmagenta] hover:text-black hover:shadow-lg active:bg-black active:opacity-65 active:text-white"><br>
        <label id="displayErrors"></label>
        <script src="scriptLogin.js"></script>
    </form>
    <p class="h-7">Not yet registered? Click here to <a href="../register/register.php" class="text-cyan-500 no-underline hover:text-2xl hover:text-green-400">register</a></p><br>
    
    <script src="../assets/eye/eye.js"></script>
    
</body>
</html>

<?php
    include("../include/footer.php");    
?>



