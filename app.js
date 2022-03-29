const productsCenterDOM = document.querySelector(".products-center");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

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

cartBtn.addEventListener("click", showCart);
function showCart() {
  cart.style.transform = "translateX(0%)";
  cartOverlay.style.visibility = "visible";
}
