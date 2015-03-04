
"use strict";

let helloController = function configureHelloControler($location, $route, $routeParams) {
  this.greeting = "Hello Angular!";
  this.$location = $location;
  this.$route = $route;
  this.$routeParams = $routeParams;

};

let args = [
  "$location",
  "$route",
  "$routeParams",
  helloController
];

args.name = "HelloController";

export default args;

