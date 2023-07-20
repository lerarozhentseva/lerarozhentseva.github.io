const addToCartButton = document.querySelectorAll(".add-to-cart-btn");
addToCartButton.forEach(button => {
  button.addEventListener("click", addToCart);
});

// to add items to the cart
function addToCart(event) {
  const coffeeItem = event.target.closest(".coffee-catalog__item");
  const name = coffeeItem.querySelector(".item-info__name").textContent;
  const price = coffeeItem.querySelector(".item-info__price").textContent;
  const sizeRadio = coffeeItem.querySelector(".coffee-catalog__radio-group input:checked");
  const size = sizeRadio ? sizeRadio.nextElementSibling.textContent : "";
  const sugarCheckbox = coffeeItem.querySelector(".checkbox-input");
  const sugar = sugarCheckbox.checked;
  const uniqueId = crypto.randomUUID();

  const itemObj = {
    id: uniqueId,
    name: name,
    quantity: 1,
    price: price,
    size: size,
    sugar: sugar,
  };

  let cartItems = [];
  const localStorageData = localStorage.getItem('cartItems');
  if (localStorageData) {
    cartItems = JSON.parse(localStorageData);
  }

  const existingItemIndex = cartItems.findIndex(item => item.id === itemObj.id);
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity = quantity;
  } else {
    cartItems.push(itemObj);
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartItemCount()
}

// to remove item from the cart
function removeCartItem(itemId) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems'));

  if (cartItems) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    updateCartItemCount()
  }
}

// to update count of items in the cart
function updateCartItemCount() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemCountElement = document.querySelector('.cart-item-count');

  if (cartItems) {
    itemCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
  } else {
    itemCountElement.textContent = '0';
  }
}

updateCartItemCount()