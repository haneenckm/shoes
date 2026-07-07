"use strict";

const IMAGE_URLS = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85"
];

const PRODUCTS = [
  ["Air Jordan 1 High OG Chicago", "Nike", 1985, "Excellent", 48999, "Men", [7, 8, 9, 10, 11], "#e43b2f"],
  ["Air Jordan 1 Travis Scott Mocha", "Nike", 2019, "New", 128999, "Men", [8, 9, 10, 11, 12], "#9a6749"],
  ["Air Jordan 1 Lost & Found", "Nike", 2022, "New", 44999, "Men", [7, 8, 9, 10.5, 11], "#e7e0d3"],
  ["Air Jordan 1 Shattered Backboard", "Nike", 2015, "Very Good", 89999, "Men", [8, 9, 10, 11], "#f37521"],
  ["Air Jordan 1 Dior", "Nike", 2020, "New", 799999, "Men", [8, 9, 10, 11], "#c9d0d3"],
  ["Nike Dunk Low Panda", "Nike", 2021, "New", 14999, "Women", [6, 7, 8, 9, 10], "#f2f0ea"],
  ["Nike Dunk Low Syracuse", "Nike", 2020, "Excellent", 21999, "Men", [7, 8, 9, 10, 11], "#f36c21"],
  ["Nike SB Dunk Low Chunky Dunky", "Nike", 2020, "New", 159999, "Men", [8, 9, 10, 11], "#56bce9"],
  ["Nike SB Dunk Low Travis Scott", "Nike", 2020, "Excellent", 154999, "Men", [8, 9, 10, 11], "#c7a47b"],
  ["Nike SB Dunk Grateful Dead", "Nike", 2020, "New", 139999, "Men", [7, 8, 9, 10], "#b8ec32"],
  ["Yeezy Boost 350 V2 Zebra", "Adidas", 2017, "Excellent", 28999, "Men", [7, 8, 9, 10, 11], "#efeee8"],
  ["Yeezy Boost 350 V2 Beluga", "Adidas", 2016, "Very Good", 26999, "Men", [8, 9, 10, 11, 12], "#77716c"],
  ["Yeezy Boost 350 V2 Onyx", "Adidas", 2022, "New", 23999, "Men", [7, 8, 9, 10, 11], "#202020"],
  ["Yeezy Boost 700 Wave Runner", "Adidas", 2017, "Excellent", 34999, "Men", [7, 8, 9, 10.5, 11], "#d9cbb5"],
  ["Yeezy Foam Runner", "Adidas", 2020, "New", 17999, "Women", [6, 7, 8, 9, 10], "#d7cbb7"],
  ["New Balance 550 Aimé Leon Dore", "New Balance", 2020, "Excellent", 29999, "Men", [7, 8, 9, 10, 11], "#e4dfcb"],
  ["New Balance 990v3 Joe Freshgoods", "New Balance", 2021, "New", 38999, "Men", [8, 9, 10, 11], "#4179ba"],
  ["New Balance 2002R Rain Cloud Grey", "New Balance", 2021, "Very Good", 22999, "Women", [6, 7, 8, 9, 10], "#b8b8b4"],
  ["New Balance 9060 Slate", "New Balance", 2023, "New", 24999, "Men", [7, 8, 9, 10, 11], "#66717b"],
  ["New Balance 990v5 Classic Grey", "New Balance", 2019, "Excellent", 27999, "Men", [8, 9, 10, 11, 12], "#a6a39d"],
  ["Asics Gel-Kayano 14 JJJJound", "Asics", 2022, "New", 56999, "Men", [7, 8, 9, 10, 11], "#dedbd2"],
  ["Asics Gel-Lyte III Kith Cream", "Asics", 2020, "Excellent", 31999, "Women", [6, 7, 8, 9, 10], "#eee0c9"],
  ["Asics Gel-Kayano 14 White Sage", "Asics", 2023, "New", 24999, "Women", [6, 7, 8, 9, 10], "#b8c8ae"],
  ["Asics GT-2160 Metallic Plum", "Asics", 2024, "New", 21999, "Women", [6, 7, 8, 9], "#9b839f"],
  ["Asics Gel-NYC Earth", "Asics", 2023, "Excellent", 23999, "Men", [7, 8, 9, 10, 11], "#927a61"],
  ["Nike Air Max 1 OG Infrared", "Nike", 1987, "Excellent", 34999, "Men", [7, 8, 9, 10, 11], "#ee4b42"],
  ["Nike Air Max 1 Travis Scott Cactus Jack", "Nike", 2022, "New", 39999, "Men", [8, 9, 10, 11], "#bb8b65"],
  ["Nike Air Max 1/97 Sean Wotherspoon", "Nike", 2018, "Very Good", 94999, "Men", [7, 8, 9, 10, 11], "#e5be3e"],
  ["Nike Air Max 1 Atmos Elephant", "Nike", 2007, "Excellent", 129999, "Men", [8, 9, 10, 11], "#53a889"],
  ["Nike Air Max 90 Off-White Black", "Nike", 2019, "New", 109999, "Men", [7, 8, 9, 10, 11], "#202020"]
].map((product, index) => ({
  id: `KZ-${String(index + 1).padStart(3, "0")}`,
  name: product[0],
  brand: product[1],
  year: product[2],
  condition: product[3],
  price: product[4],
  gender: product[5],
  sizes: product[6],
  color: product[7],
  image: IMAGE_URLS[index % IMAGE_URLS.length],
  available: true
}));

