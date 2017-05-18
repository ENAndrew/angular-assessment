(function(){
    
    var app = angular.module('shopApp');

    
    app.directive('logo', function(){
        return{
            restrict: "E",
            templateUrl: 'views/logo.html'
        };
    });
    
}());

