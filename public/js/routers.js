/**
 *
 * Application Router configuration using UI-ROUTER
 *
 */

(function(){

  'use strict';

  var dependency = [
    'app',
    'controllers/homeController',
    'controllers/aboutController'
  ]

  define(dependency, function(app) {

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'partials/home.html',
            controller:'HomeController',
            controllerAs: 'home'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'partials/about.html',
            controller:'AboutController',
            controllerAs: 'about'
        })
    });

  });

}());
