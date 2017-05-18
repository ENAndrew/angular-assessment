(function(){
    
    var app = angular.module('shopApp');
    
     app.controller('productDetailsCtrl', function($scope, $stateParams, items){
        
        var items = items;
        
        var oneId = $stateParams.id;
       
        
        for(i=0; i < items.length; i++){
            for(var key in items[i]){
                var thisId = items[i].id;
                if(thisId === oneId){
                    $scope.oneItem = items[i];
                }
            }
        }
        
    });
    
    
}());

