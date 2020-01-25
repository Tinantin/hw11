window.onload = function () {

  var button = document.querySelectorAll('.button');

  var store = {
    value: '',
    setInStore: function(key, value) {
      localStorage.setItem(key, value);
      },
    getFromStore: function(key) {
      this.value = localStorage.getItem(key) || 0;
      }
  }

  function getParent(elem, selector) {
    return elem.closest(selector);
  }

  for(let i = 0; i < button.length; i ++) {
    store.getFromStore('counter' + i);
    var block = getParent(button[i], '.block').querySelector('.counter').innerHTML = store.value;

    button[i].onclick = function() {
      var block = getParent(button[i], '.block');
      var counter = 0;

      if (block) {
          counter = ++block.querySelector('.counter').innerHTML;
      }

      store.setInStore('counter' + i, counter);
  }
}

 function clearAll (){
  var divs = document.querySelector('.box');
  let spans = document.querySelectorAll('.counter');
  for (let span of spans)
  span.innerHTML = 0;
 
 }
 var buttonClear = document.querySelector('.clear');
 buttonClear.addEventListener('click', clearAll);


var buttonCounter = document.querySelector('.mainCount');
buttonCounter.addEventListener('click', function(e){
var block_id = prompt('write id');
var counter = prompt('write number');
document.getElementById(block_id).querySelector('.counter').innerHTML = counter;
})

}
        console.log('after onload');




 
 
 