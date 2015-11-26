var express = require('express');
var app = express();


posts = [
	"Post1 content" ,
	"Post2 content",
	"Post3 content"
];


app.get('/', function (req, res) {
  res.send(JSON.stringify(posts));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});