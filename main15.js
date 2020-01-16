window.onload = function () {

   var data = { 
      name: 'menu', 
      type: 'row|column', 
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

for(var i = 0; i < data.items.length; i++) {
    var div = document.createElement('div');

    div.classList.add('item');
    div.innerHTML = data.items[i].title;
    div.style.border = '5px solid green';

    menu.appendChild(div);
  }


}
    console.log('after onload');



