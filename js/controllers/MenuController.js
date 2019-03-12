app.controller("MenuController", ['$scope', function($scope){
    $scope.items = [
        {
            title: 'Home',
            link: 'index.html',
        },
        {
            title: 'About',
            link: 'about.html',
        },
        {
            title: 'Products',
            link: 'products.html',
        },
        {
            title: 'Blog',
            link: 'blog.html',
        },
        {
            title: 'Contact',
            link: 'contact.html',
        },
        {
            title: 'Resources',
            link: 'resources.html',
        },
    ];
}]);
