let form =document.getElementById('addForm'); 
let itemlist = document.getElementById('items');
let filt = document.getElementById('filter');

 form.addEventListener('submit', addItem);
 itemlist.addEventListener('click' , remove);
 filt.addEventListener('keyup' , filter);
 function addItem(e)
 {
    e.preventDefault();
    let newitem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newitem));
    document.getElementById('item').value = '';
    var del = document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete mx-1";
    del.appendChild(document.createTextNode('X'));
    var edit= document.createElement('button');
    edit.className='btn btn-primary btn-sm float-right';
    edit.appendChild(document.createTextNode('edit'));
    li.appendChild(edit);
    li.appendChild(del);
    itemlist.append(li);
    
 }


 function remove(e)
 {
    //e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let s = e.target.parentElement;
            itemlist.removeChild(s);
        }
    }
 }

 function filter(e)
 {
    let txt = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(txt) !== -1) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none"; 
        }
    });
 }