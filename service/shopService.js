(function(){
    
    var app = angular.module('shopApp');
    
    app.service('shopService', function($http){
        
        var baseUrl = 'https://practiceapi.devmountain.com/products';
        
        this.getData = function(){
            
            return $http({
                method: 'GET',
                url: baseUrl
            })
                    .then(function(response){
                        return response.data;
            });
        };
        
    });
    
}());

