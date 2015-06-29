var express = require('express');
var app = express();
var PORT = 8080;
var STATIC_FILES = 'www-built';

var Clients = {
    SOFTGAMES: 'bbe3b9fd-f677-4f84-ab63-fcef2e0a3e02',
    SPILGAMES: '3ea2012b-a837-40e9-a28b-f6c6670c77c0',
    BOOSTERMEDIA: '276f9b71-bdb5-42bc-960f-48b2f9edf93d',
    FANMOBI: 'f68c6d22-b19d-436d-a81d-d003ea866e2f'
};

app.get('/stats', function (req, res) {
    res.send('stats not implemented yet');
});

Object.keys(Clients).forEach(function (key) {
    app.use('/' + Clients[key], express.static(STATIC_FILES));
});

app.listen(PORT);
console.log('simple CDN started on port ' + PORT);