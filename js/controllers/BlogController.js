app.controller("BlogController", ['$scope', function ($scope) {
    $scope.articles = [
        {
            title: "Power Show Expo",
            date: new Date('2019', '00', '30'),
            content: [
                "Today we went to the <a href='https://iowapowershow.com/' target='_blank'>Iowa Power Farming Show</a> at the Iowa Events Center.",
                "We made some great contacts, and had a great oppurtunity to get our name and product out there!",
            ], //a new item adds a page break
            img: "imgs/blog/powerShow.jpg",
        },
        {
            title: "First Order!",
            date: new Date('2018', '06', '18'),
            content: [
                "Today we got our first order of 100 Stationary Calf Pacifiers put together.",
                "We are very excited and hope to get them in the hands of farmers very soon!",
                "",
                "We are now accepting online orders, so head on over to our <a href='products.html'>Products</a> page to order yours now!",
            ], //a new item adds a page break
            img: "imgs/blog/firstBatch.jpg",
        },
        {
            title: "Pitch Competition",
            date: new Date('2018', '03', '19'),
            content: [
                "We recently entered in the Ames Seed Capital Pitch Competition, a competition in which companies promote their idea in front of a panel of judges, with the grand prize being $1,500.",
                "We had a great time, and at the end of the day took home the big check! It was such a great experience and we are very thankful for the opportunity (and the prize ;) )",
            ], //a new item adds a page break
            img: "imgs/blog/pitchCompetition.jpg",
        },
        {
            title: "Introducing the Calf Pacifier",
            date: new Date('2018', '00', '01'),
            content: [
                "We at Crown Innovations are happy to introduce today our Calf Pacifier! (Learn more <a href='products.html'>here</a>)",
                "",
                "At left you can see Carlee and Holly Zahurones' calf with our <a href='productpage.html?product=2'>Mobile Calf Pacifier</a>.",
                "We think she likes it, don't you?",
            ], //a new item adds a page break
            img: "imgs/calfWithPacifier.jpg",
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
