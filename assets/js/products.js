/* ==========================================================================
   CurateGreen — products.js
   Each product has: id, category, weight options, price (MAD), image,
   and i18n keys for name/description so translations.js can resolve them
   into AR / FR / EN at render time.
   ========================================================================== */

const CG_PRODUCTS = [
  /* ----------------------------- FRUITS ----------------------------- */
  {
    id: "apples",
    category: "fruits",
    nameKey: "p_apples",
    descKey: "p_apples_desc",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80",
    basePrice: 12,
    unit: "kg",
    weights: ["1 kg", "2 kg", "5 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "bananas",
    category: "fruits",
    nameKey: "p_bananas",
    descKey: "p_bananas_desc",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    basePrice: 10,
    unit: "kg",
    weights: ["1 kg", "2 kg", "5 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "oranges",
    category: "fruits",
    nameKey: "p_oranges",
    descKey: "p_oranges_desc",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&q=80",
    basePrice: 9,
    unit: "kg",
    weights: ["1 kg", "2 kg", "5 kg", "10 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "strawberries",
    category: "fruits",
    nameKey: "p_strawberries",
    descKey: "p_strawberries_desc",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=600&q=80",
    basePrice: 25,
    unit: "box",
    weights: ["500 g", "1 kg"],
    seasonal: true,
    featured: true
  },
  {
    id: "watermelons",
    category: "fruits",
    nameKey: "p_watermelons",
    descKey: "p_watermelons_desc",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&q=80",
    basePrice: 15,
    unit: "piece",
    weights: ["1 piece (~5kg)", "2 pieces"],
    seasonal: true,
    featured: false
  },
  {
    id: "grapes",
    category: "fruits",
    nameKey: "p_grapes",
    descKey: "p_grapes_desc",
    image: "https://images.unsplash.com/photo-1599819177626-eea8a1ef1980?w=600&q=80",
    basePrice: 18,
    unit: "kg",
    weights: ["500 g", "1 kg", "2 kg"],
    seasonal: true,
    featured: false
  },
  {
    id: "seasonal-fruits",
    category: "fruits",
    nameKey: "p_seasonal_fruits",
    descKey: "p_seasonal_fruits_desc",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    basePrice: 20,
    unit: "basket",
    weights: ["Small basket", "Large basket"],
    seasonal: true,
    featured: false
  },

  /* --------------------------- VEGETABLES ---------------------------- */
  {
    id: "tomatoes",
    category: "vegetables",
    nameKey: "p_tomatoes",
    descKey: "p_tomatoes_desc",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80",
    basePrice: 7,
    unit: "kg",
    weights: ["1 kg", "2 kg", "5 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "potatoes",
    category: "vegetables",
    nameKey: "p_potatoes",
    descKey: "p_potatoes_desc",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80",
    basePrice: 6,
    unit: "kg",
    weights: ["1 kg", "5 kg", "10 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "onions",
    category: "vegetables",
    nameKey: "p_onions",
    descKey: "p_onions_desc",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600&q=80",
    basePrice: 5,
    unit: "kg",
    weights: ["1 kg", "5 kg"],
    seasonal: false,
    featured: false
  },
  {
    id: "carrots",
    category: "vegetables",
    nameKey: "p_carrots",
    descKey: "p_carrots_desc",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=600&q=80",
    basePrice: 6,
    unit: "kg",
    weights: ["1 kg", "2 kg"],
    seasonal: false,
    featured: true
  },
  {
    id: "lettuce",
    category: "vegetables",
    nameKey: "p_lettuce",
    descKey: "p_lettuce_desc",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9d680f?w=600&q=80",
    basePrice: 4,
    unit: "piece",
    weights: ["1 piece", "3 pieces"],
    seasonal: false,
    featured: false
  },
  {
    id: "cucumbers",
    category: "vegetables",
    nameKey: "p_cucumbers",
    descKey: "p_cucumbers_desc",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&q=80",
    basePrice: 6,
    unit: "kg",
    weights: ["1 kg", "2 kg"],
    seasonal: false,
    featured: false
  },
  {
    id: "seasonal-vegetables",
    category: "vegetables",
    nameKey: "p_seasonal_vegetables",
    descKey: "p_seasonal_vegetables_desc",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    basePrice: 18,
    unit: "basket",
    weights: ["Small basket", "Large basket"],
    seasonal: true,
    featured: false
  },

  /* ----------------------------- GROCERY ------------------------------ */
  {
    id: "eggs",
    category: "grocery",
    nameKey: "p_eggs",
    descKey: "p_eggs_desc",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80",
    basePrice: 22,
    unit: "tray",
    weights: ["Tray of 12", "Tray of 30"],
    seasonal: false,
    featured: true
  },
  {
    id: "milk",
    category: "grocery",
    nameKey: "p_milk",
    descKey: "p_milk_desc",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    basePrice: 8,
    unit: "liter",
    weights: ["1 liter", "Pack of 6"],
    seasonal: false,
    featured: false
  },
  {
    id: "bread",
    category: "grocery",
    nameKey: "p_bread",
    descKey: "p_bread_desc",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    basePrice: 3,
    unit: "piece",
    weights: ["1 loaf", "5 loaves"],
    seasonal: false,
    featured: true
  },
  {
    id: "olive-oil",
    category: "grocery",
    nameKey: "p_olive_oil",
    descKey: "p_olive_oil_desc",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    basePrice: 65,
    unit: "liter",
    weights: ["500 ml", "1 liter", "5 liters"],
    seasonal: false,
    featured: true
  },
  {
    id: "local-products",
    category: "grocery",
    nameKey: "p_local_products",
    descKey: "p_local_products_desc",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    basePrice: 30,
    unit: "pack",
    weights: ["Small pack", "Family pack"],
    seasonal: false,
    featured: false
  }
];

if (typeof module !== "undefined") module.exports = CG_PRODUCTS;
