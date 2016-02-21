"use strict";

var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    port = process.env.PORT || 8000;

// configuracion de SWIG -> template
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

//Confiugracion de bodyParser para el mthod POST
server.use(bodyParser.urlencoded({ extended: false }))

// configuracion static
server.use(express.static(__dirname + '/public'));


/*rutas*/

require("./routers/rutas")(server);

server.listen(port, function(){
    console.log("corriendo en el puerto " + port);
})
