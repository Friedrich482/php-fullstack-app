<?php
session_start();
include "../include/database.php";
include "../include/header.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="shortcut icon" href="../assets/icons/login-favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../css/style.css">
    <script src="../dist/login/script.js" defer type="module"></script>
    
</head>
<body class="flex items-center justify-center flex-wrap text-center flex-col gap-[1.25rem] backgroundImg text-[whitesmoke] MV-boli">
    <p><b>Please fill this form to <i class="text-pink-500">login</i></b></p>
    <form action="login_process.php" method="post" id="loginForm" class="flex items-center justify-center flex-col bg-slate-700 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-8">
        <p></p>

        <label for="username">Enter your username :</label>
        <input type="text" name="username" id="username" required placeholder="Ex : Friedrich482" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border-2 border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-11/12 sm:w-10/12 focus:outline-none text-sm sm:text-sm">
        <label id="usernameError" class="hidden"></label>

        <label for="password">Enter your password :</label>
        <div class="w-11/12 flex flex-row flex-nowrap p-0 sm:w-10/12 group">
            <input type="password" required name="password" id="password" placeholder="*********" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border-2 border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-full flex-shrink-0 box-border focus:outline-none text-[0.564rem] sm:text-sm">
            <img src="../assets/eye/eye-crossed.svg" id="eyeSlashed" alt="Eye slashed" title="Display the password" class="h-[1.25rem] w-[1.25rem] select-none relative top-1 right-7 transform duration-500 hover:scale-125 group-hover:scale-125">
        </div>   
        <label id="passwordError" class="hidden"></label>
        <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
            <input type="submit" value="Submit" id="submit" name="submit" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-200 min-w-32 active:font-thin active:bg-slate-800">
        </div>
        <label id="defaultError" class="hidden"></label>
        <div id="passwordForgotten" class="relative bottom-3 self-end text-pink-500">
            <a class=" hover:text-sky-200 hover:underline cursor-pointer transform duration-500" href="./forgottenPassword.php">Forgot password ?</a>
        </div>
    </form>
    
    <p class="h-7 flex items-center justify-center flex-wrap text-center">Not yet registered? Click here to &thinsp;<a href="../register/register.php" class="text-pink-500 no-underline transform duration-500 hover:text-indigo-400">register</a></p><br>
</body>
</html>

<?php include "../include/footer.php"; ?>



