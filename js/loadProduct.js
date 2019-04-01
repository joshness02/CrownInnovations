(function () {
    var params = window.location.search.substring(1).split("&");
    var idx = 0;
    for (var i = 0; i < params.length; i++) {
        if (params[i].startsWith("product=")) {
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
    var price = document.getElementById("product-price");
    price.innerHTML = "$" + product.price.toFixed(2);
    var order = document.getElementById("product-order");
    order.innerHTML = product.available;
    if (product.canOrder) {
        order.href = "orderProduct.html?product=" + idx;
        order.classList.add("available");
    } else {
        order.href = "";
        order.classList.add("unavailable");
    }
})();
