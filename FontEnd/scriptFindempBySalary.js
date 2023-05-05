// Get employees by name function
const loader = document.getElementById('loader');
loader.style.display = 'none';

function getEmployeesByGreterThanSalary() {
    

    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const tableBody = document.getElementById('employee-table-body');
    

    loader.style.display = 'block';
    // Send GET request to retrieve employees by name
    fetch(`http://localhost:8081/salaryGtr/${name}`)
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        if (data.length === 0) {
            message.innerHTML = `No employee found with salary "${name}".`;
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


// Get employees by salary 
function getEmployeesBySalary() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const tableBody = document.getElementById('employee-table-body');
   // loader.style.display = 'block';
    // Send GET request to retrieve employees by name
    fetch(`http://localhost:8081/salary/${name}`)
    .then(response => response.json())
    .then(data => {
       // loader.style.display = 'none';
        console.log(data);
        if (data.length === 0) {
            message.innerHTML = `No employee found with Salary "${name}".`;
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
        //loader.style.display = 'none';
    })
    .catch(error => {
        console.error(error);
        message.innerHTML = 'An error occurred while retrieving employee data.';
        message.style.color = 'red';
        tableBody.innerHTML = '';
    });
}

///Get employee by less salary
function getEmployeesByLessThanSalary() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const tableBody = document.getElementById('employee-table-body');
   // loader.style.display = 'block';
    // Send GET request to retrieve employees by name
    fetch(`http://localhost:8081/salaryLtn/${name}`)
    .then(response => response.json())
    .then(data => {
        //loader.style.display = 'none';
        console.log(data);
        if (data.length === 0) {
            message.innerHTML = `No employee found with salary "${name}".`;
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
        //loader.style.display = 'none';
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
const radioButtons = document.querySelectorAll('input[name="inlineRadioOptions"]');
const salaryInput = document.getElementById('name');


getNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
let selectedRadioButtonValue;
  for(let i = 0; i < radioButtons.length; i++) {
    if(radioButtons[i].checked) {
      selectedRadioButtonValue = radioButtons[i].value;
      break;
    }
  }
    
  if(selectedRadioButtonValue === 'option1') {
    console.log("OPtion1")
    getEmployeesBySalary();
  } else if(selectedRadioButtonValue === 'option2') {
    console.log("OPtion2")
    
    getEmployeesByGreterThanSalary();
  } else if(selectedRadioButtonValue === 'option3') {
    console.log("OPtion3")

    getEmployeesByLessThanSalary();
  }

  loader.style.display = 'none';


    
   
    

   
    
});
