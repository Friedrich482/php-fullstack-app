<?php
session_start();
include "../include/database.php";

$response = ["error" => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

    if (empty($email)) {
        $response["error"] = true;
        $response["message"] = "The email field is required !";
    } else {
        $stmt = pg_prepare(
            $conn,
            "fetch_user",
            "SELECT * FROM users WHERE email = $1"
        );
        $result = pg_execute($conn, "fetch_user", [$email]);
        if (pg_num_rows($result) === 0) {
            $response = [
                "error" => true,
                "message" => "Email not found!<br> (ಥ _ ಥ)",
            ];
        } else {
            $user = pg_fetch_assoc($result);
            $username = $user["username"];
            $_SESSION["username"] = $username;
            $_SESSION["id"] = $user["id"];
            $id_user = $user["id"];

            // Set the code to a random number at 6 digits
            $code = rand(100000, 999999);

            //  Push this code in the database
            $stmt = pg_prepare(
                $conn,
                "update_code",
                "UPDATE users SET code = $1 WHERE id = $2"
            );

            $result = pg_execute($conn, "update_code", [$code, $id_user]);
            $response = [
                "error" => false,
                "redirect" => "codeSubmit.php?username=$username&id=$id_user",
            ];

            // Send a mail to the user
            $user_email_address = $user["email"];
            $email_subject = "Reset password on Fredrich's corner";
            $email_message = "
            Hi $username,
            Forgot your password?\n
            We received a request to reset the password for your account.\n
            Here is your SECRET code :\n
            $code\n
            Don't share that code !\n
            Now go back on the page to enter it\n
            Sincerely, Friedrich's corner team\n";
            $email_header = "From: votreadresse@example.com\r\n";
        }
        pg_free_result($result);
        pg_close($conn);
    }
    echo json_encode($response);
}
