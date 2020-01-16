window.onload = function () {

  var data = { 
     name: 'menu', 
     type: 'row', 
     items: [
       {
         title: 'title 1',
         handler: 'ActionAdd'
       },
       {
         title: 'title 2',
         handler: 'ActionSaveAs'
       },
       {
         title: 'title 3',
         handler: 'ActionExit'
       }
     ]
   }



var menu = document.querySelector('.menu');

var list = document.createElement('ul');
list.classList.add('row-menu');

for(var i = 0; i < data.items.length; i++) {
   var itemList = document.createElement('li');

   itemList.classList.add('item');
   itemList.innerHTML = data.items[i].title;
   itemList.style.border = '5px solid green';
   itemList.style.marginTop = '10px';

   list.appendChild(itemList);
 }

 menu.onclick = function(){
   
}

menu.appendChild(list);
}
   console.log('after onload');




