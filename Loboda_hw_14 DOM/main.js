window.onload = function () {

  var box = document.querySelector('#box'), curPos = 0;
  var windowField = document.querySelector('#windowField');

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
}

 
console.log('after onload');