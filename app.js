const productsCenterDOM = document.querySelector(".products-center");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartIcon = document.querySelector(".close-cart");
let allChevronUpBtns = document.querySelectorAll(".fa-chevron-up");
let allChevronDownBtns = document.querySelectorAll(".fa-chevron-down");
let allitemAmounts = document.querySelectorAll(".item-amount");

(async function () {
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
  productsCenterDOM.innerHTML = results;
})();

cartBtn.addEventListener("click", showCartHandler);
function showCartHandler() {
  cart.style.transform = "translateX(0%)";
  cartOverlay.style.visibility = "visible";
}

closeCartIcon.addEventListener("click", hideCartHandler);
function hideCartHandler() {
  cart.style.transform = "translateX(100%)";
  cartOverlay.style.visibility = "hidden";
}

allChevronUpBtns.forEach((btn) => {
  btn.addEventListener("click", allChevronUpBtnsHandler);
});
function allChevronUpBtnsHandler(event) {
  event.target.nextElementSibling.innerHTML =
    parseInt(event.target.nextElementSibling.innerHTML) + 1;
}

allChevronDownBtns.forEach((btn) => {
  btn.addEventListener("click", allChevronDownBtnsHandler);
});
function allChevronDownBtnsHandler(event) {
  if (event.target.previousElementSibling.innerHTML > 1)
    event.target.previousElementSibling.innerHTML =
      parseInt(event.target.previousElementSibling.innerHTML) - 1;
}
