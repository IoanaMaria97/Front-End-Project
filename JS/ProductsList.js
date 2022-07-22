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

// Right side
if(productsList.length === 0) {
  let message = document.createElement("p");
  message.textContent = "No products to show.";
  message.style.display = "flex";
  message.style.justifyContent = "center";
  message.style.alignContent = "center";
  message.style.padding = "100px";
  containerParent.appendChild(message);
}

// Sectiunea de filtrare
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

// Brand
let Nescafe = document.getElementById("filterBrand1");
let Lavazza = document.getElementById("filterBrand2");
let Starbucks = document.getElementById("filterBrand3");
let Costa = document.getElementById("filterBrand4");
let McCafe = document.getElementById("filterBrand5");

function brand(element, name) {
  for(let i = 0; i < productsList.length; i++) {
    if(productsList[i].Brand === name) {
      element.checked = true;
    }
  }
}
brand(Nescafe, "Nescafe");
brand(Lavazza, "Lavazza");
brand(Starbucks, "Starbucks");
brand(Costa, "Costa");
brand(McCafe, "McCafe");


// Category
let Basic = document.getElementById("filterCategory1");
let Signature = document.getElementById("filterCategory2");
let Flavored = document.getElementById("filterCategory3");

function category(element, name) {
  for(let i = 0; i < productsList.length; i++) {
    if(productsList[i].Category === name) {
      element.checked = true;
    }
  }
}
category(Basic, "Basic Coffee");
category(Signature, "Signature Coffee");
category(Flavored, "Flavored Coffee");

// Type
let Expresso = document.getElementById("filterTypes1");
let Cappuccino = document.getElementById("filterTypes2");
let Latte = document.getElementById("filterTypes3");
let Almond = document.getElementById("filterTypes4");
let ColdBrew = document.getElementById("filterTypes5");
let Lavender = document.getElementById("filterTypes6");
let Vanilla = document.getElementById("filterTypes7");
let CaramelM = document.getElementById("filterTypes8");
let CaramelF = document.getElementById("filterTypes9");

function type(element, name) {
  for(let i = 0; i < productsList.length; i++) {
    if(productsList[i].CoffeeType === name) {
      element.checked = true;
    }
  }
}
type(Expresso, "Expresso");
type(Cappuccino, "Cappuccino");
type(Latte, "Coffee Latte");
type(Almond, "Almond Latte");
type(ColdBrew, "Cold Brew Coffee");
type(Lavender, "Lavender Cappuccino");
type(Vanilla, "Vanilla Latte");
type(CaramelM, "Caramel Macchiato");
type(CaramelF, "Caramel Frappucino");


// Strength
let light = document.getElementById("filterStrength1");
let medium = document.getElementById("filterStrength2");
let mediumDark = document.getElementById("filterStrength3");
let dark = document.getElementById("filterStrength4");

function strength(element, name) {
  for(let i = 0; i < productsList.length; i++) {
    if(productsList[i].Strength === name) {
      element.checked = true;
    }
  }
}
strength(light, "Light to Medium Roast");
strength(medium, "Medium Roast");
strength(mediumDark, "Medium to Dark Roast");
strength(dark, "Dark Roast");



// liste
let brandFilter = [];
for(let i = 0; i < productsList.length; i++) {
  brandFilter.push(productsList[i].Brand);
}
console.log(brandFilter);


let categoryFilter = [];
for(let i = 0; i < productsList.length; i++) {
  categoryFilter.push(productsList[i].Category);
}
console.log(categoryFilter);


let typeFilter = [];
for(let i = 0; i < productsList.length; i++) {
  typeFilter.push(productsList[i].CoffeeType);
}
console.log(typeFilter);


let strengthFilter = [];
for(let i = 0; i < productsList.length; i++) {
  strengthFilter.push(productsList[i].Strength);
}
console.log(strengthFilter);



// let resultBrand = brandFilter.filter(function brand_filter(element, name) {
//   for(let i = 0; i < productsList.length; i++) {
//     if(element.checked === true && productsList[i].Brand === name) {
//       return productsList[i];
//     }
//   }
//   brand_filter(Nescafe, "Nescafe");
// });