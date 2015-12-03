var express = require('express');
var app = express();

var cars = [
  "Honda",
  "Toyota",
  "BMW"
];

var bands = [
	"THe Beatles",
	"The Rolling Stones",
	"The Who",	
];

app.get('/', function (req, res) {
    res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});    
  });

app.get("/cars", function (req, res) {
  //send all the cars     
  res.send(cars.join(", "));
});

app.get("/bands", function (req, res) {
  //send all the cars   
	res.send(bands.join(", "));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening at http://localhost:3000/');
});