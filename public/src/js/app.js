"use strict"

require("../css/style.css");
require("angular-material/angular-material.css");

var angular    = require("angular");
var ngRoute    = require("angular-route");
var ngAnimate  = require("angular-animate");
var ngAria     = require("angular-aria");
var ngMaterial = require("angular-material");
var ngMessages = require("angular-messages");

require("./CameraController");
// require("./PirController");
require("./HomeController");

angular.module("app", [
  ngRoute,
  ngAnimate,
  ngAria,
  ngMaterial,
  ngMessages,
  'app.camera',
  'app.home'
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({ redirectTo : "/home"});
}])

// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme("default")
//     .primaryPalette("deep-purple")
//     .accentPalette("purple")
//     .warnPalette("deep-orange");
// });