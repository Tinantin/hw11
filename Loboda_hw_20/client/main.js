window.onload = function() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

      console.log(xhttp.readyState, 'xhttp.readyState');
      if (xhttp.readyState == 4) {
          let data = xhttp.responseText;
          // console.log(data);
          let parsedData = JSON.parse(data);
          console.log(parsedData) // {name:'Valera', lastName:"Adsasd", isMaried: true, childrens: [1,2,3]}
          render(parsedData);
      }
  }

  
 xhttp.open("GET", "http://localhost:3000/users", true);


this.document.querySelector('#btn').onclick = function() {
  xhttp.send();
}

 function render(data) {
  const users = document.querySelector('.users');

  let items = data.map(item => '<div' + ' class="block"' + '>' + item.name + '</div>');
    users.innerHTML  = items.join(' ')
 }

 ///////////////////////////////////////
 xhttp.onreadystatechange = function() {

  console.log(xhttp.readyState, 'xhttp.readyState');
  if (xhttp.readyState == 4) {
      let newData = xhttp.responseText;
      // console.log(data);
      let parsedNewData = JSON.parse(newData);
      console.log(parsedNewData) 
      render(parsedNewData);
  }
}


xhttp.open("GET", "http://localhost:3000/user", true);


this.document.querySelector('#btn').onclick = function() {
xhttp.send();
}

function render(newData) {
const users = document.querySelector('.user');

let items = newData.map(item => '<div' + ' class="block"' + '>' + item.name + '</div>');
users.innerHTML  = items.join(' ')
}

 
}
console.log('after onload');