const ORDER_STEPS = ["Pending", "Payment Done", "Order Placed", "Order Delivered"];
const STATUS_COLORS = {
  Pending: "#d07a00",
  "Payment Done": "#5a55c5",
  "Order Placed": "#063575",
  "Order Delivered": "#198754"
};
const STORAGE_KEY = "kelzado-state-v1";
const ADMIN_HASH = "dd85ddf3767c241249e30fa31d266a8399f311a6fea04a0f0f713df9ecf3ad48";

const defaultState = {
  customProducts: [],
  cart: [],
  wishlist: [],
  orders: [],
  profile: {
    name: "",
    phone: "",
    address: "",
    credit: 0
  }
};

const state = loadState();
const dom = {
  productGrid: document.querySelector("#product-grid"),
  productTemplate: document.querySelector("#product-template"),
  emptyState: document.querySelector("#empty-state"),
  resultCount: document.querySelector("#result-count"),
  filters: document.querySelector("#filters"),
  search: document.querySelector("#search-filter"),
  gender: document.querySelector("#gender-filter"),
  brand: document.querySelector("#brand-filter"),
  sort: document.querySelector("#sort-filter"),
  cartCount: document.querySelector("#cart-count"),
  wishlistCount: document.querySelector("#wishlist-count"),
  cartList: document.querySelector("#cart-list"),
  wishlistList: document.querySelector("#wishlist-list"),
  subtotal: document.querySelector("#cart-subtotal"),
  backdrop: document.querySelector("#backdrop"),
  checkout: document.querySelector("#checkout-overlay"),
  checkoutSummary: document.querySelector("#checkout-summary"),
  orderList: document.querySelector("#order-list"),
  adminOrders: document.querySelector("#admin-orders"),
  addressForm: document.querySelector("#address-form"),
  customerForm: document.querySelector("#customer-form"),
  wallet: document.querySelector("#profile-wallet"),
  toastRegion: document.querySelector("#toast-region")
};

let productNodes = [];
let activePanel = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...structuredClone(defaultState),
      ...saved,
      profile: { ...defaultState.profile, ...(saved?.profile || {}) }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allProducts() {
  return [...PRODUCTS, ...state.customProducts];
}

