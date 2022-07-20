// img product
let div = document.getElementById("imgFirst");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let imgBig = document.createElement("img");
imgBig.src = img1.src;
imgBig.style.height = "30%";
imgBig.style.width = "80%";

div.appendChild(imgBig);

img1.addEventListener("click", function () {
  imgBig.src = img1.src;
});

img2.addEventListener("click", function () {
  imgBig.src = img2.src;
});

img3.addEventListener("click", function () {
  imgBig.src = img3.src;
});

img4.addEventListener("click", function () {
  imgBig.src = img4.src;
});

let data = 1; // pentru a tine contorul la cate produse adaugam si ne folosim de el pentru actualizare pret

  // populate page with info from LocalStorage("productDetails")
 let product = JSON.parse(localStorage.getItem("productDetails"));
 let title = document.getElementById("title");
 title.textContent = product.CoffeeType;
 let price = document.getElementById("price");
 price.textContent = `${product.Price * data}${product.Currency}`;
 let description1 = document.getElementById("description1");
 description1.textContent = `Category: ${product.Category}`;
 let description2 = document.getElementById("description2");
 description2.textContent = `Coffee Type: ${product.CoffeeType}`;
 let description3 = document.getElementById("description3");
 description3.textContent = `Strength: ${product.Strength}`;

 // counter 
document.getElementById("number").textContent = data;
  function decrement() {
      if(data > 1) {
          data--;
      }
    document.getElementById("number").textContent = data; 
    price.textContent = `${(product.Price * data).toFixed(2)}${product.Currency}`; // actualizam pretul in functie de numarul de produse 
  }
  function increment() {
      if(data < 5) {
        data++;
      }
      document.getElementById("number").textContent = data;
      price.textContent = `${(product.Price * data).toFixed(2)}${product.Currency}`; // actualizam pretul in functie de numarul de produse 
    }

   // button Add to Cart
 let btn = document.getElementById("btnCart");
 btn.addEventListener("click", function() {
        let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
        let update = [];
        update.push(product, data);
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

 // https://bobbyhadz.com/blog/javascript-count-duplicates-in-array

 // Breadcrumbs Menu
let categ = document.getElementById("categ");
categ.setAttribute("href", "../HTML/ProductsList.html");

