'use strict';

angular.module('app.pir', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sensor/pir/', {
    templateUrl : '/route/sensor/pir/',
    controller  : 'pirController'
  });
}])


.controller('pirController', ['$scope', '$http', function($scope, $http) {
  
  
  socket.on('message', function(msg){
    
    $scope.motion = {
      msg : msg
    };
    $scope.$apply();
  });


}]);
