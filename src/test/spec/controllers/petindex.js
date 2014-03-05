'use strict';

describe('Controller: PetindexctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularIonicApp'));

  var PetindexctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PetindexctrlCtrl = $controller('PetindexctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
