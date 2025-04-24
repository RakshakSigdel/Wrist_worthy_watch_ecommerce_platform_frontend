// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar content dynamically from an HTML file
    fetch('../Component/navBar.html')
        .then(response => response.text()) // Read the HTML content as text
        .then(data => {
            document.getElementById('header').innerHTML = data; // Insert the navbar content into the header
            highlightActiveLink(); // Call function to highlight the active navigation link
        });
});

// Function to highlight the active navigation link based on the current page
function highlightActiveLink() {
    let currentPath = window.location.pathname; // Get the current page URL path
    let navLinks = document.querySelectorAll(".navLinks li a"); // Select all nav links

    // Loop through each link and check if its href matches the current path
    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href"); // Get the link's href
        let normalizedPath = new URL(linkPath, window.location.origin).pathname; // Normalize the path

        if (currentPath === normalizedPath) { // If paths match, add "active" class
            link.classList.add("active");
        }
    });
}

// Load the footer content dynamically in each page
fetch('../Component/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Carousel functionality for featured products section on the homepage
const productContainers = [...document.querySelectorAll('.homeProductCarousel')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect(); // Get the container's dimensions
    let containerWidth = containerDimensions.width;

    // Next button click event to scroll the carousel to the right
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; // Move the carousel to the right by the container width
    });

    // Previous button click event to scroll the carousel to the left
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; // Move the carousel to the left by the container width
    });
});

// Cart functionality: Add items to the cart when the user clicks on the "Add to Cart" button
document.addEventListener("click", (event) => {
    if (event.target.closest(".add-to-cart")) { // If the "Add to Cart" button is clicked
        const productId = event.target.closest(".productCard").getAttribute("data-id"); // Get the product ID
        const selectedProduct = products.find(p => p.id == productId); // Find the selected product from the products array
        if (selectedProduct) addToCart(selectedProduct); // Add the product to the cart
    }
});

// Show a notification message when an item is added to the cart
function showNotification(message) {
    let notification = document.createElement("div"); // Create a new div for the notification
    notification.textContent = message; // Set the notification message text
    // Add some styles to position and display the notification
    notification.style.position = "fixed";
    notification.style.bottom = "50px";
    notification.style.right = "40vw";
    notification.style.background = "#4CAF50";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification); // Add the notification to the body

    // Remove the notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Add a product to the cart and store it in local storage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart from local storage, or create an empty cart
    let existingProduct = cart.find(item => item.id === product.id); // Check if the product is already in the cart
    if (existingProduct) {
        existingProduct.quantity += 1; // If the product is already in the cart, increase its quantity
    } else {
        product.quantity = 1; // If the product is not in the cart, set its quantity to 1
        cart.push(product); // Add the product to the cart
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart in local storage
    updateCartDisplay(); // Update the cart display on the page

    // Show a notification that the product has been added to the cart
    showNotification(`${product.title} has been added to your cart!`);
}

// Event listener to update the cart display and handle checkout
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay(); // Update the cart display when the page loads
    document.querySelector(".checkout-btn").addEventListener("click", checkOut); // Handle checkout when the checkout button is clicked
});

// Function to handle checkout and clear the cart
function checkOut() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart from local storage
    if (cart.length > 0) {
        // Calculate the total amount for all items in the cart
        const totalAmount = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);
        alert(`Transaction complete! Total amount: NPR ${totalAmount}`); // Display the total amount in an alert

        // Clear the cart from local storage
        localStorage.clear();

        // Update the cart display
        updateCartDisplay();
    } 
}

// Function to update the cart display on the page
function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart from local storage
    const cartContainer = document.querySelector(".cart-container");

    if (!cartContainer) {
        console.warn("Cart container not found in the DOM."); // Warning if the cart container is not found
        return;
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`; // Display a message if the cart is empty
        return;
    }

    // Create HTML content for the cart items
    let cartHTML = `
    <div class="cart-header">Shopping Cart</div>
    ${cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.imageUrl}" alt="${item.alt}">
        <div class="item-info">
          <div class="item-title">${item.title}</div>
        </div>
        <div class="quantity">
          <button class="decrease">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="increase">+</button>
        </div>
        <div class="item-price">NPR ${item.newPrice * item.quantity}</div>
        <a href="#" class="remove">Remove</a>
      </div>
    `).join("")}
    <div class="cart-footer">
      <span>Subtotal (${cart.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
      <span>NPR ${cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0)}</span>
    </div>
    <button class="checkout-btn" onclick="checkOut()">Checkout</button>
  `;

    cartContainer.innerHTML = cartHTML; // Insert the cart HTML into the cart container

    // Add event listeners to the buttons for changing quantity and removing items
    document.querySelectorAll(".decrease").forEach(button =>
        button.addEventListener("click", changeQuantity)
    );
    document.querySelectorAll(".increase").forEach(button =>
        button.addEventListener("click", changeQuantity)
    );
    document.querySelectorAll(".remove").forEach(button =>
        button.addEventListener("click", removeFromCart)
    );
}

// Function to change the quantity of an item in the cart
function changeQuantity(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = event.target.closest(".cart-item");
    const productId = parseInt(cartItem.getAttribute("data-id"));
    const product = cart.find(item => item.id === productId);

    // Increase or decrease the quantity depending on the button clicked
    if (event.target.classList.contains("increase")) {
        product.quantity += 1;
    } else if (event.target.classList.contains("decrease") && product.quantity > 1) {
        product.quantity -= 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in local storage
    updateCartDisplay(); // Update the cart display
}

// Function to remove an item from the cart
function removeFromCart(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = event.target.closest(".cart-item");
    const productId = parseInt(cartItem.getAttribute("data-id"));

    cart = cart.filter(item => item.id !== productId); // Remove the item from the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update the cart in local storage
    updateCartDisplay(); // Update the cart display
}
