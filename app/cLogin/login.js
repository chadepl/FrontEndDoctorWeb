'use strict';

angular.module('mLogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'cLogin/login.html',
    controller: 'loginCont'
  });
}])

.controller('loginCont', ['$scope','$window','$http' ,function($scope,$window,$http) {



        $scope.update=function(user){
            if(user.mail==null || user.contrasenia==null){
                $window.alert("Introduzca los datos completos")
            }else{
                var mail=user.mail;
                var contrasenia=user.contrasenia;
                var json=[
                    {
                        "email": mail,
                        "password": contrasenia
                    }
                ];
                var res =$http.post('http://neuromed.herokuapp.com/api/usuario/autenticar',json);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                });
                console.log($scope.message);
                //Hago post
                var usuario=$scope.message.id;//ahi va guardado el post
                if(usuario!=null){
                    window.top.location="#/" +
                    "inicioDoctor/"+usuario;
                }
            }

        };
}]);