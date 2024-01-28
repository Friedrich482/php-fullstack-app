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
    <form action="login_process.php" method="post" id="loginForm" class="flex items-center justify-center flex-col bg-slate-700 opacity-95 MV-boli p-4 border-4 border-double border-purple-800 rounded-bl-3xl rounded-tr-3xl max-w-60 sm:max-w-72">
        
        <label for="username">Enter your username :</label><br>
        <input type="text" name="username" id="username" required placeholder="Ex : Paladin67" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-11/12"><br>

        <label for="password">Enter your password :</label><br>
        <div class="w-11/12 flex flex-row flex-nowrap">
            <input type="password" required name="password"  id="password" placeholder="*********" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8">
            <img src="../assets/eye/eye_slashed.jpg" id="eyeSlashed" alt="Eye slashed" title="Display the password" class="h-[1.25rem] w-[1.25rem] select-none relative top-1 right-6 hover:scale-125"><br>
        </div>
        <br><br>
        
        <input type="submit" value="Submit" id="submit" name="submit" class="cursor-pointer hover:border-purple-900 border-2 border-solid border-white rounded-2xl p-2 hover:bg-purple-200 hover:text-black transition duration-200 hover:scale-110 min-w-32 hover:shadow-sm hover:shadow-white active:bg-purple-400 active:font-thin"><br>
        <label id="displayErrors"></label>
        <script src="scriptLogin.js"></script>
    </form>
    <p class="h-7 flex flex-wrap text-center">Not yet registered? Click here to <a href="../register/register.php" class="text-cyan-500 no-underline hover:text-2xl hover:text-green-400">register</a></p><br>
    
    <script src="../assets/eye/eye.js"></script>
    
</body>
</html>

<?php
    include("../include/footer.php");    
?>



