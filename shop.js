
// ============================
// Get HTML Elements
// ============================

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".categories button");

// ============================
// Page State
// ============================

let currentSearch = "";
let currentCategory = "All";

// ============================
// Display Products
// ============================

function displayProducts(productsArray) {

    productsContainer.innerHTML = "";

    for (let i = 0; i < productsArray.length; i++) {

        const p = productsArray[i];

        productsContainer.innerHTML += `

        <div class="pro" onclick="window.location.href='singleProduct.html?id=${p.id}'">

            <img src="${p.image}" alt="">

            <div class="des">

                <span>${p.brand}</span>

                <h5>${p.name}</h5>

                <div class="star">

                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>

                </div>

                <h4>$${p.price}</h4>

            </div>

            <a href="#" onclick="event.preventDefault(); event.stopPropagation(); addToCart({id:${p.id}, name:'${p.name.replace(/'/g, "\\'")}', price:${p.price}, image:'${p.image}', brand:'${p.brand.replace(/'/g, "\\'")}', size:'', quantity:1}); showCartToast('${p.name.replace(/'/g, "\\'")}');">
                <i class="fa-solid fa-cart-shopping cart"></i>
            </a>

        </div>

        `;

    }

}

// ============================
// Search + Category Filter
// ============================

function updateProducts() {

    let filteredProducts = products;

    // ---------- Category ----------

    if (currentCategory != "All") {

        let temp = [];

        for (let i = 0; i < filteredProducts.length; i++) {

            if (filteredProducts[i].category == currentCategory) {

                temp.push(filteredProducts[i]);

            }

        }

        filteredProducts = temp;

    }

    // ---------- Search ----------

    if (currentSearch != "") {

        let temp = [];

        for (let i = 0; i < filteredProducts.length; i++) {

            if (
                filteredProducts[i].name
                    .toLowerCase()
                    .includes(currentSearch.toLowerCase())
            ) {

                temp.push(filteredProducts[i]);

            }

        }

        filteredProducts = temp;

    }

    displayProducts(filteredProducts);

}

// ============================
// Search Event
// ============================

searchInput.addEventListener("keyup", function () {

    currentSearch = searchInput.value;

    updateProducts();

});

// ============================
// Category Events
// ============================

for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].addEventListener("click", function () {

        currentCategory = this.dataset.category;

        // Active Button

        for (let j = 0; j < categoryButtons.length; j++) {

            categoryButtons[j].classList.remove("active");

        }

        this.classList.add("active");

        updateProducts();

    });

}

// ============================
// First Load
// ============================

updateProducts();