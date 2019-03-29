function clickProduct(el){
    console.log(el.id);
    var idSplit = el.id.split("-");
    var productId = idSplit[1];
    document.location.href = "productpage.html?product="+productId;
}