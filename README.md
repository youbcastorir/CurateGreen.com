# 🌿 CurateGreen — Local Delivery Marketplace for Marrakech

**Fresh fruits, vegetables, groceries & local errand services — delivered via WhatsApp.**

Live concept domain: `curategreen.com`
Contact: `+212 612 605 737` (WhatsApp) · `salatrir@gmail.com`

---

## 📦 What's in this project

A static, zero-backend, GitHub Pages–ready website. No server, no database, no build step — just HTML, CSS, and vanilla JavaScript. Every order (products or services) is completed through a pre-filled WhatsApp message; there is no online payment integration by design.

```
curategreen/
├── index.html              Homepage
├── products.html           Product listing + category filters
├── product.html            Single product detail page
├── services.html           Local delivery services listing
├── faq.html                FAQ accordion
├── contact.html            Contact form + map + delivery zones
├── blog.html                Blog index (AR/FR/EN articles)
├── blog/                   Individual blog articles (10 published)
├── assets/
│   ├── css/style.css       Full design system (souk-market visual identity)
│   └── js/
│       ├── app.js          Core app logic, rendering, WhatsApp URL builder
│       ├── translations.js AR/FR/EN dictionary + i18n engine
│       ├── products.js     Product catalog data
│       ├── services.js     Services catalog data
│       ├── categories.js   Category definitions
│       └── search.js       Client-side search
├── manifest.json           PWA manifest
├── sitemap.xml             SEO sitemap (incl. hreflang)
├── robots.txt
└── .gitignore
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `curategreen`).
2. From inside this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Launch CurateGreen"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/curategreen.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` → `/ (root)`**.
4. Your site will be live at `https://YOUR_USERNAME.github.io/curategreen/` within a few minutes.
5. **Custom domain (curategreen.com):** add a `CNAME` file at the project root containing just:
   ```
   curategreen.com
   ```
   Then point your domain's DNS to GitHub Pages (A records to GitHub's IPs, or a CNAME record to `YOUR_USERNAME.github.io`) per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

No build tools, no `npm install` — everything runs directly as static files.

---

## 🛍️ Managing products

All products live in `assets/js/products.js` as a single array. To add a new product:

```js
{
  id: "cherries",                     // unique slug, used in URLs (?id=cherries)
  category: "fruits",                 // "fruits" | "vegetables" | "grocery"
  nameKey: "p_cherries",              // translation key — add to translations.js
  descKey: "p_cherries_desc",         // translation key — add to translations.js
  image: "https://images.unsplash.com/...",  // free Unsplash URL, ?w=600&q=80 recommended
  basePrice: 28,
  unit: "kg",                         // kg | piece | box | liter | tray | pack | basket
  weights: ["500 g", "1 kg"],         // options shown on the product page
  seasonal: true,                     // shows a "Seasonal" badge if true
  featured: false                     // shows on homepage "Featured" grid if true
}
```

Then add matching entries to **all three languages** in `translations.js`:

```js
// inside ar: { ... }
p_cherries: "الكرز",
p_cherries_desc: "كرز طازج موسمي، حلو ومنعش.",

// inside fr: { ... }
p_cherries: "Cerises",
p_cherries_desc: "Cerises fraîches de saison, sucrées et rafraîchissantes.",

// inside en: { ... }
p_cherries: "Cherries",
p_cherries_desc: "Fresh seasonal cherries, sweet and refreshing.",
```

That's it — the product automatically appears in `products.html`, gets its own detail page at `product.html?id=cherries`, and is searchable.

### Managing services

Same pattern in `assets/js/services.js` — add an entry with `id`, `icon` (emoji), `nameKey`, `descKey`, `image`, then translate the keys in `translations.js`.

### Managing categories

Top-level categories (shown on the homepage and in the footer) live in `assets/js/categories.js`.

---

## 🌍 Managing translations (AR / FR / EN)

All text in the site is centralized in **`assets/js/translations.js`**, inside the `CG_TRANSLATIONS` object — one block per language (`ar`, `fr`, `en`).

- **Arabic is the default/primary language.** If a translation key is missing in the active language, the system automatically falls back to Arabic.
- To add new text anywhere on the site: add a key to all three language blocks, then reference it in HTML with `data-i18n="your_key"`, or in JS via `CG_I18N.t("your_key")`.
- The language switcher in the header calls `CG_I18N.apply('ar' | 'fr' | 'en')`, which re-renders every `[data-i18n]` element on the page and toggles `dir="rtl"`/`dir="ltr"` automatically.
- The chosen language is remembered via `localStorage` across visits.

**Important:** this site uses a *single HTML file per page* with JavaScript-driven translation (not three separate HTML trees per language). This keeps the codebase maintainable as it scales — you are not maintaining 3x the HTML files.

---

## 💬 WhatsApp ordering system

Every product and service "Order" button is generated dynamically by `buildWaUrl()` in `app.js`. It builds a `https://wa.me/212612605737?text=...` link with a pre-filled, translated message containing:

- Product or service name
- Selected weight/quantity option
- Delivery area
- A polite closing line asking for availability confirmation

**To change the WhatsApp number:** edit the single constant at the top of `assets/js/app.js`:

```js
const WA_NUMBER = "212612605737";
```

This one constant controls the floating WhatsApp button, header button, mobile sticky bar, every product/service "Order" button, and the contact form fallback.

