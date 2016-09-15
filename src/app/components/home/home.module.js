// home.module.js

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', HomeComponent)

.name; // name(string) is the module name

export default homeModule;