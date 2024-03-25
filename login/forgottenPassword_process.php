<?php
session_start();
include "../include/database.php";

try {
    require __DIR__ . "/../vendor/autoload.php";
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
} catch (Exception $e) {
    echo $e->getMessage();
}

$mailUsername = $_ENV["mailUsername"];
$mailPassword = $_ENV["mailPassword"];
$mailAddress = $_ENV["mailAddress"];
$mailName = $_ENV["mailName"];
// print "$mailUSername; $mailPassword; $mailAddress; $mailName";
// Importations needed to use the phpmailer plugin

require "../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// use PHPMailer\PHPMailer\Exception;

$response = ["error" => false];
try {
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

                // Send a mail to the user

                $user_email_address = $user["email"];
                $email_subject = "Reset password on Friedrich's corner";
                $email_message = "
                Hi $username 👋,
                Forgot your password?<br>
                We received a <b>request</b> <b>to reset the password</b> for your account.<br>
                Here is your SECRET code :<br>
                <p style='color:red; font-size:2rem'; text-align:center;><b>$code</b></p><br>
                <b>Don't share that code !</b><br>
                Now go back on the page to enter it.<br>
                Sincerely, Friedrich's corner team";

                // Initializing the mail

                $mail = new PHPMailer(true);
                $mail->isSMTP();
                $mail->SMTPAuth = true;
                $mail->Host = "smtp.gmail.com";
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;
                $mail->Username = $mailUsername;
                $mail->Password = $mailPassword;
                $mail->setFrom(
                    $mailAddress,
                    $mailName,
                    $auto = true
                );
                $mail->addAddress($user_email_address, "");
                $mail->Subject = $email_subject;
                $mail->MsgHTML($email_message);
                $mail->Send();
                $response = [
                    "error" => false,
                    "redirect" => "codeSubmit.php?username=$username&id=$id_user",
                ];
            }
            pg_free_result($result);
            pg_close($conn);
        }
        echo json_encode($response);
    }
} catch (Exception $e) {
    $response["error"] = true;
    $response["message"] = "An error occurred: " . $e->getMessage();
    echo json_encode($response);
}
