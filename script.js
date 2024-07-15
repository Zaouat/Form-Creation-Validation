document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate form inputs
    const { isValid, messages } = validateForm(username, email, password);

    // Display feedback based on validation results
    displayFeedback(isValid, messages);
  });

  function validateForm(username, email, password) {
    let isValid = true;
    let messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (email.includes("@")) {
      isValid = true;
    } else {
      isValid = false;
      messages.push("Email must contain '@'.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages };
  }

  function displayFeedback(isValid, messages) {
    // Display feedback messages
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Success color
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Error color
    }
  }
});
