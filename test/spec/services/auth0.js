'use strict';

describe('Service: auth0', function () {

  // load the service's module
  beforeEach(module('welcomeApp'));

  // instantiate service
  var auth0;
  beforeEach(inject(function (_auth0_) {
    auth0 = _auth0_;
  }));

  it('should do something', function () {
    expect(!!auth0).toBe(true);
  });

});
