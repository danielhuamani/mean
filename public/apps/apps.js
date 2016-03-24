"use strict";

var usuario = angular.module('usuario', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%=');
	$interpolateProvider.endSymbol('%>');
});


usuario.config(function($locationProvider, $routeProvider){
	$routeProvider
		.when('/', {
            templateUrl : 'apps/main/bienvenido.html',
            controller  : 'MainCtrl as main'
        });

})
