'use strict';

angular.module('mRegistrarDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registrarse', {
    templateUrl: 'cRegistrarDoctor/registrarDoctor.html',
    controller: 'registrarCont'
  });
}])

.controller('registrarCont', ['$scope','$window','$http' ,function($scope,$window,$http) {





            $scope.edit = true;
            $scope.error = false;
            $scope.incomplete = true;

            $scope.nombre='';
            $scope.apellido='';
            $scope.ident='';
            $scope.mail='';
            $scope.fechaNacimiento='';
            $scope.contrasenia='';
            $scope.reptContrasenia='';

            $scope.$watch('nombre',function() {$scope.test();});
            $scope.$watch('apellido',function() {$scope.test();});
            $scope.$watch('ident',function() {$scope.test();});
            $scope.$watch('mail',function() {$scope.test();});
            $scope.$watch('fechaNacimiento',function() {$scope.test();});
            $scope.$watch('contrasenia',function() {$scope.test();});
            $scope.$watch('reptContrasenia',function() {$scope.test();});


            $scope.test = function(){
                if ($scope.contrasenia !== $scope.reptContrasenia) {
                    $scope.error = true;
                } else {
                    $scope.error = false;
                }
                $scope.incomplete = false;
                if ($scope.edit && (!$scope.nombre.length ||
                    !$scope.apellido.length ||
                    !$scope.ident.length || !$scope.mail.length
                    || !$scope.fechaNacimiento.length
                    || !$scope.contrasenia.length || !$scope.reptContrasenia.length)) {
                    $scope.incomplete = true;
                }
            };

            $scope.registrar=function(){

                var json=[
                    {
                        "nombre": $scope.nombre,
                        "apellido": $scope.apellido,
                        "password": $scope.contrasenia,
                        "genero": 1,
                        "identificacion": $scope.ident,
                        "email": $scope.mail,
                        "fechaNacimiento": $scope.fechaNacimiento
                    }
                ];
                console.log(json);
                var res =$http.post('http://neuromed.herokuapp.com/api/doctor',json);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                    //console.log(data);
                });
                console.log($scope.message);
                //Hago post
                var usuario=2;//ahi va guardado el post
                if(usuario!=null){
                    window.top.location="#/inicioDoctor";
                }
            }

            /*if(user.nombre==="" || user.apellido==="" || user.ident==="" || user.mail===""  || user.fechaNacimiento===""
            || user.contrasenia==="" || user.reptContrasenia===""){
                $window.alert("Complete todos los datos");

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




}]);