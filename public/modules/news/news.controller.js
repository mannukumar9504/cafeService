/**
     * this home page Controller
     */
    app.controller('newsCtrl', function($scope,$rootScope){
        $scope.name = 'mannu';
        /**
         * call to active nav tab
         */
        $rootScope.activeModule('news');
    
    });