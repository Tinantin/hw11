
  this.document.querySelector('#btn').onclick = function(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
   
    var data = {
      login: document.querySelector('.login').value,
      password: document.querySelector('.password').value
    };
    console.log(data);
  }