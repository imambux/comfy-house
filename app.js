let removeItemDOM = document.querySelectorAll(".remove-item");
let cartItemDOM = document.querySelectorAll(".cart-item");

// Implement Remove items button
for (let i = 0; i < removeItemDOM.length; i++) {
  removeItemDOM[i].addEventListener("click", removeItem);
  function removeItem() {
    cartItemDOM[i].style.visibility = "hidden";
    console.log("clicked");
  }
}
