/* ==========================================================================
   CurateGreen — app.js
   Core application logic:
   - Page detection & initialisation
   - Component renderers (categories, products, services, blog cards)
   - WhatsApp URL builder
   - Product detail page
   - FAQ accordion
   - Contact form
   - Mobile nav toggle
   ========================================================================== */

const WA_NUMBER = "212612605737";
const WA_BASE   = `https://wa.me/${WA_NUMBER}`;

/* -------------------------------------------------------------------------
   WhatsApp URL builder
   ------------------------------------------------------------------------- */
function buildWaUrl(productName, weight, qty, area, isService = false) {
  const T = CG_I18N;
  let msg;
  if (isService) {
    msg = T.t("wa_service_prefix") + productName +
          T.t("wa_msg_area")       + (area || T.t("area_other")) +
          T.t("wa_msg_suffix");
  } else {
    msg = T.t("wa_msg_prefix")  + productName +
          T.t("wa_msg_weight")   + (weight || "—") +
          T.t("wa_msg_qty")      + (qty    || "1") +
          T.t("wa_msg_area")     + (area   || T.t("area_other")) +
          T.t("wa_msg_suffix");
  }
  return WA_BASE + "?text=" + encodeURIComponent(msg);
}

/* -------------------------------------------------------------------------
   Shared HTML snippets
   ------------------------------------------------------------------------- */
function headerHTML() {
  return `
  <a href="#main-content" class="skip-link" data-i18n="skip_link">تخطي للمحتوى</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a href="index.html" class="logo">
        <span class="logo-mark">🌿</span>
        <span>Curate<span class="accent">Green</span></span>
      </a>

      <nav class="main-nav" id="main-nav" aria-label="main navigation">
        <ul>
          <li><a href="index.html"          data-i18n="nav_home">الرئيسية</a></li>
          <li><a href="products.html"       data-i18n="nav_products">المنتجات</a></li>
          <li><a href="services.html"       data-i18n="nav_services">الخدمات</a></li>
          <li><a href="blog.html"           data-i18n="nav_blog">المدونة</a></li>
          <li><a href="faq.html"            data-i18n="nav_faq">أسئلة شائعة</a></li>
          <li><a href="contact.html"        data-i18n="nav_contact">تواصل معنا</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="search-wrap" style="position:relative;">
          <div class="search-box">
            <span>🔍</span>
            <input type="search" id="search-input" data-i18n-placeholder="nav_products" autocomplete="off">
          </div>
          <div id="search-dropdown" class="search-dropdown hidden"></div>
        </div>

        <div class="lang-switch" role="group" aria-label="Language">
          <button data-lang="ar" onclick="CG_I18N.apply('ar')">ع</button>
          <button data-lang="fr" onclick="CG_I18N.apply('fr')">FR</button>
          <button data-lang="en" onclick="CG_I18N.apply('en')">EN</button>
        </div>

        <a href="${WA_BASE}" target="_blank" rel="noopener" class="btn-wa-header" data-i18n="nav_order_wa">
          اطلب الآن
        </a>

        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
      </div>
    </div>
  </header>`;
}

