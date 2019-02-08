app.controller("BlogController", ['$scope', function($scope){
    $scope.articles = [
        {
            name: "First Blog Post",
            date: new Date('2018', '01', '08'),
            content: "blog1.html",
        },
    ];
    for(var i = 0; i < $scope.articles.length; i++){
        var article = $scope.articles[i];
        article.content = "../../blogContent/"+article.content;
    }
}]);