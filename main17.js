window.onload = function () {

  var fields = document.querySelectorAll('.firstName, .lastName, .age');
  var button = document.querySelector('#push');
  getItemValue ();

function setItemValue (){
////////////////// положить значения в localStorage (пользователь зашел 1й раз)
  var obj = {}; 

  for (var i = 0; i < fields.length; i++){
    var name = fields[i].name;
    var value = fields[i].value;
    obj[name] = value;
  }
  localStorage.setItem('form', JSON.stringify(obj));
}

button.onclick = setItemValue;

function getItemValue (){
  ////////////////// получить значения с localStorage (пользователь зашел повторно)
    var obj = JSON.parse(localStorage.getItem('form'));  /// получ знвчения по ключу getItem (parse преобраз в объект строку)
    if (obj) {
      for (var i = 0; i < fields.length; i++){
        var name = fields[i].name;
        var value = obj[name];
        fields[i].value = value;
      }
    }
    
  }
  

}
    console.log('after onload');
