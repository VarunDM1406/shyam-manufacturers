const products = [
  [
    "Classic White",
    "white",
    "Clean, reliable cups for tea, coffee and refreshment counters.",
    "₹0.72",
  ],
  [
    "Kraft Earth",
    "kraft",
    "An honest, natural look for conscious hospitality.",
    "₹1.08",
  ],
  [
    "Café Series",
    "terracotta",
    "Double-wall comfort for every warm, unhurried pour.",
    "₹1.62",
  ],
  [
    "Custom Print",
    "dark",
    "Turn each serving into a quiet brand moment.",
    "₹1.35",
  ],
];
const cup = (color, tall = false) =>
  `<div class="cup-visual"><div class="cup ${color}" style="${tall ? "height:118px;width:86px" : ""}"></div></div>`;
const productCards = (large = false) =>
  products
    .map((p, i) =>
      large
        ? `<article class="catalogue-card">${cup(p[1], true)}<div><small class="eyebrow">Series 0${i + 1}</small><h3>${p[0]}</h3><p>${p[2]}</p><div class="sizes"><span>90 ml</span><span>150 ml</span><span>250 ml</span></div><div class="price-row"><div><small>Starting at</small><b>${p[3]} / cup</b></div><a class="link-arrow" href="/contact" data-link>Request quote →</a></div></div></article>`
        : `<article class="product">${cup(p[1])}<small>Series 0${i + 1}</small><h3>${p[0]}</h3><p>${p[2]}</p><div class="product-bottom"><b>From ${p[3]}</b><a href="/catalogue" data-link>↗</a></div></article>`,
    )
    .join("");
const pageHead = (label, title, text) =>
  `<section class="page-head"><div class="eyebrow">${label}</div><h1>${title}</h1><p>${text}</p></section>`;
const home = () =>
  `<section class="hero"><div class="hero-copy"><div class="eyebrow">Since 2004 · Jaipur, India</div><h1>Every good pour<br>deserves a <em>better cup.</em></h1><p>Dependable paper cups, thoughtfully made for cafés, caterers, distributors and everyday India.</p><div class="hero-actions"><a class="solid-btn" href="/catalogue" data-link>Explore our cups</a><a class="text-btn" href="/contact" data-link>Talk to our team →</a></div></div><div class="hero-stat"><strong>12M+</strong><span>Cups crafted<br>every month</span></div></section><div class="strip"><div><span class="dots">● ● ●</span> Food-safe & quality tested</div><div>FSC-grade paperboard</div><div>Nationwide dispatch</div></div><section class="section"><div class="split-title"><div><div class="eyebrow">The collection</div><h2>Made for the way<br>India drinks.</h2></div><p>From a quick chai to a slow-brewed coffee, there’s a Shyam cup made to fit the moment.</p><a class="link-arrow" href="/catalogue" data-link>View full catalogue →</a></div><div class="product-grid">${productCards()}</div></section><section class="section about"><div class="about-card"><div class="eyebrow">Our promise</div><h3>Consistency you can hold.</h3><p>We believe the smallest details make the biggest impression. So every cup leaves our floor ready to perform.</p></div><div class="about-copy"><div class="eyebrow">Why Shyam</div><h2>Built for busy counters. Made with a lighter touch.</h2><p>Our modern facility combines precise manufacturing with a people-first approach—so your operation keeps moving, cup after cup.</p><div class="checks"><div><span>✓</span> Leak-resistant seams</div><div><span>✓</span> Food-grade inks</div><div><span>✓</span> Reliable bulk supply</div><div><span>✓</span> Custom branding</div></div></div></section><section class="offer-panel"><div><div class="eyebrow" style="color:#fff3dc">Live factory offer</div><h2>Save more on your next bulk order.</h2><p>Enjoy 20% off selected Classic White cup cartons. Ends July 31.</p></div><a class="solid-btn" href="/offers" data-link>See the live offer →</a></section>`;
const catalogue = () =>
  `${pageHead("Products / catalogue", "A cup for every kind of service.", "Built to work beautifully across cafés, events, offices, institutions and growing brands.")}<div class="catalogue-filter"><button class="filter active">All cups</button><button class="filter">Hot drinks</button><button class="filter">Cold drinks</button><button class="filter">Custom print</button></div><section class="section"><div class="catalogue-grid">${productCards(true)}</div></section>`;
