let form = document.getElementById('my-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    console.log('updating List');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let myobj = {
        Name: name,
        Email: email
    };
    
    // Corrected the storage of the myobj object
   let mysec= localStorage.setItem('myobj', JSON.stringify(myobj));
   // console.log(localStorage);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    let mydes= JSON.parse(localStorage.getItem('myobj'));
    console.log(mydes);
}