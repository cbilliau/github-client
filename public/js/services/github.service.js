/**
 * GithubService - This service use to get user and repo details from the GitHub API
 */

(function(){
  'use strict';

  var dependency = [
    "app"
  ];

  define(dependency, function(app){

    function GithubService($http, APP_CONFIG){
      var obj = {},
        apikey = "client_id="+APP_CONFIG.client_id+"&client_secret="+APP_CONFIG.client_secret;
      // Get repo list from GitHub
      obj.GetRepo = function(username, callback){
        var RepoEndPoint = APP_CONFIG.enpoint+username+'/repos'+"?per_page="+APP_CONFIG.repoCount+"&"+apikey;
        return $http.get(RepoEndPoint).then(function(data){
          // NOTE - Check funtion type
          callback(null, data);
        }, function(err){
          callback(err);
        });
      }

      // Get User details from GitHub
      obj.GetUserDetails = function(username, callback){
        var UserEndPoint = APP_CONFIG.enpoint+username+"?"+apikey;
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
