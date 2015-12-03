var express = require('express');
var app = express();

var bears = [
  "Black Bear",
  "Polar Bear",
  "Pooh Bear"
];

var BayAreaCities = [
	"San Francisco",
	"Oakland",
	"San Jose",	
];

app.get('/', function (req, res) {
    res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});    
  });

app.get("/bears", function (req, res) {   
  res.send(bears.join(", "));
});

app.get("/BayAreaCities", function (req, res) {
	res.send(BayAreaCities.join(", "));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening at http://localhost:3000/');
});