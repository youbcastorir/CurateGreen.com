/* ==========================================================================
   CurateGreen — categories.js
   Defines top-level categories shown on homepage & nav.
   Each entry has i18n-keyed labels and links to a filtered products view.
   ========================================================================== */

const CG_CATEGORIES = [
  {
    id: "fruits",
    icon: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&q=80",
    nameKey: "cat_fruits",
    descKey: "cat_fruits_desc",
    page: "products.html?cat=fruits"
  },
  {
    id: "vegetables",
    icon: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&q=80",
    nameKey: "cat_vegetables",
    descKey: "cat_vegetables_desc",
    page: "products.html?cat=vegetables"
  },
  {
    id: "grocery",
    icon: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=300&q=80",
    nameKey: "cat_grocery",
    descKey: "cat_grocery_desc",
    page: "products.html?cat=grocery"
  },
  {
    id: "services",
    icon: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=300&q=80",
    nameKey: "cat_services",
    descKey: "cat_services_desc",
    page: "services.html"
  }
];

if (typeof module !== "undefined") module.exports = CG_CATEGORIES;
