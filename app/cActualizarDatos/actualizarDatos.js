'use strict';

angular.module('mActualizarDatos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/actualizarDatos', {
    templateUrl: 'cActualizarDatos/actualizarDatos.html',
    controller: 'actualizarCont'
  });
}])

.controller('actualizarCont', ['$scope','$window','$http' ,function($scope,$window,$http) {

        $http.get('http://neuromed.herokuapp.com/api/doctor/2').then(function(resp) {
            console.log('Success', resp);
            $scope.medico=resp.data;
            // For JSON responses, resp.data contains the result
        });

        $scope.update=function(user){
            /*if(user.mail==null || user.contrasenia==null){
                $window.alert("Introduzca los datos completos")
            }else{
                var mail=user.mail;
                var contrasenia=user.contrasenia;
                var json=[
                    {
                        "email": "juansito@correo.com",
                        "password": "12345"
                    }
                ];
                var res =$http.post('http://neuromed.herokuapp.com/api/usuario/autenticar',json);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                    console.log(data);
                });
                console.log($scope.message);
                //Hago post
                var usuario=2;//ahi va guardado el post
                if(usuario!=null){
                    window.top.location="#/inicioDoctor";
                }
            }*/
            window.top.location="#/inicioDoctor";
        };
}]);