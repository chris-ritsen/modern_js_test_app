
"use strict";

let helloController = function configureHelloControler($location, $route, $routeParams, $scope) {
  $scope.greeting = "Hello Angular!";

  this.$location = $location;
  this.$route = $route;
  this.$routeParams = $routeParams;

};

let args = [
  "$location",
  "$route",
  "$routeParams",
  "$scope",
  helloController
];

args.name = "HelloController";

export default args;

