"use strict";
angular.module('usuario')
	.controller('MainCtrl', MainCtrl);

	function MainCtrl(){
		var me = this;
		me.mensaje = "Hola Daniel";
	}