function footerHTML() {
  const zones = ["gueliz","hivernage","medina","targa","sidi_ghanem","palmeraie","rte_casa"];
  const zonesLinks = zones.map(z =>
    `<li><a href="products.html?zone=${z}" data-i18n="area_${z}">—</a></li>`
  ).join("");

  return `
  <div class="zellige-rule thin"></div>
  <footer class="site-footer">
    <div class="wrap footer-top">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">🌿 Curate<span style="color:var(--color-terracotta)">Green</span></div>
          <p class="footer-tagline" data-i18n="footer_tagline">الخضر والفواكه الطازجة تصل إلى باب منزلك في مراكش.</p>
          <div style="display:flex;flex-direction:column;gap:.6rem;">
            <a href="${WA_BASE}" target="_blank" rel="noopener"
               style="display:inline-flex;align-items:center;gap:.5rem;color:rgba(255,253,249,.85);font-size:.9rem;">
              🟢 +212 612 605 737
            </a>
            <a href="mailto:salatrir@gmail.com"
               style="color:rgba(255,253,249,.75);font-size:.85rem;">
              salatrir@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h4 data-i18n="footer_links">روابط سريعة</h4>
          <ul>
            <li><a href="index.html"    data-i18n="nav_home">الرئيسية</a></li>
            <li><a href="products.html" data-i18n="nav_products">المنتجات</a></li>
            <li><a href="services.html" data-i18n="nav_services">الخدمات</a></li>
            <li><a href="blog.html"     data-i18n="nav_blog">المدونة</a></li>
            <li><a href="faq.html"      data-i18n="nav_faq">أسئلة شائعة</a></li>
            <li><a href="contact.html"  data-i18n="nav_contact">تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h4 data-i18n="footer_categories">الفئات</h4>
          <ul>
            <li><a href="products.html?cat=fruits"     data-i18n="cat_fruits">الفواكه</a></li>
            <li><a href="products.html?cat=vegetables" data-i18n="cat_vegetables">الخضر</a></li>
            <li><a href="products.html?cat=grocery"    data-i18n="cat_grocery">المواد الغذائية</a></li>
            <li><a href="services.html"                data-i18n="cat_services">الخدمات</a></li>
          </ul>
        </div>

        <div>
          <h4 data-i18n="footer_contact_title">تواصل</h4>
          <ul>${zonesLinks}</ul>
        </div>
      </div>
    </div>
    <div class="zellige-rule thin" style="opacity:.25;"></div>
    <div class="wrap footer-bottom">
      <span>© <span id="copy-year"></span> CurateGreen.com — <span data-i18n="footer_copy">جميع الحقوق محفوظة</span></span>
      <span>Marrakech, Morocco 🇲🇦</span>
    </div>
  </footer>

  <!-- Floating WA button -->
  <a href="${WA_BASE}" target="_blank" rel="noopener" class="wa-float" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.646 4.79 1.776 6.8L2 30l7.4-1.74A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
      <path d="M23.007 19.743c-.36-.18-2.126-1.05-2.455-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.524-.562-2.903-1.793-1.072-.957-1.796-2.139-2.007-2.499-.21-.36-.022-.554.158-.733.162-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.292-.702-.59-.607-.81-.618l-.69-.012c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.538 3.879 6.15 5.44.86.37 1.53.592 2.052.757.862.274 1.647.235 2.268.143.691-.103 2.126-.869 2.427-1.709.3-.84.3-1.56.21-1.709-.09-.15-.33-.24-.69-.42z" fill="#25d366"/>
    </svg>
  </a>

  <!-- Mobile order bar -->
  <div class="mobile-order-bar show" id="mobile-order-bar">
    <a href="${WA_BASE}" target="_blank" rel="noopener" class="btn btn-primary" style="flex:1;">
      🟢 <span data-i18n="nav_order_wa">اطلب الآن</span>
    </a>
    <a href="products.html" class="btn btn-dark" style="flex:1;" data-i18n="nav_products">المنتجات</a>
  </div>`;
}

/* -------------------------------------------------------------------------
   Category cards renderer
   ------------------------------------------------------------------------- */
function renderCategories(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CG_CATEGORIES.map(c => `
    <a href="${c.page}" class="cat-card">
      <div class="cat-icon">
        <img src="${c.icon}" alt="${CG_I18N.t(c.nameKey)}" loading="lazy">
      </div>
      <h3 data-i18n="${c.nameKey}">${CG_I18N.t(c.nameKey)}</h3>
      <span data-i18n="${c.descKey}">${CG_I18N.t(c.descKey)}</span>
    </a>`).join("");
}

/* -------------------------------------------------------------------------
   Product card renderer
   ------------------------------------------------------------------------- */
