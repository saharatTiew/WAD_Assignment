<?php

// MySQL connection information
$url = parse_url(getenv("DATABASE_URL"));
$servername = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$dbname = substr($url["path"], 1);

echo "Extracted Info $servername $username $password $dbname<br>";

?>