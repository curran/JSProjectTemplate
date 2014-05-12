define(['./myHelperModule'], function(myHelperModule){
  return {
    speak: function () {
      return myHelperModule.saySomething();
    }
  };
});
