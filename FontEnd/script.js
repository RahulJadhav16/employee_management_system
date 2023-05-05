
// GET ALL EMPLOYEE LIST

	const loader = document.getElementById('loader');

loader.style.display = 'block'; // show loader before fetching data

fetch('http://localhost:8081/emplist')
  .then(response => response.json())
  .then(data => {
    // hide loader when data is fetched
    loader.style.display = 'none';

    data.forEach(employee => {
      // Append employee data to the table
      let row = document.createElement('tr');
      row.innerHTML = `<td>${employee.id}</td><td>${employee.name}</td><td>${employee.age}</td>
        <td>${employee.department}</td><td>${employee.salary}</td>
      `;
      document.getElementById('employee-table').appendChild(row);
    });
  })
  .catch(error => {
    console.error(error);
    // hide loader if there's an error
    loader.style.display = 'none';
  });



// ADD NEW EMPLOYEE

const form = document.getElementById('create-form');
const message = document.getElementById('message');



form.addEventListener('submit', (event) => {
	event.preventDefault();
    const loader = document.getElementById('loader');
	// Get form data
	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;
    const department=document.getElementById('department').value;
    const salary=document.getElementById('salary').value;

	loader.style.display = 'block';
	// Make AJAX request to create new employee
	fetch('http://localhost:8081/create', {

		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			age: age,
            department:department,
            salary:salary
		})
		
	})
	.then(response => response.json())
	.then(data => {
		// Show success message
		loader.style.display = 'none';
		message.innerHTML = `Employee "${data.name}" has been created!`;
		message.style.color = 'green';
		form.reset();
	})
	.catch(error => {
		// Show error message
		loader.style.display = 'none';
		message.innerHTML = `An error occurred while creating the employee: ${error}`;
		message.style.color = 'red';
	});
});


/// ///// to pdf 



