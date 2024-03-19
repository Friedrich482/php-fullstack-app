<?php
session_start();
include "../include/database.php";

$response = ["error" => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $username = filter_input(
        INPUT_POST,
        "username",
        FILTER_SANITIZE_SPECIAL_CHARS
    );
    $password = filter_input(
        INPUT_POST,
        "password",
        FILTER_SANITIZE_SPECIAL_CHARS
    );

    if (empty($email) || empty($username) || empty($password)) {
        $response["error"] = true;
        $response["message"] = "All fields are required !";
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = pg_prepare(
            $conn,
            "insert_user",
            "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)"
        );
        $result = pg_execute($conn, "insert_user", [
            $email,
            $username,
            $hashedPassword,
        ]);

        if ($result) {
            $row = pg_fetch_assoc($result);
            $id_user = $row["id"];

            $_SESSION["username"] = $username;
            $_SESSION["loggedin"] = true;
            $_SESSION["id"] = $id_user;

            $response[
                "redirect"
            ] = "../home/home.php?username=$username&id=$id_user";
        } else {
            $error_message = pg_last_error($conn);
            // Checks if the message contains specific keys words
            if (strpos($error_message, "email") !== false) {
                $response["error"] = true;
                $response["message"] = "This email is already taken ❌";
            } elseif (strpos($error_message, "username") !== false) {
                $response["error"] = true;
                $response["message"] = "This username is already taken ❌";
            } else {
                $response["error"] = true;
                $response["message"] = "An error occured ❌ !";
            }
        }
    }
}
pg_close($conn);
echo json_encode($response);
?>
