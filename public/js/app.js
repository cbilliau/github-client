/**
 * Application Bootstrap done here
 */

(function(){

  define(['angular', 'uiRouter'], function(angular, uiRouter) {

    var app = angular.module('githubclient', ['ui.router']);

    app.init = function () {
      angular.bootstrap(document, ['githubclient']);
    };
    return app;
  });

}());
