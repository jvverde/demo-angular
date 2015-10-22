'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function($scope,$http) {
    $scope.title = 'Lista de Clientes';
    $http
      .get('./data/customers.json')
      .then(function(response){
        $scope.customers = response.data;    
      })
    ;
  });
