// header - Register/ Logout-Login
let register_user = document.getElementById("register_user"); // inlocuim register cu numele utilizatorului logat
let login = document.getElementById("login"); // inlocuim login cu logout
let registerUser = JSON.parse(localStorage.getItem("registerUser"));

// cand apasam pe logout => utilizatorul sa nu mai fie logat si redirectionare catre Homepage
function change() {
    window.localStorage.removeItem('registerUser');
    location.href = "../HTML/Homepage.html";
}


function register() {
    if(localStorage.getItem("registerUser")) {
        register_user.textContent = "Hello, " + " " + registerUser.firstName + " " + registerUser.lastName + " !";
        register_user.removeAttribute("href");
        register_user.style.cursor = "default";
        login.textContent = "Logout";
        login.setAttribute("href", "../HTML/Homepage.html");
        login.addEventListener("click", change);
    } else {
        register_user.textContent = "Register";
        register_user.setAttribute("href", "../HTML/SignUp.html");
        login.textContent = "Login";
        register_user.style.cursor = "pointer";
        login.setAttribute("href", "../HTML/SignIn.html");
    }
}
register();

// header - Menu

let btn1 = document.getElementById("secondSidenav1");
let btn2 = document.getElementById("secondSidenav2");
let btn3 = document.getElementById("secondSidenav3");

let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");


function secondNav(element, plus) {
    if (element.style.display === "block") {
        element.style.display = "none";
        plus.textContent = "+";
    } else {
        element.style.display = "block";
        plus.textContent = "-";
    }
}


function closeFirstNav() {
    document.getElementById("firstSidenav").style.width = "0";
}


function openFirstNav() {
    document.getElementById("firstSidenav").style.width = "300px";
}


// https://stackoverflow.com/questions/26516194/onclick-event-is-not-keeping-the-change-permanently
// https://blog.logrocket.com/localstorage-javascript-complete-guide/


// filtrare dupa categorie si tip
let productsData = JSON.parse(localStorage.getItem("productsData"));

let basicCoffee = document.getElementById("categBasic");
let expresso = document.getElementById("typeExpresso");
let cappuccino = document.getElementById("typeCappuccino");
let latte = document.getElementById("typeLatte");

let signatureCoffee = document.getElementById("categSignature");
let almond = document.getElementById("typeAlmond");
let coldBrew = document.getElementById("typeColdBrew");
let lavender = document.getElementById("typeLavender");

let flavoredCoffee = document.getElementById("categFlavored");
let vanillaLatte = document.getElementById("typeVanilla");
let caramelM = document.getElementById("typeCaramelM");
let caramelF = document.getElementById("typeCaramelF");


function category(element) {
  if(element) {
    element.addEventListener("click", function() {
        let result = productsData.filter((product) => {
            if(product.Category === element.textContent) {
                return product;
            }
        });
        localStorage.setItem("display", JSON.stringify(result));
    })
  }
}
category(basicCoffee);
category(signatureCoffee);
category(flavoredCoffee);

function type(element) {
   if(element) {
    element.addEventListener("click", function() {
        let result = productsData.filter((product) => {
            if(product.CoffeeType === element.textContent) {
                return product;
            }
        });
        localStorage.setItem("display", JSON.stringify(result));
    })
   }
}
type(expresso);
type(cappuccino);
type(latte);
type(almond);
type(coldBrew);
type(lavender);
type(vanillaLatte);
type(caramelM);
type(caramelF);