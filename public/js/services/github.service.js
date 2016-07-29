/**
 * GithubService - This service use to get user and repo details from the GitHub API
 */

(function(){
  'use strict';

  var dependency = [
    "app"
  ];

  define(dependency, function(app){
    console.log(app);

    function GithubService($http, APP_CONFIG){
      var obj = {};
      console.log(APP_CONFIG);
      // Get repo list from GitHub
      obj.GetRepo = function(username, callback){

        return $http.get("/api/user", {token: "token"}).then(function(data){
          // NOTE - Check funtion type
          callback(null, data);
        }, function(err){
          callback(err);
        });
      }

      // Get User details from GitHub
      obj.GetUserDetails = function(username, callback){
        var UserEndPoint = APP_CONFIG.enpoint+username
        return $http.get(UserEndPoint).then(function(data){
          callback(null, data);
        }, function(err){
          callback(err);
        });
      }
      return obj;
    }

    GithubService.$inject = ['$http', 'APP_CONFIG'];
    app.factory('GithubService', GithubService);

  });

}());
