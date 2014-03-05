'use strict';

angular.module('yoAngularIonicApp')
  .controller('PetIndexCtrl', [
    '$scope',
    'petService',
    function ($scope, petService) {
      $scope.pets = petService.all();
    }
  ]);