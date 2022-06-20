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