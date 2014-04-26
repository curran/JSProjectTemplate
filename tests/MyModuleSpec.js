var requirejs = require('requirejs'),
    expect = require('chai').expect;

requirejs.config({
  baseUrl: 'dist',
  nodeRequire: require
});

describe('A suite', function() {
  var myModule;

  // Use require.js to fetch the module
  it("should load the AMD module", function(done) {
    requirejs(['myModule'], function (loadedModule) {
      myModule = loadedModule;
      done();
    });
  });

  //run tests that use the myModule object
  it("can access the AMD module", function() {
    expect(myModule.speak()).to.equal('Hello')
  });
});
