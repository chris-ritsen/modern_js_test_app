
"use strict";

import angular from "angular";
import lodash from "lodash";
import ngRoute from "angular-route";

import controllers from "lib/controllers/index";
import routes from "lib/routes";

export function bootstrap() {

  let myApp;
  const APP_NAME = "testApp";

  let bootstrapConfig = [
    APP_NAME
  ];

  let appModules = [
    "ngRoute"
  ];

  (function initApp(modules) {
    let appRouter = function appRouter($locationProvider, $routeProvider) {
      Object.keys(routes).forEach(function(route) {
        // TODO: Ensure that the route object is what it appears to be.
        $routeProvider.when(route, routes[route]);
      });

      (function configureLocationProvider() {
        let html5ModeOptions = {
          "enabled": true, "requireBase": false
        };

        $locationProvider.html5Mode(html5ModeOptions);
      })();
    };

    let appRouteConfig = [
      "$locationProvider",
      "$routeProvider",
      appRouter
    ];

    myApp = angular.module(APP_NAME, modules);
    myApp.config(appRouteConfig);
  })(appModules);

  (function initControllers(app) {
    controllers.forEach(function(controller) {
      // TODO: Can probably build this from the routes alone.
      app.controller(controller.name, controller);
    });
  })(myApp);

  (function initAngular(config) {
    let angularBootstrap = function angularBootstrap() {
      angular.bootstrap(document, bootstrapConfig);
    };

    angular.element(document).ready(angularBootstrap);
  })(bootstrapConfig);

}

