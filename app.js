(function(){
    
    var app = angular.module('shopApp', ['ui.router']);
    
    app.config(function($stateProvider){
        
        
        
        $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'views/home.html'
        })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html'
        })
                .state('shop', {
                    url: '/shop',
                    templateUrl: 'views/shop.html',
                    controller: 'shopCtrl',
                    resolve: {
                        items: function(shopService) {
                            return shopService.getData();
                        }
                    }
        })
                .state('details', {
                    url: '/details:id',
                    templateUrl: 'views/product-details.html',
                    controller: 'productDetailsCtrl',
                    resolve: {
                        items: function(shopService) {
                            return shopService.getData();
                        }
                    }
        });
        
        
    });
    

    
}());

