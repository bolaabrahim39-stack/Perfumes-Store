// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = function () {
//     MainImg.src = smallimg[0].src;
// }
// smallimg[1].onclick = function () {
//     MainImg.src = smallimg[1].src;
// }
// smallimg[2].onclick = function () {
//     MainImg.src = smallimg[2].src;
// }
// smallimg[3].onclick = function () {
//     MainImg.src = smallimg[3].src;
// }

// =====================
// Get HTML Elements
// =====================

const mainImg = document.getElementById("MainImg");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productDescription");

// =====================
// Get Product ID
// =====================

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));



// =====================
// Search For Product
// =====================

let selectedProduct = null;

for (let i = 0; i < products.length; i++) {

    if (products[i].id === productId) {

        selectedProduct = products[i];
        break;

    }

}

// =====================
// If Product Found
// =====================

if (selectedProduct != null) {

    mainImg.src = selectedProduct.image;

    productName.innerHTML = selectedProduct.name;

    productPrice.innerHTML = "$" + selectedProduct.price;

    productCategory.innerHTML =
        "Home / " + selectedProduct.category;

    productDescription.innerHTML =
        selectedProduct.description;

}
else {

    document.body.innerHTML =
        "<h1 style='text-align:center;margin-top:100px;'>Product Not Found</h1>";

}


const addToCartBtn = document.getElementById("addToCartBtn");
const productQuantity = document.getElementById("productQuantity");



addToCartBtn.addEventListener("click", function () {

    const quantity = Number(productQuantity.value);

    if (!quantity || quantity < 1) {
        alert("Please choose a valid quantity.");
        return;
    }

    const cartItem = {

        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        brand: selectedProduct.brand,
        quantity: quantity

    };

    addToCart(cartItem);
    showCartToast(selectedProduct.name);

});