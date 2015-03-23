'use strict';

angular.module('mInicioDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inicioDoctor/:id', {
    templateUrl: 'cInicioDoctor/inicioDoctor.html',
    controller: 'inicioDoctorCont'
  });
}])

.controller('inicioDoctorCont', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
        $scope.id=$routeParams.id;
        console.log('Este es el id del doctor: '+$scope.id);
        $http.get('http://neuromed.herokuapp.com/api/doctor/'+$scope.id+'/pacientes').then(function(resp) {
            console.log('Success', resp);
            $scope.medicos=resp.data;
            // For JSON responses, resp.data contains the result
        });
        $scope.imagenD='http://www.fancyicons.com/free-icons/101/diamond-medical/png/256/patient_256.png';
        $scope.paciente=function(input){
            window.top.location="#/vistaPaciente/"+input;
            console.log(input);
        };
}]);