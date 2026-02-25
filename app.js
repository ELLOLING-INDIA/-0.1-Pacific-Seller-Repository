// ===== PACIFIC SELLER'S — SHARED JS =====

// ===== DB HELPERS =====
function getDB(k) {
  try { return JSON.parse(localStorage.getItem('ps_' + k) || '[]'); } catch { return []; }
}
function setDB(k, v) { localStorage.setItem('ps_' + k, JSON.stringify(v)); }

// ===== PRODUCT IMAGES (Unsplash) =====
const PROD_IMGS = {
  1: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
  2: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
  3: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80',
  4: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
  5: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&q=80',
  6: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80',
  7: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400&q=80',
  8: 'https://images.unsplash.com/photo-1594938298603-c8148c4b1f04?w=400&q=80',
  9: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
  10: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80'
};

// ===== SEED SAMPLE PRODUCTS =====
function seedData() {
  if (getDB('products').length > 0) return;
  setDB('products', [
    {
      id: 1, name: "Wireless Bluetooth Earbuds", category: "Electronics",
      price: 1299, mrp: 2499,
      desc: "Premium sound quality with 30hr battery, IPX5 water resistance, active noise cancellation. Crystal clear calls.",
      platforms: ["amazon", "flipkart"], rating: 4.5, reviews: 1247, stock: 150, sku: "PS-E001",
      features: "30hr Battery Life\nANC Technology\nIPX5 Water Resistant\nCrystal Clear Calls",
      imageUrl: PROD_IMGS[1], image: '', date: "2024-01-15"
    },
    {
      id: 2, name: "Stainless Steel Water Bottle", category: "Kitchen",
      price: 599, mrp: 999,
      desc: "Double-wall vacuum insulated keeps drinks cold 24hrs, hot 12hrs. BPA free, 100% leak proof design.",
      platforms: ["amazon", "flipkart", "meesho"], rating: 4.3, reviews: 892, stock: 300, sku: "PS-K001",
      features: "Keeps Cold 24hrs\nKeeps Hot 12hrs\nBPA Free\n100% Leak Proof",
      imageUrl: PROD_IMGS[2], image: '', date: "2024-01-20"
    },
    {
      id: 3, name: "Organic Cotton Kurta Set", category: "Fashion",
      price: 899, mrp: 1599,
      desc: "Handcrafted organic cotton kurta with pajama set. Available in multiple colors and sizes. Breathable fabric.",
      platforms: ["meesho", "flipkart"], rating: 4.1, reviews: 563, stock: 200, sku: "PS-F001",
      features: "100% Organic Cotton\nHandcrafted\nMultiple Sizes\nBreathable Fabric",
      imageUrl: PROD_IMGS[3], image: '', date: "2024-02-01"
    },
    {
      id: 4, name: "LED Desk Lamp with USB Charging", category: "Home & Office",
      price: 799, mrp: 1299,
      desc: "Touch control LED lamp with 5 brightness levels, USB-C charging port, 360° flexible neck, eye protection mode.",
      platforms: ["amazon"], rating: 4.6, reviews: 2103, stock: 120, sku: "PS-H001",
      features: "USB-C Charging Port\n5 Brightness Levels\n360° Flexible Neck\nEye Protection Mode",
      imageUrl: PROD_IMGS[4], image: '', date: "2024-02-10"
    },
    {
      id: 5, name: "Yoga Mat Anti-Slip", category: "Sports",
      price: 699, mrp: 1199,
      desc: "6mm thick premium TPE yoga mat with alignment lines. Non-slip texture on both sides. Includes carrying strap.",
      platforms: ["amazon", "meesho"], rating: 4.4, reviews: 734, stock: 250, sku: "PS-S001",
      features: "6mm TPE Thickness\nAnti-slip Both Sides\nAlignment Lines\nFree Carrying Strap",
      imageUrl: PROD_IMGS[5], image: '', date: "2024-02-15"
    },
    {
      id: 6, name: "Ceramic Coffee Mug Set (4 pcs)", category: "Kitchen",
      price: 449, mrp: 799,
      desc: "Set of 4 premium ceramic mugs, microwave & dishwasher safe. Unique hand-painted design. 350ml capacity each.",
      platforms: ["flipkart", "meesho"], rating: 4.2, reviews: 445, stock: 180, sku: "PS-K002",
      features: "Set of 4 Mugs\nMicrowave Safe\nDishwasher Safe\n350ml Capacity",
      imageUrl: PROD_IMGS[6], image: '', date: "2024-02-20"
    },
    {
      id: 7, name: "Premium Sunscreen SPF 50+", category: "Beauty & Health",
      price: 349, mrp: 599,
      desc: "Broad spectrum UVA/UVB protection, lightweight non-greasy formula, suitable for all skin types. Dermatologist tested.",
      platforms: ["amazon", "meesho", "flipkart"], rating: 4.5, reviews: 1893, stock: 400, sku: "PS-B001",
      features: "SPF 50+ PA++++\nNon-Greasy Formula\nWater Resistant\nDermatologist Tested",
      imageUrl: PROD_IMGS[7], image: '', date: "2024-03-01"
    },
    {
      id: 8, name: "Digital Kitchen Scale", category: "Kitchen",
      price: 499, mrp: 849,
      desc: "Precision digital scale with 0.1g accuracy, 5kg max capacity, tare function, stainless steel platform. 4 unit modes.",
      platforms: ["amazon", "flipkart"], rating: 4.3, reviews: 612, stock: 160, sku: "PS-K003",
      features: "0.1g Accuracy\n5kg Max Capacity\nTare Function\nStainless Steel Platform",
      imageUrl: PROD_IMGS[8], image: '', date: "2024-03-05"
    },
    {
      id: 9, name: "Men's Round-Neck T-Shirt Pack (3)", category: "Fashion",
      price: 599, mrp: 999,
      desc: "Pack of 3 premium 100% cotton round-neck t-shirts. Pre-shrunk fabric, available sizes S to 3XL. Machine washable.",
      platforms: ["meesho", "flipkart"], rating: 4.0, reviews: 2250, stock: 500, sku: "PS-F002",
      features: "Pack of 3 T-Shirts\n100% Cotton Pre-shrunk\nSizes S to 3XL\nMachine Washable",
      imageUrl: PROD_IMGS[9], image: '', date: "2024-03-10"
    },
    {
      id: 10, name: "Instant Camera Film Roll", category: "Electronics",
      price: 799, mrp: 1099,
      desc: "Compatible with all major instant cameras. 10 exposures per pack, vivid color reproduction, ISO 800 sensitivity.",
      platforms: ["amazon"], rating: 4.7, reviews: 389, stock: 80, sku: "PS-E002",
      features: "10 Exposures\nISO 800\nVivid Color Reproduction\nUniversal Compatibility",
      imageUrl: PROD_IMGS[10], image: '', date: "2024-03-15"
    }
  ]);
}

