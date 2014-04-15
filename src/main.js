// An example entry point for the application.
require(['myModule', '_'], function (myModule, _) {
  console.log(myModule.speak());
  _.each([1, 2, 3], _.bind(console.log, console));
});
