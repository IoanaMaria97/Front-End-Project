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

    let paragraph2 = document.createElement("p");
    paragraph2.textContent = product.CoffeeType ;
    flipCardBack.appendChild(paragraph2);

    let paragraph3 = document.createElement("p");
    paragraph3.textContent = `${product.Price} ${product.Currency}`;
    flipCardBack.appendChild(paragraph3);

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
      "M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843zm-15-6.212c-1.19-.693-2-1.969-2-3.443 0-2.206 1.794-4 4-4 2.235 0 4.164 1.875 3.969 4.309l.928.703c.637-3.087-1.715-6.012-4.897-6.012-2.761 0-5 2.239-5 5 0 2.049 1.236 3.806 3 4.578v-1.135z"
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


