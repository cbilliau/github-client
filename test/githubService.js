
function GithubService($http, APP_CONFIG){
  var obj = {},
    apikey = "client_id="+APP_CONFIG.client_id+"&client_secret="+APP_CONFIG.client_secret;
  // Get repo list from GitHub

  obj.GetRepo = function(username, callback){
    var RepoEndPoint = APP_CONFIG.enpoint+username+'/repos'+"?per_page="+APP_CONFIG.repoCount+"&"+apikey;
    return $http.get(RepoEndPoint).then(function(data){
      // callback method inspired from Node.js with error as first argument and success as sesond argument
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

module.exports = GithubService;
