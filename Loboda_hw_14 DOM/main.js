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

  windowField.onclick = function (event) {
    let windowFieldCoords = this.getBoundingClientRect(); // координаты относительно окна браузера

    let boxCoords = {
      top: event.clientY - windowFieldCoords.top - windowField.clientTop -
        box.clientHeight / 2,
      left: event.clientX - windowFieldCoords.left - windowField.clientLeft -
        box.clientWidth / 2
    };

    box.style.left = boxCoords.left + 'px';
    box.style.top = boxCoords.top + 'px';

  }
}
console.log('after onload');