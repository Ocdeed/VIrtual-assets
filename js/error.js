document.addEventListener("DOMContentLoaded", () => {
  // Create glitch effect
  const glitchText = document.querySelector(".glitch");
  const originalText = glitchText.textContent;

  function createGlitch() {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
    const randomIndex = Math.floor(Math.random() * originalText.length);

    let glitchedText = originalText.split("");
    glitchedText[randomIndex] = randomChar();

    glitchText.textContent = glitchedText.join("");

    setTimeout(() => {
      glitchText.textContent = originalText;
    }, 100);
  }

  // Random glitch effect
  setInterval(createGlitch, 2000);

  // Portal animation enhancement
  const portal = document.querySelector(".portal-animation");
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

    portal.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Suggestion cards hover effect
  const cards = document.querySelectorAll(".suggestion-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((c) => {
        if (c !== card) {
          c.style.opacity = "0.5";
        }
      });
    });

    card.addEventListener("mouseleave", () => {
      cards.forEach((c) => {
        c.style.opacity = "1";
      });
    });
  });
});
