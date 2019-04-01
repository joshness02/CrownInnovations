var params = window.location.search.substring(1).split("&");
var idx = 0;
for (var i = 0; i < params.length; i++) {
    if (params[i].startsWith("product=")) {
        idx = parseInt(params[i].substring(8));
        break;
    }
}

var product = products[idx];
var productName = document.getElementById("product-name");
productName.value = product.name;
var priceElement = document.getElementById("price");
priceElement.innerHTML = "$" + product.price.toFixed(2);
console.log(productName);

function updatePrice(el) {
    var product = products[idx];
    var totalElement = document.getElementById("total");
    var quantity = document.getElementById("quantity").value;
    var total =
        totalElement.innerHTML = "$" + (quantity * product.price).toFixed(2);
};

updatePrice();
