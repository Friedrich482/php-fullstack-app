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
    <title>Password Forgotten</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../dist/login/forgottenPassword.js"></script>
</head>

<body class="flex items-center justify-center flex-wrap text-center flex-col gap-6 backgroundImg text-[whitesmoke] MV-boli">
    <form action="codeSubmit_process.php" method="post" id="passwordForgotForm" class="flex items-center justify-center flex-col bg-slate-700 opacity-95 MV-boli p-6 border-4 border-double border-purple-800 rounded-bl-[100px] rounded-tr-[100px] min-w-16 max-w-60 sm:min-w-72 sm:p-2 gap-7">
        <h1 class=" text-4xl text-red-600 mt-5">Reset your Password </h1>
        <label for="code" class="text-white w-5/6 text-center">A mail had been sent to your email address. Please enter the 6 digits code </label>
        <input type="number" name="code" id="code" required placeholder="Enter the code" class="transition duration-500 hover:scale-110 hover:border-b-4 hover:shadow-xl hover:shadow-black border-2 border-solid border-black border-b-2  border-b-purple-600 text-center bg-gray-800 text-white opacity-75 rounded-tl-md rounded-br-md h-8 w-11/12 sm:w-10/12 focus:outline-none text-sm sm:text-sm">
        <label id="codeError" class="hidden"></label>
        <div class="p-[2px] bg-gradient-to-br from-purple-700 to-red-500  rounded-2xl transition duration-500 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-700 active:bg-gradient-to-br active:from-purple-700 active:to-red-500 z-10">
            <input type="submit" value="Reset" id="submit" name="submit" class="cursor-pointer bg-slate-700 hover:border-transparent border-2 border-solid border-transparent rounded-2xl p-2 hover:bg-slate-700 hover:text-indigo-400 transition duration-200 min-w-32 active:font-thin active:bg-slate-800">
        </div>
        <label id="defaultError" class="hidden"></label>
        <p></p>
    </form>
    <p class="h-7 flex items-center justify-center flex-wrap text-center">Change the &thinsp;<a href="forgottenPassword.php" class="text-pink-500 no-underline transform duration-500 hover:text-indigo-400">email</a>&nbsp; address</p><br>

</body>

</html>
<?php include "../include/footer.php"; ?>
