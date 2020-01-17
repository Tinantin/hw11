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

  var actions = {
    ActionAdd: function() {
      console.log('ActionAdd')
    },
    ActionSaveAs: function() {
      console.log('ActionSaveAs')
    },
    ActionExit: function() { 
      console.log('ActionExit')
    }
  }


  var menu = document.querySelector('.menu');
  var list = document.createElement('ul');
  list.classList.add('row-menu');
  
  for(var i = 0; i < data.items.length; i++) {
      var itemList = document.createElement('li');
  
      itemList.style.border = '5px solid green';
      itemList.style.marginTop = '10px';
  
      itemList.classList.add('item');
      itemList.innerHTML = data.items[i].title;
      // itemList.onclick = data.items[i].handler;
  
      itemList.addEventListener('click', actions[data.items[i].handler]);
      
      list.appendChild(itemList);
    }
  menu.appendChild(list);
}
   console.log('after onload');




