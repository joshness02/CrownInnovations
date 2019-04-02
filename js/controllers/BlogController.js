app.controller("BlogController", ['$scope', function ($scope) {
    $scope.articles = [
        {
            title: "First Order!",
            date: new Date('2018', '06', '18'),
            //content: "firstOrder.html",
            content: [
                "Today we got our first order of 100 Stationary Calf Pacifiers put together",
                "We are very excited and hope to get them in the hands of farmers very soon!",
            ], //a new item adds a page break
            img: "./imgs/firstBatch.png",
        },
    ];
    $scope.articles.sort(function (a, b) {
        a = a.date;
        b = b.date;
        return a > b ? -1 : a < b ? 1 : 0;
    });
    for (var i = 0; i < $scope.articles.length; i++) {
        var article = $scope.articles[i];
        //$scope.articles[i].content = "blogContent/" + article.content;
        $scope.articles[i].content = article.content.join("<br>");
    }
}]);

app.filter('renderHTMLCorrectly', function ($sce) {
    return function (stringToParse) {
        return $sce.trustAsHtml(stringToParse);
    }
});
