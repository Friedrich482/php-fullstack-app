<?php
session_start();
include "../include/database.php";
$id_user = $_SESSION["id"];
$username = $_SESSION["username"];
$params = [$_SESSION["id"]];
$response = ["error" => false];
try {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $code_entered = filter_input(INPUT_POST, "code", FILTER_VALIDATE_INT);
        if (empty($code_entered)) {
            $response["error"] = true;
            $response["message"] = "The code is required !";
        } else {
            // Get the user's code from the database

            $sql = "SELECT code FROM users WHERE id=$1";
            pg_prepare($conn, "fetch_code", $sql);
            $result = pg_execute($conn, "fetch_code", $params);
            $row = pg_fetch_assoc($result);
            $user_code = $row["code"];

            if (intval($user_code) !== $code_entered) {
                $response = [
                    "error" => true,
                    "message" => "The code is incorrect <br> (ಥ _ ಥ)",
                ];
            } else {
                $response = [
                    "error" => false,
                    "redirect" => "resetPassword.php?username=$username&id=$id_user",
                ];
            }
        }
        pg_free_result($result);
        pg_close($conn);
        echo json_encode($response);
    }
} catch (Exception $e) {
    $response["error"] = true;
    $response["message"] = "An error occurred: " . $e->getMessage();
    echo json_encode($response);
}