// ===== REVIEWS =====
const REVIEWS = [
  { text: "Product was great! Exactly as described. Super fast delivery!", author: "Rajesh K.", product: "Wireless Earbuds", stars: 5 },
  { text: "Amazing quality for the price. Will definitely buy again from Pacific Sellers!", author: "Priya M.", product: "Yoga Mat", stars: 5 },
  { text: "Great customer service! Resolved my query within minutes. Very professional.", author: "Anand S.", product: "LED Desk Lamp", stars: 5 },
  { text: "The packaging was excellent and product arrived in perfect condition.", author: "Sunita R.", product: "Ceramic Mug Set", stars: 4 },
  { text: "Best online shopping experience I've had in years. Highly recommend!", author: "Karthik L.", product: "Water Bottle", stars: 5 },
  { text: "Product quality is top-notch. Much better than I expected!", author: "Meena V.", product: "Cotton Kurta Set", stars: 5 },
  { text: "Super fast delivery and the product works perfectly. 10/10!", author: "Vijay P.", product: "Bluetooth Earbuds", stars: 5 },
  { text: "Genuine products at the best prices. Pacific Sellers is my go-to shop now.", author: "Deepa N.", product: "LED Desk Lamp", stars: 4 },
  { text: "COD option made it very convenient. No advance payment stress at all!", author: "Ravi T.", product: "Yoga Mat", stars: 5 },
  { text: "Loved it! The product looks even better in person. Great value for money.", author: "Lakshmi A.", product: "Coffee Mug Set", stars: 5 },
  { text: "Ordered 3 times already and never disappointed. Totally trustworthy!", author: "Sanjay B.", product: "Water Bottle", stars: 5 },
  { text: "Return process was hassle-free. Very professional and responsive team.", author: "Nithya C.", product: "Kurta Set", stars: 4 }
];

