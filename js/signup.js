document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const passwordInput = document.getElementById("password");
  const strengthBar = document.querySelector(".strength-bar");
  const strengthText = document.querySelector(".strength-text");
  const togglePassword = document.querySelector(".toggle-password");

  // Feature slider animation
  const features = document.querySelectorAll(".feature-slide");
  let currentFeature = 0;

  function rotateFeatures() {
    features.forEach((feature) => feature.classList.remove("active"));
    features[currentFeature].classList.add("active");
    currentFeature = (currentFeature + 1) % features.length;
  }

  setInterval(rotateFeatures, 4000);

  // Password strength checker
  function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;

    strengthBar.classList.remove("weak", "medium", "strong");
    if (strength === 0) {
      strengthText.textContent = "Password strength";
    } else if (strength <= 2) {
      strengthBar.classList.add("weak");
      strengthText.textContent = "Weak password";
    } else if (strength === 3) {
      strengthBar.classList.add("medium");
      strengthText.textContent = "Medium password";
    } else {
      strengthBar.classList.add("strong");
      strengthText.textContent = "Strong password";
    }
  }

  passwordInput.addEventListener("input", (e) => {
    checkPasswordStrength(e.target.value);
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

  // Form submission
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: passwordInput.value,
      termsAccepted: document.getElementById("terms").checked,
    };

    const button = signupForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.innerHTML = `
            <span class="loading-spinner"></span>
            <span>Creating Account...</span>
        `;

    try {
      // Add your signup logic here
      console.log("Sign up attempt:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to dashboard on success
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Signup failed:", error);
      button.disabled = false;
      button.innerHTML = `
                <span>Create Account</span>
                <span class="btn-arrow">→</span>
            `;
    }
  });
});
