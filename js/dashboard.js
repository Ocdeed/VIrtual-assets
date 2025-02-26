document.addEventListener("DOMContentLoaded", () => {
  // Initialize Portfolio Value Chart
  const portfolioCtx = document
    .getElementById("portfolioChart")
    .getContext("2d");
  new Chart(portfolioCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Portfolio Value",
          data: [350000, 380000, 420000, 390000, 450000, 534987],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#ccc",
          },
        },
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#ccc",
          },
        },
      },
    },
  });

  // Initialize Market Trends Chart
  const trendsCtx = document
    .getElementById("marketTrendsChart")
    .getContext("2d");
  new Chart(trendsCtx, {
    type: "bar",
    data: {
      labels: ["Residential", "Commercial", "Entertainment", "Land"],
      datasets: [
        {
          label: "Average Price",
          data: [4500, 12000, 8000, 15000],
          backgroundColor: [
            "rgba(0, 123, 255, 0.5)",
            "rgba(0, 180, 216, 0.5)",
            "rgba(0, 255, 255, 0.5)",
            "rgba(0, 216, 180, 0.5)",
          ],
          borderColor: ["#007bff", "#00b4d8", "#00ffff", "#00d8b4"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#ccc",
          },
        },
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#ccc",
          },
        },
      },
    },
  });

  // Add Recent Activities
  const activities = [
    {
      type: "purchase",
      title: "Purchased Meta Villa",
      amount: "12,500 MANA",
      time: "2h ago",
    },
    {
      type: "sale",
      title: "Sold Commercial Space",
      amount: "8,000 ETH",
      time: "5h ago",
    },
    {
      type: "rent",
      title: "Rented Entertainment Venue",
      amount: "500 SAND/month",
      time: "1d ago",
    },
  ];

  const activityList = document.querySelector(".activity-list");
  activities.forEach((activity) => {
    const activityItem = document.createElement("div");
    activityItem.className = "activity-item";
    activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                ${
                  activity.type === "purchase"
                    ? "🛍️"
                    : activity.type === "sale"
                    ? "💰"
                    : "🔑"
                }
            </div>
            <div class="activity-details">
                <h4>${activity.title}</h4>
                <p>${activity.amount}</p>
            </div>
            <span class="activity-time">${activity.time}</span>
        `;
    activityList.appendChild(activityItem);
  });

  // Theme Toggle
  const themeToggle = document.createElement("button");
  themeToggle.className = "btn btn-outline theme-toggle";
  themeToggle.innerHTML = "🌙";
  document.querySelector(".header-actions").prepend(themeToggle);

  // Add Property Cards
  const propertyCards = [
    {
      name: "Luxury Meta Villa",
      location: "Decentraland",
      price: "5,000 MANA",
      image: "images/property1.jpg",
      type: "Residential",
    },
    // Add more properties as needed
  ];

  const propertiesGrid = document.querySelector(".properties-grid");
  propertyCards.forEach((property) => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.name}">
                <span class="property-type">${property.type}</span>
            </div>
            <div class="property-info">
                <h3>${property.name}</h3>
                <p>${property.location}</p>
                <div class="property-price">
                    <span>${property.price}</span>
                    <button class="btn btn-sm btn-outline">Manage</button>
                </div>
            </div>
        `;
    propertiesGrid.appendChild(card);
  });
});
