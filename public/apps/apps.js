"use strict";

var usuario = angular.module('usuario', ['ngRoute', 'ngResource'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%=');
	$interpolateProvider.endSymbol('%>');
});


usuario.config(function($locationProvider, $routeProvider){
	$routeProvider
		.when('/', {
            templateUrl : 'apps/main/bienvenido.html',
            controller:   'MainCtrl',
			controllerAs: 'main'
        });

})
