"use strict";

var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    swig = require('swig'),
    port = process.env.PORT || 8000;

// configuracion de SWIG -> template
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

//Confiugracion de bodyParser para el mthod POST
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser());
server.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
// configuracion static
server.use(express.static(__dirname + '/public'));
//passport
require("./config/passport")(server)

/*rutas*/
server.use(function(req, res, next){
	console.log("entroooo")
	console.log(req.user)
	server.locals.user = req.user;
	next();
});

require("./routers/rutas")(server);

server.listen(port, function(){
    console.log("corriendo en el puerto " + port);
});

