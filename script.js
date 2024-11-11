// Get all Add to Cart buttons
const addToCart = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector("#cart-items");
const totalPriceElement = document.querySelector("#total-price");

// Function to add product to cart
addToCart.forEach(button => {
    button.addEventListener("click", function() {
      const porductName = this.getAttribute("data-product");
      const productPrice = parseFloat(this.getAttribute("data-price"));

      // Create a new list item for the cart
      const cartItem = document.createElement("li");
      cartItem.classList.add("cartItm");
      cartItem.innerHTML = `
      <span>${porductName}</span>
      <span>${productPrice.toFixed(2)}</span>
      <span><button id="deletebtn" class="text-red-500"><i class="fa-solid fa-trash"></i></button></span>`;

      // Add the item to the cart list
      cartItems.appendChild(cartItem);

      // Delete product button
      const deletebtn = cartItem.querySelector("#deletebtn");
      deletebtn.addEventListener("click", ()=> deleteprduct(cartItem, productPrice));

      // Update total price
      updateTotalPrice(productPrice);

      // add product locatlstroge
      const product = getproductlocalstorge();
      product.push(porductName, productPrice);
      localStorage.setItem("myproduct", JSON.stringify(product));
    })
});

// Delete a product from the cart
const deleteprduct = (cartItem, productPrice) => {
  // Remove item from DOM
  cartItems.removeChild(cartItem);

  // Update total price
  updateTotalPrice(-productPrice);

  // Remove from localStorage
  const products = getproductlocalstorge();
  const updatedProducts = products.filter((product) => product.productPrice !== productPrice);
  localStorage.setItem("myProducts", JSON.stringify(updatedProducts));
}


// getproductlocalstorge
const getproductlocalstorge = () => {
  return localStorage.getItem("myproduct")
    ? JSON.parse(localStorage.getItem("myproduct"))
    : [];
};


// Update the total price in the cart

let totalPrice = 0;

function updateTotalPrice(price) {
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2)
}


// Optionally: Load products from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const saveProducts = getproductlocalstorge();

  saveProducts.forEach(product => {
    // Recreate cart items from localStorage data
    const cartItem = document.createElement("li");
    cartItem.classList.add("cartItm");
    cartItem.innerHTML = `
      <span>${porductName}</span>
      <span>${productPrice.toFixed(2)}</span>
      <span><button id="deletebtn" class="text-red-500"><i class="fa-solid fa-trash"></i></button></span>`;

    // Add the item to the cart list
    cartItems.appendChild(cartItem);

    // Delete product button
    const deletebtn = cartItem.querySelector("#deletebtn");
    deletebtn.addEventListener("click", () =>
      deleteprduct(cartItem, productPrice)
    );

    // Update total price
    updateTotalPrice(productPrice);
  })
})
