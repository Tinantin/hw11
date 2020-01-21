window.onload = function () {

  var button = document.querySelector('.push');
 
  var store = {
    setInStore: function(key, value){
     localStorage.setItem(key, value);
    },
    getFromStore: function(key){

    }
  }
 
  button.onclick = function (){
    var value = ++this.nextElementSibling.innerText;
    store. setInStore('counter', value);
  }
 
 }
     console.log('after onload');
 
 