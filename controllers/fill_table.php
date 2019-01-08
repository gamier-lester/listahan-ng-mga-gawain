<?php
	require_once '../config/db_connect.php';

	$sql = "SELECT * FROM tasks ORDER BY id DESC";

	$result = mysqli_query($conn, $sql);

	$resultArray = [];

	while($rows = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		array_push($resultArray, $rows);
	}
	// print_r(array_values($resultArray));
	// $transfer = array_values($resultArray);
	echo (json_encode(array_values($resultArray)));

	require_once '../config/db_close.php';
?>