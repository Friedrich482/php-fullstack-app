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

<body class="flex text-center justify-center flex-col">
  <ul id="list"></ul>
  <form id="new-task-form">
    <input type="text" id="new-task-title">
    <button type="submit">Add</button>
  </form>
</body>
</html>
<?php include "../../include/footer.php"; ?>
