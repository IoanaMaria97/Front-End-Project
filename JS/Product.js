
// img

let div = document.getElementById("imgFirst");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let imgBig = document.createElement("img");
imgBig.src = img1.src;
imgBig.style.height = "30%";
imgBig.style.width = "80%";

div.appendChild(imgBig);

img1.addEventListener("click", function () {
  imgBig.src = img1.src;
});

img2.addEventListener("click", function () {
  imgBig.src = img2.src;
});

img3.addEventListener("click", function () {
  imgBig.src = img3.src;
});

img4.addEventListener("click", function () {
  imgBig.src = img4.src;
});


// counter 

let data = 1;
document.getElementById("number").textContent = data;
  function decrement() {
      if(data > 1) {
          data--;;
      }
      document.getElementById("number").textContent = data;
  }
  function increment() {
      if(data < 5) {
        data++;
      }
      document.getElementById("number").textContent = data;
  }

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


// https://stackoverflow.com/questions/26516194/onclick-event-is-not-keeping-the-change-permanently
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
