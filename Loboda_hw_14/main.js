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

  box.onmousedown = function (eventMouseDown) {
    var Y = eventMouseDown.offsetY;
    var X = eventMouseDown.offsetX;
    document.onmousemove = function (eventMove) {
      box.style.top = (eventMove.clientY - Y) + 'px';
      box.style.left = (eventMove.clientX - X) + 'px';
      box.style.transition = 0 + 's';
    }
    document.onmouseup = function (evenMouseUp) {
      document.onmousemove = null;
    }
  }
}
console.log('after onload');