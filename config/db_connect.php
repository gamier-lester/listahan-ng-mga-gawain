<?php
require_once 'constants.php';
	$conn = mysqli_connect(SERVER_NAME, DB_USER, DB_PWORD, DB_NAME);

	if(!$conn) {
		die('Connection failed: ') . mysqli_error($conn);
	}
?>