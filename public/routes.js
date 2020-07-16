app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
        // Code to resolve trailing slash in html5 mode starts here
   $urlMatcherFactoryProvider.strictMode(false);
    // Code to resolve trailing slash in html5 mode ends here

    $stateProvider.state('mannu', {
        url: '/mannu',
                template: 'jshfdjhdshgjhsd yaha tak sahi hai'


    })
    }])