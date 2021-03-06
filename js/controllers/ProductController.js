var products = [
    {
        name: "Stationary Calf Pacifier for Wooden Fences",
        img: "imgs/StationaryFencePicture.png",
        description: "Great for longer periods of time when you may not be with you calf",
        about: "The Stationary Calf Pacifier can hang on most wooden and round metal fences (For other options, check out our Stationary Calf Pacifier Wrap Around). It is very durable, so it can be left with the calves when you are away. The nipple is removable for washing. It is also sealed so the calf does not get indigestion.<br>The bracket has a hole in the back, so you can secure it to a fence with a nail, twine, or other material.",
        price: 20,
        available: "Order Now!",
        canOrder: true,
    },
    {
        name: "Stationary Calf Pacifier Wrap Around",
        img: "imgs/StationaryWrapAroundPicture.jpg",
        description: "Can be easily secured anywhere you need it",
        about: "The Stationary Calf Pacifier Wrap Around is designed with adaption in mind, so you can secure it anywhere you need. The nipple is sealed to avoid indigestion, and removable for washing. Whether you have wire fencing, cattle panels, or wooden fences, the Stationary Calf Pacifier Wrap Around will attach securely, no problem!",
        price: 20,
        available: "Coming Soon!",
        canOrder: false,
    },
    {
        name: "Mobile Calf Pacifier",
        img: "imgs/MobilePicture.png",
        description: "Great for one-on-one time with your bottle calves",
        about: "The Mobile Calf Pacifier is great for when you are spending time with your calf. Whether you are trying to keep him occupied while you feed other calves, or just having fun with him, the Mobile Calf Pacifier is here to help. If the Pacifier is dropped on the ground, it will automatically right itself using our Patent-pending Pop-Up design, making it always available for your calves.",
        price: 15,
        available: "Coming Soon!",
        canOrder: false,
    },
];
app.controller("ProductController", ['$scope', function ($scope) {
    $scope.products = products;
    for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].index = i;
    }
}]);
