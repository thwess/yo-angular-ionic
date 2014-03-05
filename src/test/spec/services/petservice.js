'use strict';

describe('Service: petService', function () {

  // load the service's module
  beforeEach(module('yoAngularIonicApp'));

  // instantiate service
  var petService;
  beforeEach(inject(function (_petService_) {
    petService = _petService_;
  }));

  it('should do something', function () {
    expect(!!petService).toBe(true);
  });

});
