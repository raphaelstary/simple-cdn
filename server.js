var express = require('express');
var app = express();
var args = process.argv.slice(2);

var Clients;
var clientsFlagIndex = args.indexOf('--clients'); // --clients <clients.json>
Clients = clientsFlagIndex != -1 ? require('./' + args[clientsFlagIndex + 1]) : require('./clients');

var portFlagIndex = args.indexOf('--port'); // --port <port>
var PORT = portFlagIndex != -1 ? parseInt(args[portFlagIndex + 1]) : 8080;

Object.keys(Clients).forEach(function (key) {
    app.use('/' + Clients[key].url, express.static(Clients[key].folder));
});

app.use(function(req, res) {
    res.sendStatus(404);
});

var server = app.listen(PORT, function () {
    console.log('simple CDN started on port ' + server.address().port);
});