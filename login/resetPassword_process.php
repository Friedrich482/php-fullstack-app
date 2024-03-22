<?php
session_start();
include "../include/database.php";

$id_user = $_SESSION["id"];
$params = [$id_user];

$response = ["error" => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = filter_input(INPUT_POST, "password", FILTER_UNSAFE_RAW);
    $confirm_password = filter_input(
        INPUT_POST,
        "confirm_password",
        FILTER_UNSAFE_RAW
    );

    if (empty($password) || empty($confirm_password)) {
        $response["error"] = true;
        $response["message"] = "All fields required !";
    } elseif ($password !== $confirm_password) {
        $response["error"] = true;
        $response["message"] = "Passwords don't match !";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "UPDATE users SET password=$1 WHERE id=$2";
        pg_prepare($conn, "update_password", $sql);
        $result = pg_execute($conn, "update_password", [
            $hashed_password,
            $id_user,
        ]);

        if ($result) {
            $response["redirect"] = "login.php?username=$username&id=$id_user";
        } else {
            $response["error"] = true;
            $response["message"] = "Error updating password.";
        }
    }

    pg_free_result($result);
    pg_close($conn);
    echo json_encode($response);
}
