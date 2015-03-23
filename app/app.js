'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mVistaPaciente',
  'mInicioDoctor','mLogin',
  'myApp.version',
    'mActualizarDatos',
    'angularCharts',
    'mRegistrarDoctor'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .otherwise({redirectTo: '/login'});
}]);
