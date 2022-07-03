// Searchbar 
let productsElements = JSON.parse(localStorage.getItem("productsData"));

let input = document.getElementById("searchValue");
input.onkeydown = function(event){
  if(event.key === 'Enter') {
  let value = input.value.toLowerCase();
  let result = [];
  productsElements.forEach(product => {
    if(product.Category.toLowerCase().includes(value) || product.CoffeeType.toLowerCase().includes(value)) {
      result.push(product);
    }
  })
  localStorage.setItem("display", JSON.stringify(result));
  location.href = "../HTML/ProductsList.html";      
  }
}

let button = document.getElementById("searchBtn");
button.addEventListener("click", function() {
  let value = input.value.toLowerCase();
  let result = [];
  productsElements.forEach(product => {
    if(product.Category.toLowerCase().includes(value) || product.CoffeeType.toLowerCase().includes(value)) {
      result.push(product);
    }
  })
  localStorage.setItem("display", JSON.stringify(result));
  location.href = "../HTML/ProductsList.html";
})

// https://www.youtube.com/watch?v=TlP5WIxVirU&t=374s
// https://stackoverflow.com/questions/20998541/get-the-value-of-input-text-when-enter-key-pressed