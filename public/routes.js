app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
        // Code to resolve trailing slash in html5 mode starts here
   $urlMatcherFactoryProvider.strictMode(false);
    // Code to resolve trailing slash in html5 mode ends here

    $stateProvider.state('/home', {
        url: '/home',
                templateUrl: 'modules/home/home.html',

    })
    $stateProvider.state('/news', {
        url: '/news',
                templateUrl: 'modules/news/news.html',

    })
    $urlRouterProvider.otherwise("/home"); 
    }])