function productCardHTML(p) {
  const name  = CG_I18N.t(p.nameKey);
  const desc  = CG_I18N.t(p.descKey);
  const price = `${p.basePrice} ${CG_I18N.t("lbl_mad")}`;
  const unit  = CG_I18N.t(`lbl_per_${p.unit}`) || `/${p.unit}`;
  return `
  <div class="crate-card">
    <a href="product.html?id=${p.id}">
      <div class="crate-media">
        <img src="${p.image}" alt="${name}" loading="lazy">
        <div class="crate-slats"></div>
        ${p.seasonal ? `<div class="crate-tag" data-i18n="seasonal_badge">${CG_I18N.t("seasonal_badge")}</div>` : ""}
      </div>
    </a>
    <div class="crate-body">
      <a href="product.html?id=${p.id}"><h3>${name}</h3></a>
      <p class="crate-desc">${desc}</p>
      <div class="crate-foot">
        <span class="crate-price">${price} <small>${unit}</small></span>
        <a href="${buildWaUrl(name, p.weights[0], "1", "")}"
           target="_blank" rel="noopener"
           class="btn btn-primary btn-sm">
          🟢 <span data-i18n="add_to_order">${CG_I18N.t("add_to_order")}</span>
        </a>
      </div>
    </div>
  </div>`;
}

function renderProducts(containerId, { cat, limit, featured } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let list = CG_PRODUCTS;
  if (cat)      list = list.filter(p => p.category === cat);
  if (featured) list = list.filter(p => p.featured);
  if (limit)    list = list.slice(0, limit);
  el.innerHTML = list.map(productCardHTML).join("");
}

/* -------------------------------------------------------------------------
   Services renderer
   ------------------------------------------------------------------------- */
function renderServices(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CG_SERVICES.map(s => {
    const name = CG_I18N.t(s.nameKey);
    const desc = CG_I18N.t(s.descKey);
    const waUrl = buildWaUrl(name, "", "", "", true);
    return `
    <div class="service-card" id="${s.id}">
      <span class="icon">${s.icon}</span>
      <h3 data-i18n="${s.nameKey}">${name}</h3>
      <p data-i18n="${s.descKey}">${desc}</p>
      <a href="${waUrl}" target="_blank" rel="noopener"
         class="btn btn-primary btn-sm mt-2">
        🟢 <span data-i18n="lbl_request_service">${CG_I18N.t("lbl_request_service")}</span>
      </a>
    </div>`;
  }).join("");
}

/* -------------------------------------------------------------------------
   Product detail page
   ------------------------------------------------------------------------- */
function initProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const product = CG_PRODUCTS.find(p => p.id === id);
  if (!product) { location.href = "products.html"; return; }

  const root = document.getElementById("product-root");
  if (!root) return;

  let selectedWeight = product.weights[0];
  let selectedQty = 1;
  let selectedArea = "";

  function rebuildWaLink() {
    const name = CG_I18N.t(product.nameKey);
    const url  = buildWaUrl(name, selectedWeight, selectedQty, selectedArea);
    const btn  = document.getElementById("wa-order-btn");
    if (btn) btn.href = url;
  }

  function render() {
    const name  = CG_I18N.t(product.nameKey);
    const desc  = CG_I18N.t(product.descKey);
    const areas = ["gueliz","hivernage","medina","targa","sidi_ghanem","palmeraie","rte_casa","other"];

    root.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <img src="${product.image}" alt="${name}">
      </div>
      <div class="product-info">
        <h1>${name}</h1>
        <div class="product-price">
          <span data-i18n="lbl_price_from">${CG_I18N.t("lbl_price_from")}</span>
          ${product.basePrice}
          <span data-i18n="lbl_mad">${CG_I18N.t("lbl_mad")}</span>
          <small>${CG_I18N.t("lbl_per_" + product.unit) || ""}</small>
        </div>
        <p style="color:var(--color-ink-soft);margin-bottom:var(--space-3);">${desc}</p>

        <div class="option-group">
          <label data-i18n="lbl_weight">${CG_I18N.t("lbl_weight")}</label>
          <div class="option-pills" id="weight-pills">
            ${product.weights.map((w, i) => `
              <button class="option-pill${i === 0 ? " selected" : ""}"
                      data-weight="${w}">${w}</button>`).join("")}
          </div>
        </div>

        <div class="option-group">
          <label data-i18n="lbl_qty">${CG_I18N.t("lbl_qty")}</label>
          <div class="qty-stepper">
            <button id="qty-minus">−</button>
            <span id="qty-val">1</span>
            <button id="qty-plus">+</button>
          </div>
        </div>

        <div class="option-group">
          <label data-i18n="lbl_area">${CG_I18N.t("lbl_area")}</label>
          <select id="area-select" style="width:100%;padding:.65rem .9rem;border:1.5px solid var(--color-line);border-radius:6px;font-family:inherit;font-size:.95rem;background:var(--color-white);">
            <option value="">${CG_I18N.t("select_area")}</option>
            ${areas.map(a => `<option value="${CG_I18N.t("area_"+a)}">${CG_I18N.t("area_"+a)}</option>`).join("")}
          </select>
        </div>

        <a href="#" id="wa-order-btn" target="_blank" rel="noopener"
           class="btn btn-primary btn-block" style="margin-top:var(--space-2);font-size:1.05rem;">
          🟢 <span data-i18n="lbl_order">${CG_I18N.t("lbl_order")}</span>
        </a>

        <div class="info-list mt-3">
          <div class="row"><strong data-i18n="lbl_freshness">${CG_I18N.t("lbl_freshness")}</strong><span data-i18n="lbl_freshness_val">${CG_I18N.t("lbl_freshness_val")}</span></div>
          <div class="row"><strong data-i18n="lbl_origin">${CG_I18N.t("lbl_origin")}</strong><span data-i18n="lbl_origin_val">${CG_I18N.t("lbl_origin_val")}</span></div>
          <div class="row"><strong data-i18n="lbl_delivery">${CG_I18N.t("lbl_delivery")}</strong><span data-i18n="lbl_delivery_val">${CG_I18N.t("lbl_delivery_val")}</span></div>
          <div class="row"><strong data-i18n="lbl_payment">${CG_I18N.t("lbl_payment")}</strong><span data-i18n="lbl_payment_val">${CG_I18N.t("lbl_payment_val")}</span></div>
        </div>
      </div>
    </div>`;

    /* Bind weight pills */
    root.querySelectorAll(".option-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        root.querySelectorAll(".option-pill").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedWeight = btn.dataset.weight;
        rebuildWaLink();
      });
    });

    /* Qty stepper */
    root.querySelector("#qty-minus")?.addEventListener("click", () => {
      if (selectedQty > 1) { selectedQty--; root.querySelector("#qty-val").textContent = selectedQty; rebuildWaLink(); }
    });
    root.querySelector("#qty-plus")?.addEventListener("click", () => {
      selectedQty++; root.querySelector("#qty-val").textContent = selectedQty; rebuildWaLink();
    });

    /* Area select */
    root.querySelector("#area-select")?.addEventListener("change", e => {
      selectedArea = e.target.value; rebuildWaLink();
    });

    rebuildWaLink();

    /* Related products */
    const related = CG_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relEl = document.getElementById("related-grid");
    if (relEl) relEl.innerHTML = related.map(productCardHTML).join("");
  }

  render();
  document.addEventListener("cg:langchange", render);

  /* Update page title */
  document.title = `${CG_I18N.t(product.nameKey)} — CurateGreen Marrakech`;
}

/* -------------------------------------------------------------------------
   Products listing page
   ------------------------------------------------------------------------- */
function initProductsPage() {
  const params = new URLSearchParams(location.search);
  const activeCat = params.get("cat") || "all";
  const cats = ["all", "fruits", "vegetables", "grocery"];

  const filterBar = document.getElementById("filter-bar");
  const grid      = document.getElementById("products-grid");
  if (!filterBar || !grid) return;

  function renderFilter() {
    filterBar.innerHTML = cats.map(c => `
      <button class="filter-chip${c === activeCat ? " active" : ""}" data-cat="${c}">
        ${c === "all" ? (CG_I18N.t("nav_products") || "الكل") : CG_I18N.t("cat_" + c)}
      </button>`).join("");

    filterBar.querySelectorAll(".filter-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.cat;
        const url = new URL(location.href);
        cat === "all" ? url.searchParams.delete("cat") : url.searchParams.set("cat", cat);
        history.pushState({}, "", url);
        initProductsPage();
      });
    });
  }

  renderFilter();
  renderProducts("products-grid", { cat: activeCat === "all" ? undefined : activeCat });
  document.addEventListener("cg:langchange", () => { renderFilter(); renderProducts("products-grid", { cat: activeCat === "all" ? undefined : activeCat }); });
}

/* -------------------------------------------------------------------------
   FAQ accordion
   ------------------------------------------------------------------------- */
function initFAQ() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  const faqs = [1,2,3,4,5,6,7,8].map(i => ({
    q: CG_I18N.t(`faq_q${i}`),
    a: CG_I18N.t(`faq_a${i}`)
  }));

  function render() {
    container.innerHTML = faqs.map((f, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
          <span>${CG_I18N.t(`faq_q${i+1}`)}</span>
          <span class="plus">+</span>
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region">
          <div>${CG_I18N.t(`faq_a${i+1}`)}</div>
        </div>
      </div>`).join("");

    container.querySelectorAll(".faq-q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item  = btn.closest(".faq-item");
        const panel = item.querySelector(".faq-a");
        const open  = item.classList.contains("open");
        container.querySelectorAll(".faq-item").forEach(i => {
          i.classList.remove("open");
          i.querySelector(".faq-a").style.maxHeight = null;
          i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item.classList.add("open");
          panel.style.maxHeight = panel.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  render();
  document.addEventListener("cg:langchange", render);
}

/* -------------------------------------------------------------------------
   Contact page
   ------------------------------------------------------------------------- */
function initContactPage() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name    = form.querySelector("#f-name")?.value || "";
    const message = form.querySelector("#f-msg")?.value  || "";
    const area    = form.querySelector("#f-area")?.value || "";
    const msg = `مرحباً، رسالة من: ${name}\n\nالمنطقة: ${area}\n\n${message}`;
    window.open(WA_BASE + "?text=" + encodeURIComponent(msg), "_blank");
  });
}

