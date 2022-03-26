let cartDOM = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
let closeCartDOM = document.querySelector(".close-cart");

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
