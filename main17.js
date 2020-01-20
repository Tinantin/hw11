window.onload = function () {
// var arr = [
//     {name: 'fieldName', value: 'Aaaa' }
    
//     {name: 'secondName', value: 'Bbbn'}
//   ]

var fields = this.document.querySelectorAll('.firstName, .lastName, .age')

function setItem (){

  console.log(fields);
  for (var i = 0; i < fields.length; i++){
    var name = fields[i].name;
    var value = localStorage[name];
  }
}
setItem();
}
    console.log('after onload');