const pricing = () =>
  `${pageHead("Business / pricing", "Straightforward bulk pricing.", "Indicative ex-factory pricing for standard white paper cups. Final price depends on quantity, specification and delivery location.")}<section class="section"><div class="pricing-wrap"><table class="price-table"><thead><tr><th>Product</th><th>Carton quantity</th><th>From (per cup)</th></tr></thead><tbody><tr><td>65 ml Classic White</td><td>5,000 cups</td><td>₹0.72</td></tr><tr><td>90 ml Classic White</td><td>5,000 cups</td><td>₹0.84</td></tr><tr><td>150 ml Classic White</td><td>3,000 cups</td><td>₹1.05</td></tr><tr><td>210 ml Kraft Earth</td><td>2,000 cups</td><td>₹1.36</td></tr><tr><td>250 ml Café Series</td><td>1,000 cups</td><td>₹1.62</td></tr></tbody></table><aside class="pricing-side"><div class="eyebrow" style="color:#fff3dc">Need volume pricing?</div><h2>Better rates start with a conversation.</h2><p>Ordering at scale or looking for a particular specification? Let’s build a quote around your exact need.</p><a class="solid-btn" href="/contact" data-link>Request a quote →</a></aside></div></section>`;
const offers = () =>
  `${pageHead("Live / offers", "Current factory offers.", "A few good reasons to stock up. Offers are updated directly from our production desk.")}<section class="section"><div class="offer-grid"><article class="offer-card live"><span class="badge">● LIVE NOW</span><h2>Classic White<br>carton offer</h2><div class="discount">20% off</div><p>On orders of 100 cartons or more of 90 ml and 150 ml Classic White cups. Valid until July 31, 2026.</p><br><a class="link-arrow" style="color:var(--lime);border-color:#71823d" href="/contact" data-link>Claim this offer →</a></article><article class="offer-card"><span class="badge" style="background:#ffe0d2">FOR NEW PARTNERS</span><h2>Try our custom<br>print service.</h2><div class="discount">Free</div><p>Complimentary artwork review and print-ready setup with qualifying custom-branding orders.</p><br><a class="link-arrow" href="/contact" data-link>Start a project →</a></article></div></section>`;
const contact = () =>
  `${pageHead("Contact / enquiries", "Let’s make something useful.", "Tell us what you need. A member of our team will get back to you within one business day.")}<section class="section"><div class="contact-layout"><div><div class="eyebrow">Factory desk</div><h2>Here when your<br>business needs us.</h2><p>For catalogue questions, bulk requirements or custom print ideas, reach out directly or leave a request.</p><div class="contact-details"><div><b>☎</b><p><span>Call our sales desk</span><strong>+91 98765 43210</strong></p></div><div><b>✉</b><p><span>Write to us</span><strong>hello@shyammfg.in</strong></p></div><div><b>⌖</b><p><span>Visit the plant</span><strong>Plot 18, Industrial Area, Jaipur</strong></p></div></div></div><form id="quote-form"><div><label>Your name<input required name="name" placeholder="e.g. Priya Sharma"></label></div><div><label>Phone number<input required name="phone" placeholder="Your contact number"></label></div><div><label>I am interested in<select name="interest"><option>Bulk paper cups</option><option>Custom printed cups</option><option>Distributor partnership</option></select></label></div><div><label>Tell us a little more<textarea name="message" placeholder="Quantity, cup size or requirement..."></textarea></label></div><button class="solid-btn">Send enquiry →</button><p class="form-message" aria-live="polite"></p></form></div></section>`;
const homeOfficial = () =>
  `<section class="hero"><div class="hero-copy"><div class="eyebrow">Samana · Punjab · India</div><h1>Every good pour<br>deserves a <em>better cup.</em></h1><p>Dependable paper cups, thoughtfully made for cafés, caterers, distributors and everyday India.</p><div class="hero-actions"><a class="solid-btn" href="/catalogue" data-link>Explore our cups</a><a class="text-btn" href="/contact" data-link>Talk to our team →</a></div></div><div class="hero-stat"><strong>150+</strong><span>Boxes unlock<br>our live offer</span></div></section><div class="strip"><div><span class="dots">● ● ●</span> Food-safe & quality tested</div><div>150 ml · 200 ml · 250 ml</div><div>Bulk orders welcome</div></div><section class="section"><div class="split-title"><div><div class="eyebrow">The collection</div><h2>Made for the way<br>India drinks.</h2></div><p>From a quick chai to a slow-brewed coffee, there’s a Shyam cup made to fit the moment.</p><a class="link-arrow" href="/catalogue" data-link>View full catalogue →</a></div><div class="product-grid">${productCards()}</div></section><section class="section about"><div class="about-card"><div class="eyebrow">Our promise</div><h3>Consistency you can hold.</h3><p>We believe the smallest details make the biggest impression. So every cup leaves our floor ready to perform.</p></div><div class="about-copy"><div class="eyebrow">Why Shyam</div><h2>Built for busy counters. Made with a lighter touch.</h2><p>Our modern facility combines precise manufacturing with a people-first approach—so your operation keeps moving, cup after cup.</p><div class="checks"><div><span>✓</span> Leak-resistant seams</div><div><span>✓</span> Food-grade inks</div><div><span>✓</span> Reliable bulk supply</div><div><span>✓</span> Custom branding</div></div></div></section><section class="offer-panel"><div><div class="eyebrow" style="color:#fff3dc">Live factory offer</div><h2>Buy 150 boxes. Get 2 boxes free.</h2><p>Available on bulk orders in 150 ml, 200 ml and 250 ml sizes.</p></div><a class="solid-btn" href="/offers" data-link>See the live offer →</a></section>`;
