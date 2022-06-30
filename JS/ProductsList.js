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

let productsList = JSON.parse(localStorage.getItem("display"));
let containerParent = document.getElementById("products");

function createProduct(product) {
    let containerChild = document.createElement("div");
    containerChild.setAttribute("class", "product");
    containerParent.appendChild(containerChild);

    let avatar = document.createElement("img");
    avatar.setAttribute("src", product.Avatar);
    avatar.setAttribute("class", "avatar");
    containerChild.appendChild(avatar);

    let details = document.createElement("div");
    details.setAttribute("class", "details");
    containerChild.appendChild(details);

    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.textContent = product.CoffeeType;
    details.appendChild(category);

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = `${product.Price} ${product.Currency}`;
    details.appendChild(price);

    let cart = document.createElement("div");
    cart.setAttribute("class", "cart");
    containerChild.appendChild(cart);

    let viewDetails = document.createElement("button");
    viewDetails.setAttribute("class", "button", "btn1");
    cart.appendChild(viewDetails);
    let link = document.createElement("a");
    link.setAttribute("href", "../HTML/Product.html");
    link.setAttribute("id", `viewDetailsPage${productsList.indexOf(product)}`);
    link.addEventListener("click", function() {
        localStorage.setItem("productDetails", JSON.stringify(product));
    });
    link.textContent = "view details";
    viewDetails.appendChild(link);

    let addToCart = document.createElement("button");
    addToCart.setAttribute("class", "button");
    addToCart.setAttribute("id", `cartPage${productsList.indexOf(product)}`);
    addToCart.addEventListener("click", function() {
        // salvam fiecare element in LocalStorage pt a face display la elemente in Cart si a finaliza comanda 
        let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
        let update = [];
        update.push(product, 1);
        if(cartProducts.length > 0) {
          // variabila de control 
          let wasCartProductsUpdated = false;
          cartProducts.forEach(element => {
            if(element[0].Id === update[0].Id) {
              // console.log("se repeta");
              // console.log(`Local Storage: ${element[1]} Update: ${update[1]} Suma lor: ${element[1]+update[1]}`);
              wasCartProductsUpdated = true;
              if(element[1]+update[1] < 6) {
                element[1] += update[1];
              } else {
                alert("No more than 5 products!");
              }
            }
          });
          if(wasCartProductsUpdated === false) {
            cartProducts.push(update);
          }
        } else {
         cartProducts.push(update);
        }
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    });
    addToCart.textContent = "add to cart";
    cart.appendChild(addToCart);
}

for(let i = 0; i < productsList.length; i++) {
    createProduct(productsList[i]);
}

// Sectiunea de filtrare
