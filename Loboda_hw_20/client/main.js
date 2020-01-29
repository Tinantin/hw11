window.onload = function() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

      console.log(xhttp.readyState, 'xhttp.readyState');
      if (xhttp.readyState == 4) {
          let data = xhttp.responseText;
          console.log(data);
        
      }
  }

  
 xhttp.open("GET", "http://localhost:3000/user", true);


this.document.querySelector('#btn').onclick = function() {
  xhttp.send();
}


 
}
console.log('after onload');