const offersOfficial = () =>
  `${pageHead("Live / offers", "Our current special offer.", "Available directly on bulk orders from Shyam Manufacturers, Samana, Punjab.")}<section class="section"><div class="offer-grid"><article class="offer-card live"><span class="badge">● LIVE NOW</span><h2>Buy 150 boxes.<br>Get 2 boxes free.</h2><div class="discount">2 FREE</div><p>Our limited-time bulk-order offer applies across 150 ml, 200 ml and 250 ml paper cup sizes.</p><br><a class="link-arrow" style="color:var(--lime);border-color:#71823d" href="/contact" data-link>Claim this offer →</a></article><article class="offer-card"><span class="badge" style="background:#ffe0d2">OFFICIAL OFFER</span><h2>Offer details<br>at a glance.</h2><img class="offer-art" src="/assets/special-offer.png" alt="Buy 150 boxes, get 2 boxes free. Available on bulk orders in 150, 200 and 250 ml sizes."><br><a class="link-arrow" href="/contact" data-link>Contact us to order →</a></article></div></section>`;
const contactOfficial = () =>
  `${pageHead("Contact / enquiries", "Let’s make something useful.", "Tell us what you need. A member of our team will get back to you within one business day.")}<section class="section"><div class="contact-layout"><div><div class="eyebrow">Factory desk</div><h2>Here when your<br>business needs us.</h2><p>For catalogue questions, bulk requirements or custom print ideas, reach out directly or leave a request.</p><div class="contact-details"><div><b>☎</b><p><span>Call our sales desk</span><strong>+91 76963 49227 · +91 98882 75175</strong></p></div><div><b>◎</b><p><span>Follow us on Instagram</span><strong>@shyam.manufacturers</strong></p></div><div><b>⌖</b><p><span>Visit the plant</span><strong>Samana, Punjab</strong></p></div></div></div><form id="quote-form"><div><label>Your name<input required name="name" placeholder="e.g. Priya Sharma"></label></div><div><label>Phone number<input required name="phone" placeholder="Your contact number"></label></div><div><label>I am interested in<select name="interest"><option>Bulk paper cups</option><option>Custom printed cups</option><option>Distributor partnership</option></select></label></div><div><label>Tell us a little more<textarea name="message" placeholder="Quantity, cup size or requirement..."></textarea></label></div><button class="solid-btn">Send enquiry →</button><p class="form-message" aria-live="polite"></p></form></div></section>`;
const designPages = [
  ["sweet-smile", "Sweet Smile", "150 ml · 180 GSM"],
  ["strong-coffee", "Strong Coffee", "Premium cup design"],
  ["teacafe", "Teacafe", "150 ml · 180 GSM"],
  ["coffee-time", "Coffee Time", "Premium cup design"],
  ["tea-break", "Tea Break", "200 ml · 180 GSM"],
  ["coffee-break-red", "Coffee Break", "180 / 210 GSM"],
  ["coffee-break-gold", "Coffee Break", "200 ml · 180 GSM"],
  ["juice", "Juice", "Premium cup design"],
];
const designCard = ([file, name, detail]) =>
  `<article class="visual-product"><button class="design-preview" data-preview data-src="/assets/catalogue/${file}.jpg" data-name="${name}" aria-label="Enlarge ${name} paper cup design"><img loading="lazy" src="/assets/catalogue/${file}.jpg" alt="${name} paper cup design"><span>View design ↗</span></button><div class="visual-caption"><small>Paper cup design</small><h3>${name}</h3><small>${detail}</small></div></article>`;
