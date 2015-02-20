
import angular from 'angular';
import lodash from 'lodash';
import ngRoute from 'angular-route';

export function bootstrap() {

  // console.log(lodash.chunk(['a', 'b', 'c', 'd'], 2));
  // console.log(underscore, lodash, $, angular);

  var myApp;
  const APP_NAME = 'testApp';

  var bootstrapConfig = [
    APP_NAME
  ];

  var appModules = [
    'ngRoute'
  ];

  (function initApp(modules) {

    var appRouter = function appRouter($locationProvider, $routeProvider) {

      $routeProvider.when('/', {
        'controller': 'MainController',
        'controllerAs': 'main',
        'templateUrl': "views/main.html"
      });

      $routeProvider.when('/hello', {
        'controller': 'HelloController',
        'controllerAs': 'hello',
        'templateUrl': "views/hello.html"
      });

      (function configureLocationProvider() {
        var html5ModeOptions = {
          'enabled': true,
          'requireBase': false
        };

        $locationProvider.html5Mode(html5ModeOptions);
      })();
    };

    var appRouteConfig = [
      '$locationProvider',
      '$routeProvider',
      appRouter
    ];

    myApp = angular.module(APP_NAME, modules)
    myApp.config(appRouteConfig);

  })(appModules);

  (function initControllers(app) {

    var helloController = function configureHelloControler($location, $route, $routeParams, $scope) {
      $scope.greeting = 'Hello Angular!';

      this.$location = $location;
      this.$route = $route;
      this.$routeParams = $routeParams;

      $scope.click = function testClick() {
        $scope.test = "testing!";
      };
    };

    var helloControllerArguments = [
      '$location',
      '$route',
      '$routeParams',
      '$scope',
      helloController
    ];

    app.controller('HelloController', helloControllerArguments);

  })(myApp);

  (function initAngular(config) {

    var angularBootstrap = function angularBootstrap() {
      angular.bootstrap(document, bootstrapConfig);
    };

    angular.element(document).ready(angularBootstrap);

  })(bootstrapConfig);

};

