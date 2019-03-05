(function(){
    var navbtn = document.getElementById("navbar-dropdown-btn");
    var navmenu = document.getElementById("navbar-btns");
    navbtn.addEventListener("click", function(event){
        console.log("Clicked");
        if(navmenu.classList){
            navmenu.classList.toggle("active");
            console.log(navmenu.classList);
        }else{
            var classes = navmenu.className.split(" ");
            var i = classes.indexOf("active");
            
            if(i >= 0){
                classes.splice(i, 1);
            }else{
                classes.push("active");
                navmenu.className = classes.join(" ");
            }
        }
    });
})();