let registerUserCart = JSON.parse(localStorage.getItem("registerUser"));

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
  price.textContent = `${(product[0].Price*product[1]).toFixed(2)}${product[0].Currency}`;
  inline.appendChild(price);

  btnDecrement.addEventListener("click",  function decrement() {
    if(product[1] > 1) {
      product[1] --;
    }
    let update = [product[0], product[1]];
    if(cartProducts.length > 0) {
      let wasCartProductsUpdated = false;
      cartProducts.forEach(element => {
      if(element[0].Id === update[0].Id) {
        wasCartProductsUpdated = true;
        element[1] = update[1];
        }
      });
      localStorage.setItem("cart", JSON.stringify(cartProducts));
      container.innerHTML = '';
      createCart();
    }
  });
  
  btnIncrement.addEventListener("click", function increment() {
    if(product[1] < 5) {
      product[1]++;
    }
    let update = [product[0], product[1]];
    if(cartProducts.length > 0) {
      let wasCartProductsUpdated = false;
      cartProducts.forEach(element => {
      if(element[0].Id === update[0].Id) {
        wasCartProductsUpdated = true;
        element[1] = update[1];
        }
      });
      localStorage.setItem("cart", JSON.stringify(cartProducts));
      container.innerHTML = '';
      createCart();
    }
  });

  remove.addEventListener("click", function() {
    cartProducts.splice(cartProducts.indexOf(product), 1);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    update();
    createCart();
  })
}

function totalNoRegister() {
  subtotal.textContent = "0$";
  shipping.textContent = "0$";
  total.textContent = "0$"; 
  let empty = document.createElement("p");
  empty.textContent = "The Cart is empty.";
  empty.setAttribute("id", "emptyCart");
  notEmpty.appendChild(empty);
}

function calculateTotal() {
  let sum = 0;
  for(let i = 0; i < cartProducts.length; i++) {
    sum += cartProducts[i][0].Price * cartProducts[i][1];
  }
  sum = sum.toFixed(2); // https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
  subtotal.textContent = `${sum}$`;
  let sum2 = 20;
  shipping.textContent = `${sum2}$`;
  let sum3 = Number(sum)+Number(sum2);
  sum3 = sum3.toFixed(2);
  total.textContent = `${sum3}$`;
}

function elements() {
  cartProducts.forEach(element => {
  createElement(element);
});
}

function update() {
  notEmpty.replaceChildren();
}

function createCart() {
  if(cartProducts.length > 0) {
    update();
    elements();
    calculateTotal();
  } else {
    totalNoRegister();
  }
}
createCart();


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


function isUserRegister() {
  if(registerUserCart) {
    populateCart(registerUserCart);
  } 
}
isUserRegister();

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

// butonul de plasare a comenzii

let address = document.getElementById("cart_address");
let payment1 = document.getElementById("cart_payment1");
let payment2 = document.getElementById("cart_payment2");

let submit = document.getElementById("btnFinish");

function verifyPayment() {
  let number = document.getElementById("paymentNumber");
  let pin = document.getElementById("paymentPin");
  if(payment1.checked) {
    if(number.value !== "" && pin.value !== "") {
      return [true, ''];
    } else {
      return [false, 'Number or Pin missing.'];
    }
  } else if(payment2.checked) {
    return [true, ''];
  } else {
    return [false,'Please select a payment method.'];
  }
}

function verifyUser() {
  if(registerUserCart) {
    if(address.value !== "") {
      return [true, ''];
    } else {
      return [false,'Please fill in the address.'];
    }
  } else {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(firstName.value === "") {
      return [false, 'Please fill in your first name.'];
    } else if(lastName.value === "") {
      return [false, 'Please fill in your last name.'];
    } else if(!validEmail.test(email.value)) {
      return [false, 'Please fill in a valid email address.'];
    } else if(address.value === "") {
      return [false, 'Please fill in your address.'];
    } else if(city.value === "") {
      return [false, 'Please fill in your city.'];
    } else if (country.value === "") {
      return [false, 'Please fill in your country.'];
    } else {
      return [true, ''];
    }
  }
}

function verifyCart() {
  if(cartProducts.length > 0) {
    return [true, ''];
  } else {
    return [false, 'Cart is empty'];
  }
}

function verify() {
  let response1 = verifyCart();
  let response2 = verifyUser();
  let response3 = verifyPayment();
  if(!response1[0]) {
    return [false, response1[1]];
  } else if(!response2[0]) {
    return [false, response2[1]];
  } else if(!response3[0]) {
    return [false, response3[1]];
  } else {
    return [true, ''];
  }
}

submit.addEventListener("click", function() {
  let response = verify();
  if(response[0]) {
    window.localStorage.removeItem("cart");
    location.href = "../HTML/Order.html";
    // alert("Your order is placed!");
  } else {
    alert(response[1]);
  }
});

// https://stackoverflow.com/questions/3797462/what-is-opposite-to-javascript-match
// https://stackoverflow.com/questions/59473850/disable-submit-button-if-all-some-input-textarea-and-radio-buttons-are-empty