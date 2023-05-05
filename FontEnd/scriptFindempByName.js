// Get employees by name function
function getEmployeesByName() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const tableBody = document.getElementById('employee-table-body');

    // Send GET request to retrieve employees by name
    fetch(`http://localhost:8081/byname/${name}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.length === 0) {
            message.innerHTML = `No employee found with name "${name}".`;
            message.style.color = 'red';
            tableBody.innerHTML = '';
        } else {
            message.innerHTML = '';
            message.style.color = 'green';
            // Clear table rows before populating
            tableBody.innerHTML = '';
            // Iterate through each employee and create table rows
            data.forEach(employee => {
                let row = document.createElement('tr');
                row.innerHTML = `<td>${employee.id}</td><td>${employee.name}</td><td>${employee.age}</td>
                <td>${employee.department}</td><td>${employee.salary}</td>`;
                tableBody.appendChild(row);
            });
        }
    })
    .catch(error => {
        console.error(error);
        message.innerHTML = 'An error occurred while retrieving employee data.';
        message.style.color = 'red';
        tableBody.innerHTML = '';
    });
}

// Event listener for get by name form submission
const getNameForm = document.getElementById('get-by-name-form');
getNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getEmployeesByName();
});
