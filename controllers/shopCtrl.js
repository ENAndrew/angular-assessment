(function(){
    
    var app = angular.module('shopApp');
    
    app.controller('shopCtrl', function($scope, items){
        
        $scope.items = items;

        
    });
    
}());

