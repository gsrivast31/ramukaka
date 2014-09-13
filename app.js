'use strict';

var routes = require('./routes/routes.js');
var express = require('express');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.favicon(__dirname + '/public/img/favicon.png'));
    //app.use(express.cookieParser());
    app.use(express.static(__dirname + '/public'));
});

app.set('view options', {
    layout: false
});

app.get('/', routes.getIndex);

app.post('/subscribe', routes.subscribeUser);

app.listen(app.get('port'), function () {
    console.log("Server listening on port " + app.get('port'));
});
