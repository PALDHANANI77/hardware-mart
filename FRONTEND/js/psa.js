// Get all the "Add to cart" buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');

// Add click event listener to each button
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Function to handle the click event
function addToCart(event) {
  var item = event.target.closest('.a1'); // Find the closest parent item

  // Extract the necessary information from the item
  var imageSrc = item.querySelector('img').src;
  var altText = item.querySelector('img').alt;

  // Create a new object to represent the item
  var cartItem = {
    image: imageSrc,
    alt: altText
  };

  // Get the shopping cart data from localStorage or create an empty array
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the cartItems array
  cartItems.push(cartItem);

  // Save the updated cartItems array back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Redirect to the shopping cart page
  window.location.href = 'Scart.html';
}
