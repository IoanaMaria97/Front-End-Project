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
  