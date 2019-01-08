<?php
	require_once '../config/db_connect.php';

	$taskId = $_POST["taskId"];
	// $taskName = $_POST["taskName"];

	$sql = "DELETE FROM tasks WHERE id like $taskId";

	$result = mysqli_query($conn, $sql);

	if ($result === TRUE) {
		// $message = 
		echo (json_encode("deleted successfully"));
	} else {
		echo (json_encode("error in deletion"));
	}

	require_once '../config/db_close.php';
?>