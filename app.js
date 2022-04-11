const productsCenterDOM = document.querySelector(".products-center");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-content");
const cartOverlay = document.querySelector(".cart-overlay");
let allitemAmounts = document.querySelectorAll(".item-amount");

(async function () {
  let response = await fetch("products.json");
  let allProducts = await response.json();
  let results = "";

  for (let index = 0; index < allProducts.length; index++) {
    results += `
       <article class="product">
          <div class="img-container">
              <img
                  src="${allProducts[index].url}"
                  alt="product"
                  class="product-img"
              />
              <button class="bag-btn" data-id="1">
                  <i class="fas fa-shopping-cart"></i>
                  add to cart
              </button>
          </div>
          <h3>${allProducts[index].name}</h3>
          <h4>$${allProducts[index].price}</h4>
      </article>
  `;
  }
  productsCenterDOM.innerHTML = results;

  const allAddToCartBtns = document.querySelectorAll(".bag-btn");
  allAddToCartBtns.forEach((addToCartBtn) => {
    addToCartBtn.addEventListener("click", (event) => {
      const matchedProduct = allProducts.find((product) =>
        event.target.previousElementSibling.src.includes(
          product.url.substring(1)
        )
      );
      addProductToCart(matchedProduct);
      showCartHandler();
    });
  });

  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", showCartHandler);

  const closeCartIcon = document.querySelector(".close-cart");
  closeCartIcon.addEventListener("click", hideCartHandler);
})();

function showCartHandler() {
  cart.style.transform = "translateX(0%)";
  cartOverlay.style.visibility = "visible";

  let allChevronUpBtns = document.querySelectorAll(".fa-chevron-up");
  allChevronUpBtns.forEach((btn) => {
    btn.addEventListener("click", allChevronUpBtnsHandler);
  });

  let allChevronDownBtns = document.querySelectorAll(".fa-chevron-down");
  allChevronDownBtns.forEach((btn) => {
    btn.addEventListener("click", allChevronDownBtnsHandler);
  });
}

function hideCartHandler() {
  cart.style.transform = "translateX(100%)";
  cartOverlay.style.visibility = "hidden";
}

function allChevronUpBtnsHandler(event) {
  event.target.nextElementSibling.innerHTML =
    parseInt(event.target.nextElementSibling.innerHTML) + 1;
}

function allChevronDownBtnsHandler(event) {
  if (event.target.previousElementSibling.innerHTML > 1)
    event.target.previousElementSibling.innerHTML =
      parseInt(event.target.previousElementSibling.innerHTML) - 1;
}

function addProductToCart(product) {
  let result = cartContainer.innerHTML;
  result += `<div class="cart-item">
            <img src="${product.url}" alt="${product.name}" />
            <div>
              <h4>${product.name}</h4>
              <h5>$${product.price}</h5>
              <span class="remove-item">remove</span>
            </div>
            <div>
              <i class="fas fa-chevron-up"></i>
              <p class="item-amount">1</p>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>`;
  cartContainer.innerHTML = result;
}
