var express = require('express');
var app = express();


users = ['user1', 'user2', 'user3'];


app.get('/', function (req, res) {
  res.send('Hello World from User Service');
});

app.get('/users', function(req, res) {
  res.send(users)
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});