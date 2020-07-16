var app = angular.module("myApp",['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
        // Code to resolve trailing slash in html5 mode starts here
   // $urlMatcherFactoryProvider.strictMode(false);
    // Code to resolve trailing slash in html5 mode ends here

    $stateProvider.state('index', {
        url: '/index',
                templateUrl: 'index.html'


    })
    }])