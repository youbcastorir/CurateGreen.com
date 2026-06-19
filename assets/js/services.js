/* ==========================================================================
   CurateGreen — services.js
   Local errand / delivery services (non-product), ordered via WhatsApp.
   ========================================================================== */

const CG_SERVICES = [
  {
    id: "grocery-shopping",
    icon: "🛒",
    nameKey: "s_grocery_shopping",
    descKey: "s_grocery_shopping_desc",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=600&q=80"
  },
  {
    id: "market-purchases",
    icon: "🧺",
    nameKey: "s_market_purchases",
    descKey: "s_market_purchases_desc",
    image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=600&q=80"
  },
  {
    id: "pharmacy-pickup",
    icon: "💊",
    nameKey: "s_pharmacy_pickup",
    descKey: "s_pharmacy_pickup_desc",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&q=80"
  },
  {
    id: "document-delivery",
    icon: "📄",
    nameKey: "s_document_delivery",
    descKey: "s_document_delivery_desc",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80"
  },
  {
    id: "parcel-delivery",
    icon: "📦",
    nameKey: "s_parcel_delivery",
    descKey: "s_parcel_delivery_desc",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
  },
  {
    id: "local-errands",
    icon: "🏃",
    nameKey: "s_local_errands",
    descKey: "s_local_errands_desc",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=600&q=80"
  }
];

if (typeof module !== "undefined") module.exports = CG_SERVICES;
