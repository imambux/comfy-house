const productsCenterDOM = document.querySelector(".products-center");
let cartDOM = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
let closeCartDOM = document.querySelector(".close-cart");
let removeItemDOM = document.querySelectorAll(".remove-item");
let cartItemDOM = document.querySelectorAll(".cart-item");
let itemAmountDOM = document.querySelectorAll(".item-amount");
let chevronUpDOM = document.querySelectorAll(".fa-chevron-up");
let chevronDownDOM = document.querySelectorAll(".fa-chevron-down");

const getProducts = async function () {
  let response = await fetch("products.json");
  let data = await response.json();
  let results = "";

  for (let index = 0; index < data.length; index++) {
    results += `
       <article class="product">
          <div class="img-container">
              <img
                  src="${data[index].url}"
                  alt="product"
                  class="product-img"
              />
              <button class="bag-btn" data-id="1">
                  <i class="fas fa-shopping-cart"></i>
                  add to bag
              </button>
          </div>
          <h3>${data[index].name}</h3>
          <h4>$${data[index].price}</h4>
      </article>
  `;
  }
  return (productsCenterDOM.innerHTML = results);
};
getProducts();

//Showing Cart
cartDOM.addEventListener("click", showCart);
function showCart() {
  cartDOM = cart.style.transform = "translateX(0%)";
  cartDOM = cartOverlay.style.visibility = "visible";
}

//CLOSE CART

closeCartDOM.addEventListener("click", closeCart);
function closeCart() {
  closeCartDOM = cart.style.transform = "translateX(100%)";
  closeCartDOM = cartOverlay.style.visibility = "hidden";
}

// Implement Remove items button
for (let i = 0; i < removeItemDOM.length; i++) {
  removeItemDOM[i].addEventListener("click", removeItem);
  function removeItem() {
    cartItemDOM[i].style.visibility = "hidden";
    console.log("clicked");
  }
}

//chevron-up button
for (let i = 0; i < chevronUpDOM.length; i++) {
  chevronUpDOM[i].addEventListener("click", chevronUp);
  function chevronUp() {
    itemAmountDOM[i].innerHTML = Number(itemAmountDOM[i].innerHTML) + 1;
  }
}

//chevron-Down  button
for (let i = 0; i < chevronDownDOM.length; i++) {
  chevronDownDOM[i].addEventListener("click", chevronDown);
  function chevronDown() {
    if (itemAmountDOM[i].innerHTML > 0)
      itemAmountDOM[i].innerHTML = Number(itemAmountDOM[i].innerHTML) - 1;
  }
}
