"use strict";
angular.module('usuario')
    .controller('UsuarioCtrl', function($http){

        var me = this;
        me.mensaje = "Hola Daniel";
        $http.get('/usuarios')
            .success(function(data) {
                me.usuarios = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    });


