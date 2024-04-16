document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const feedbackInput = document.querySelector("input[type='text']");
      const feedback = feedbackInput.value.trim(); // Get the value of the feedback input field
  
      // Perform validation (if needed)
      if (feedback === "") {
        alert("Please enter your feedback.");
        return;
      }
  
      // Here, you can send the feedback to your backend or perform any other actions
      console.log("Feedback submitted:", feedback);
  
      // Clear the input field after submission
      feedbackInput.value = "";
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const productCard = button.closest(".product-card");
        const quantityDisplay = productCard.querySelector(".quantity");
        let currentQuantity = parseInt(quantityDisplay.textContent);
  
        if (currentQuantity > 0) {
          currentQuantity -= 1;
          quantityDisplay.textContent = currentQuantity;
          console.log("Product added to cart. Updated quantity:", currentQuantity);
        } else {
          alert("Product out of stock!");
        }
      });
    });
  });
  