function findProduct(id) {
  return allProducts().find((product) => product.id === id);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function getFilteredProducts() {
  const query = dom.search.value.trim().toLowerCase();
  let products = allProducts().filter((product) => {
    const matchesText = `${product.name} ${product.brand}`.toLowerCase().includes(query);
    const matchesGender = dom.gender.value === "all" || product.gender === dom.gender.value;
    const matchesBrand = dom.brand.value === "all" || product.brand === dom.brand.value;
    return product.available && matchesText && matchesGender && matchesBrand;
  });

  const sorters = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "year-desc": (a, b) => b.year - a.year
  };
  if (sorters[dom.sort.value]) products = products.sort(sorters[dom.sort.value]);
  return products;
}

function renderProducts() {
  const products = getFilteredProducts();
  const fragment = document.createDocumentFragment();
  dom.productGrid.replaceChildren();

  products.forEach((product, index) => {
    const card = dom.productTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    const circle = card.querySelector(".product-circle");
    const wishlistButton = card.querySelector(".wish-button");
    const sizeSelect = card.querySelector(".size-select");

    card.dataset.id = product.id;
    circle.style.setProperty("--circle", product.color);
    image.src = product.image;
    image.alt = `${product.name} sneaker`;
    image.addEventListener("error", () => {
      image.src = IMAGE_URLS[(index + 1) % IMAGE_URLS.length];
    }, { once: true });
    card.querySelector(".item-number").textContent = `ITEM: ${product.id.replace("KZ-", "")}`;
    card.querySelector("h3").textContent = `${product.brand} ${product.name}, ${product.year}`;
    card.querySelector(".product-meta").textContent = `${product.gender.toUpperCase()} / SIZES ${product.sizes.join(", ")}`;
    card.querySelector(".product-condition").textContent = `${product.condition.toUpperCase()} CONDITION`;
    card.querySelector(".product-price").textContent = formatCurrency(product.price);
    product.sizes.forEach((size) => sizeSelect.add(new Option(size, size)));

    wishlistButton.dataset.id = product.id;
    wishlistButton.classList.toggle("active", state.wishlist.includes(product.id));
    wishlistButton.textContent = state.wishlist.includes(product.id) ? "♥" : "♡";
    card.querySelector(".add-cart").dataset.id = product.id;
    fragment.append(card);
  });

  dom.productGrid.append(fragment);
  dom.resultCount.textContent = `${products.length} ITEM${products.length === 1 ? "" : "S"}`;
  dom.emptyState.hidden = products.length > 0;
  productNodes = [...document.querySelectorAll(".product-card")].map((card) => ({
    card,
    circle: card.querySelector(".product-circle"),
    image: card.querySelector("img"),
    offsetX: 0,
    offsetY: 0
  }));
}

function resetFilters() {
  dom.filters.reset();
  requestAnimationFrame(renderProducts);
}

function addToCart(productId, size) {
  const existing = state.cart.find((item) => item.id === productId && String(item.size) === String(size));
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, size, quantity: 1 });
  }
  persist();
  renderCart();
  toast("ADDED TO CART");
}

function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index >= 0) {
    state.wishlist.splice(index, 1);
    toast("REMOVED FROM WISHLIST");
  } else {
    state.wishlist.push(productId);
    toast("SAVED TO WISHLIST");
  }
  persist();
  renderProducts();
  renderWishlist();
}

function renderCart() {
  const fragment = document.createDocumentFragment();
  let subtotal = 0;
  let quantity = 0;
  dom.cartList.replaceChildren();

  state.cart.forEach((item, index) => {
    const product = findProduct(item.id);
    if (!product) return;
    subtotal += product.price * item.quantity;
    quantity += item.quantity;
    const row = document.createElement("article");
    row.className = "panel-item";
    row.innerHTML = `
      <img src="${product.image}" alt="${escapeHtml(product.name)}" style="--item-color:${product.color}">
      <div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>US ${escapeHtml(String(item.size))} / ${formatCurrency(product.price)}</p>
        <div class="quantity-controls">
          <button type="button" data-cart-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove-button interactive" type="button" data-cart-action="remove" data-index="${index}">REMOVE</button>
    `;
    fragment.append(row);
  });

  dom.cartList.append(fragment);
  dom.cartCount.textContent = quantity;
  dom.subtotal.textContent = formatCurrency(subtotal);
  document.querySelector("#checkout-button").disabled = state.cart.length === 0;
}

