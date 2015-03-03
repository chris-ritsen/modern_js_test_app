
"use strict";

let promiseController = function configurePromiseControler($location, $route, $routeParams, $scope) {
  $scope.greeting = "promise Angular!";

  this.$location = $location;
  this.$route = $route;
  this.$routeParams = $routeParams;
  $scope.count = 0;
  let promiseCount = 0;

  $scope.click = function testClick() {

    function testPromise() {
      var thisPromiseCount = ++promiseCount;

      var p1 = new Promise(function(resolve, reject) {
        console.log(thisPromiseCount + ") Promise started (Async code started)");
        window.setTimeout(function() {
          resolve(thisPromiseCount);
        }, Math.random() * 2000 + 3000);
      });

      p1.then(function(val) {
        console.log(val + ") Promise fulfilled (Async code terminated)");
      });

      console.log(thisPromiseCount + ") Promise made (Sync code terminated)");
    }

    testPromise();
    $scope.test = "testing!";
    console.log("testing click! " + JSON.stringify($scope.count));
    $scope.count++;
  };
};

let args = [
  "$location",
  "$route",
  "$routeParams",
  "$scope",
  promiseController
];

args.name = "PromiseController";

export default args;

