var requirejs = require('requirejs'),
    expect = require('chai').expect;

requirejs.config({
  baseUrl: 'dist',
  nodeRequire: require
});

describe('A suite', function() {
  // Use require.js to fetch the module
  var myModule = requirejs('myModule');

  //run tests that use the myModule object
  it('can access the AMD module', function() {
    expect(myModule.speak()).to.equal('Hello');
  });
});
