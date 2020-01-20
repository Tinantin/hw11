window.onload = function () {

  var fields = document.querySelectorAll('.firstName, .lastName, .age');
  var button = document.querySelector('#push');
  getItemValue ();

function setItemValue (){
////////////////// положить значения в localStorage
var obj = {}; 

  for (var i = 0; i < fields.length; i++){
    var name = fields[i].name;
    var value = fields[i].value;
    obj[name] = value;
  }
console.log(obj);
 
  localStorage.setItem('form', JSON.stringify(obj));
}
button.onclick = setItemValue;

function getItemValue (){
  ////////////////// получить значения с localStorage
    var obj = localStorage.getItem('form');
    console.log(obj);
}
}
    console.log('after onload');

