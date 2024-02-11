<?php
session_start();
include("../include/database.php");

$response = ['error' => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    if (empty($username) || empty($password)) {
        $response['error'] = true;
        $response['message'] = "All fields required !";
    } 

    else {
        $stmt = pg_prepare($conn, "fetch_user", "SELECT * FROM users WHERE username = $1");
        $result = pg_execute($conn, "fetch_user", array($username));

        if (pg_num_rows($result) === 0) {
            $response = ['error' => true, 'message' => "User not found!<br> (ಥ _ ಥ)"];
        } 
        
        else {
            $user = pg_fetch_assoc($result);
            if (password_verify($password, $user['password'])) {
                $_SESSION["username"] = $username;
                $_SESSION['id'] = $user["id"];
                $_SESSION['loggedin'] = true;
                $response = ['error' => false, 'redirect' => '../home/home.php'];
            } 

            else {
                $response = ['error' => true, 'message' => "Incorrect password! ❌"];
            }
        }

        pg_free_result($result);
        pg_close($conn);
    }

    echo json_encode($response);
}
