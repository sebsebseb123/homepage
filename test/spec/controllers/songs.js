'use strict';

describe('Controller: SongsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('sebsebseb123comApp'));

  var SongsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongsctrlCtrl = $controller('SongsctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