function renderWishlist() {
  const fragment = document.createDocumentFragment();
  dom.wishlistList.replaceChildren();
  state.wishlist.forEach((id) => {
    const product = findProduct(id);
    if (!product) return;
    const row = document.createElement("article");
    row.className = "panel-item";
    row.innerHTML = `
      <img src="${product.image}" alt="${escapeHtml(product.name)}" style="--item-color:${product.color}">
      <div><h3>${escapeHtml(product.name)}</h3><p>${formatCurrency(product.price)}</p></div>
      <button class="remove-button interactive" type="button" data-wishlist-remove="${product.id}">REMOVE</button>
    `;
    fragment.append(row);
  });
  dom.wishlistList.append(fragment);
  dom.wishlistCount.textContent = state.wishlist.length;
}

function cartSubtotal() {
  return state.cart.reduce((total, item) => {
    const product = findProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function prepareCheckout() {
  if (!state.cart.length) {
    toast("YOUR CART IS EMPTY");
    return;
  }
  closePanel();
  const lines = state.cart.map((item) => {
    const product = findProduct(item.id);
    return `<div class="checkout-line"><span>${item.quantity} × ${escapeHtml(product.name)} / US ${escapeHtml(String(item.size))}</span><strong>${formatCurrency(product.price * item.quantity)}</strong></div>`;
  }).join("");
  dom.checkoutSummary.innerHTML = `${lines}<div class="checkout-line checkout-total"><span>TOTAL</span><strong>${formatCurrency(cartSubtotal())}</strong></div>`;
  setCheckoutStage("summary");
  dom.checkout.classList.add("open");
  dom.checkout.setAttribute("aria-hidden", "false");
  document.body.classList.add("checkout-open");
}

function closeCheckout() {
  dom.checkout.classList.remove("open");
  dom.checkout.setAttribute("aria-hidden", "true");
  document.body.classList.remove("checkout-open");
}

function setCheckoutStage(stage) {
  document.querySelectorAll(".checkout-stage").forEach((element) => {
    element.classList.toggle("active", element.dataset.checkoutStage === stage);
  });
}

function completeOrder() {
  const id = `KZ-ORDER-${Date.now().toString().slice(-7)}`;
  const order = {
    id,
    items: structuredClone(state.cart),
    total: cartSubtotal(),
    status: "Order Placed",
    createdAt: new Date().toISOString(),
    events: [
      { status: "Pending", date: new Date().toISOString() },
      { status: "Payment Done", date: new Date().toISOString() },
      { status: "Order Placed", date: new Date().toISOString() }
    ]
  };
  state.orders.unshift(order);
  state.cart = [];
  persist();
  renderCart();
  renderOrders();
  document.querySelector("#success-order-id").textContent = `${id} / ${formatCurrency(order.total)}`;
  setCheckoutStage("success");
}

function renderOrders() {
  dom.orderList.replaceChildren();
  dom.adminOrders.replaceChildren();
  state.orders.forEach((order) => {
    dom.orderList.append(createOrderCard(order, false));
    dom.adminOrders.append(createOrderCard(order, true));
  });
}

function createOrderCard(order, admin) {
  const card = document.createElement("article");
  const currentIndex = ORDER_STEPS.indexOf(order.status);
  card.className = "order-card";
  const timeline = ORDER_STEPS.map((step, index) => `
    <div class="timeline-step ${index <= currentIndex ? "done" : ""}">${step.toUpperCase()}</div>
  `).join("");
  const actions = admin ? `
    <div class="order-actions">
      ${ORDER_STEPS.map((step) => `<button class="interactive" type="button" data-order-id="${order.id}" data-order-status="${step}">${step.toUpperCase()}</button>`).join("")}
    </div>
  ` : "";
  card.innerHTML = `
    <header>
      <h3>${order.id}</h3>
      <span class="status-badge" style="--status-color:${STATUS_COLORS[order.status]}">${order.status.toUpperCase()}</span>
    </header>
    <p>${new Date(order.createdAt).toLocaleDateString("en-IN")} / ${formatCurrency(order.total)}</p>
    <div class="timeline">${timeline}</div>
    ${actions}
  `;
  return card;
}

function updateOrderStatus(orderId, status) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = status;
  order.events ||= [];
  order.events.push({ status, date: new Date().toISOString() });
  persist();
  renderOrders();
  toast(`${orderId}: ${status.toUpperCase()}`);
}

function hydrateProfile() {
  dom.addressForm.elements.name.value = state.profile.name;
  dom.addressForm.elements.phone.value = state.profile.phone;
  dom.addressForm.elements.address.value = state.profile.address;
  dom.customerForm.elements.phone.value = state.profile.phone;
  dom.customerForm.elements.address.value = state.profile.address;
  dom.customerForm.elements.credit.value = state.profile.credit;
  dom.wallet.textContent = `STORE CREDIT: ${formatCurrency(state.profile.credit)}`;
}

function saveProfile(formData, includeName = false) {
  if (includeName) state.profile.name = String(formData.get("name") || "").trim();
  state.profile.phone = String(formData.get("phone") || "").trim();
  state.profile.address = String(formData.get("address") || "").trim();
  if (formData.has("credit")) state.profile.credit = Number(formData.get("credit")) || 0;
  persist();
  hydrateProfile();
  toast("CUSTOMER PROFILE UPDATED");
}

function addInventory(form) {
  const data = new FormData(form);
  const sizes = String(data.get("sizes"))
    .split(",")
    .map((size) => Number(size.trim()))
    .filter((size) => Number.isFinite(size));
  if (!sizes.length) {
    toast("ENTER AT LEAST ONE VALID SIZE");
    return;
  }
  state.customProducts.push({
    id: `KZ-C${Date.now().toString().slice(-6)}`,
    name: String(data.get("name")).trim(),
    brand: String(data.get("brand")),
    year: Number(data.get("year")),
    condition: String(data.get("condition")).trim(),
    price: Number(data.get("price")),
    gender: String(data.get("gender")),
    image: String(data.get("image")).trim(),
    sizes,
    color: String(data.get("color")),
    available: data.get("available") === "on"
  });
  persist();
  form.reset();
  renderProducts();
  toast("INVENTORY UPDATED LIVE");
}

async function hashText(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function openPanel(name) {
  closePanel();
  const panel = document.querySelector(`#${name}-panel`);
  if (!panel) return;
  activePanel = panel;
  dom.backdrop.hidden = false;
  requestAnimationFrame(() => {
    dom.backdrop.classList.add("visible");
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
  });
  document.body.classList.add("panel-open");
}

function closePanel() {
  if (activePanel) {
    activePanel.classList.remove("open");
    activePanel.setAttribute("aria-hidden", "true");
    activePanel = null;
  }
  dom.backdrop.classList.remove("visible");
  document.body.classList.remove("panel-open");
  window.setTimeout(() => {
    if (!activePanel) dom.backdrop.hidden = true;
  }, 400);
}

function switchView(group, name) {
  document.querySelectorAll(`[data-${group}-tab]`).forEach((button) => {
    button.classList.toggle("active", button.dataset[`${group}Tab`] === name);
  });
  document.querySelectorAll(`[data-${group}-view]`).forEach((view) => {
    view.classList.toggle("active", view.dataset[`${group}View`] === name);
  });
}

function toast(message) {
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  dom.toastRegion.append(element);
  window.setTimeout(() => element.remove(), 2600);
}

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function bindEvents() {
  dom.filters.addEventListener("input", renderProducts);
  dom.filters.addEventListener("change", renderProducts);
  dom.filters.addEventListener("reset", () => requestAnimationFrame(renderProducts));
  document.querySelector("#clear-filters").addEventListener("click", resetFilters);

  dom.productGrid.addEventListener("click", (event) => {
    const wishlistButton = event.target.closest(".wish-button");
    if (wishlistButton) {
      toggleWishlist(wishlistButton.dataset.id);
      return;
    }
    const addButton = event.target.closest(".add-cart");
    if (addButton) {
      const card = addButton.closest(".product-card");
      addToCart(addButton.dataset.id, card.querySelector(".size-select").value);
    }
  });

  dom.cartList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-action]");
    if (!button) return;
    const index = Number(button.dataset.index);
    const item = state.cart[index];
    if (!item) return;
    if (button.dataset.cartAction === "increase") item.quantity += 1;
    if (button.dataset.cartAction === "decrease") item.quantity -= 1;
    if (button.dataset.cartAction === "remove" || item.quantity <= 0) state.cart.splice(index, 1);
    persist();
    renderCart();
  });

  dom.wishlistList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-wishlist-remove]");
    if (button) toggleWishlist(button.dataset.wishlistRemove);
  });

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open-panel]");
    if (opener) {
      if (dom.checkout.classList.contains("open")) closeCheckout();
      openPanel(opener.dataset.openPanel);
    }
    if (event.target.closest("[data-close-panel]")) closePanel();
  });

  dom.backdrop.addEventListener("click", closePanel);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
      closeCheckout();
    }
  });

  document.querySelectorAll("[data-profile-tab]").forEach((button) => {
    button.addEventListener("click", () => switchView("profile", button.dataset.profileTab));
  });
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.addEventListener("click", () => switchView("admin", button.dataset.adminTab));
  });

  dom.addressForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveProfile(new FormData(event.currentTarget), true);
  });
  dom.customerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveProfile(new FormData(event.currentTarget));
  });
  document.querySelector("#inventory-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addInventory(event.currentTarget);
  });

  document.querySelector("#admin-login").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const error = document.querySelector("#admin-error");
    const input = document.querySelector("#admin-passkey");
    const hash = await hashText(input.value);
    if (hash === ADMIN_HASH) {
      form.hidden = true;
      document.querySelector("#admin-console").hidden = false;
      error.textContent = "";
      input.value = "";
      toast("OWNER CONSOLE UNLOCKED");
    } else {
      error.textContent = "INVALID OWNER PASSKEY.";
    }
  });

  dom.adminOrders.addEventListener("click", (event) => {
    const button = event.target.closest("[data-order-status]");
    if (button) updateOrderStatus(button.dataset.orderId, button.dataset.orderStatus);
  });

  document.querySelector("#checkout-button").addEventListener("click", prepareCheckout);
  document.querySelector("#checkout-close").addEventListener("click", closeCheckout);
  document.querySelector("#gateway-button").addEventListener("click", () => setCheckoutStage("gateway"));
  document.querySelector("#payment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const button = document.querySelector("#pay-button");
    button.disabled = true;
    button.textContent = "PROCESSING...";
    window.setTimeout(() => {
      completeOrder();
      button.disabled = false;
      button.textContent = "SIMULATE PAYMENT";
    }, 1000);
  });
}

