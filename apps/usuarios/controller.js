"use strict";

var express = require("express"),
	router = express.Router();

router.route("/listado")
	.get(function(req, res){
		var head = "USUARIOS";
		res.render("usuarios/usuario_listado.html", {head:head})
	});

module.exports = router;
