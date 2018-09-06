angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  // $locationProvider.baseHref = "/angularjs/";
  $stateProvider
  .state('app.icons', {
    url: "/angularjs/icons",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Icons'
    }
  })
  .state('app.icons.fontawesome', {
    url: '/angularjs/font-awesome',
    templateUrl: 'angularjs/src/views/icons/font-awesome.html',
    ncyBreadcrumb: {
      label: 'Font Awesome'
    }
  })
  .state('app.icons.simplelineicons', {
    url: '/angularjs/simple-line-icons',
    templateUrl: 'angularjs/src/views/icons/simple-line-icons.html',
    ncyBreadcrumb: {
      label: 'Simple Line Icons'
    }
  })
  .state('app.components', {
    url: "/angularjs/components",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  })
  .state('app.components.buttons', {
    url: '/angularjs/buttons',
    templateUrl: 'angularjs/src/views/components/buttons.html',
    ncyBreadcrumb: {
      label: 'Buttons'
    }
  })
  .state('app.components.social-buttons', {
    url: '/angularjs/social-buttons',
    templateUrl: 'angularjs/src/views/components/social-buttons.html',
    ncyBreadcrumb: {
      label: 'Social Buttons'
    }
  })
  .state('app.components.cards', {
    url: '/angularjs/cards',
    templateUrl: 'angularjs/src/views/components/cards.html',
    ncyBreadcrumb: {
      label: 'Cards'
    }
  })
  .state('app.components.forms', {
    url: '/angularjs/forms',
    templateUrl: 'angularjs/src/views/components/forms.html',
    ncyBreadcrumb: {
      label: 'Forms'
    }
  })
  .state('app.components.switches', {
    url: '/angularjs/switches',
    templateUrl: 'angularjs/src/views/components/switches.html',
    ncyBreadcrumb: {
      label: 'Switches'
    }
  })
  .state('app.components.tables', {
    url: '/angularjs/tables',
    templateUrl: 'angularjs/src/views/components/tables.html',
    ncyBreadcrumb: {
      label: 'Tables'
    }
  })
  .state('app.widgets', {
    url: '/angularjs/widgets',
    templateUrl: 'angularjs/src/views/widgets.html',
    ncyBreadcrumb: {
      label: 'Widgets'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['angularjs/src/js/controllers/widgets.js']
        });
      }]
    }
  })
  .state('app.barcode', {
    url: '/angularjs/barcode',
    templateUrl: 'angularjs/src/views/barcode.html',
    ncyBreadcrumb: {
      label: 'Barcode'
    },
    controller: 'barcodeCtrl',
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['angularjs/src/js/controllers/barcode.js']
        });
      }]
    }
  })
  .state('app.charts', {
    url: '/angularjs/charts',
    templateUrl: 'angularjs/src/views/charts.html',
    ncyBreadcrumb: {
      label: 'Charts'
    },
    resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['angularjs/src/js/controllers/charts.js']
        });
      }]
    }
  })
}]);