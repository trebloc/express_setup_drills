var express = require('express');
var app = express();

var burgers = [
  "Hamburger",
  "Cheese Burger",
  "Dble Cheese Burger"
];

var drinks = [
	"Coke",
	"Milkshake",
	"Beer",	
];

app.get('/', function (req, res) {
    res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});    
  });

app.get("/burgers", function (req, res) {
  //send all the burgers     
  res.send(burgers.join(", "));
});

app.get("/drinks", function (req, res) {
	res.send(drinks.join(", "));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening at http://localhost:3000/');
});