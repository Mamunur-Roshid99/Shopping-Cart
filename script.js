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
      <span>$${productPrice.toFixed(2)}</span>`;

      // Add the item to the cart list
      cartItems.appendChild(cartItem);

      // Update total price
      updateTotalPrice(productPrice);

      // add product locatlstroge
      const product = getproductlocalstorge();
      product.push(porductName, productPrice);
      localStorage.setItem("myproduct", JSON.stringify(product));
    })
});


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

// Load Product


window.addEventListener("DOMContentLoaded",  loadProduct)