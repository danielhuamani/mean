"use strict";
angular.module('usuario')
	.controller('UsuarioCtrl', UsuarioCtrl);

	function UsuarioCtrl(){
		var me = this;
		me.mensaje = "Hola Daniel";
	}
