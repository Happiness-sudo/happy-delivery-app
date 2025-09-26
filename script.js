document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products");
  const loadProductsBtn = document.getElementById("loadProducts");
  const cartSection = document.getElementById("cartSection");
  const cartItemsList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const viewCartBtn = document.getElementById("viewCart");
  const closeCartBtn = document.getElementById("closeCart");

  // Rider elements
  const riderSection = document.getElementById("riderSection");
  const riderOrdersList = document.getElementById("riderOrders");
  const riderEarnings = document.getElementById("riderEarnings");
  const viewRiderBtn = document.getElementById("viewRider");
  const closeRiderBtn = document.getElementById("closeRider");

  let cart = [];
  let riderOrders = [
    { id: 1, customer: "Alice", item: "Milk & Bread", price: 500, status: "Pending" },
    { id: 2, customer: "Brian", item: "Rice 5kg", price: 1200, status: "Pending" }
  ];

  // Load products
  loadProductsBtn.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        productsContainer.innerHTML = "";
        data.forEach(product => {
          const card = document.createElement("div");
          card.classList.add("product");

          card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Ksh ${product.price}</p>
            <button data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">
              Add to Cart
            </button>
          `;

          // Add to cart button
          card.querySelector("button").addEventListener("click", (e) => {
            const item = {
              id: e.target.dataset.id,
              title: e.target.dataset.title,
              price: parseFloat(e.target.dataset.price)
            };
            cart.push(item);
            updateCart();
          });

          productsContainer.appendChild(card);
        });
      })
      .catch(() => {
        productsContainer.innerHTML = "<p>Failed to load products.</p>";
      });
  });

  // Update cart display
  function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.title} - Ksh ${item.price.toFixed(2)}
        <button data-index="${index}">Remove</button>
      `;
      li.querySelector("button").addEventListener("click", (e) => {
        cart.splice(e.target.dataset.index, 1);
        updateCart();
      });
      cartItemsList.appendChild(li);
    });

    cartTotal.textContent = `Total: Ksh ${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
  }

  // Show/Hide cart
  viewCartBtn.addEventListener("click", () => {
    cartSection.classList.remove("hidden");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSection.classList.add("hidden");
  });

  // ✅ Rider functions (only this part updated)
  function renderRiderOrders() {
    riderOrdersList.innerHTML = "";
    let earnings = 0;

    riderOrders.forEach((order, index) => {
      if (order.status === "Delivered") {
        earnings += order.price * 0.2; // Rider earns 20% per delivery
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${order.customer}</strong> ordered 
          <em>${order.item}</em> - Ksh ${order.price}
          <span style="margin-left:8px; color:${
            order.status === "Delivered" ? "#27ae60" : "#e67e22"
          }">[${order.status}]</span>
        </div>
        <button data-index="${index}">
          ${order.status === "Pending" ? "Start Delivery" : 
             order.status === "On the way" ? "Mark Delivered" : "✔ Done"}
        </button>
      `;

      // Disable button if already delivered
      if (order.status === "Delivered") {
        li.querySelector("button").disabled = true;
        li.querySelector("button").style.background = "#95a5a6";
        li.querySelector("button").style.cursor = "not-allowed";
      }

      li.querySelector("button").addEventListener("click", (e) => {
        const orderIndex = e.target.dataset.index;
        const currentStatus = riderOrders[orderIndex].status;
        if (currentStatus === "Pending") riderOrders[orderIndex].status = "On the way";
        else if (currentStatus === "On the way") riderOrders[orderIndex].status = "Delivered";
        renderRiderOrders();
      });

      riderOrdersList.appendChild(li);
    });

    riderEarnings.textContent = `Total Earnings: Ksh ${earnings.toFixed(2)}`;
  }

  viewRiderBtn.addEventListener("click", () => {
    riderSection.classList.remove("hidden");
    renderRiderOrders();
  });

  closeRiderBtn.addEventListener("click", () => {
    riderSection.classList.add("hidden");
  });
});
