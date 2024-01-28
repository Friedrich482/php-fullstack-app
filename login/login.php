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
    <p><b>Please fill this form to <i class="text-red-300">login</i></b></p>
    <form action="login_process.php" method="post" id="loginForm" class="flex items-center justify-center flex-col bg-slate-700 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-8">
        <p></p>

        <label for="username" class="fu">Enter your username :</label>
        <input type="text" name="username" id="username" required placeholder="Ex : Paladin67" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border-2 border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-11/12 sm:w-10/12 focus:outline-none">
        <label id="usernameError" class="hidden"></label>

        <label for="password">Enter your password :</label>
        <div class="w-11/12 flex flex-row flex-nowrap p-0 sm:w-10/12">
            <input type="password" required name="password" id="password" placeholder="*********" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border-2 border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-full flex-shrink-0 box-border focus:outline-none">
            <img src="../assets/eye/eye-crossed.png" id="eyeSlashed" alt="Eye slashed" title="Display the password" class="h-[1.25rem] w-[1.25rem] select-none relative top-1 right-7 hover:scale-125">
        </div>   
        <label id="passwordError" class="hidden"></label>

        <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
            <input type="submit" value="Submit" id="submit" name="submit" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-200 min-w-32 hover:shadow-sm hover:shadow-white active:font-thin active:bg-slate-800">
        </div>
        <p></p>
        <script src="scriptLogin.js"></script>
    </form>
    
    <p class="h-7 flex items-center justify-center flex-wrap text-center">Not yet registered? Click here to &nbsp;<a href="../register/register.php" class="text-red-300 no-underline hover:text-indigo-400">register</a></p><br>
    <p></p><p></p>
    <script src="../assets/eye/eye.js"></script>
</body>
</html>

<?php
    include("../include/footer.php");    
?>



