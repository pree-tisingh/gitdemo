let form =document.getElementById('addForm'); 
let itemlist = document.getElementById('items');
let filt = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemlist.addEventListener('click' , remove);
function addItem(e)
 {
    e.preventDefault();
    let newitem = document.getElementById('item').value;
    let newitem1 = document.getElementById('item1').value;
    let combinedText = newitem + ' ' + newitem1;
    let li = document.createElement('li');
    li.className="list-group-item";
    
    li.appendChild(document.createTextNode(combinedText));
   
    
     
    var Edit= document.createElement('button');
    Edit.className='btn btn-primary btn-sm float-right';
    Edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(Edit);
    var del = document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete ";
    del.appendChild(document.createTextNode('X'));


    
   
    li.appendChild(del); 
    document.getElementById('item').value = '';
    document.getElementById('item1').value = '';
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

filt.addEventListener('keyup' , filter);
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