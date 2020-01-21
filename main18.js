window.onload = function () {

  var button = document.querySelector('.push');
 
  var store = {
     value: '',
 
    setInStore: function(key, value){
     localStorage.setItem(key, value);
    },
    getFromStore: function(key){
       value = localStorage.getItem(key) || 0;
    }
  }
 
  store.getFromStore('counter');
  button.nextElementSibling.innerHTML = store.value;
 
  button.onclick = function (){
    var value = ++this.nextElementSibling.innerText;
    store. setInStore('counter', value);
  }
 
 }
     console.log('after onload');
 
 
 
 