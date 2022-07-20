// Carousel Slider
let slidePosition = 0;
let slides = document.getElementsByClassName("carousel_item");
let totalSlides = slides.length;

let previous = document.getElementById("btn_prev");
let next = document.getElementById("btn_next");

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("item_visible");
    slide.classList.add("item_hidden");
  }
  slides[slidePosition].classList.add("item_visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

previous.addEventListener("click", function () {
  moveToPrevSlide();
});

next.addEventListener("click", function () {
  moveToNextSlide();
});


// Create elements in Carousel Slide
let products = JSON.parse(localStorage.getItem("productsData"));
let containerCard = document.getElementsByClassName("containerCard");
// console.log(parentDiv.length); //3


function createCard(slide, index, product) {
    // fiecare CARD => id unic 
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card"+index);
    containerCard[slide].appendChild(card);

    let flipCard = document.createElement("div");
    flipCard.setAttribute("class", "flip_card");
    card.appendChild(flipCard);

    let flipCardInner = document.createElement("div");
    flipCardInner.setAttribute("class", "flip_card_inner");
    flipCard.appendChild(flipCardInner);

    let flipCardFront = document.createElement("div");
    flipCardFront.setAttribute("class", "flip_card_front");
    flipCardInner.appendChild(flipCardFront);

    let img = document.createElement("img");
    img.setAttribute("src", product.Avatar);
    img.setAttribute("class", "img");
    flipCardFront.appendChild(img);

    let flipCardBack = document.createElement("div");
    flipCardBack.setAttribute("class", "flip_card_back");
    flipCardInner.appendChild(flipCardBack);

    let paragraph1 = document.createElement("p");
    paragraph1.textContent = product.Category ;
    flipCardBack.appendChild(paragraph1);

    // let paragraph2 = document.createElement("p");
    // paragraph2.textContent = product.CoffeeType ;
    // flipCardBack.appendChild(paragraph2);

    let paragraph3 = document.createElement("p");
    paragraph3.textContent = `${product.Price} ${product.Currency}`;
    flipCardBack.appendChild(paragraph3);

    let paragraph4 = document.createElement("p");
    paragraph4.textContent = product.CoffeeType ;
    paragraph4.style.margin = "0";
    card.appendChild(paragraph4);

    let btn = document.createElement("div");
    btn.setAttribute("class", "btn");
    card.appendChild(btn);

    // fiecare buton => id unic = la apasare, trimite produsul in Local Storage pentru a prelua datele si a le afisa pe pagina Cart
    let button = document.createElement("button");
    button.setAttribute("id", "btn"+index);
    btn.appendChild(button);

     // button Add to Cart
     button.addEventListener("click", function() {
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
              alert("No more than 5");
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

    let iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.style.height = "25px";
    iconSvg.style.width = "25px";
    iconSvg.setAttribute("class", "fill");
    iconPath.setAttribute(
      "d",
      "M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
    );
    iconSvg.appendChild(iconPath);
    button.appendChild(iconSvg);
}

// fiecare slide contine 2 card-uri (varianta de mobile => 1 card pe fiecare slide)
// ne folosim de j pentru a schimba la fiecare apelare a functiei produsul cu urmatorul din lista de produse

let mobile = window.matchMedia( "(max-width: 768px)" ); // pentru varianta de mobile => afisam cate un produs
// https://stackoverflow.com/questions/33596109/check-window-size-always-jquery

let j = 0; 
for(let i = 0; i < containerCard.length; i++) {
    if(mobile.matches) {
      createCard(i, j, products[j]);
        j++;
    } else {
      createCard(i, j, products[j]);
        j++;
      createCard(i, j, products[j]);
      j++;
    }
}

// https://www.youtube.com/watch?v=gor5BvT2z88 => https://github.com/karlhadwen/carousel
// https://dev.to/tqbit/how-to-create-svg-elements-with-javascript-4mmp


// Bright Idea 
let product1 = document.getElementById("product1");
product1.setAttribute("src", products[0].Avatar);

let product2 = document.getElementById("product2");
product2.setAttribute("src", products[1].Avatar);

let product3 = document.getElementById("product3");
product3.setAttribute("src", products[50].Avatar);

let product4 = document.getElementById("product4");
product4.setAttribute("src", products[51].Avatar);

let product5 = document.getElementById("product5");
product5.setAttribute("src", products[100].Avatar);

let product6 = document.getElementById("product6");
product6.setAttribute("src", products[101].Avatar);

function details(element) {
  localStorage.setItem("productDetails", JSON.stringify(element));
}

function addCart(element) {
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
        let update = [];
        update.push(element, 1);
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
    }


// products section
let shopBtn1 = document.getElementById("shopBtn1");
let shopBtn2 = document.getElementById("shopBtn2");

// shopBtn1.addEventListener("click", function(){
//     let result = productsData.filter((product) => {
//         if(product.Category === "Signature Coffee") {
//             return product;
//         }
//     });
//     localStorage.setItem("display", JSON.stringify(result));
//     location.href = "../HTML/ProductsList.html";
// })

// shopBtn2.addEventListener("click", function(){
//     let result = productsData.filter((product) => {
//         if(product.Category === "Flavored Coffee") {
//             return product;
//         }
//     });
//     localStorage.setItem("display", JSON.stringify(result));
//     location.href = "../HTML/ProductsList.html";
// })

function productsSection(element, categ) {
    element.addEventListener("click", function(){
        let result = productsData.filter((product) => {
            if(product.Category === categ) {
                return product;
            }
        });
        localStorage.setItem("display", JSON.stringify(result));
        location.href = "../HTML/ProductsList.html";
    })
}
productsSection(shopBtn1, "Signature Coffee");
productsSection(shopBtn2, "Flavored Coffee");

// Bright Idea -> product -> products(afisare toate produsele)
localStorage.setItem("display", JSON.stringify(products));