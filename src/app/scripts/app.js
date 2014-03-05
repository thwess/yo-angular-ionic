'use strict';

angular.module('yoAngularIonicApp', [
  'ionic'
])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'views/tabs.html'
      })

      // the pet tab has its own child nav-view and history
      .state('tab.pet-index', {
        url: '/pets',
        views: {
          'pets-tab': {
            templateUrl: 'views/pet-index.html',
            controller: 'PetIndexCtrl'
          }
        }
      })

      .state('tab.pet-detail', {
        url: '/pet/:petId',
        views: {
          'pets-tab': {
            templateUrl: 'views/pet-detail.html',
            controller: 'PetDetailCtrl'
          }
        }
      })

      .state('tab.adopt', {
        url: '/adopt',
        views: {
          'adopt-tab': {
            templateUrl: 'views/adopt.html'
          }
        }
      })

      .state('tab.about', {
        url: '/about',
        views: {
          'about-tab': {
            templateUrl: 'views/about.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/pets');
    // $urlRouterProvider.otherwise({
    //   redirectTo: '/'
    // });
  });