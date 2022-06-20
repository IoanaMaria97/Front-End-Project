let registerUser = JSON.parse(localStorage.getItem("registerUser"));
// console.log(registerUser);

function populateCart(user) {
  let firstName = document.getElementById("cart_firstName");
  let lastName = document.getElementById("cart_lastName");
  let email = document.getElementById("cart_email");
  let city = document.getElementById("cart_city");
  let country = document.getElementById("cart_country");
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  email.value = user.email;
  city.value = user.city;
  country.value = user.country;
}
populateCart(registerUser);


let btn1 = document.getElementById("secondSidenav1");
let btn2 = document.getElementById("secondSidenav2");
let btn3 = document.getElementById("secondSidenav3");

function secondNav(element) {
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}


function closeFirstNav() {
    document.getElementById("firstSidenav").style.width = "0";
}


function openFirstNav() {
    document.getElementById("firstSidenav").style.width = "300px";
}

