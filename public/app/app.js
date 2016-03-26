angular.module('app', ['ngRoute',
  'app.home','app.pir'])


.config(['$routeProvider','$httpProvider','$locationProvider',
  function($routeProvider, $httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}])