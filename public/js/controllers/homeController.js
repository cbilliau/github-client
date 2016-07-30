(function(){

  'use strict';

  var dependency = [
    "app",
    "constants",
    "../services/github.service"
  ];

  define(dependency, function(app){

    function HomeController(GithubService, APP_CONFIG){
      var home = this, defaultUsername = APP_CONFIG.defaultUser;

      home.getUserData = function(username){
        if(!username){
          home.error = true;
          home.message = APP_CONFIG.error.emptyuser;
          return;
        }
        UserData(username);
      };
      // Load initial data
      UserData(defaultUsername);

      function UserData(username){
        GithubService.GetUserDetails(username, function(err, result){
          if(err && err.status === -1){
            home.error = true;
            home.message = APP_CONFIG.error.serverError;
            return;
          }
          if(err && err.status === 404){
            home.error = true;
            home.message = APP_CONFIG.error.userNotFound;
            return;
          }
          home.error = false;
          home.user = result.data;

          GithubService.GetRepo(username, function(err, result){
            if(!result.data.length){
              home.emptyrepo = true;
              return;
            }
            home.emptyrepo = false;
            home.repo = result.data;

          });

        });

      }

    }

    HomeController.$inject = ["GithubService", "APP_CONFIG"];

    app.controller("HomeController", HomeController);

  });

}());
