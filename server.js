var express = require('express');
var app = express();
var PORT = 8080;
var STATIC_FILES = 'www-built';
var Clients = require('./clients');

app.get('/stats', function (req, res) {
    res.send('stats not implemented yet');
});

Object.keys(Clients).forEach(function (key) {
    app.use('/' + Clients[key], express.static(STATIC_FILES));
});

app.listen(PORT);
console.log('simple CDN started on port ' + PORT);