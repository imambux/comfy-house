const productsCenterDOM = document.querySelector(".products-center");

// get all products
const products = [];

let results = "";
for (let index = 0; index < products.length; index++) {
  results += `
    <article class="product">
        <div class="img-container">
            <img
                src="${products[index].url}"
                alt="product"
                class="product-img"
            />
            <button class="bag-btn" data-id="1">
                <i class="fas fa-shopping-cart"></i>
                add to bag
            </button>
        </div>
        <h3>${products[index].name}</h3>
        <h4>$${products[index].price}</h4>
    </article>
`;
}

productsCenterDOM.innerHTML = results;
