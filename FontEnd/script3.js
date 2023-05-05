// Update Employee function
const loader = document.getElementById('loader');
loader.style.display = 'none';
function updateEmployee() {
    loader.style.display = 'none';
   
    const form = document.getElementById('update-form');
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
    const message = document.getElementById('message');
  
    const employee = {
      name: name,
      age: age,
      department: department,
      salary: salary
    };

    loader.style.display = 'block';
    
    // Send PUT request to update employee
    fetch(`http://localhost:8081/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
    .then(response => {

      if (response.ok) {
        
        loader.style.display = 'block';
        message.innerHTML = `Employee Data has been Updated!!!`;
		    message.style.color = 'green';
        form.reset();
      } else {
        loader.style.display = 'none';
        message.innerHTML = `Employee ID does't exists !!`;
		    message.style.color = 'red';
        
      }


    
    
   
      
    })
    .catch(error => {
      loader.style.display = 'none';
      
      console.error(error)
      
  
    
    });
    
  
    
  }
  
  // Event listener for update form submission
  const updateForm = document.getElementById('update-form');
  updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    updateEmployee();
  });
  


 
        
     
  
  
