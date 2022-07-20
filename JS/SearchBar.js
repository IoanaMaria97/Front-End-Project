// Searchbar
let searchInfo = localStorage.getItem("search");  
let productsElements = JSON.parse(localStorage.getItem("productsData"));
async function test() {
  await delay(500);
}
test();
localStorage.removeItem("search");

let input = document.getElementById("searchValue");
input.value = searchInfo;
input.onkeydown = function(event){
  if(event.key === 'Enter') {
  let value = input.value.toLowerCase();
  // if(value === "") {
  //   console.log("Ok");
  //   localStorage.setItem("search", "OK");
  // }
  localStorage.setItem("search", value);
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