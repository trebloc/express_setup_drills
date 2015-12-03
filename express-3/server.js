var express = require('express');
var app = express();

var albums = [
  "Sgt. Pepper's Lonely Heart's Club Band",
  "Who's Next",
  "Stickey Fingers",
];

var cds = [
	"Joshua Tree",
	"Purple Rain",
	"Synchronicity",	
];

app.get('/', function (req, res) {
    res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});    
  });

app.get("/albums", function (req, res) {
  //send all the albums     
  res.send(albums.join(", "));
});

app.get("/cds", function (req, res) {
	res.send(cds.join(", "));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening at http://localhost:3000/');
});