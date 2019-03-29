
(function() {
    var params = window.location.search.substring(1).split("&");
    var idx = 0;
    for(var i = 0; i < params.length; i++){
        if(params[i].startsWith("product=")){
            idx = parseInt(params[i].substring(8));
            break;
        }
    }
    var product = products[idx];
    console.log(product);
    var container = document.getElementById("product-display");
    var coverPhoto = document.getElementById("cover-photo");
    coverPhoto.src = product.img;
    var about = document.getElementById("product-about");
    about.innerHTML = product.about;
    var title = document.getElementById("product-title");
    title.innerHTML = product.name;
})();