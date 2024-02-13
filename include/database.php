<?php
    // $dbServer = 'localhost';
    // $dbUser = 'postgres'; // Your username goes here
    // $dbPass = 'Logarithme18#'; // Your password goes here
    // $dbName = 'users_data'; // This database can be imported in phpMyAdmin via the usrers_data.sql file
    // $conn = '';

    $conn = pg_connect("host=localhost dbname=users_data user=postgres password=Logarithme18#");
        
    if (!$conn) {
        // echo "Connection rejected !";
        exit;
    } 
    else {
        // echo "Connection success ✨!";
    }
?>