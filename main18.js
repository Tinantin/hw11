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
 
  function getParent(elem, selector){
    return elem.closest(selector);
  }
 
  store.getFromStore('counter');
  var block = getParent(button, '.block').querySelector('counter').innerHTML = store.value;
 //  button.nextElementSibling.innerHTML = store.value;
 
  button.onclick = function (){
    var block = getParent(button, '.block');
    var counter = 0;
 
    if(block){
      counter = ++block.querySelector('.counter').innerHTML;
      block.querySelector('.counter').innerHTML = counter;
    }
    store.setInStore('counter', counter);
  }
 
 }
     console.log('after onload');
 
 
 
 
 