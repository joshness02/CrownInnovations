app.directive("menuItem", function(){
    return {
        restrict: 'E',
        scope: {
            info: '=',
        },
        templateUrl: 'js/directives/MenuDirective.html',
    };
});

var buttons = document.getElementsByClassName("nav-button");
for(var i = 0; i < buttons.length; i+=1){
    buttons[i].addEventListener("click", buttons[i].info);
}
