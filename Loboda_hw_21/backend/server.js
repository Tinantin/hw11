var express = require('express');
var fs = require('fs');
var app = express();

app.use(function (req, res, next) {     //разрешаем всем видам запросов работать с нашим сервером
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	next();
});



function getDataFromDataBasse() {
  return user = [
    [{"login":"admin", "password": "admin", "id": 1}]
  ];
}

// app.get('/user', function (req, res) { // req - обьект запроса, res -- обьект ответа
//   const users = getDataFromDataBasse();
//   const lastUser = [users.pop()];
//   res.send(lastUser);
// });


app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/users');
});



// app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
    
//   res.send('ghh');
// });




   