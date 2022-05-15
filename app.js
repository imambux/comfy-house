const productsCenterDOM = document.querySelector(".products-center");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-content");
const cartOverlay = document.querySelector(".cart-overlay");

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
      const product = getMatchedProduct(
        allProducts,
        event.target.previousElementSibling
      );
      addProductToCart(product);
      showCartHandler();
      updateCartTotal();
    });
  });

  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", showCartHandler);

  const closeCartIcon = document.querySelector(".close-cart");
  closeCartIcon.addEventListener("click", hideCartHandler);
  cartOverlay.addEventListener("click", hideCartHandler);
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

function updateCartTotal() {
  let cartItems = document.querySelectorAll(".cart-item");
  let cartTotal = document.querySelector(".cart-total");
  let allCartItemsTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const itemPrice = cartItems[i].querySelector("h5").innerHTML.slice(1);
    const itemQuantity = cartItems[i].querySelector(".item-amount").innerHTML;
    const itemTotal = itemPrice * itemQuantity;
    allCartItemsTotal += itemTotal;
  }
  cartTotal.innerHTML = allCartItemsTotal;
}

function hideCartHandler() {
  cart.style.transform = "translateX(100%)";
  cartOverlay.style.visibility = "hidden";
}

function allChevronUpBtnsHandler(event) {
  event.target.nextElementSibling.innerHTML =
    parseInt(event.target.nextElementSibling.innerHTML) + 1;
  updateCartTotal();
}

function allChevronDownBtnsHandler(event) {
  if (event.target.previousElementSibling.innerHTML > 1)
    event.target.previousElementSibling.innerHTML =
      parseInt(event.target.previousElementSibling.innerHTML) - 1;
  updateCartTotal();
}

function getMatchedProduct(allProducts, productToBeAdded) {
  return allProducts.find((product) =>
    productToBeAdded.src.includes(product.url.substring(1))
  );
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
