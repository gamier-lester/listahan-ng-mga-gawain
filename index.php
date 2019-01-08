<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">

	<title>Todo List</title>

	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<div id="container">
		<div id="form-container">
			<form>
				<input id="taskName" type="text" name="taskName" placeholder="Enter task here">
				<button id="addTask">Add task</button>
			</form>
		</div>
		
		<div id="table-container">
			<table>
				<thead>
					<tr>
						<td>Task ID</td>
						<td>Task Name</td>
						<td>Task Action</td>
					</tr>
				</thead>
				<tbody id="table-body"></tbody>
			</table>
		</div>
		
	</div>
	

<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/js/script.js"></script>
</body>
</html>