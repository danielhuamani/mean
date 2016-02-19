"use strict";

var express = require('express'),
    server = express(),
    swig = require('swig'),
    port = process.env.PORT || 8000;

// configuracion de SWIG -> template
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// configuracion static

server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
    console.log("corriendo en el puerto " + port);
})
