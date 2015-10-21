'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function($scope) {
    $scope.title = 'Lista de Clientes';
    $scope.customers = [
      {
        name: 'Rita',
        amount: 120.3
      },{
        name: 'Luís',
        amount: 20
      },{
        name: 'Paula',
        amount: 76
      },{
        name: 'Helena',
        amount: 87.003
      },{
        name: 'Belmiro',
        amount: 140.05
      }
    ];
  });
