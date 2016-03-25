"use strict";

var usuario = angular.module('usuario', ['ui.router'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%=');
	$interpolateProvider.endSymbol('%>');
});


usuario.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("bienvenido", {
			url: '/',
			templateUrl: "apps/main/bienvenido.html",
			controller: "MainCtrl as main"
		})
		.state("usuarios", {
			url: '/usuarios',
			templateUrl: "apps/usuario/usuarios_listado.html",
			controller: "UsuarioCtrl as user"
		})
		.state("usuarioscrear", {
			url: '/usuarios-crear',
			templateUrl: "apps/usuario/usuarios_crear.html",
			controller: "UsuarioCtrl as usercrear"
		})
})
