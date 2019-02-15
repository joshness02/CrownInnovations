app.directive("menuItem", function(){
    return {
        restrict: 'E',
        scope: {
            info: '=',
        },
        templateUrl: 'js/directives/MenuDirective.html',
    };
});

