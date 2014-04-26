
define('myHelperModule',[], function(){
  return {
    saySomething: function () {
      return "Hello";
    }
  }
});

define('myModule',['myHelperModule'], function(myHelperModule){
  return {
    speak: function () {
      return myHelperModule.saySomething();
    }
  };
});
