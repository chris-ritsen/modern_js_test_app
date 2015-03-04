
"use strict";

let promiseController = function configurePromiseControler($location, $route, $routeParams) {
  this.greeting = "promise Angular!";

  this.$location = $location;
  this.$route = $route;
  this.$routeParams = $routeParams;

  this.count = 0;
  let promiseCount = 0;
  this.test = "";

  this.click = () => {
    var testPromise = () => {
      var thisPromiseCount = ++promiseCount;

      var p1 = new Promise((resolve, reject) => {
        console.log(thisPromiseCount + ") Promise started (Async code started)");

        window.setTimeout(() => {
          resolve(thisPromiseCount);
        }, Math.random() * 2000 + 3000);
      });

      p1.then((val) => {
        console.log(val + ") Promise fulfilled (Async code terminated)");
      });

      console.log(thisPromiseCount + ") Promise made (Sync code terminated)");
    };

    testPromise();
    this.test += ` ${promiseCount}`;
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

