// 1.LOCAL STORAGE PRODUCTS
let category = ["Basic Coffee", "Signatured Coffee", "Flavored Coffee"];

function generateRandomCoffeeType(type) {
  let randomCoffeeType = Math.floor(Math.random() * type.length); // imi genereaza un nr random
  let resultType = type[randomCoffeeType]; // generare element de pe pozitia numarului random
  return resultType;
}

function generateRandomAvatar() {
  let avatar = ["../Img/coffee_item_4.jpeg", "../Img/coffee_item_5.jpeg", "../Img/coffee_item_6.jpeg", "../Img/coffee_item_7.jpeg", "../Img/coffee_item_8.jpeg", "../Img/coffee_item_9.jpeg"]; // ne vom folosi de acest src generat random pentru avatarul produsului
  let randomAvatar = Math.floor(Math.random() * avatar.length);
  let resultAvatar = avatar[randomAvatar];
  return resultAvatar;
}

function generateRandomBrand() {
  let brand = ["Nescafe", "Lavazza", "Starbucks", "Costa", "McCafe"];
  let randomBrand = Math.floor(Math.random() * brand.length);
  let resultBrand = brand[randomBrand];
  return resultBrand;
}

function generateRandomStrength() {
  let strength = [
    "Light to Medium Roast",
    "Medium Roast",
    "Medium to Dark Roast",
    "Dark Roast"
  ];
  let randomStrength = Math.floor(Math.random() * strength.length);
  let resultStrength = strength[randomStrength];
  return resultStrength;
}

function generateRandomPrice() {
  let price = ["29.99$", "15$", "19.99$", "20$", "4.99$"];
  let randomPrice = Math.floor(Math.random() * price.length);
  let resultPrice = price[randomPrice];
  return resultPrice;
}

function generateRandomProducts(number) {
  // verificam daca exista deja lista de produse, daca nu => generam una
  if(!JSON.parse(localStorage.getItem("productsData"))) {
    let products = []; // lista noastra de produse
    let id = 0; // id unic pentru fiecare produs
    for (let i = 0; i < category.length; i++) {
      let coffeeType = [];
      // fiecare categorie are o subcategorie diferita alocata
      switch (i) {
        case 0:
          coffeeType = ["Expresso", "Cappuccino", "Coffee Latte"];
          break;
        case 1:
          coffeeType = [
            "Almond Latte",
            "Cold Brew Coffee",
            "Lavender Cappuccino"
          ];
          break;
        case 2:
          coffeeType = [
            "Vanilla Latte",
            "Caramel Macchiato",
            "Caramel Frappucino"
          ];
          break;
        default:
          break;
      }
      // pentru fiecare categorie se genereaza numarul = number de produse si le alocam listei
      for (let j = 0; j < number; j++) {
        products.push({
          Category: category[i],
          CoffeeType: generateRandomCoffeeType(coffeeType),
          Avatar: generateRandomAvatar(),
          Brand: generateRandomBrand(),
          Strength: generateRandomStrength(),
          Price: generateRandomPrice(),
          Id: id++
        });
      }
    }
    localStorage.setItem("productsData", JSON.stringify(products));
  }
}
generateRandomProducts(50);

// https://stackoverflow.com/questions/2443901/random-object-generator-in-javascript
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array




// 2.LOCAL STORAGE USERS
let form = document.querySelector("form");
let firstName = document.getElementById("signUp_firstName");
let lastName = document.getElementById("signUp_lastName");
let email = document.getElementById("signUp_email");
let password = document.getElementById("signUp_password");
let city = document.getElementById("signUp_city");
let country = document.getElementById("signUp_country");

function logSubmit(event) {
    let users = JSON.parse(localStorage.getItem("usersData")) || []; // daca nu exista utilizatori in Local Storage, initializam lista cu un empty array in care vom regasi datele introduse de utilizator
    let user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      city: city.value,
      country: country.value,
      id: users.length // id unic pentru fiecare utilizator
    };
    const validRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"; // regularExpresion: https://www.tutorialspoint.com/checking-for-valid-email-address-using-regular-expressions-in-java
    let exist =
      users.length &&
      JSON.parse(localStorage.getItem("usersData")).some(
        (data) => data.email === user.email
      ); // verificam daca exista un utilizator prin validarea adresei de email
    if (!exist) {
      if (!user.email.match(validRegex)) {
        alert("Invalid email address!");
        event.preventDefault();
      } else if (user.password.length < 8) {
        alert("Password at least 8 characters!");
        event.preventDefault();
      } else {
        users.push(user);
        localStorage.setItem("usersData", JSON.stringify(users));
        form.reset(); // reset input dupa completarea campurilor
      }
    } else {
      alert("This email address is used for another account!");
      event.preventDefault(); // nu vrem submit daca exista un utilizator in Local Storage
    }
  }
  
  form.addEventListener("submit", logSubmit);
  
  // https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage
  // https://stackoverflow.com/questions/44741727/how-to-get-a-form-submit-button-to-save-to-localstorage
  // https://stackoverflow.com/questions/41154477/how-to-login-successfully-with-details-from-local-storage-javascript
  // https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
  // https://www.youtube.com/watch?v=oX7ko6M7YDc --> https://github.com/samad-kanton/signup-with-localStorage/blob/main/script.js
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
  
  // 1 - Verificam daca exista utilizatori in Local Storage, daca NU => array-ul nostru va fi ca default empty (let users = [];) *avem nevoie de acest lucru pentru a trimite undeva datele introduse de utilizator*
  // 2 - Validam contul care se doreste a fi creat.
  // 3 - Daca exista email-ul in Local Storage => "This email address is used for another account!".
  // 4 - Altfel, se va crea contul si se va introduce/ adauga in Local Storage.
  