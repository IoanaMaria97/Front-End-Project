// Sectiunea de filtre
let filterBrand = document.getElementById("filterBrand");
let filterCategory = document.getElementById("filterCategory");
let filterStrength = document.getElementById("filterStrength");

let plusFilter1 = document.getElementById("plusFilter1");
let plusFilter2 = document.getElementById("plusFilter2");
let plusFilter3 = document.getElementById("plusFilter3");
let plusFilter4 = document.getElementById("plusFilter4");

function filtrare(filtru, plus) {
  if (filtru.style.display === "block") {
            filtru.style.display = "none";
            plus.textContent = "+";

        } else {
            filtru.style.display = "block";
            plus.textContent = "-";
        }
}

// Sectiunea de afisare a produselor

let productsList = JSON.parse(localStorage.getItem("productsData"));
let containerProducts = document.getElementById("products");

function createProduct(element) {
    let product = document.createElement("div");
    product.setAttribute("class", "product");
    containerProducts.appendChild(product);

    let avatar = document.createElement("img");
    avatar.setAttribute("src", element.Avatar);
    avatar.setAttribute("class", "avatar");
    product.appendChild(avatar);

    let details = document.createElement("div");
    details.setAttribute("class", "details");
    product.appendChild(details);

    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.textContent = element.CoffeeType;
    details.appendChild(category);

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = element.Price;
    details.appendChild(price);

    let cart = document.createElement("div");
    cart.setAttribute("class", "cart");
    product.appendChild(cart);

    let viewDetails = document.createElement("button");
    viewDetails.setAttribute("class", "button", "btn1");
    cart.appendChild(viewDetails);
    let link = document.createElement("a");
    link.setAttribute("href", "../HTML/Product.html");
    link.textContent = "view details";
    viewDetails.appendChild(link);

    let addToCart = document.createElement("button");
    addToCart.setAttribute("class", "button");
    addToCart.textContent = "add to cart";
    cart.appendChild(addToCart);
}

for(let i = 0; i < productsList.length; i++) {
    createProduct(productsList[i]);
}