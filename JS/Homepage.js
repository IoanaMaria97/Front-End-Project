let register_user = document.getElementById("register_user"); // inlocuim register cu numele utilizatorului logat
let login = document.getElementById("login"); // inlocuim login cu logout
let registerUser = JSON.parse(localStorage.getItem("registerUser"));

function register() {
    if(localStorage.getItem("registerUser")) {
        register_user.textContent = "Hello, " + " " + registerUser.firstName + " " + registerUser.lastName + " !";
        register_user.removeAttribute("href");
        login.textContent = "Logout";
        login.setAttribute("href", "../HTML/Homepage.html");
    }
}
register();


// apas pe logout => se redirectioneaza catre homepage, user-ul nu mai este logat, logout = login
// login.addEventListener("click", function() {
//     if(register_user.textContent !== "Register") {
//         register_user.textContent = "Register";
//         register_user.setAttribute("href", "../HTML/SignUp.html");
//     }
// });

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