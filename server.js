var express = require('express');
var app = express();
var Clients = require('./clients');

var PORT = 8080;
var STATIC_FILES = 'www-built';

Object.keys(Clients).forEach(function (key) {
    app.use('/' + Clients[key], express.static(STATIC_FILES));
});

app.use(function(req, res) {
    res.sendStatus(404);
});

var server = app.listen(PORT, function () {
    console.log('simple CDN started on port ' + server.address().port);
});