function initMotionEngine() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cursor = document.querySelector(".cursor");
  const progress = document.querySelector(".scroll-progress");
  const orbitA = document.querySelector(".orbit-circle-a");
  const orbitB = document.querySelector(".orbit-circle-b");
  const pointer = { x: innerWidth / 2, y: innerHeight / 2, px: innerWidth / 2, py: innerHeight / 2, speed: 0, hover: false };
  const scroll = { current: window.scrollY, target: window.scrollY };
  const lerp = (from, to, amount = 0.08) => from + (to - from) * amount;

  window.addEventListener("pointermove", (event) => {
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    pointer.speed = Math.min(35, Math.hypot(dx, dy));
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    pointer.hover = Boolean(event.target.closest(".interactive, a, button, select, input, textarea"));
  });

  if (!prefersReducedMotion && matchMedia("(pointer:fine)").matches) {
    window.addEventListener("wheel", (event) => {
      if (document.body.classList.contains("panel-open") || document.body.classList.contains("checkout-open")) return;
      event.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - innerHeight;
      scroll.target = Math.max(0, Math.min(maxScroll, scroll.target + event.deltaY));
    }, { passive: false });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        scroll.target = target.getBoundingClientRect().top + window.scrollY;
      });
    });

    window.addEventListener("keydown", (event) => {
      if (document.body.classList.contains("panel-open") || document.body.classList.contains("checkout-open")) return;
      const increments = {
        ArrowDown: 80,
        ArrowUp: -80,
        PageDown: innerHeight * 0.85,
        PageUp: innerHeight * -0.85,
        Home: -Infinity,
        End: Infinity
      };
      if (!(event.key in increments)) return;
      event.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - innerHeight;
      const increment = increments[event.key];
      scroll.target = increment === Infinity ? maxScroll : increment === -Infinity ? 0 : Math.max(0, Math.min(maxScroll, scroll.target + increment));
    });
  }

  window.addEventListener("scroll", () => {
    if (prefersReducedMotion || matchMedia("(pointer:coarse)").matches) {
      scroll.current = window.scrollY;
      scroll.target = window.scrollY;
    }
  }, { passive: true });

  function frame() {
    if (!prefersReducedMotion) {
      scroll.current = lerp(scroll.current, scroll.target);
      if (Math.abs(scroll.current - window.scrollY) > 0.25 && !document.body.classList.contains("panel-open") && !document.body.classList.contains("checkout-open")) {
        window.scrollTo(0, scroll.current);
      }
      pointer.px = lerp(pointer.px, pointer.x);
      pointer.py = lerp(pointer.py, pointer.y);
      pointer.speed = lerp(pointer.speed, 0, 0.12);
      const stretch = 1 + pointer.speed * 0.018;
      const size = pointer.hover ? 52 : 28;
      const angle = Math.atan2(pointer.y - pointer.py, pointer.x - pointer.px) * 180 / Math.PI;
      cursor.style.width = `${lerp(parseFloat(cursor.style.width) || 28, size, 0.08)}px`;
      cursor.style.height = `${lerp(parseFloat(cursor.style.height) || 28, size, 0.08)}px`;
      cursor.style.transform = `translate3d(${pointer.px}px, ${pointer.py}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${stretch}, ${1 / Math.sqrt(stretch)})`;

      const viewportCenterX = innerWidth / 2;
      const viewportCenterY = innerHeight / 2;
      productNodes.forEach((node) => {
        const rect = node.card.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > innerHeight + 100) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (pointer.x - centerX) / Math.max(rect.width, 1);
        const mouseY = (pointer.y - centerY) / Math.max(rect.height, 1);
        const scrollOffset = (centerY - viewportCenterY) / Math.max(innerHeight, 1);
        node.offsetX = lerp(node.offsetX, mouseX * 12, 0.08);
        node.offsetY = lerp(node.offsetY, mouseY * 8 - scrollOffset * 15, 0.08);
        node.circle.style.transform = `translate3d(${node.offsetX * 0.35}px, ${node.offsetY * 0.35}px, 0)`;
        node.image.style.transform = `translate3d(${node.offsetX}px, ${node.offsetY}px, 0) scale(1.1)`;
      });

      const nx = (pointer.x - viewportCenterX) / viewportCenterX;
      orbitA.style.transform = `translate3d(${nx * 35}px, ${scroll.current * -0.05}px, 0)`;
      orbitB.style.transform = `translate3d(${nx * -25}px, ${scroll.current * 0.035}px, 0)`;
    }

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress.style.transform = `scaleX(${Math.min(1, window.scrollY / maxScroll)})`;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function init() {
  renderProducts();
  renderCart();
  renderWishlist();
  renderOrders();
  hydrateProfile();
  bindEvents();
  initMotionEngine();
}

init();