const catalogueDigital = () =>
  `${pageHead("Collection / cup designs", "Designed to be<br>held onto.", "Explore our premium paper cup design collection. Each design can be selected for your next serving experience.")}<section class="section"><div class="visual-catalogue">${designPages.map(designCard).join("")}</div><div class="catalogue-note"><div><h2>Looking for a design that feels like yours?</h2><p>Talk to our team about a paper cup design for your business.</p></div><a class="solid-btn" href="/contact" data-link>Talk to our team →</a></div></section>`;
const homeDigital = () =>
  `<section class="hero"><div class="hero-copy"><div class="eyebrow">Samana · Punjab · India</div><h1>Every good pour<br>deserves a <em>better cup.</em></h1><p>Thoughtfully made paper cups with premium designs for cafés, caterers, distributors and everyday India.</p><div class="hero-actions"><a class="solid-btn" href="/catalogue" data-link>Explore cup designs</a><a class="text-btn" href="/contact" data-link>Talk to our team →</a></div></div><div class="hero-stat"><strong>150+</strong><span>Boxes unlock<br>our live offer</span></div></section><div class="strip"><div><span class="dots">● ● ●</span> Food-safe & quality tested</div><div>150 ml · 200 ml · 250 ml</div><div>Bulk orders welcome</div></div><section class="section"><div class="split-title"><div><div class="eyebrow">The collection</div><h2>Choose a design<br>for every pour.</h2></div><p>Explore our most-loved designs, developed for memorable tea, coffee and refreshment moments.</p><a class="link-arrow" href="/catalogue" data-link>View all cup designs →</a></div><div class="visual-catalogue">${designPages.slice(0, 4).map(designCard).join("")}</div></section><section class="section about"><div class="about-card"><div class="eyebrow">Our promise</div><h3>Consistency you can hold.</h3><p>We believe the smallest details make the biggest impression. So every cup leaves our floor ready to perform.</p></div><div class="about-copy"><div class="eyebrow">Why Shyam</div><h2>Built for busy counters. Made with a lighter touch.</h2><p>Our modern facility combines precise manufacturing with a people-first approach—so your operation keeps moving, cup after cup.</p><div class="checks"><div><span>✓</span> Leak-resistant seams</div><div><span>✓</span> Food-grade inks</div><div><span>✓</span> Reliable bulk supply</div><div><span>✓</span> Custom branding</div></div></div></section><section class="offer-panel"><div><div class="eyebrow" style="color:#fff3dc">Live factory offer</div><h2>Buy 150 boxes. Get 2 boxes free.</h2><p>Available on bulk orders in 150 ml, 200 ml and 250 ml sizes.</p></div><a class="solid-btn" href="/offers" data-link>See the live offer →</a></section>`;
const pages = {
  "/": homeDigital,
  "/catalogue": catalogueDigital,
  "/offers": offersOfficial,
  "/contact": contactOfficial,
};
function render() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  document.getElementById("app").innerHTML = (pages[path] || home)();
  document
    .querySelectorAll("nav a")
    .forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === path),
    );
  document.querySelector(".menu").onclick = () =>
    document.querySelector("nav").classList.toggle("open");
  document.querySelectorAll("[data-link]").forEach(
    (a) =>
      (a.onclick = (e) => {
        e.preventDefault();
        history.pushState({}, "", a.href);
        render();
        window.scrollTo({ top: 0, behavior: "instant" });
      }),
  );
  const form = document.getElementById("quote-form");
  if (form)
    form.onsubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    const message = `Hello Shyam Manufacturers,

Name: ${data.name}

Phone: ${data.phone}

Interested In: ${data.interest}

Requirement:
${data.message}`;

    window.open(
        `https://wa.me/917696349227?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    form.reset();
};
    };
document.addEventListener("click", (e) => {
  const preview = e.target.closest("[data-preview]");
  const close = e.target.closest("[data-lightbox-close]");
  if (preview) {
    const modal = document.createElement("div");
    modal.className = "design-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `<button class="lightbox-close" data-lightbox-close aria-label="Close image preview">×</button><div class="lightbox-card"><img src="${preview.dataset.src}" alt="${preview.dataset.name} paper cup design enlarged"><p>${preview.dataset.name} <span>Paper cup design</span></p></div>`;
    document.body.append(modal);
    document.body.classList.add("lightbox-open");
    modal.querySelector("[data-lightbox-close]").focus();
  }
  if (close || e.target.classList.contains("design-lightbox")) {
    document.querySelector(".design-lightbox")?.remove();
    document.body.classList.remove("lightbox-open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".design-lightbox")?.remove();
    document.body.classList.remove("lightbox-open");
  }
});
window.onpopstate = render;
render();
