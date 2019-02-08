app.directive("blogArticle", function(){
    return {
        restrict: 'E',
        scope: {
            info: '=',
        },
        templateUrl: 'js/directives/BlogDirective.html',
    };
});