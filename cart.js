
let cart = JSON.parse(localStorage.getItem('lumiere_cart') || '[]');

function saveCart() {
  localStorage.setItem('lumiere_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1, svg: product.svgIcon });
  }
  saveCart();
  showToast(`"${product.name}" added to cart ✓`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(productId);
    else saveCart();
  }
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotalEl = document.getElementById('cartTotal');
  if (!cartItemsEl) return;
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.svg}</div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price}</p>
        <div class="cart-item-qty">
          <button onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');
  if (cartFooter) {
    cartFooter.style.display = 'block';
    cartTotalEl.textContent = total.toFixed(2);
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  document.body.classList.toggle('cart-open', !isOpen);
}

function toggleWishlist(productId, btn) {
  btn.classList.toggle('wishlisted');
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (btn.classList.contains('wishlisted')) {
    showToast(`Added to wishlist ♡`);
    btn.querySelector('svg').style.fill = '#c9a86c';
    btn.querySelector('svg').style.stroke = '#c9a86c';
  } else {
    btn.querySelector('svg').style.fill = 'none';
    btn.querySelector('svg').style.stroke = 'currentColor';
  }
}

// Initialize
updateCartUI();
