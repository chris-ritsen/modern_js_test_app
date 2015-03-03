
"use strict";

let routes = {
  "/": {
    "templateUrl": "views/main"
  },
  "/hello": {
    "controller": "HelloController",
    "controllerAs": "hello",
    "templateUrl": "views/hello"
  },
  "/promise": {
    "controller": "PromiseController",
    "controllerAs": "promise",
    "templateUrl": "views/promise"
  }
};

Object.keys(routes).forEach(function(route) {
  routes[route]["templateUrl"] += ".html";
});

export default routes;

