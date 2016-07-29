/**
 *
 */

(function(){

  'use strict';
  
  var dependency = [
    "app",
    "../config/config"
  ]

  require(dependency, function(app){
    app.constant("APP_CONFIG", AppConfig);
  })

}());
