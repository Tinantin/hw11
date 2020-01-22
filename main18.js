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

}
     console.log('after onload');
 
 
 
 
 