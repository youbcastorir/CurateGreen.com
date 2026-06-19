/* ==========================================================================
   CurateGreen — translations.js
   Arabic (ar) = default/primary | French (fr) | English (en)
   Usage: t('key') returns string in current language.
   ========================================================================== */

const CG_TRANSLATIONS = {

  /* ===================================================================== */
  /* ARABIC — اللغة الأساسية                                              */
  /* ===================================================================== */
  ar: {
    /* --- Site --- */
    site_name: "كيوريت غرين",
    site_tagline: "الخضر والفواكه الطازجة تصل إلى باب منزلك في مراكش",
    site_desc: "منصة توصيل الخضر والفواكه والمواد الغذائية داخل مراكش. اطلب عبر واتساب وصلك أمامك.",

    /* --- Nav --- */
    nav_home: "الرئيسية",
    nav_products: "المنتجات",
    nav_fruits: "الفواكه",
    nav_vegetables: "الخضر",
    nav_grocery: "المواد الغذائية",
    nav_services: "الخدمات",
    nav_blog: "المدونة",
    nav_faq: "أسئلة شائعة",
    nav_contact: "تواصل معنا",
    nav_order_wa: "اطلب الآن",

    /* --- Hero --- */
    hero_badge: "🚀 توصيل سريع داخل مراكش",
    hero_title: "خضر وفواكه <span class='hl'>طازجة</span> تصل إلى باب منزلك",
    hero_sub: "نختار لك أجود المنتجات من سوق مراكش ونوصلها إليك في أسرع وقت. اطلب عبر واتساب وانتهى الأمر.",
    hero_btn_order: "🟢 اطلب عبر واتساب",
    hero_btn_browse: "تصفح المنتجات",
    hero_zones_label: "نوصل إلى:",

    /* --- Delivery zones --- */
    zone_gueliz: "جيليز",
    zone_hivernage: "ايفيرناج",
    zone_medina: "المدينة القديمة",
    zone_targa: "طارقة",
    zone_sidi_ghanem: "سيدي غانم",
    zone_palmeraie: "النخيل",
    zone_rte_casa: "طريق الدار البيضاء",

    /* --- Sections --- */
    sec_categories: "تسوق حسب الفئة",
    sec_categories_sub: "اختر ما تحتاجه وسنوصله إليك بسرعة وأمان",
    sec_featured: "أبرز المنتجات",
    sec_featured_sub: "منتجات طازجة مختارة يومياً من السوق المحلي",
    sec_services: "خدمات التوصيل",
    sec_services_sub: "لا تقتصر خدمتنا على الخضر والفواكه — نقضي مشاويرك أيضاً",
    sec_why: "لماذا تختار كيوريت غرين؟",
    sec_blog: "آخر المقالات",
    sec_blog_sub: "نصائح، وصفات، وأخبار حول التوصيل في مراكش",
    sec_faq: "أسئلة مكررة",
    sec_contact: "تواصل معنا",

    /* --- Why us features --- */
    feat1_num: "١",
    feat1_title: "طازجة دائماً",
    feat1_desc: "نشتري من السوق كل صباح ونوصل في نفس اليوم للحفاظ على الجودة.",
    feat2_num: "٢",
    feat2_title: "طلب عبر واتساب",
    feat2_desc: "لا تطبيقات، لا حسابات. اضغط اطلب وأرسل رسالتك في ثوان.",
    feat3_num: "٣",
    feat3_title: "تغطية واسعة",
    feat3_desc: "نصل إلى جيليز وايفيرناج والمدينة القديمة وطارقة وغيرها.",
    feat4_num: "٤",
    feat4_title: "أسعار مناسبة",
    feat4_desc: "أسعار السوق بدون زيادات مخفية. تدفع فقط عند الاستلام.",

    /* --- CTA band --- */
    cta_title: "جاهز للطلب؟ راسلنا الآن",
    cta_sub: "فريقنا متاح من 7 صباحاً حتى 9 مساءً كل يوم. ردنا سريع!",
    cta_btn: "🟢 ابدأ طلبك عبر واتساب",

    /* --- Product page --- */
    lbl_weight: "الوزن / الكمية",
    lbl_qty: "الكمية",
    lbl_area: "منطقة التوصيل",
    lbl_order: "اطلب هذا المنتج عبر واتساب",
    lbl_freshness: "الطازجية",
    lbl_freshness_val: "يومية — نشتري الصباح ونوصل في النهار",
    lbl_origin: "المصدر",
    lbl_origin_val: "سوق مراكش المحلي",
    lbl_delivery: "التوصيل",
    lbl_delivery_val: "نفس اليوم في معظم المناطق",
    lbl_payment: "الدفع",
    lbl_payment_val: "عند الاستلام (درهم مغربي)",
    lbl_related: "منتجات مشابهة",
    lbl_price_from: "من",
    lbl_per_kg: "/ كغ",
    lbl_per_piece: "/ حبة",
    lbl_per_box: "/ علبة",
    lbl_per_liter: "/ لتر",
    lbl_mad: "درهم",
    seasonal_badge: "موسمي",
    add_to_order: "أضف للطلب",

    /* --- WhatsApp message template --- */
    wa_msg_prefix: "مرحباً، أريد الطلب:\n\n🛒 المنتج: ",
    wa_msg_weight: "\n⚖️ الوزن/الكمية: ",
    wa_msg_qty: "\n🔢 العدد: ",
    wa_msg_area: "\n📍 منطقة التوصيل: ",
    wa_msg_suffix: "\n\nأرجو تأكيد التوفر. شكراً 🙏",

    /* --- Services page --- */
    services_title: "خدمات التوصيل المحلية",
    services_sub: "أكثر من مجرد خضر وفواكه — نقوم بمشاويرك في مراكش",
    lbl_request_service: "طلب هذه الخدمة عبر واتساب",
    wa_service_prefix: "مرحباً، أريد الاستفسار عن خدمة:\n\n🚀 الخدمة: ",

    /* --- FAQ --- */
    faq_title: "أسئلة مكررة",
    faq_sub: "إجابات على أكثر الأسئلة شيوعاً حول خدمة التوصيل",
    faq_q1: "ما هي مناطق التوصيل التي تغطونها؟",
    faq_a1: "نوصل حالياً إلى: جيليز، ايفيرناج، المدينة القديمة (المدينة)، طارقة، سيدي غانم، طريق الدار البيضاء، والنخيل. إذا كنت خارج هذه المناطق، راسلنا وسنرى إمكانية الوصول.",
    faq_q2: "كم يستغرق التوصيل؟",
    faq_a2: "في الغالب من 1 إلى 3 ساعات حسب المنطقة وأوقات الذروة. نحاول دائماً التوصيل في نفس اليوم عند الطلب قبل الساعة 5 مساءً.",
    faq_q3: "كيف تضمنون طازجية المنتجات؟",
    faq_a3: "نشتري الخضر والفواكه من السوق كل صباح. إذا لم يعجبك أي منتج عند التسليم، أخبرنا فوراً وسنتعامل مع الأمر.",
    faq_q4: "كيف أطلب؟",
    faq_a4: "بسيطة جداً: تصفح المنتجات، اختر ما يناسبك، اضغط زر 'اطلب عبر واتساب'. ستُفتح لك رسالة جاهزة. أرسلها ونتابع الباقي.",
    faq_q5: "هل الدفع أون لاين؟",
    faq_a5: "لا. الدفع عند الاستلام فقط بالدرهم المغربي. لا تطبيقات دفع، لا بطاقات.",
    faq_q6: "هل هناك حد أدنى للطلب؟",
    faq_a6: "لا يوجد حد أدنى لقيمة المنتجات. لكن للتوصيل المجاني، الطلبات فوق 150 درهم. ما دون ذلك رسوم توصيل بسيطة.",
    faq_q7: "هل يمكنني الطلب بكميات كبيرة؟",
    faq_a7: "نعم، نستقبل طلبات الجملة والكميات الكبيرة. راسلنا مسبقاً بيوم أو يومين لتجهيز طلبك.",
    faq_q8: "ما هي ساعات العمل؟",
    faq_a8: "نستقبل الطلبات من الساعة 7 صباحاً إلى 9 مساءً، كل أيام الأسبوع.",

    /* --- Contact --- */
    contact_title: "تواصل معنا",
    contact_sub: "نحن هنا للإجابة على أسئلتك وتلقي طلباتك",
    contact_wa: "راسلنا عبر واتساب",
    contact_wa_sub: "الأسرع: رد في دقائق",
    contact_email: "أرسل بريداً إلكترونياً",
    contact_email_sub: "للاستفسارات والشراكات",
    contact_form_name: "الاسم",
    contact_form_email: "البريد الإلكتروني",
    contact_form_area: "منطقتك",
    contact_form_msg: "رسالتك",
    contact_form_send: "إرسال الرسالة",
    contact_areas_title: "مناطق التوصيل",

    /* --- Blog --- */
    blog_title: "مدونة كيوريت غرين",
    blog_sub: "نصائح الخضر والفواكه، وصفات مغربية، وأخبار التوصيل في مراكش",
    read_more: "اقرأ المزيد",
    by_author: "بقلم فريق كيوريت غرين",
    article_cta: "اطلب الخضر والفواكه الطازجة عبر واتساب",

    /* --- Footer --- */
    footer_tagline: "الخضر والفواكه الطازجة تصل إلى باب منزلك في مراكش.",
    footer_links: "روابط سريعة",
    footer_categories: "الفئات",
    footer_contact_title: "تواصل",
    footer_copy: "جميع الحقوق محفوظة",

    /* --- Categories --- */
    cat_fruits: "الفواكه",
    cat_fruits_desc: "فواكه طازجة موسمية وغير موسمية",
    cat_vegetables: "الخضر",
    cat_vegetables_desc: "خضر طازجة من السوق مباشرة",
    cat_grocery: "المواد الغذائية",
    cat_grocery_desc: "منتجات أساسية محلية وطبيعية",
    cat_services: "خدمات التوصيل",
    cat_services_desc: "مشاوير ومهام محلية في مراكش",

    /* --- Products --- */
    p_apples: "التفاح",
    p_apples_desc: "تفاح طازج مختار يومياً، حلو الطعم وغني بالفيتامينات.",
    p_bananas: "الموز",
    p_bananas_desc: "موز طازج ناضج بالكامل، مصدر ممتاز للطاقة.",
    p_oranges: "البرتقال",
    p_oranges_desc: "برتقال مغربي طازج، مليء بفيتامين C والعصارة.",
    p_strawberries: "الفراولة",
    p_strawberries_desc: "فراولة موسمية طازجة، حمراء وحلوة. متوفرة في موسمها.",
    p_watermelons: "البطيخ الأحمر",
    p_watermelons_desc: "بطيخ أحمر كبير وطازج للصيف. حلو ومنعش.",
    p_grapes: "العنب",
    p_grapes_desc: "عنب طازج بحبات كبيرة وحلوة.",
    p_seasonal_fruits: "سلة الفواكه الموسمية",
    p_seasonal_fruits_desc: "مجموعة مختارة من أجود الفواكه الموسمية المتوفرة اليوم.",
    p_tomatoes: "الطماطم",
    p_tomatoes_desc: "طماطم حمراء طازجة ولذيذة، أساس المطبخ المغربي.",
    p_potatoes: "البطاطس",
    p_potatoes_desc: "بطاطس طازجة بأحجام متعددة، مناسبة للقلي والطبخ.",
    p_onions: "البصل",
    p_onions_desc: "بصل مغربي طازج لا تكتمل المطبخ بدونه.",
    p_carrots: "الجزر",
    p_carrots_desc: "جزر طازج برتقالي اللون، مقرمش وغني بالفيتامين A.",
    p_lettuce: "الخس",
    p_lettuce_desc: "خس طازج وأخضر، مثالي للسلطات.",
    p_cucumbers: "الخيار",
    p_cucumbers_desc: "خيار طازج ومقرمش، منعش لكل الوصفات.",
    p_seasonal_vegetables: "سلة الخضر الموسمية",
    p_seasonal_vegetables_desc: "مجموعة مختارة من أجود الخضر الموسمية المتوفرة اليوم.",
    p_eggs: "البيض",
    p_eggs_desc: "بيض طازج من الدجاج المحلي، أبيض وبني متوفر.",
    p_milk: "الحليب",
    p_milk_desc: "حليب طازج مغربي بجودة عالية.",
    p_bread: "الخبز",
    p_bread_desc: "خبز مغربي طازج يومياً من الفرن المحلي.",
    p_olive_oil: "زيت الزيتون",
    p_olive_oil_desc: "زيت زيتون مغربي أصيل، بكر ممتاز من بساتين المغرب.",
    p_local_products: "منتجات محلية",
    p_local_products_desc: "مجموعة من المنتجات المغربية المحلية المختارة بعناية.",

    /* --- Services --- */
    s_grocery_shopping: "شراء الحاجيات",
    s_grocery_shopping_desc: "نذهب إلى السوق أو المتجر عنك ونشتري قائمة تسوقك.",
    s_market_purchases: "مشتريات السوق",
    s_market_purchases_desc: "نتسوق لك من جامع الفنا وأسواق المدينة القديمة.",
    s_pharmacy_pickup: "سحب الدواء",
    s_pharmacy_pickup_desc: "نسحب طلبات الدواء من أي صيدلية في مراكش ونوصلها إليك.",
    s_document_delivery: "توصيل الوثائق",
    s_document_delivery_desc: "توصيل آمن وسريع للمستندات والأوراق الرسمية داخل مراكش.",
    s_parcel_delivery: "توصيل الطرود",
    s_parcel_delivery_desc: "توصيل طرود صغيرة ومتوسطة داخل مراكش بأمان وسرعة.",
    s_local_errands: "مشاوير محلية",
    s_local_errands_desc: "أي مهمة محلية صغيرة تحتاجها في مراكش — أخبرنا وسننجزها.",

    /* --- Areas --- */
    select_area: "اختر منطقتك",
    area_gueliz: "جيليز",
    area_hivernage: "ايفيرناج",
    area_medina: "المدينة القديمة",
    area_targa: "طارقة",
    area_sidi_ghanem: "سيدي غانم",
    area_palmeraie: "النخيل",
    area_rte_casa: "طريق الدار البيضاء",
    area_other: "منطقة أخرى"
  },

  /* ===================================================================== */
  /* FRANÇAIS                                                               */
  /* ===================================================================== */
  fr: {
    site_name: "CurateGreen",
    site_tagline: "Fruits et légumes frais livrés à votre porte à Marrakech",
    site_desc: "Plateforme de livraison de fruits, légumes et épicerie à Marrakech. Commandez via WhatsApp, on s'occupe du reste.",

    nav_home: "Accueil",
    nav_products: "Produits",
    nav_fruits: "Fruits",
    nav_vegetables: "Légumes",
    nav_grocery: "Épicerie",
    nav_services: "Services",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_order_wa: "Commander",

    hero_badge: "🚀 Livraison rapide à Marrakech",
    hero_title: "Fruits & légumes <span class='hl'>frais</span> livrés chez vous",
    hero_sub: "Nous sélectionnons les meilleurs produits du souk de Marrakech et les livrons à votre porte en quelques heures. Commandez via WhatsApp, c'est tout.",
    hero_btn_order: "🟢 Commander via WhatsApp",
    hero_btn_browse: "Voir les produits",
    hero_zones_label: "On livre à :",

    zone_gueliz: "Guéliz",
    zone_hivernage: "Hivernage",
    zone_medina: "Médina",
    zone_targa: "Targa",
    zone_sidi_ghanem: "Sidi Ghanem",
    zone_palmeraie: "Palmeraie",
    zone_rte_casa: "Route de Casablanca",

    sec_categories: "Choisissez votre catégorie",
    sec_categories_sub: "Sélectionnez ce dont vous avez besoin, on s'occupe de la livraison",
    sec_featured: "Produits populaires",
    sec_featured_sub: "Une sélection fraîche choisie chaque matin au marché local",
    sec_services: "Services de livraison",
    sec_services_sub: "Bien plus que des fruits et légumes — on fait vos courses aussi",
    sec_why: "Pourquoi choisir CurateGreen ?",
    sec_blog: "Derniers articles",
    sec_blog_sub: "Conseils, recettes et actualités sur la livraison à Marrakech",
    sec_faq: "Questions fréquentes",
    sec_contact: "Contactez-nous",

    feat1_num: "1",
    feat1_title: "Toujours frais",
    feat1_desc: "On achète au souk chaque matin et on livre le jour même pour garantir la fraîcheur.",
    feat2_num: "2",
    feat2_title: "Commande via WhatsApp",
    feat2_desc: "Pas d'app, pas de compte. Cliquez sur Commander et envoyez le message pré-rempli.",
    feat3_num: "3",
    feat3_title: "Large couverture",
    feat3_desc: "Guéliz, Hivernage, Médina, Targa, Palmeraie et bien d'autres quartiers.",
    feat4_num: "4",
    feat4_title: "Prix du marché",
    feat4_desc: "Prix souk sans frais cachés. Paiement à la livraison uniquement.",

    cta_title: "Prêt à commander ? Écrivez-nous maintenant",
    cta_sub: "Notre équipe est disponible de 7h à 21h, 7 jours sur 7. Réponse rapide garantie !",
    cta_btn: "🟢 Commencer sur WhatsApp",

    lbl_weight: "Poids / Quantité",
    lbl_qty: "Quantité",
    lbl_area: "Zone de livraison",
    lbl_order: "Commander ce produit via WhatsApp",
    lbl_freshness: "Fraîcheur",
    lbl_freshness_val: "Quotidienne — acheté le matin, livré dans la journée",
    lbl_origin: "Origine",
    lbl_origin_val: "Souk local de Marrakech",
    lbl_delivery: "Livraison",
    lbl_delivery_val: "Jour même dans la plupart des zones",
    lbl_payment: "Paiement",
    lbl_payment_val: "À la livraison (Dirham marocain)",
    lbl_related: "Produits similaires",
    lbl_price_from: "À partir de",
    lbl_per_kg: "/ kg",
    lbl_per_piece: "/ pièce",
    lbl_per_box: "/ boîte",
    lbl_per_liter: "/ litre",
    lbl_mad: "MAD",
    seasonal_badge: "Saisonnier",
    add_to_order: "Ajouter à la commande",

    wa_msg_prefix: "Bonjour, je voudrais commander :\n\n🛒 Produit : ",
    wa_msg_weight: "\n⚖️ Poids/Quantité : ",
    wa_msg_qty: "\n🔢 Nombre : ",
    wa_msg_area: "\n📍 Zone de livraison : ",
    wa_msg_suffix: "\n\nMerci de confirmer la disponibilité 🙏",

    services_title: "Services de livraison locale",
    services_sub: "Bien plus que des fruits et légumes — on gère vos courses à Marrakech",
    lbl_request_service: "Demander ce service via WhatsApp",
    wa_service_prefix: "Bonjour, je voudrais me renseigner sur le service :\n\n🚀 Service : ",

    faq_title: "Questions fréquentes",
    faq_sub: "Réponses aux questions les plus courantes sur notre service de livraison",
    faq_q1: "Quelles zones de livraison couvrez-vous ?",
    faq_a1: "Nous livrons actuellement à : Guéliz, Hivernage, Médina, Targa, Sidi Ghanem, Route de Casablanca et Palmeraie. Si vous êtes hors de ces zones, contactez-nous, nous verrons ce qu'on peut faire.",
    faq_q2: "Quel est le délai de livraison ?",
    faq_a2: "En général 1 à 3 heures selon la zone et les horaires de pointe. Nous essayons toujours de livrer le jour même pour les commandes passées avant 17h.",
    faq_q3: "Comment garantissez-vous la fraîcheur des produits ?",
    faq_a3: "Nous achetons fruits et légumes au souk chaque matin. Si un produit ne vous convient pas à la livraison, signalez-le nous immédiatement et nous y remédions.",
    faq_q4: "Comment passer une commande ?",
    faq_a4: "Simple : parcourez les produits, choisissez ce qu'il vous faut, cliquez sur 'Commander via WhatsApp'. Un message pré-rempli s'ouvre — envoyez-le et on s'occupe du reste.",
    faq_q5: "Le paiement est-il en ligne ?",
    faq_a5: "Non. Paiement à la livraison uniquement, en dirhams. Pas d'appli de paiement, pas de carte.",
    faq_q6: "Y a-t-il un montant minimum de commande ?",
    faq_a6: "Pas de minimum sur les produits. Livraison gratuite au-delà de 150 MAD. En dessous, de petits frais de livraison s'appliquent.",
    faq_q7: "Puis-je commander en grande quantité ?",
    faq_a7: "Oui, nous acceptons les commandes en gros. Contactez-nous 24 à 48h à l'avance pour que nous puissions préparer votre commande.",
    faq_q8: "Quelles sont vos heures d'ouverture ?",
    faq_a8: "Nous recevons les commandes de 7h à 21h, 7 jours sur 7.",

    contact_title: "Contactez-nous",
    contact_sub: "Nous sommes là pour répondre à vos questions et prendre vos commandes",
    contact_wa: "Écrire sur WhatsApp",
    contact_wa_sub: "Le plus rapide : réponse en quelques minutes",
    contact_email: "Envoyer un email",
    contact_email_sub: "Pour les demandes et partenariats",
    contact_form_name: "Nom",
    contact_form_email: "Email",
    contact_form_area: "Votre quartier",
    contact_form_msg: "Votre message",
    contact_form_send: "Envoyer le message",
    contact_areas_title: "Zones de livraison",

    blog_title: "Blog CurateGreen",
    blog_sub: "Conseils, recettes marocaines et actualités livraison à Marrakech",
    read_more: "Lire la suite",
    by_author: "Par l'équipe CurateGreen",
    article_cta: "Commandez vos fruits et légumes frais via WhatsApp",

    footer_tagline: "Fruits et légumes frais livrés à votre porte à Marrakech.",
    footer_links: "Liens rapides",
    footer_categories: "Catégories",
    footer_contact_title: "Contact",
    footer_copy: "Tous droits réservés",

    cat_fruits: "Fruits",
    cat_fruits_desc: "Fruits frais de saison et hors saison",
    cat_vegetables: "Légumes",
    cat_vegetables_desc: "Légumes frais directement du souk",
    cat_grocery: "Épicerie",
    cat_grocery_desc: "Produits essentiels locaux et naturels",
    cat_services: "Services",
    cat_services_desc: "Courses et services locaux à Marrakech",

    p_apples: "Pommes",
    p_apples_desc: "Pommes fraîches choisies chaque jour, sucrées et riches en vitamines.",
    p_bananas: "Bananes",
    p_bananas_desc: "Bananes fraîches bien mûres, excellente source d'énergie.",
    p_oranges: "Oranges",
    p_oranges_desc: "Oranges marocaines fraîches, gorgées de vitamine C et de jus.",
    p_strawberries: "Fraises",
    p_strawberries_desc: "Fraises saisonnières fraîches, rouges et sucrées. Disponibles en saison.",
    p_watermelons: "Pastèque",
    p_watermelons_desc: "Grande pastèque fraîche pour l'été. Sucrée et rafraîchissante.",
    p_grapes: "Raisins",
    p_grapes_desc: "Raisins frais avec de grosses baies sucrées.",
    p_seasonal_fruits: "Panier de fruits de saison",
    p_seasonal_fruits_desc: "Une sélection des meilleurs fruits de saison disponibles aujourd'hui.",
    p_tomatoes: "Tomates",
    p_tomatoes_desc: "Tomates rouges fraîches et savoureuses, base de la cuisine marocaine.",
    p_potatoes: "Pommes de terre",
    p_potatoes_desc: "Pommes de terre fraîches en différentes tailles, pour frire ou cuisiner.",
    p_onions: "Oignons",
    p_onions_desc: "Oignons marocains frais, indispensables en cuisine.",
    p_carrots: "Carottes",
    p_carrots_desc: "Carottes fraîches orangées, croquantes et riches en vitamine A.",
    p_lettuce: "Laitue",
    p_lettuce_desc: "Laitue fraîche et verte, idéale pour les salades.",
    p_cucumbers: "Concombres",
    p_cucumbers_desc: "Concombres frais et croquants, parfaits pour toutes les recettes.",
    p_seasonal_vegetables: "Panier de légumes de saison",
    p_seasonal_vegetables_desc: "Une sélection des meilleurs légumes de saison disponibles aujourd'hui.",
    p_eggs: "Œufs",
    p_eggs_desc: "Œufs frais de poules locales, blancs et bruns disponibles.",
    p_milk: "Lait",
    p_milk_desc: "Lait frais marocain de haute qualité.",
    p_bread: "Pain",
    p_bread_desc: "Pain marocain frais du jour, sorti du four local.",
    p_olive_oil: "Huile d'olive",
    p_olive_oil_desc: "Huile d'olive marocaine authentique, extra vierge des oliveraies du Maroc.",
    p_local_products: "Produits locaux",
    p_local_products_desc: "Une sélection de produits locaux marocains soigneusement choisis.",

    s_grocery_shopping: "Courses alimentaires",
    s_grocery_shopping_desc: "On va au supermarché ou épicerie à votre place et livrons votre liste.",
    s_market_purchases: "Achats au souk",
    s_market_purchases_desc: "On fait vos courses à Jemaa el-Fna et dans les souks de la médina.",
    s_pharmacy_pickup: "Retrait pharmacie",
    s_pharmacy_pickup_desc: "On récupère vos médicaments dans n'importe quelle pharmacie de Marrakech.",
    s_document_delivery: "Livraison de documents",
    s_document_delivery_desc: "Livraison sécurisée et rapide de documents officiels à Marrakech.",
    s_parcel_delivery: "Livraison de colis",
    s_parcel_delivery_desc: "Livraison de petits et moyens colis à Marrakech en toute sécurité.",
    s_local_errands: "Courses locales",
    s_local_errands_desc: "Toute petite mission locale à Marrakech — dites-nous et on s'en charge.",

    select_area: "Choisissez votre quartier",
    area_gueliz: "Guéliz",
    area_hivernage: "Hivernage",
    area_medina: "Médina",
    area_targa: "Targa",
    area_sidi_ghanem: "Sidi Ghanem",
    area_palmeraie: "Palmeraie",
    area_rte_casa: "Route de Casablanca",
    area_other: "Autre quartier"
  },

  /* ===================================================================== */
  /* ENGLISH                                                                */
  /* ===================================================================== */
  en: {
    site_name: "CurateGreen",
    site_tagline: "Fresh Fruits & Vegetables Delivered to Your Door in Marrakech",
    site_desc: "Marrakech's local delivery platform for fresh fruits, vegetables and groceries. Order via WhatsApp — no apps, no accounts.",

    nav_home: "Home",
    nav_products: "Products",
    nav_fruits: "Fruits",
    nav_vegetables: "Vegetables",
    nav_grocery: "Grocery",
    nav_services: "Services",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_order_wa: "Order Now",

    hero_badge: "🚀 Fast Delivery in Marrakech",
    hero_title: "Fresh <span class='hl'>Market Produce</span> Delivered to Your Door",
    hero_sub: "We hand-pick the best fruits and vegetables from Marrakech's local souk and deliver them within hours. Order on WhatsApp — it's that simple.",
    hero_btn_order: "🟢 Order on WhatsApp",
    hero_btn_browse: "Browse Products",
    hero_zones_label: "We deliver to:",

    zone_gueliz: "Guéliz",
    zone_hivernage: "Hivernage",
    zone_medina: "Medina",
    zone_targa: "Targa",
    zone_sidi_ghanem: "Sidi Ghanem",
    zone_palmeraie: "Palmeraie",
    zone_rte_casa: "Route de Casablanca",

    sec_categories: "Shop by Category",
    sec_categories_sub: "Pick what you need and we'll deliver it fast and safely",
    sec_featured: "Popular Products",
    sec_featured_sub: "A fresh selection hand-picked every morning from the local market",
    sec_services: "Delivery Services",
    sec_services_sub: "More than fruits and vegetables — we run your local errands too",
    sec_why: "Why Choose CurateGreen?",
    sec_blog: "Latest Articles",
    sec_blog_sub: "Tips, recipes and news about delivery in Marrakech",
    sec_faq: "Frequently Asked Questions",
    sec_contact: "Contact Us",

    feat1_num: "1",
    feat1_title: "Always Fresh",
    feat1_desc: "We buy from the souk every morning and deliver the same day to guarantee freshness.",
    feat2_num: "2",
    feat2_title: "WhatsApp Ordering",
    feat2_desc: "No apps, no accounts. Tap Order and send the pre-filled message in seconds.",
    feat3_num: "3",
    feat3_title: "Wide Coverage",
    feat3_desc: "Guéliz, Hivernage, Medina, Targa, Palmeraie and more neighbourhoods.",
    feat4_num: "4",
    feat4_title: "Market Prices",
    feat4_desc: "Souk prices with no hidden fees. Pay cash on delivery only.",

    cta_title: "Ready to Order? Message Us Now",
    cta_sub: "Our team is available from 7am to 9pm every day. Fast reply guaranteed!",
    cta_btn: "🟢 Start Your Order on WhatsApp",

    lbl_weight: "Weight / Quantity",
    lbl_qty: "Quantity",
    lbl_area: "Delivery Area",
    lbl_order: "Order This Product on WhatsApp",
    lbl_freshness: "Freshness",
    lbl_freshness_val: "Daily — bought in the morning, delivered during the day",
    lbl_origin: "Origin",
    lbl_origin_val: "Local Marrakech Souk",
    lbl_delivery: "Delivery",
    lbl_delivery_val: "Same day in most areas",
    lbl_payment: "Payment",
    lbl_payment_val: "Cash on delivery (Moroccan Dirham)",
    lbl_related: "Related Products",
    lbl_price_from: "From",
    lbl_per_kg: "/ kg",
    lbl_per_piece: "/ piece",
    lbl_per_box: "/ box",
    lbl_per_liter: "/ liter",
    lbl_mad: "MAD",
    seasonal_badge: "Seasonal",
    add_to_order: "Add to Order",

    wa_msg_prefix: "Hello, I'd like to order:\n\n🛒 Product: ",
    wa_msg_weight: "\n⚖️ Weight/Quantity: ",
    wa_msg_qty: "\n🔢 Number: ",
    wa_msg_area: "\n📍 Delivery area: ",
    wa_msg_suffix: "\n\nPlease confirm availability. Thank you 🙏",

    services_title: "Local Delivery Services",
    services_sub: "More than produce — we handle your local errands in Marrakech",
    lbl_request_service: "Request This Service on WhatsApp",
    wa_service_prefix: "Hello, I'd like to enquire about the service:\n\n🚀 Service: ",

    faq_title: "Frequently Asked Questions",
    faq_sub: "Answers to the most common questions about our delivery service",
    faq_q1: "Which delivery areas do you cover?",
    faq_a1: "We currently deliver to: Guéliz, Hivernage, Medina, Targa, Sidi Ghanem, Route de Casablanca and Palmeraie. If you're outside these areas, message us and we'll see what we can do.",
    faq_q2: "How long does delivery take?",
    faq_a2: "Usually 1 to 3 hours depending on the area and peak times. We always aim for same-day delivery on orders placed before 5pm.",
    faq_q3: "How do you guarantee product freshness?",
    faq_a3: "We buy fruits and vegetables at the souk every morning. If any product doesn't meet your expectations at delivery, let us know immediately and we'll sort it out.",
    faq_q4: "How do I place an order?",
    faq_a4: "Simple: browse the products, choose what you need, click 'Order on WhatsApp'. A pre-filled message will open — send it and we'll handle the rest.",
    faq_q5: "Is payment online?",
    faq_a5: "No. Cash on delivery only, in Moroccan dirhams. No payment apps, no cards.",
    faq_q6: "Is there a minimum order?",
    faq_a6: "No minimum on products. Free delivery above 150 MAD. A small delivery fee applies below that.",
    faq_q7: "Can I order in bulk?",
    faq_a7: "Yes, we accept bulk orders. Contact us 24 to 48 hours in advance so we can prepare your order.",
    faq_q8: "What are your opening hours?",
    faq_a8: "We take orders from 7am to 9pm, 7 days a week.",

    contact_title: "Contact Us",
    contact_sub: "We're here to answer your questions and take your orders",
    contact_wa: "Message Us on WhatsApp",
    contact_wa_sub: "Fastest: reply within minutes",
    contact_email: "Send an Email",
    contact_email_sub: "For enquiries and partnerships",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_area: "Your Area",
    contact_form_msg: "Your message",
    contact_form_send: "Send Message",
    contact_areas_title: "Delivery Areas",

    blog_title: "CurateGreen Blog",
    blog_sub: "Tips, Moroccan recipes and delivery news in Marrakech",
    read_more: "Read more",
    by_author: "By the CurateGreen team",
    article_cta: "Order your fresh fruits and vegetables via WhatsApp",

    footer_tagline: "Fresh fruits & vegetables delivered to your door in Marrakech.",
    footer_links: "Quick Links",
    footer_categories: "Categories",
    footer_contact_title: "Contact",
    footer_copy: "All rights reserved",

    cat_fruits: "Fruits",
    cat_fruits_desc: "Fresh seasonal and year-round fruits",
    cat_vegetables: "Vegetables",
    cat_vegetables_desc: "Fresh vegetables straight from the souk",
    cat_grocery: "Grocery",
    cat_grocery_desc: "Essential local and natural products",
    cat_services: "Delivery Services",
    cat_services_desc: "Errands and local services in Marrakech",

    p_apples: "Apples",
    p_apples_desc: "Fresh apples selected daily, sweet and rich in vitamins.",
    p_bananas: "Bananas",
    p_bananas_desc: "Fully ripe fresh bananas, an excellent source of energy.",
    p_oranges: "Oranges",
    p_oranges_desc: "Fresh Moroccan oranges, packed with vitamin C and juice.",
    p_strawberries: "Strawberries",
    p_strawberries_desc: "Fresh seasonal strawberries, red and sweet. Available in season.",
    p_watermelons: "Watermelon",
    p_watermelons_desc: "Large fresh watermelon for summer. Sweet and refreshing.",
    p_grapes: "Grapes",
    p_grapes_desc: "Fresh grapes with large sweet berries.",
    p_seasonal_fruits: "Seasonal Fruit Basket",
    p_seasonal_fruits_desc: "A curated selection of the finest seasonal fruits available today.",
    p_tomatoes: "Tomatoes",
    p_tomatoes_desc: "Fresh red flavorful tomatoes, the backbone of Moroccan cooking.",
    p_potatoes: "Potatoes",
    p_potatoes_desc: "Fresh potatoes in various sizes, perfect for frying or cooking.",
    p_onions: "Onions",
    p_onions_desc: "Fresh Moroccan onions, an essential kitchen staple.",
    p_carrots: "Carrots",
    p_carrots_desc: "Fresh orange carrots, crunchy and rich in vitamin A.",
    p_lettuce: "Lettuce",
    p_lettuce_desc: "Fresh green lettuce, ideal for salads.",
    p_cucumbers: "Cucumbers",
    p_cucumbers_desc: "Fresh crunchy cucumbers, great in any recipe.",
    p_seasonal_vegetables: "Seasonal Veg Basket",
    p_seasonal_vegetables_desc: "A curated selection of the finest seasonal vegetables available today.",
    p_eggs: "Eggs",
    p_eggs_desc: "Fresh eggs from local hens, white and brown available.",
    p_milk: "Milk",
    p_milk_desc: "High-quality fresh Moroccan milk.",
    p_bread: "Bread",
    p_bread_desc: "Fresh Moroccan bread baked daily in the local oven.",
    p_olive_oil: "Olive Oil",
    p_olive_oil_desc: "Authentic Moroccan extra-virgin olive oil from Morocco's olive groves.",
    p_local_products: "Local Products",
    p_local_products_desc: "A carefully curated selection of local Moroccan products.",

    s_grocery_shopping: "Grocery Shopping",
    s_grocery_shopping_desc: "We go to the shop or supermarket for you and deliver your shopping list.",
    s_market_purchases: "Market Purchases",
    s_market_purchases_desc: "We shop for you at Jemaa el-Fna and the Medina souks.",
    s_pharmacy_pickup: "Pharmacy Pickup",
    s_pharmacy_pickup_desc: "We collect your medication from any pharmacy in Marrakech and deliver it.",
    s_document_delivery: "Document Delivery",
    s_document_delivery_desc: "Safe and fast delivery of official documents within Marrakech.",
    s_parcel_delivery: "Parcel Delivery",
    s_parcel_delivery_desc: "Safe delivery of small and medium parcels within Marrakech.",
    s_local_errands: "Local Errands",
    s_local_errands_desc: "Any small local task you need done in Marrakech — tell us and we'll handle it.",

    select_area: "Select your area",
    area_gueliz: "Guéliz",
    area_hivernage: "Hivernage",
    area_medina: "Medina",
    area_targa: "Targa",
    area_sidi_ghanem: "Sidi Ghanem",
    area_palmeraie: "Palmeraie",
    area_rte_casa: "Route de Casablanca",
    area_other: "Other area"
  }
};

