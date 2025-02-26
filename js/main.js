document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation buttons
  const loginBtn = document.querySelector('button[aria-label="Login"]');
  const signupBtn = document.querySelector('button[aria-label="Sign Up"]');
  const startInvestingBtn = document.querySelector(
    'button[aria-label="Start investing"]'
  );
  const exploreMarketBtn = document.querySelector(
    'button[aria-label="Explore market"]'
  );

  // Add click event listeners
  loginBtn.addEventListener("click", () => {
    console.log("Login clicked");
    // Add login modal or navigation logic
  });

  signupBtn.addEventListener("click", () => {
    console.log("Sign up clicked");
    // Add signup modal or navigation logic
  });

  startInvestingBtn.addEventListener("click", () => {
    console.log("Start investing clicked");
    // Add navigation to investment dashboard
  });

  exploreMarketBtn.addEventListener("click", () => {
    console.log("Explore market clicked");
    // Add navigation to market page
  });

  // Property marker interaction
  const propertyMarkers = document.querySelectorAll(".property-marker");
  propertyMarkers.forEach((marker) => {
    marker.addEventListener("mouseenter", (e) => {
      const tooltip = e.currentTarget.querySelector(".tooltip");
      tooltip.style.display = "block";
    });

    marker.addEventListener("mouseleave", (e) => {
      const tooltip = e.currentTarget.querySelector(".tooltip");
      tooltip.style.display = "none";
    });
  });

  // Market section filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  const propertyCards = document.querySelectorAll(".property-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      propertyCards.forEach((card) => {
        if (filter === "all" || card.dataset.world === filter) {
          card.style.display = "block";
          card.animate(
            [
              { opacity: 0, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 300,
              easing: "ease-out",
            }
          );
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Property card hover effects
  propertyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.querySelector(".btn-gradient").style.transform = "translateY(-2px)";
    });

    card.addEventListener("mouseleave", () => {
      card.querySelector(".btn-gradient").style.transform = "translateY(0)";
    });
  });

  // Properties section interactions
  const propertyHighlights = document.querySelectorAll(".property-highlight");

  propertyHighlights.forEach((highlight) => {
    highlight.addEventListener("mouseenter", () => {
      highlight.querySelector(".btn-glass").style.transform =
        "translateY(-2px)";
      highlight.querySelector(".btn-glass").style.boxShadow =
        "0 4px 15px rgba(0, 123, 255, 0.2)";
    });

    highlight.addEventListener("mouseleave", () => {
      highlight.querySelector(".btn-glass").style.transform = "translateY(0)";
      highlight.querySelector(".btn-glass").style.boxShadow = "none";
    });
  });

  // Video playback optimization
  const propertyVideos = document.querySelectorAll(".property-video");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, observerOptions);

  propertyVideos.forEach((video) => {
    videoObserver.observe(video);
  });
});
