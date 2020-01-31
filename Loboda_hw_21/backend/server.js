var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {     //разрешаем всем видам запросов работать с нашим сервером
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	next();
});

app.post('/users', function (req, res) { // req - обьект запроса, res -- обьект ответа  
  fs.readFile("users.json", 'utf-8', function(err, content) {
    users = JSON.parse(content);
    const form = req.body;
    const userExist = users
    .filter(user => user.login == form.login && user.password == form.password 
      );

    console.log('Got body:', req.body);
  
    if(userExist.length > 0){
      const userId = userExist.pop().id;
      
      res.status(200).send(userId.toString());
    } else {
      res.status(401).send('Not found');
    }
  });

});

app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/users');
});







   