/* ==========================================================================
   i18n Engine
   ========================================================================== */
const CG_I18N = {
  _lang: "ar",

  init() {
    const saved = localStorage.getItem("cg_lang");
    const browser = navigator.language?.slice(0, 2);
    const supported = ["ar", "fr", "en"];
    this._lang = supported.includes(saved) ? saved
               : supported.includes(browser) ? browser
               : "ar";
    this.apply(this._lang);
  },

  apply(lang) {
    this._lang = lang;
    localStorage.setItem("cg_lang", lang);
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    /* Translate every element with data-i18n="key" */
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = this.t(key);
      if (val) el.innerHTML = val;
    });

    /* Translate placeholder attributes */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = this.t(key);
      if (val) el.setAttribute("placeholder", val);
    });

    /* Update active lang button */
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    /* Update hreflang link tags if present */
    document.querySelectorAll("link[hreflang]").forEach(link => {
      /* already set in HTML head — no action needed */
    });

    /* Fire custom event for app.js to react */
    document.dispatchEvent(new CustomEvent("cg:langchange", { detail: { lang } }));
  },

  t(key) {
    return CG_TRANSLATIONS[this._lang]?.[key]
        || CG_TRANSLATIONS["ar"]?.[key]
        || key;
  },

  get lang() { return this._lang; }
};

if (typeof module !== "undefined") module.exports = { CG_TRANSLATIONS, CG_I18N };
