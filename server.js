var express = require('express');
var app = express();
var Clients = require('./clients');

var PORT = 8080;
var STATIC_FILES = 'www-built';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

Object.keys(Clients).forEach(function (key) {
    app.use('/' + Clients[key], express.static(STATIC_FILES));
});

app.use(function(req, res) {
    res.status(404).send('page not found');
});

var server = app.listen(PORT, function () {
    console.log('simple CDN started on port ' + server.address().port);
});