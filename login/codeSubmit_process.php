<?php
session_start();
include "../include/database.php";

$response = ["error" => false];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $code = filter_input(INPUT_POST, "code", FILTER_VALIDATE_INT);
    if (empty($code)) {
        $response["error"] = true;
        $response["message"] = "The code is required !";
    } else {
    }
}
