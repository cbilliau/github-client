// Require config

require.config({
    paths: {
        "angular": "vendor/angular",
        "uiRouter": "vendor/angular.ui.router"
    },
    shim: {
     angular: {
        exports : 'angular'
     },
     'uiRouter':{
        deps: ['angular']
      }
   }
});



(function(){

  'use strict';

  require(['app', 'routers', 'constants'], function (app) {
      app.init();
  });

}());
