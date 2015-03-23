'use strict';

angular.module('mVistaPaciente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vistaPaciente/:idPaciente', {
    templateUrl: 'cVistaPaciente/vistaPaciente.html',
    controller: 'vistaPacienteCont'
  });
}])

.controller('vistaPacienteCont', ['$scope','$http','$routeParams',
        function($scope,$http,$routeParams) {
        $scope.idPaciente=$routeParams.idPaciente;
        $scope.fecha='';
        $scope.comentario='';
        $http.get('http://neuromed.herokuapp.com/api/paciente/'+$scope.idPaciente).then(function(resp) {
            console.log('Success', resp);
            $scope.paciente=resp.data;
            // For JSON responses, resp.data contains the result
        });

            $scope.config = {
                title: 'Products',
                tooltips: true,
                labels: false,
                mouseover: function() {},
                mouseout: function() {},
                click: function() {},
                legend: {
                    display: true,
                    //could be 'left, right'
                    position: 'right'
                }
            };

            $scope.comentar = function(id,comentario){
                console.log("Este es el id: "+id);
                console.log("Este es el comentario: "+comentario);
            }

            $scope.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                    x: "Laptops",
                    y: [100, 500, 0],
                    tooltip: "this is tooltip"
                }, {
                    x: "Desktops",
                    y: [300, 100, 100]
                }, {
                    x: "Mobiles",
                    y: [351]
                }, {
                    x: "Tablets",
                    y: [54, 0, 879]
                }]
            };
}]);

