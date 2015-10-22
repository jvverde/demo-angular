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
    var editIndex = undefined;
    $http
      .get('./data/customers.json')
      .then(function(response){
        $scope.customers = response.data;    
      })
    ;
    $scope.edit = function(index){
      editIndex = index;  
    }
    $scope.editable = function(index){
      return index === editIndex;
    }
  });
