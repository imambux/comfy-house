const productsCenterDOM = document.querySelector(".products-center");

// get all products

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

// productsCenterDOM.innerHTML = fetch("products.json")
//   .then((products) => products.json())
//   .then((products) => {
//     let results = "";
//     for (let index = 0; index < products.length; index++) {
//       results += `
//      <article class="product">
//         <div class="img-container">
//             <img
//                 src="${products[index].url}"
//                 alt="product"
//                 class="product-img"
//             />
//             <button class="bag-btn" data-id="1">
//                 <i class="fas fa-shopping-cart"></i>
//                 add to bag
//             </button>
//         </div>
//         <h3>${products[index].name}</h3>
//         <h4>$${products[index].price}</h4>
//     </article>
// `;
//     }
//     return results;
//   });
