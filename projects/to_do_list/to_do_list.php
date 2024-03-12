<?php
session_start();
include "../../include/database.php";

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ../../login/login.php");
    exit();
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Location: ../../home/home.php");

    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../../css/style.css">
  <script src="../../dist/projects/to_do_list/script.js" defer></script>
</head>

<body class="flex text-center justify-center flex-col gap-5 bg-gray-800">
  <ul id="list" class="consolas flex justify-center items-start flex-col place-self-center gap-2"></ul>
  <form id="new-task-form" class="flex items-start justify-center flex-wrap gap-4 consolas">
    <input type="text" id="new-task-title" class="rounded-lg border-2 border-violet-600 p-2 text-xl text-white duration-700 text-center bg-gray-900 outline-none focus:border-white" required>
    <button type="submit" class="transiton consolas cursor-pointer rounded-lg border-2 border-violet-600 p-2 text-xl text-white duration-700 hover:border-white active:border-yellow-700 active:bg-slate-500">
      Add a task
    </button>
  </form>
</body>

</html>
<?php include "../../include/footer.php"; ?>
