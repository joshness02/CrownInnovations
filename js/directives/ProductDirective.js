app.directive("productItem", function(){
    return {
        restrict: 'E',
        scope: {
            product: '=',
        },
        templateUrl: 'js/directives/ProductDirective.html',
    }
})