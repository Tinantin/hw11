window.onload = function () {

  var box = document.querySelector('#box'), curPos = 0;
  var push = true;
  
  box.style.background = 'red';
  box.style.border = '10px solid black';

  box.onclick = function () {
    if (box.style.background == 'red') {
      box.style.background = 'yellow';
      box.style.border = '10px solid green';
    } else {
      box.style.background = 'red';
      box.style.border = '10px solid black';
    }
   }
   document.onclick = function (event) {
    if (!push) {
      push = true; 
           return;
    }
    box.style.top = event.clientY + 'px';
    box.style.left = event.clientX + 'px';
    box.style.transition = 2 + 's';
 }
  }
  console.log('after onload');