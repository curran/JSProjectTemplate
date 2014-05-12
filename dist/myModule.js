
define('myModule/myHelperModule',[], function(){
  return {
    saySomething: function () {
      return "Hello";
    }
  };
});

define('myModule/myModule',['./myHelperModule'], function(myHelperModule){
  return {
    speak: function () {
      return myHelperModule.saySomething();
    }
  };
});

define('myModule', ['myModule/myModule'], function (main) { return main; });
