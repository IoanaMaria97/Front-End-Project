let registerUserCart = JSON.parse(localStorage.getItem("registerUser"));

// precompletare Cart

let firstName = document.getElementById("cart_firstName");
let lastName = document.getElementById("cart_lastName");
let email = document.getElementById("cart_email");
let city = document.getElementById("cart_city");
let country = document.getElementById("cart_country");

function populateCart(user) {
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  email.value = user.email;
  city.value = user.city;
  country.value = user.country;
}
populateCart(registerUserCart);

let title = document.getElementById("titlePayment");
let eMoney = document.getElementById("cart_payment1");
let paymentNumber = document.getElementById("paymentNumberSection");
let paymentPin = document.getElementById("paymentPinSection");

eMoney.addEventListener("click", function () {
  title.style.marginBottom = "0";
  paymentNumber.style.display = "block";
  paymentPin.style.display = "block";
});

let cash = document.getElementById("cart_payment2");
cash.addEventListener("click", function () {
  title.style.marginBottom = "30px";
  paymentNumber.style.display = "none";
  paymentPin.style.display = "none";
});


// populate right side to finish order
cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
let notEmpty = document.getElementById("notEmpty");
let subtotal = document.getElementById("subtotalNumber");
let shipping = document.getElementById("shippingNumber");
let total = document.getElementById("totalNumber");

function createElement(product) {
  let container = document.createElement("div");
  container.setAttribute("class", "displayProduct");
  notEmpty.appendChild(container);

  let avatar = document.createElement("img");
  avatar.setAttribute("src", product[0].Avatar);
  avatar.setAttribute("class", "avatar");
  container.appendChild(avatar);

  let info = document.createElement("div");
  info.setAttribute("class", "infoProduct");
  container.appendChild(info);

  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.setAttribute("id", `title${product[0].Id}`);
  title.textContent = product[0].CoffeeType;
  info.appendChild(title);

  let remove = document.createElement("span");
  remove.textContent = "X";
  remove.setAttribute("class", "remove");
  remove.setAttribute("id", `remove${product[0].Id}`);
  title.appendChild(remove);

  let inline = document.createElement("div");
  inline.setAttribute("class", "inline");
  info.appendChild(inline);

  let btnDecrement = document.createElement("button");
  btnDecrement.setAttribute("id", `btnDecrement${product[0].Id}`);
  btnDecrement.textContent = "-";
  inline.appendChild(btnDecrement);

  let number = document.createElement("p");
  number.setAttribute("class", "number");
  number.setAttribute("id", `number${product[0].Id}`);
  number.textContent = product[1];
  inline.appendChild(number);

  let btnIncrement = document.createElement('button');
  btnIncrement.setAttribute("id", `btnIncrement${product[0].Id}`);
  btnIncrement.textContent = "+";
  inline.appendChild(btnIncrement);

  let price = document.createElement("p");
  price.setAttribute("class", "price");
  price.setAttribute("id", `price${product[0].Id}` );
  price.textContent = `${product[0].Price*product[1]}${product[0].Currency}`;
  inline.appendChild(price);

  btnDecrement.addEventListener("click",  function decrement() {
    if(product[1] > 1) {
      product[1] --;
    }
    number.textContent = product[1] ; 
    price.textContent = `${product[0].Price * product[1]}${product[0].Currency}`; // actualizam pretul in functie de numarul de produse 
  });
  
  btnIncrement.addEventListener("click", function increment() {
    if(product[1] < 5) {
      product[1]++;
    }
    number.textContent = product[1];
    price.textContent = `${product[0].Price * product[1]}${product[0].Currency}`; // actualizam pretul in functie de numarul de produse 
  });

  // remove.addEventListener("click", function () {
  //   cartProducts.splice(cartProducts.indexOf(product), 1);
  //   createCart(cartProducts);
  // });
  // TO DO: trebuie actualizata lista cu produse dupa eliminarea unuia
}

function createCart() {
  // cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  let sum = 0;
  if(cartProducts.length > 0) {
    for(let i = 0; i < cartProducts.length; i++) {
      createElement(cartProducts[i]);
      sum += cartProducts[i][0].Price * cartProducts[i][1]; 
      // console.log(sum);
    }
    sum = sum.toFixed(2); // https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
    subtotal.textContent = `${sum}$`;
    let sum2 = 20;
    shipping.textContent = `${sum2}$`;
    let sum3 = Number(sum)+Number(sum2);
    sum3 = sum3.toFixed(2);
    total.textContent = `${sum3}$`;
    let empty = document.getElementById("emptyCart");
    empty.style.display = "none";
  } else {
    subtotal.textContent = "0$";
    shipping.textContent = "0$";
    total.textContent = "0$";    
  }
}
createCart();


// butonul de plasare a comenzii

// let address = document.getElementById("cart_address").value;
let submit = document.getElementById("btnFinish");

if(cartProducts.length > 0) {
  submit.addEventListener("click", function() {
    window.localStorage.removeItem("cart");
    location.href = "../HTML/Homepage.html";
    alert("Your order is placed!")
  });
} else {
  submit.setAttribute("disabled", "disabled");
}



