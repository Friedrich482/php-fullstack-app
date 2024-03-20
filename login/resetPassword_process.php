<?php
session_start();
include "../include/database.php";

$response = ["error" => false];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = filter_input(
        INPUT_POST,
        "password",
        FILTER_SANITIZE_SPECIAL_CHARS
    );
    $confirm_password = filter_input(
        INPUT_POST,
        "confirm_password",
        FILTER_SANITIZE_SPECIAL_CHARS
    );
    if (empty($password) || empty($confirm_password)) {
        $response["error"] = true;
        $response["message"] = "All fields required !";
    } else {
    }
}
