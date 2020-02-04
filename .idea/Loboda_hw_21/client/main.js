
  this.document.querySelector('#btn').onclick = function(event) {
    event.preventDefault();
    let xhttp = new XMLHttpRequest();
   
    let data = {
      login: document.querySelector('.login').value,
      password: document.querySelector('.password').value
    };
    // console.log(data);
    let body = 'login=' + data.login + '&password=' + data.password;

      xhttp.open("POST", "http://localhost:3000/users", true);
      xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhttp.send(body);

      xhttp.onreadystatechange = function() {

        if (xhttp.readyState == 4) {
        let responseText = xhttp.responseText;
        console.log(responseText);    // <= goods
          }
        
        }
  }