**To change the message template:** edit the `wa_msg_*` / `wa_service_prefix` keys in `translations.js` (all three languages).

---

## 📈 SEO guide

This project ships with:

- **`sitemap.xml`** — list every page; update it whenever you add a new blog article or static page.
- **`robots.txt`** — allows all crawling, points to the sitemap.
- **hreflang tags** on every page (`ar` / `fr` / `en` / `x-default`) for international SEO.
- **Open Graph + Twitter Card** meta tags on every page for clean social sharing previews.
- **schema.org structured data:**
  - `LocalBusiness` + `GroceryStore` + `WebSite` (with `SearchAction`) on the homepage
  - `Service` on the services page
  - `FAQPage` on the FAQ page (drives Google's expandable FAQ rich results)
  - `Product` (dynamically populated per product) on each product page
  - `Article` on every blog post

### Adding a new blog article (SEO content scaling guide)

This project ships with **10 fully written articles** (7 Arabic, 2 French, 1 English) as real, original content — not placeholders. The brief called for up to 180 articles total; rather than generate 170 thin, repetitive pages, this starter set demonstrates the full structure and SEO pattern so you (or a hired writer) can scale the blog properly over time. Each article takes roughly 20–30 minutes to write well; budget accordingly rather than mass-generating low-quality pages, which Google's helpful-content systems actively penalize.

**Template to copy for a new article** (use an existing file in `/blog` as your starting point, e.g. `blog/ar-01-توصيل-الخضر-مراكش.html`):

1. Duplicate an existing article file in `/blog/` and rename it following the pattern: `{lang}-{number}-{slug}.html` (e.g. `ar-08-طاجين-الخضر.html`).
2. Update the `<title>`, `<meta description>`, `<meta keywords>`, canonical URL, and the `Article` JSON-LD block (`headline`, `image`, `datePublished`).
3. Write your `<h1>`, intro paragraph, 2–4 `<h2>` sections, and a closing CTA block (copy the `.article-cta` pattern).
4. Add 2–3 internal links to related articles/products at the bottom (`.tag-pill` block).
5. Add a new `<article class="blog-card">` entry to `blog.html` linking to your new file.
6. Add a `<url>` entry to `sitemap.xml`.

**Suggested topics to reach full content volume** (grouped by the keyword clusters in the original brief):

| Language | Suggested batch topics |
|---|---|
| Arabic (target ~100) | One article per product (تفاح، موز، طماطم...), one per delivery zone (التوصيل في جيليز، التوصيل في ايفيرناج...), seasonal guides, recipe deep-dives, comparison articles (السوق التقليدي vs التوصيل), customer FAQs expanded into articles |
| French (target ~50) | Quartier-specific delivery guides, recipe articles, seasonal produce guides, comparison/buying-guide content |
| English (target ~30) | Expat-focused guides, "best of Marrakech" produce content, practical how-to articles |

### Local SEO keyword targets (already embedded in meta tags)

**Arabic:** توصيل الخضر مراكش، توصيل الفواكه مراكش، توصيل المواد الغذائية مراكش، خدمة التوصيل مراكش
**French:** Livraison légumes Marrakech, Livraison fruits Marrakech, Livraison courses Marrakech
**English:** Fruit Delivery Marrakech, Vegetable Delivery Marrakech, Grocery Delivery Marrakech

### Core Web Vitals notes

- All images are loaded from Unsplash with `?w=...&q=80` size hints and `loading="lazy"` (except hero/above-the-fold images, which use `loading="eager"`).
- Fonts are loaded via `<link rel="preconnect">` + Google Fonts `display=swap` to avoid blocking render.
- No frameworks, no bundlers, no render-blocking JS — scripts load at the end of `<body>`.

---

## 🖼️ Replacing stock images with your own

All images currently point to free Unsplash URLs (no attribution required, but consider crediting Unsplash photographers if used commercially at scale). To swap in your own photography:

1. Place your images in `assets/images/`.
2. Replace the relevant `image:` field in `products.js` / `services.js` / `categories.js`, or the `src=` attribute in HTML files, with a relative path like `assets/images/apples.jpg`.
3. Keep aspect ratios consistent: product/category images are roughly 4:3, blog hero images are 16:7.

---

## ✅ Pre-launch checklist

- [ ] Replace `https://curategreen.com` with your real domain throughout (canonical tags, schema, sitemap, Open Graph).
- [ ] Verify the WhatsApp number `+212612605737` is correct and active.
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- [ ] Test the WhatsApp order flow on both desktop and mobile (desktop opens WhatsApp Web).
- [ ] Test language switching (AR/FR/EN) and RTL layout on mobile.
- [ ] Add real product photography if you want to move away from stock imagery.
- [ ] Set up Google Business Profile for the LocalBusiness schema to pay off in Maps/local search.
- [ ] Expand blog content following the scaling guide above.

---

## 🧩 Tech notes

- **No frameworks.** Pure HTML/CSS/JS — easy to host anywhere, no build pipeline.
- **No backend, no database.** All "state" (cart-like behavior) lives in the WhatsApp message itself.
- **i18n engine** is ~60 lines of vanilla JS (`translations.js`) — no library dependency.
- **Search** is a simple client-side substring filter over product/service names — fine at this catalog size; would need a real search index (Algolia, etc.) past a few hundred items.

---

© CurateGreen.com — Marrakech, Morocco 🇲🇦
