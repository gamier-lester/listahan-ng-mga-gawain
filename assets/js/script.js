$("#addTask").on("click", function(event) {
	event.preventDefault();
	// console.log("clicked");

	var taskName = $("#taskName").val();

	$.ajax({
		url: "/batch19/mod08-sandbox/todoApp/controllers/add_task.php",
		type: "POST",
		data: {
			taskName: taskName
		},
		success: function(jsondata) {
			// console.log(jsondata);
			// console.log(JSON.parse(jsondata));
			var iMessage = JSON.parse(jsondata);
			console.log(iMessage);

			refreshData();

			$("#taskName").val("");
		}
	});
});

$(document).ready(function() {
	// event.preventDefault()

	// $("#table-body").

	$.ajax({
		url: "/batch19/mod08-sandbox/todoApp/controllers/fill_table.php",
		type: "POST",
		data: {},
		success: function(tabledata) {
			// console.log("document ready");
			// let myData = JSON.parse(tabledata);
			// console.log(myData);
			// console.log(tabledata);
			// console.log(JSON.parse(tabledata));

			let allData = JSON.parse(tabledata);
			for (var key in allData) {
				var value = allData[key];
				// console.log(value.id + " " + value.taskName);
				tasksRow = document.createElement("tr");
				var tasksCell1 = document.createElement("td");
				var tasksCell2 = document.createElement("td");
				var tasksCell3 = document.createElement("td");
				var taskId = document.createTextNode(value.id);
				var taskName = document.createTextNode(value.taskName);
				// var taskAction = document.createTextNode(`<button id="${value.id}">DONE<button>`);
				var taskAction = document.createElement("button");
				taskAction.setAttribute("id", value.id);
				taskAction.setAttribute("class", "tasks");
				var taskActionText = document.createTextNode("Delete");
				taskAction.appendChild(taskActionText);

				tasksCell1.appendChild(taskId);
				tasksCell2.appendChild(taskName);
				tasksCell3.appendChild(taskAction);
				tasksRow.append(tasksCell1);
				tasksRow.append(tasksCell2);
				tasksRow.append(tasksCell3);
				$("#table-body").append(tasksRow);
			}

			testMe();

		}
	});
});

// $("click", function (ev) {
//   var id = ev.relatedTarget.id;
//   // console.log(id);
//   console.log("asdasd");
// });



// $("#1").on("click", function(event) {
// 	event.preventDefault();
// 	console.log("clicked 1");
// });

function testMe () {
	$('.tasks').on('click', function(ev) {
		// console.log("clicked");
		var thisId = ev.target.id;
		// console.log(thisId);

		$.ajax({
			url: "/batch19/mod08-sandbox/todoApp/controllers/remove_task.php",
			type: "POST",
			data: {
				taskId: thisId
			},
			success: function(deleteMessage) {
				alert(JSON.parse(deleteMessage));
				refreshData();
			}
		})
	});
}

function refreshData() {
	$("#table-body").empty();

	$.ajax({
		url: "/batch19/mod08-sandbox/todoApp/controllers/fill_table.php",
		type: "POST",
		data: {},
		success: function(tabledata) {
			// console.log("document ready");
			// let myData = JSON.parse(tabledata);
			// console.log(myData);
			// console.log(tabledata);
			// console.log(JSON.parse(tabledata));

			let allData = JSON.parse(tabledata);
			for (var key in allData) {
				var value = allData[key];
				// console.log(value.id + " " + value.taskName);
				tasksRow = document.createElement("tr");
				var tasksCell1 = document.createElement("td");
				var tasksCell2 = document.createElement("td");
				var tasksCell3 = document.createElement("td");
				var taskId = document.createTextNode(value.id);
				var taskName = document.createTextNode(value.taskName);
				// var taskAction = document.createTextNode(`<button id="${value.id}">DONE<button>`);
				var taskAction = document.createElement("button");
				taskAction.setAttribute("id", value.id);
				taskAction.setAttribute("class", "tasks");
				var taskActionText = document.createTextNode("Delete");
				taskAction.appendChild(taskActionText);

				tasksCell1.appendChild(taskId);
				tasksCell2.appendChild(taskName);
				tasksCell3.appendChild(taskAction);
				tasksRow.append(tasksCell1);
				tasksRow.append(tasksCell2);
				tasksRow.append(tasksCell3);
				$("#table-body").append(tasksRow);
			}

			testMe();
		}
	});
}