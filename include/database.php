<?php
try {
    require __DIR__ . "/../vendor/autoload.php";
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
} catch (Exception $e) {
    echo $e->getMessage();
}
$dbServer = $_ENV["dbServer"];
$dbUser = $_ENV["dbUser"];
$dbPass = $_ENV["dbPass"];
$dbName = $_ENV["dbName"];

$conn = pg_connect(
    "host=$dbServer dbname=$dbName user=$dbUser password=$dbPass"
);

if (!$conn) {
    // echo "Connection rejected !";
    exit();
} else {
    // echo "Connection success ✨!";
}
