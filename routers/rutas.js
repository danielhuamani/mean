"use strict"
var router_main = require("../apps/main/controller");
var router_usuarios = require("../apps/usuarios/controller");

var rutas = function(server){
	server.use('/', router_main);
	server.use('/usuarios', router_usuarios);
}

module.exports = rutas;
