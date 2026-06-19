/* ==========================================================================
   CurateGreen — search.js
   Client-side search over products and services.
   ========================================================================== */

const CG_SEARCH = {
  _index: [],

  build() {
    this._index = [];
    const lang = CG_I18N.lang;

    CG_PRODUCTS.forEach(p => {
      this._index.push({
        type: "product",
        id: p.id,
        category: p.category,
        name: CG_I18N.t(p.nameKey),
        desc: CG_I18N.t(p.descKey),
        url: `product.html?id=${p.id}`,
        image: p.image
      });
    });

    CG_SERVICES.forEach(s => {
      this._index.push({
        type: "service",
        id: s.id,
        name: CG_I18N.t(s.nameKey),
        desc: CG_I18N.t(s.descKey),
        url: `services.html#${s.id}`,
        icon: s.icon
      });
    });
  },

  query(q) {
    if (!q || q.length < 2) return [];
    const lq = q.toLowerCase();
    return this._index.filter(item =>
      item.name.toLowerCase().includes(lq) ||
      (item.desc || "").toLowerCase().includes(lq) ||
      (item.category || "").toLowerCase().includes(lq)
    ).slice(0, 8);
  },

  renderDropdown(results, container) {
    if (!container) return;
    container.innerHTML = "";
    if (!results.length) {
      container.innerHTML = `<div class="search-empty">${CG_I18N.t("no_results") || "لا توجد نتائج"}</div>`;
      return;
    }
    results.forEach(r => {
      const div = document.createElement("div");
      div.className = "search-result-item";
      div.innerHTML = `
        <a href="${r.url}">
          ${r.image
            ? `<img src="${r.image}" alt="${r.name}" loading="lazy">`
            : `<span class="search-icon">${r.icon || "📦"}</span>`
          }
          <div>
            <strong>${r.name}</strong>
            <span>${r.type === "service" ? CG_I18N.t("cat_services") : CG_I18N.t("cat_" + (r.category || ""))}</span>
          </div>
        </a>`;
      container.appendChild(div);
    });
  }
};

/* Live search binding — call after DOM ready */
function initSearch() {
  const input = document.getElementById("search-input");
  const dropdown = document.getElementById("search-dropdown");
  if (!input) return;

  CG_SEARCH.build();

  input.addEventListener("input", () => {
    const q = input.value.trim();
    const results = CG_SEARCH.query(q);
    if (q.length > 1) {
      dropdown?.classList.remove("hidden");
      CG_SEARCH.renderDropdown(results, dropdown);
    } else {
      dropdown?.classList.add("hidden");
    }
  });

  document.addEventListener("click", e => {
    if (!input.contains(e.target) && !dropdown?.contains(e.target)) {
      dropdown?.classList.add("hidden");
    }
  });

  /* Rebuild on language change */
  document.addEventListener("cg:langchange", () => CG_SEARCH.build());
}
