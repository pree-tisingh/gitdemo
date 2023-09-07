let form = document.getElementById('my-form');
 form.addEventListener('submit' , addItem);

 function addItem(e)
 {
    e.preventDefault();
    console.log('updating List');
    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    localStorage.setItem('Name' , name);
    localStorage.setItem('Email' , email);
    document.getElementById('name').value='';
    document.getElementById('email').value='';
 }