/**
 * Created by diego_gutierrez on 26/3/16.
 */

"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.home", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/home", {
    templateUrl : "templates/home/index.html",
    controller  : "HomeController"
  });

}])

.controller("HomeController", function ($scope) {

});
