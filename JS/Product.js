// header
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
