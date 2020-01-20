window.onload = function () {

  var fields = this.document.querySelectorAll('.firstName, .lastName, .age')
  
  function setItem (){
  ////////////////// положить значения в localStorage
    for (var i = 0; i < fields.length; i++){
      var obj = {}; 
  
      var name = fields[i].name;
      var value = fields[i].value;
      obj[name] = value;
    }
    
    var json = JSON.stringify(obj);
    localStorage.setItem('form', json);
  }
  setItem();
  }
      console.log('after onload');

