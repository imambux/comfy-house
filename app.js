const productsCenterDOM = document.querySelector(".products-center");

// Get all images locations
let images = [
  "./images/product-1.jpeg",
  "./images/product-2.jpeg",
  "./images/product-3.jpeg",
  "./images/product-4.jpeg",
  "./images/product-5.jpeg",
  "./images/product-6.jpeg",
  "./images/product-7.jpeg",
  "./images/product-8.jpeg",
];

let results = "";
for (let index = 0; index < images.length; index++) {
  results += `
    <article class="product">
        <div class="img-container">
            <img
                src="${images[index]}"
                alt="product"
                class="product-img"
            />
            <button class="bag-btn" data-id="1">
                <i class="fas fa-shopping-cart"></i>
                add to bag
            </button>
        </div>
        <h3>${getRandomName()}</h3>
        <h4>$${getRandomNumber()}</h4>
    </article>
`;
}

productsCenterDOM.innerHTML = results;
//Get Random Name
function getRandomName() {
  let randomNames = [
    "Queen Bed",
    "Cosy Sofa",
    "Solo Chair",
    "Sofa Set",
    "Breakfast Table",
    "Kitchen Table",
    "Lounge Sofa",
    "Bed",
  ];

  let randomItem = randomNames[Math.floor(Math.random() * randomNames.length)];
  return randomItem;
}

//Get Random Number
function getRandomNumber() {
  return Math.floor(Math.random() * 20);
}

images = [
  { url: "./images/product-1.jpeg", price: 12, name: "Cosy sofa" },
  { url: "./images/product-2.jpeg", price: 50, name: "Cosy sofa" },
  { url: "./images/product-3.jpeg", price: 5, name: "Cosy sofa" },
  { url: "./images/product-4.jpeg", price: 15, name: "Cosy sofa" },
  { url: "./images/product-5.jpeg", price: 40, name: "Cosy sofa" },
  { url: "./images/product-6.jpeg", price: 56, name: "Cosy sofa" },
  { url: "./images/product-7.jpeg", price: 28, name: "Cosy sofa" },
  { url: "./images/product-8.jpeg", price: 15, name: "Cosy sofa" },
];

images.forEach((image) => {
  console.log(image.url, image.price, image.name);
});
