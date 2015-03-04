
"use strict";

let promiseController = function configurePromiseControler() {
  var promiseCount = 0;

  var clickButton = () => {
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

  this.click = clickButton;
  this.count = 0;
  this.greeting = "promise Angular!";
  this.test = "";
};

let args = [
  promiseController
];

args.name = "PromiseController";

export default args;

