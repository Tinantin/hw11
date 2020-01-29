
var express = require('express');
var fs = require('fs');
var app = express();

app.use(function (req, res, next) {     //разрешаем всем видам запросов работать с нашим сервером
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	next();
});

app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
    
  res.send('786');
});
app.get('/user', function (req, res) { // req - обьект запроса, res -- обьект ответа
    
  res.send('786');
});

app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/user');
});









   