// ===== CART HELPERS =====
function getCart() {
  try { return JSON.parse(localStorage.getItem('ps_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('ps_cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const cart = getCart();
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = n);
}
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const p = getDB('products').find(x => x.id == id);
  if (!p) return;
  const cart = getCart();
  const ex = cart.find(i => i.id == id);
  if (ex) { ex.qty++; } else { cart.push({ id: p.id, name: p.name, price: p.price, image: p.image || p.imageUrl, category: p.category, qty: 1 }); }
  saveCart(cart);
  showToast('🛒 Added to cart!');
}

// ===== TOAST =====
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== NAV LOGO SVG =====
function navLogoSVG() {
  return `<svg height="40" viewBox="0 0 165 42" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" font-family="Bebas Neue,sans-serif" font-size="32" fill="white">Pacific</text>
    <text x="0" y="40" font-family="Outfit,sans-serif" font-size="9" fill="#888" letter-spacing="3">SELLER'S</text>
    <path d="M100,8 Q114,1 128,8" stroke="#F5C518" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <rect x="130" y="6" width="16" height="12" rx="2" stroke="#F5C518" stroke-width="1.5" fill="none"/>
    <rect x="125" y="10" width="6" height="8" rx="1" stroke="#F5C518" stroke-width="1.5" fill="none"/>
    <circle cx="130" cy="19" r="2.2" fill="#F5C518"/>
    <circle cx="142" cy="19" r="2.2" fill="#F5C518"/>
    <line x1="123" y1="13" x2="120" y2="13" stroke="#F5C518" stroke-width="1.5"/>
    <line x1="122" y1="17" x2="118" y2="17" stroke="#F5C518" stroke-width="1.5"/>
  </svg>`;
}

// ===== FOOTER HTML =====
function footerHTML() {
  return `<footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo-text"><span>Pacific</span> Seller's</div>
        <p style="color:var(--gray);font-size:13px;line-height:1.6;margin-top:10px;max-width:260px;">Your trusted e-commerce growth partner. We source premium products from top manufacturers and sell across India's leading marketplaces.</p>
        <div style="margin-top:16px;"><span class="fp fp-amazon">Amazon</span><span class="fp fp-flipkart">Flipkart</span><span class="fp fp-meesho">Meesho</span></div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <a href="index.html">Products</a>
        <a href="manufacturer.html">Partner With Us</a>
        <a href="index.html">About Us</a>
        <a href="index.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <a href="#">Track Order</a>
        <a href="#">Return Policy</a>
        <a href="#">Shipping Info</a>
        <a href="#">FAQs</a>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <a>📧 info@pacificsellers.in</a>
        <a>📞 +91 73057 92178</a>
        <a>📍 Chennai, Tamil Nadu</a>
        <a>⏰ Mon–Sat 9AM–6PM</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Pacific Seller's. All rights reserved.</p>
      <div class="footer-credit">Made with <span class="credit-heart">❤️</span> by <a href="https://elloling.com" target="_blank" rel="noopener noreferrer" class="credit-name">Elloling</a></div>
    </div>
  </footer>`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  seedData();
  updateCartCount();
});
