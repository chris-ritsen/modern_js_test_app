
"use strict";

let helloController = function configureHelloControler() {
  var blahFunction = function *blah(min, max) {
    for (let i = min; i < max; i++) {
      yield i;
    }
  };

  this.greeting = "Hello Angular!";
  this.blah = blahFunction;

  for (let value of this.blah(0, 10)) {
    console.log(value);
  }
};

let args = [
  helloController
];

args.name = "HelloController";

export default args;

