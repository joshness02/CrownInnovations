app.directive("blogArticle", function () {
    return {
        restrict: 'E',
        scope: {
            article: '=',
        },
        templateUrl: 'js/directives/BlogDirective.html',
    };
});
