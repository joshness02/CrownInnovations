app.controller("BlogController", ['$scope', function ($scope) {
    $scope.articles = [
        {
            title: "Power Show Expo",
            date: new Date('2018', '00', '30'),
            content: [
                "Today we went to the <a href='https://iowapowershow.com/' target='_blank'>Iowa Power Farming Show</a> at the Iowa Events Center.",
                "We made some great contacts, and had a great oppurtunity to get our name and product out there!",
            ], //a new item adds a page break
            img: "imgs/blog/powerShow.jpeg",
        },
        {
            title: "First Order!",
            date: new Date('2018', '06', '18'),
            content: [
                "Today we got our first order of 100 Stationary Calf Pacifiers put together",
                "We are very excited and hope to get them in the hands of farmers very soon!",
            ], //a new item adds a page break
            img: "imgs/blog/firstBatch.png",
        },
        {
            title: "First Order!",
            date: new Date('2018', '06', '18'),
            content: [
                "Today we got our first order of 100 Stationary Calf Pacifiers put together",
                "We are very excited and hope to get them in the hands of farmers very soon!",
            ], //a new item adds a page break
            img: "imgs/blog/firstBatch.png",
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