/* -------------------------------------------------------------------------
   Nav toggle (mobile)
   ------------------------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav    = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "✕" : "☰";
  });
}

/* -------------------------------------------------------------------------
   Active nav link
   ------------------------------------------------------------------------- */
function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === page);
  });
}

/* -------------------------------------------------------------------------
   Copyright year
   ------------------------------------------------------------------------- */
function setCopyYear() {
  const el = document.getElementById("copy-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  /* Inject header & footer if placeholder divs exist */
  const hEl = document.getElementById("site-header-placeholder");
  const fEl = document.getElementById("site-footer-placeholder");
  if (hEl) hEl.outerHTML = headerHTML();
  if (fEl) fEl.outerHTML = footerHTML();

  /* Init i18n */
  CG_I18N.init();

  /* Common */
  initNavToggle();
  setActiveNav();
  setCopyYear();
  initSearch();

  /* Page-specific */
  const page = location.pathname.split("/").pop() || "index.html";

  if (page === "index.html" || page === "") {
    renderCategories("categories-grid");
    renderProducts("featured-grid", { featured: true, limit: 8 });
    renderServices("services-preview");
  }

  if (page === "products.html") initProductsPage();
  if (page === "product.html")  initProductPage();
  if (page === "services.html") renderServices("services-grid");
  if (page === "faq.html")      initFAQ();
  if (page === "contact.html")  initContactPage();

  /* Re-render dynamic sections on language change */
  document.addEventListener("cg:langchange", () => {
    setActiveNav();
    if (page === "index.html" || page === "") {
      renderCategories("categories-grid");
      renderProducts("featured-grid", { featured: true, limit: 8 });
      renderServices("services-preview");
    }
    if (page === "services.html") renderServices("services-grid");
  });
});
