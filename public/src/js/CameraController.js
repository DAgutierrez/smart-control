'use strict';

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.camera", [
    ngRoute
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/camera', {
    templateUrl : 'templates/camera/index.html',
    controller  : 'CameraController'
  });
}])

.controller('CameraController', ['$scope', '$http', function($scope, $http) {

  /**** CONTROL CAMERA ****/

  // left
  var left = function () {
    console.log('here!!!');

    $http({
      method: 'POST',
      url: '/camera/control-left'
    }).then(function successCallback(response) {
      console.log(response);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    // $http.post('/camera/control-left', {
    // })
    // .success(function(data) {
    //   console.log(data);
    // })
    // .error(function(data) {
    //    console.log(data);
    // });
  }

  //left stop
  var leftStop = function () {

    $http.post('/camera/control-left-stop', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

  //right
  var right = function () {

    $http.post('/camera/control-right', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

  var rightStop = function () {

    $http.post('/camera/control-right-stop', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

    //up
  var up = function () {

    $http.post('/camera/control-up', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

  var upStop = function () {

    $http.post('/camera/control-up-stop', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

    //down
  var down = function () {

    $http.post('/camera/control-down', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

  var downStop = function () {

    $http.post('/camera/control-down-stop', {})
    .success(function(data) {

    })
    .error(function(data) {
       console.log(data);
    });
  }

  $scope.control = {
    left: left,
    leftStop: leftStop,
    right: right,
    rightStop: rightStop,
    up: up,
    upStop: upStop,
    down: down,
    downStop: downStop
  }


}]);
