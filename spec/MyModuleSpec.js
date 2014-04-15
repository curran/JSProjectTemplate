// An example Jasmine unit test suite.
// See also http://stackoverflow.com/questions/19240302/does-jasmine-2-0-really-not-work-with-require-js/22702118#22702118
describe('A suite', function() {
  var myModule;

  // Use require.js to fetch the module
  it("should load the AMD module", function(done) {
    require(['myModule'], function (loadedModule) {
      myModule = loadedModule;
      done();
    });
  });

  //run tests that use the myModule object
  it("can access the AMD module", function() {
    expect(myModule.speak()).toBe("hello");
  });
});
