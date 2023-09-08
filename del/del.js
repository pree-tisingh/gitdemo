let form = document.getElementById('my-form');
        let use = document.getElementById('users');
        
        // Load data from localStorage on page load
        window.addEventListener('load', () => {
            displayItems();
        });
        
        form.addEventListener('submit', addItem);

        function addItem(e) {
            e.preventDefault();
            console.log('updating List');
          
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
            
            if (name && email && phone) {
                let formData = {
                    Name: name,
                    Email: email,
                    Phone: phone
                };
                let itemArray = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : [];
                itemArray.push(formData);
                localStorage.setItem('info', JSON.stringify(itemArray));
                displayItems(); // Refresh the displayed items
            }
            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
        }

        function displayItems() {
            //  use.innerHTML = ''; // Clear the existing list

            let itemArray = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : [];

            itemArray.forEach((formData, index) => {
                let nil = document.createElement('li');
                nil.textContent = `Name: ${formData.Name}, Email: ${formData.Email}, Phone: ${formData.Phone}`;

                let del = document.createElement('button');
                del.className = 'delete';
                del.textContent = 'Delete';
                del.addEventListener('click', () => {
                    deleteItem(index);
                });

                nil.appendChild(del);
                use.appendChild(nil);
            });
        }

        function deleteItem(index) {
            let itemArray = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : [];
            if (index >= 0 && index < itemArray.length) {
                itemArray.splice(index, 1); 
                localStorage.setItem('info', JSON.stringify(itemArray));
                displayItems();
            }
        }