'use strict';

angular.module('yoAngularIonicApp')
  .controller('PetDetailCtrl', [
    '$scope',
    '$stateParams',
    'petService',
    function ($scope, $stateParams, petService) {
      $scope.pet = petService.get($stateParams.petId);
    }
  ]);