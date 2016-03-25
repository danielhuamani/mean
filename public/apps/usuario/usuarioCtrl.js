"use strict";
angular.module('usuario')
    .controller('UsuarioCtrl', function($http){
        var me = this;
        $http.get('/usuarios')
            .success(function(data) {
                me.usuarios = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        me.formData = {};
        me.createUsuario = function(){
        console.log(me.formData)
        $http.post('/usuarios', me.formData)
            .success(function(data) {
                me.formData = {};
                me.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    	};
    })


