angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  // if(window.location.href.toString() = "http://localhost:8080"){
  //   $locationProvider.path('/#/angularjs/login')
  // }
  // $locationProvider.baseHref = "/angularjs/";

  // $urlRouterProvider.otherwise('/angularjs/login');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'angularjs/src/views/common/layouts/full.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Root',
      skip: true
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Font Awesome',
          files: ['angularjs/plugin/font-awesome/css/font-awesome.min.css']
          // files: ['angularjs/plugin/font-awesome/css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['angularjs/plugin/simple-line-icons/css/simple-line-icons.css']
        }]);
      }],
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([{
          serie: true,
          name: 'chart.js',
          files: [
            'angularjs/plugin/Chart.min.js',
            'angularjs/plugin/angular-chart.min.js'
          ]
        }]);
      }],
    }
  })
  .state('app.main', {
    url: '/angularjs/dashboard',
    templateUrl: 'angularjs/src/views/main.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Home',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'angularjs/plugin/Chart.min.js',
              'angularjs/plugin/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['angularjs/src/js/controllers/main.js']
        });
      }]
    }
  })
  .state('appSimple', {
    abstract: true,
    templateUrl: 'angularjs/src/views/common/layouts/simple.html',
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Font Awesome',
          files: ['angularjs/plugin/font-awesome/css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['angularjs/plugin/simple-line-icons/css/simple-line-icons.css']
        }]);
      }],
    }
  })

  // Additional Pages
  .state('appSimple.login', {
    url: '/angularjs/login',
    templateUrl: 'angularjs/src/views/pages/login.html',
    controller: 'loginCtrl',
    resolve: {
      load: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['angularjs/src/js/controllers/login.js']
        });
      }]
    }
  })
  .state('appSimple.register', {
    url: '/angularjs/register',
    templateUrl: 'angularjs/src/views/pages/register.html'
  })
  .state('appSimple.404', {
    url: '/angularjs/404',
    templateUrl: 'angularjs/src/views/pages/404.html'
  })
  .state('appSimple.500', {
    url: '/angularjs/500',
    templateUrl: 'angularjs/src/views/pages/500.html'
  })
}]);
