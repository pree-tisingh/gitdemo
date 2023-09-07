let form = document.getElementById('my-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    console.log('updating List');
    
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let nil= document.createElement('li');
    let use=document.getElementById('users');
   
    let formData = {
        Name: name,
        Email: email,
        Phone: phone
    };
    nil.textContent = `Name: ${formData.Name}, Email: ${formData.Email}, Phone: ${formData.Phone}`;
    use.appendChild(nil);
   
    let itemArray = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : [];

    
    itemArray.push(formData);

   
    localStorage.setItem('info', JSON.stringify(itemArray));

   
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
