(function(){

  define(['angular', 'uiRouter'], function(angular, uiRouter) {
    console.log("Load App");
    var app = angular.module('githubclient', ['ui.router']);

    app.init = function () {
      angular.bootstrap(document, ['githubclient']);
    };
    return app;
  });

}());
