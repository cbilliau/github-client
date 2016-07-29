(function(){

  'use strict';

  var dependency = [
    "app",
    "constants",
    "../services/github.service"
  ];

  define(dependency, function(app){

    function HomeController(GithubService, APP_CONFIG){
      var home = this;



      GithubService.GetUserDetails('manikandn', function(err, result){
        home.user = result.data
      });
    }

    HomeController.$inject = ["GithubService", "APP_CONFIG"];

    app.controller("HomeController", HomeController);

  });

}());
