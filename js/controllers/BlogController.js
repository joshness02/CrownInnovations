app.controller("BlogController", ['$scope', function ($scope) {
    $scope.articles = [
        {
            title: "First Order!",
            date: new Date('2018', '06', '18'),
            content: "firstOrder.html",
            img: "../imgs/firstBatch.png",
        },
    ];
    $scope.articles.sort(function(a, b) {
        a = a.date;
        b = b.date;
        return a>b ? -1 : a<b ? 1 : 0;
    });
    for (var i = 0; i < $scope.articles.length; i++) {
        var article = $scope.articles[i];
        $scope.articles[i].content = "blogContent/" + article.content;
    }
}]);
