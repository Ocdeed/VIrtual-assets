document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("password");

  // Toggle password visibility
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

  // Handle form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = passwordInput.value;
    const remember = document.getElementById("remember").checked;

    // Add your login logic here
    console.log("Login attempt:", { email, password, remember });

    // Simulate login process
    const button = loginForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.innerHTML = `
            <span class="loading-spinner"></span>
            <span>Signing In...</span>
        `;

    setTimeout(() => {
      // Redirect to dashboard after successful login
      window.location.href = "dashboard.html";
    }, 1500);
  });

  // Add floating label effect
  const inputs = document.querySelectorAll(".input-wrapper input");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        input.parentElement.classList.remove("focused");
      }
    });
  });
});
