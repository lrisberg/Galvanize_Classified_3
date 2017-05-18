(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'clMain'
      })
      .state({
        name: 'edit',
        url: '/:ad_id/edit',
        component: 'clEditAd'
      });
  }
}());
