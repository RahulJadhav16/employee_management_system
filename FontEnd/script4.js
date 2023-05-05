const table = document.getElementById('employee-table');
const loader = document.getElementById('loader');
const message = document.getElementById('message');
loader.style.display = 'none';

function getEmployee(id) {
  table.innerHTML = '';
  loader.style.display = 'block';

  fetch(`http://localhost:8081/get/${id}`)
    .then(response => response.json() 
    
    )
    .then(data => {

        loader.style.display = 'none';
      
      
      
        

      // Create table rows and cells
      let row = document.createElement('tr');
      let idCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let ageCell = document.createElement('td');
      let departmentCell = document.createElement('td');
      let salaryCell = document.createElement('td');

      // Add data to cells
      idCell.textContent = data.id;
      nameCell.textContent = data.name;
      ageCell.textContent = data.age;
      departmentCell.textContent = data.department;
      salaryCell.textContent = data.salary;

      // Append cells to row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(departmentCell);
      row.appendChild(salaryCell);

      // Append row to table
      table.appendChild(row);
      


      

      loader.style.display = 'none';
    })
    .catch(error => console.error(error),
    
    
    
    );
}

const form = document.getElementById('get-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const id = document.getElementById('id').value;
  getEmployee(id);
});




