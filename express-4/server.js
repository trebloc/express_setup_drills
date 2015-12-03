var express = require('express');
var app = express();

var cats = [
  "Maincoon Cat",
  "Black Cat",
  "Linx Cat"
];

var dogs = [
	"Golden Retriever",
	"Dalmation",
	"German Shepard",	
];

app.get('/', function (req, res) {
    res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});    
  });

app.get("/cats", function (req, res) {   
  res.send(cats.join(", "));
});

app.get("/dogs", function (req, res) {
	res.send(dogs.join(", "));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening at http://localhost:3000/');
});