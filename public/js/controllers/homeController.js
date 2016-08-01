/**
 *
 * HomeController  - Controller definition for Home page
 *
 */

(function(){

  'use strict';

  // Dependency files for HomeController
  var dependency = [
    "app",
    "constants",
    "../services/githubService"
  ];

  define(dependency, function(app){

    function HomeController(GithubService, APP_CONFIG){
      var home = this, defaultUsername = APP_CONFIG.defaultUser;

      // variable declared for Memoization
      var memoize = {};

      // Event listner for form submit
      home.getUserData = function(username){
        if(!username){
          home.error = true;
          home.message = APP_CONFIG.error.emptyuser;
          return;
        }
        UserData(username);
      };
      // Load initial data with default user name
      UserData(defaultUsername);

      function UserData(username){

        // Simple Memoization utility to store the recently searched username

        // If user check for already searched github username, this utility will get data
        // from the memoize object, rather than hitting the API again

        if(memoize[username+"_data"] && memoize[username+"_repo"]){
          home.error = false;
          home.emptyrepo = false;
          home.user = memoize[username+"_data"];
          home.repo = memoize[username+"_repo"];
          return;
        }
        GithubService.GetUserDetails(username, function(err, result){
          // Throw error if Github service is down
          if(err && err.status === -1){
            home.error = true;
            home.message = APP_CONFIG.error.serverError;
            return;
          }
          // Throw error if user not found
          if(err && err.status === 404){
            home.error = true;
            home.message = APP_CONFIG.error.userNotFound;
            return;
          }
          home.error = false;
          memoize[username+"_data"] = result.data;
          home.user = result.data;

          GithubService.GetRepo(username, function(err, result){
            if(!result.data.length){
              home.emptyrepo = true;
              return;
            }
            home.emptyrepo = false;
            home.repo = result.data;
            memoize[username+"_repo"] = result.data;

          });

        });

      }

    }

    HomeController.$inject = ["GithubService", "APP_CONFIG"];

    app.controller("HomeController", HomeController);

  });

}());
