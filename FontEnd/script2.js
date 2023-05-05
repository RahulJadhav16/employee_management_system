const form2 = document.getElementById('delete-form');

form2.addEventListener('submit', (event) => {
    
 const loader = document.getElementById('loader');
  event.preventDefault();
  const id = form2.elements.id.value;
  
  fetch(`http://localhost:8081/delete/${id}`, {
    
    method: 'DELETE'
  })
    .then(response => {
    
      if (response.ok) {
        alert('Employee has been deleted');
        form2.reset();
      } else {
        alert('Failed to delete employee');
      }
    })
    .catch(error => console.error(error));
    
});
