<?php
	require_once '../config/db_connect.php';

	// echo (json_encode("hello"));
	if($_POST["taskName"] === "") {
		echo (json_encode("No data to process"));
	} else {
		// echo (json_encode($_POST["taskName"]));
		$data = $_POST["taskName"];
		$sql = "INSERT INTO tasks(taskName, taskStatus) VALUES('$data', 'Pending')";

		$result = mysqli_query($conn, $sql);

		if ($result === TRUE) {
			echo (json_encode("Insert successful"));
		} else {
			echo (json_encode("Error inserting data"));
		}
	}

	require_once '../config/db_close.php';
?>