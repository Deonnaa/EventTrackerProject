console.log('script.js loaded');

window.addEventListener('load', function(event) {
	console.log('Page loaded, DOM complete');
	init();
});

function init() {
	loadHabitList();

	// Add form addEventListener
	document.getElementById('newHabitForm').addEventListener('submit', function(event) {
		event.preventDefault();
		addHabit();
	});
}

function loadHabitList() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/habits');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let habitList = JSON.parse(xhr.responseText);
				console.log(habitList);
				displayHabitList(habitList);
			}
		}
	};
	xhr.send();
}

//Habit Table
function displayHabitList(habitList) {
	let thead = document.getElementById('habitListHead');
	thead.innerHTML = '';

	let headerRow = document.createElement('tr');

	// Header cell for the ID
	let th = document.createElement('th');
	th.textContent = 'No.';
	headerRow.appendChild(th);

	// Header cell for the Habit Name
	th = document.createElement('th');
	th.textContent = 'Habit Name';
	headerRow.appendChild(th);

	// Header cell for day of Week
	let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	for (let day of daysOfWeek) {
		th = document.createElement('th');
		th.textContent = day;
		headerRow.appendChild(th);
	}

	// Append the header row to the table head
	thead.appendChild(headerRow);

	let tbody = document.getElementById('habitListBody');

	//Row for each Habit
	for (let habit of habitList) {
		let tr = document.createElement('tr');
		tr.className = 'habit-row'; // Add class for styling
		tr.onclick = function() { // Set up click event for the whole row
			getHabitDetails(habit.id);
		};
		tbody.appendChild(tr);

		let td = document.createElement('td');
		td.textContent = habit.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = habit.name;
		td.onclick = function() {
			(habit.id); // Add event listener to show habit details
		};
		tr.appendChild(td);


		//Insert checkboxes to keep track if a user has completed
		for (let day of daysOfWeek) {
			td = document.createElement('td');

			let checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.className = 'check-box';
			td.appendChild(checkbox);

			tr.appendChild(td);
		}


	}
	//End for of loop for habits

	// Add a row for the 'Add New Habit' button
	/*let addRow = document.createElement('tr');
	let addCell = document.createElement('td');
	addCell.colSpan = daysOfWeek.length + 2; // +2 for 'No.' and 'Habit Name' columns
	addCell.className = 'add-button-cell';

	let addButton = document.createElement('button');
	addButton.textContent = 'Add New Habit';
	addButton.className = 'btn btn-outline-info';
	addButton.onclick = function() {
		// TODO: Implement the logic to add a new habit
		//addHabit();
		console.log('Add new habit button clicked');
	};

	addCell.appendChild(addButton);
	addRow.appendChild(addCell);
	tbody.appendChild(addRow);*/



}

//Habit Details & Form
function getHabitDetails(habitId) {
	console.log('Getting Details for Habit ' + habitId);

	// Create or find the element to display the habit details
	let detailsSection = document.getElementById('habitDetails');
	if (!detailsSection) {
		detailsSection = document.createElement('div');
		detailsSection.id = 'habitDetails';
		document.body.appendChild(detailsSection);
	}

	// Clear previous details
	//detailsSection.innerHTML = '<p>Loading details...</p>';

	// Make an AJAX call to fetch habit details
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/habits/' + habitId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let habitDetails = JSON.parse(xhr.responseText);
				// Display the habit details
				//displayHabitDetails(habitDetails, detailsSection);
				populateEditForm(habitDetails);
			} else {
				detailsSection.innerHTML = '<p>Error loading habit details.</p>';
			}
		}
	};
	xhr.send();
}

/*function displayHabitDetails(habitDetails, detailsSection) {
	detailsSection.innerHTML = `
		<h3>Habit Details:</h3>
		<p>Name: ${habitDetails.name}</p>
		<p>Description: ${habitDetails.description}</p>
		<p>Start Date: ${habitDetails.startDate}</p>
		<p>End Date: ${habitDetails.endDate}</p>
		<p>Frequency: ${habitDetails.frequency}</p>
	`;
}*/

function populateEditForm(habitDetails) {
	let form = document.getElementById('newHabitForm');

	form.name.value = habitDetails.name;
	form.description.value = habitDetails.description;
	form.startDate.value = habitDetails.startDate;
	form.endDate.value = habitDetails.endDate;
	form.frequency.value = habitDetails.frequency;

	// Show the Update and Delete buttons, hide the Add button
	document.querySelector('[name="updateHabitButton"]').style.display = 'inline-block';
	document.querySelector('[name="deleteHabitButton"]').style.display = 'inline-block';
	document.querySelector('[name="addHabitButton"]').style.display = 'none';

	// Change the form's submit behavior to edit instead of adding a new habit
	form.onsubmit = function(event) {
		event.preventDefault();
		updateHabit(habitDetails.id);
	};
}

function updateHabit(habitId) {
	let form = document.getElementById('newHabitForm');

	let updatedHabit = {
		name: form.name.value,
		description: form.description.value,
		startDate: form.startDate.value,
		endDate: form.endDate.value,
		frequency: form.frequency.value,
	};

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/habits/' + habitId, true);

	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Habit updated successfully');
				loadHabitList(); // Reload the habit list to reflect the changes
			} else {
				console.error('Error updating habit:', xhr.responseText);
			}
		}
	};

	xhr.send(JSON.stringify(updatedHabit));
}

function addHabit() {
	let form = document.getElementById('newHabitForm');

	let newHabit = {
		name: form.name.value,
		description: form.description.value,
		startDate: form.startDate.value,
		endDate: form.endDate.value,
		frequency: form.frequency.value,
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/habits', true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let habit = JSON.parse(xhr.responseText);
				loadHabitList(habit);

			} else {
				console.error('Error adding new habit:', xhr.responseText);
			}
		}
	};

	xhr.send(JSON.stringify(newHabit));
}

function editHabit(habitId) {
	// Fetch current habit data
	// Populate a form for editing
	// Similar to getHabitDetails but includes a way to edit and submit changes
}

function deleteHabit(habitId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/habits/' + habitId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				loadHabitList(); // Reload list after deletion
			} else {
				console.error('Error deleting habit:', xhr.responseText);
			}
		}
	};
	xhr.send();
}





















