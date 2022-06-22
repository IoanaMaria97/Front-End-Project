// Sectiunea de filtre
let filterBrand = document.getElementById("filterBrand");
let filterCategory = document.getElementById("filterCategory");
let filterStrength = document.getElementById("filterStrength");

let plusFilter1 = document.getElementById("plusFilter1");
let plusFilter2 = document.getElementById("plusFilter2");
let plusFilter3 = document.getElementById("plusFilter3");
let plusFilter4 = document.getElementById("plusFilter4");

function filtrare(filtru, plus) {
  if (filtru.style.display === "block") {
            filtru.style.display = "none";
            plus.textContent = "+";

        } else {
            filtru.style.display = "block";
            plus.textContent = "-";
        }
}