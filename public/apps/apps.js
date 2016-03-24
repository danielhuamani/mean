"use strict";

var usuario = angular.module('usuario', ['ui.router'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%=');
	$interpolateProvider.endSymbol('%>');
});


usuario.config(function($stateProvider){
	$stateProvider
		.state("bienvenido", {
			url: '/',
			templateUrl: "apps/main/bienvenido.html",
			controller: "MainCtrl as main"
		})
})
