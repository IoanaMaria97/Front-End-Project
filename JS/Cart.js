let registerUserCart = JSON.parse(localStorage.getItem("registerUser"));

// precompletare Cart
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
populateCart(registerUserCart);

