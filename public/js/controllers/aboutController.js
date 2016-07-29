(function(){

  'use strict';

  var dependency = ["app"];

  define(dependency, function(app){

    function AboutController(){
      console.log("APP_CONFIG");
    }

    AboutController.$inject = [];

    app.controller("AboutController", AboutController);

  });

}());
