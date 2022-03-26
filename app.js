let itemAmountDOM = document.querySelectorAll(".item-amount");
let chevronUpDOM = document.querySelectorAll(".fa-chevron-up");
let chevronDownDOM = document.querySelectorAll(".fa-chevron-down");

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
