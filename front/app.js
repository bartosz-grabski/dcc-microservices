var express = require('express');
var http = require('http');
var app = express();




users = ['user1', 'user2', 'user3'];


app.get('/', function (req, res) {


    var httpOptions = {};

    httpOptions.port = process.env.USER_PORT_3000_TCP_PORT;
    httpOptions.host = 'user';
    console.log(httpOptions);

    http.get(httpOptions, function(r) {


        r.on('data', function(data) {
            console.log(data);
            
            var users = data;

            httpOptions.port = process.env.POST_PORT_3000_TCP_PORT;
            httpOptions.host = 'post';
            console.log(httpOptions);
            
            http.get(httpOptions, function(r) {

                r.on('data', function(data) {

                    console.log(data);
                    var posts = data;

                    res.write(users);
                    res.write(posts);
                    res.end();

                });
            });
        });
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});