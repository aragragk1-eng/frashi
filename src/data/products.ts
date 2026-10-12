export interface ProductColor {
  name: string;
  hex: string;
  label: string;
}

export interface ProductDimensions {
  width: string;
  depth: string;
  height: string;
  weight: string;
  seatHeight?: string;
  tableClearance?: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  arabicName: string;
  tagline: string;
  category: 'living-room' | 'bedroom' | 'dining' | 'office';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean;
  stockCount: number;
  material: string;
  materialCategory: 'solid-wood' | 'boucle-velvet' | 'stone-marble' | 'leather-metal';
  colors: ProductColor[];
  dimensions: ProductDimensions;
  description: string;
  features: string[];
  images: string[];
  deliveryEstimate: string;
  assembly: string;
  warranty: string;
  reviews: Review[];
}

export const PRODUCTS: Product[] = [
  {
    id: "al-noor-curved-boucle-sofa",
    name: "Al-Noor Curved Bouclé Sofa",
    arabicName: "أريكة النور القماشية المنحنية",
    tagline: "Fluid architectural lines draped in cloud-soft Italian bouclé",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 48,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 6,
    material: "Italian Textured Bouclé & Kiln-Dried Oak",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Warm Alabaster", hex: "#F3ECE1", label: "Alabaster" },
      { name: "Oatmeal Beige", hex: "#D6C7B2", label: "Oatmeal" },
      { name: "Charcoal Slate", hex: "#3A3835", label: "Charcoal" }
    ],
    dimensions: {
      width: "235 cm (92.5\")",
      depth: "105 cm (41.3\")",
      height: "76 cm (29.9\")",
      seatHeight: "42 cm (16.5\")",
      weight: "68 kg"
    },
    description: "Designed to be the sculptural centerpiece of conversation, the Al-Noor sofa balances organic serpentine contours with deep, supportive sink-in comfort. Each frame is artisan-crafted from sustainably harvested European beech and kiln-dried oak, padded with high-resiliency multi-density foam and wrapped in tactile, stain-resistant bouclé.",
    features: [
      "Continuous organic curved silhouette for social flow",
      "Stain-resistant commercial-grade Italian bouclé fabric",
      "Reinforced corner-blocked kiln-dried hardwood frame",
      "Dual-layer high-resiliency foam with feather-fiber wrap",
      "Discrete hidden recessed solid oak leveling feet"
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "White-Glove In-Home Delivery & Placement Included",
    warranty: "10-Year Structural Frame Warranty",
    reviews: [
      {
        id: "rev-1",
        author: "Layla Al-Mansoor",
        city: "Dubai, UAE",
        rating: 5,
        date: "2 weeks ago",
        comment: "The focal point of our living salon. Guests cannot stop complimenting the curve and how cozy it feels to sit together. White-glove assembly was flawless.",
        verified: true
      },
      {
        id: "rev-2",
        author: "Tariq H.",
        city: "Riyadh, KSA",
        rating: 5,
        date: "1 month ago",
        comment: "Exceptional build quality. The bouclé is thick and luxurious, definitely high-end residential caliber.",
        verified: true
      }
    ]
  },
  {
    id: "solstice-travertine-coffee-table",
    name: "Solstice Honed Travertine Coffee Table",
    arabicName: "طاولة قهوة صولستيس بحجر الترافرتين",
    tagline: "Natural Italian porous travertine block with geometric cantilever",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 980,
    originalPrice: 1150,
    rating: 4.8,
    reviewsCount: 32,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 11,
    material: "Natural Honed Roman Travertine",
    materialCategory: "stone-marble",
    colors: [
      { name: "Raw Roman Ivory", hex: "#EBE3D5", label: "Roman Ivory" },
      { name: "Silver Ash Travertine", hex: "#B8B1A7", label: "Silver Ash" }
    ],
    dimensions: {
      width: "120 cm (47.2\")",
      depth: "70 cm (27.5\")",
      height: "36 cm (14.2\")",
      weight: "54 kg"
    },
    description: "Quarried directly from historic Italian reserves, each Solstice coffee table features raw natural veining and unique cavernous fissures that make every single piece an irreproducible natural art piece. Sealed with a matte matte-touch nano coating to guard against spills while retaining natural porous stone tactile warmth.",
    features: [
      "100% Solid Natural Italian Travertine Slab",
      "Matte protective seal against liquid stains and lemon acids",
      "Dual cylindrical pedestals for balanced architectural stability",
      "Subtle beveled edge profile softens stone hardness"
    ],
    images: [
      "https://images.unsplash.com/photo-1533779283484-84e1871a2575?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 5 Business Days",
    assembly: "Two-Person White-Glove Installation Included",
    warranty: "Lifetime Natural Stone Guarantee",
    reviews: [
      {
        id: "rev-3",
        author: "Kareem Z.",
        city: "Abu Dhabi",
        rating: 5,
        date: "3 weeks ago",
        comment: "The stone is heavy and genuine. The natural texture has so much depth in sunlight. Highly recommend FRASHI for statement pieces.",
        verified: true
      }
    ]
  },
  {
    id: "zephyr-oak-canopy-platform-bed",
    name: "Zephyr Solid Oak Platform Bed",
    arabicName: "سرير زفير من خشب البلوط الطبيعي",
    tagline: "Low-profile Japandi sanctuary crafted from solid French white oak",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 1650,
    originalPrice: 1950,
    rating: 5.0,
    reviewsCount: 56,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 8,
    material: "FSC® Solid French Oak & Natural Linen",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Blonde Oak", hex: "#D8C3A5", label: "Natural Oak" },
      { name: "Smoked Espresso Oak", hex: "#4A3B32", label: "Smoked Oak" },
      { name: "Bleached Scandinavian Pine", hex: "#EFE6D8", label: "Bleached Oak" }
    ],
    dimensions: {
      width: "208 cm (King: 81.9\")",
      depth: "220 cm (86.6\")",
      height: "92 cm (Headboard: 36.2\")",
      seatHeight: "28 cm (Platform height)",
      weight: "82 kg"
    },
    description: "The Zephyr bed transforms your bedroom into an organic luxury hotel sanctuary. Featuring a floating platform aesthetic, gently angled upholstered headboard in Belgian washed linen, and integrated side ledge margins for resting books and coffee cups.",
    features: [
      "Solid European White Oak framing with traditional Japanese joinery",
      "Integrated cantilever side ledge replacing bulky nightstands",
      "Solid beech sprung slatted base for optimal mattress breathability",
      "Upholstered Belgian linen headboard cushion with removable dry-clean slipcover"
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 5 Business Days",
    assembly: "Free In-Bedroom Professional Assembly Included",
    warranty: "15-Year Solid Wood Frame Warranty",
    reviews: [
      {
        id: "rev-4",
        author: "Mona S.",
        city: "Jeddah",
        rating: 5,
        date: "1 month ago",
        comment: "Sleep quality improved just having this serene wood in the bedroom. Absolutely no creaks or squeaks.",
        verified: true
      }
    ]
  },
  {
    id: "dune-velvet-swivel-armchair",
    name: "Dune Sculptural Swivel Armchair",
    arabicName: "كرسي ديون المخملي الدوار",
    tagline: "Cocooning organic curves with 360-degree silent brushed brass swivel",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 740,
    originalPrice: 890,
    rating: 4.9,
    reviewsCount: 39,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 14,
    material: "Italian Mohair Velvet & Brushed Brass",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Terracotta Rust", hex: "#B85D43", label: "Terracotta" },
      { name: "Warm Olive Moss", hex: "#606D56", label: "Olive" },
      { name: "Sandstone Beige", hex: "#DDD2C1", label: "Sandstone" },
      { name: "Midnight Charcoal", hex: "#222120", label: "Charcoal" }
    ],
    dimensions: {
      width: "88 cm (34.6\")",
      depth: "85 cm (33.5\")",
      height: "78 cm (30.7\")",
      seatHeight: "44 cm (17.3\")",
      weight: "27 kg"
    },
    description: "The Dune armchair envelops the sitter in rich tactile mohair velvet with a snug cocoon barrel back. Beneath the upholstered base rests an ultra-silent, concealed 360-degree swivel plate finished in satin brushed brass.",
    features: [
      "Smooth, silent 360-degree steel bearing swivel base",
      "Short-pile anti-crush luxury Italian velvet",
      "Ergonomic lumbar curvature for reading comfort",
      "Reinforced plywood shell wrapped in feather blend"
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580481077195-c328ad4f3e69?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "Arrives Fully Assembled in Protective Crate",
    warranty: "5-Year Swivel Mechanism & Frame Warranty",
    reviews: [
      {
        id: "rev-5",
        author: "Omar E.",
        city: "Dubai",
        rating: 5,
        date: "Last week",
        comment: "The swivel is butter smooth and the terracotta velvet looks incredibly warm against our neutral walls.",
        verified: true
      }
    ]
  },
  {
    id: "kanso-solid-oak-dining-table",
    name: "Kanso Minimalist Solid Oak Dining Table",
    arabicName: "طاولة طعام كانسو من خشب البلوط المصمت",
    tagline: "Monolithic chamfered dining table comfortably seating 8 to 10 guests",
    category: "dining",
    categoryLabel: "Dining Room",
    price: 1450,
    originalPrice: 1750,
    rating: 4.9,
    reviewsCount: 41,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 5,
    material: "100% Solid European Oak with Organic Oil Finish",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Honey Oak", hex: "#C79D6D", label: "Honey Oak" },
      { name: "Smoked Raven Oak", hex: "#2E2822", label: "Smoked Raven" }
    ],
    dimensions: {
      width: "240 cm (94.5\")",
      depth: "100 cm (39.4\")",
      height: "75 cm (29.5\")",
      tableClearance: "71 cm (28.0\")",
      weight: "74 kg"
    },
    description: "Honoring traditional carpentry techniques, the Kanso Dining Table is constructed from solid oak planks hand-matched for continuous grain alignment. Chamfered underside edge profiles lend an ethereal floating appearance despite massive solid wood strength.",
    features: [
      "Seats 8-10 people with ample legroom",
      "Organic plant-based hardwax oil finish resistant to wine and heat",
      "Integrated underside steel tension rods preventing wood warping across seasons",
      "Softened bullnose corners family-safe for young children"
    ],
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 5 Business Days",
    assembly: "Free White-Glove Table Leg Installation & Room Placement",
    warranty: "25-Year Wood Integrity Guarantee",
    reviews: [
      {
        id: "rev-6",
        author: "Fatima B.",
        city: "Manama",
        rating: 5,
        date: "2 months ago",
        comment: "This table is an heirloom. The wood grain is silky smooth and feels so grounded for family dinner gatherings.",
        verified: true
      }
    ]
  },
  {
    id: "verona-executive-desk",
    name: "Verona Fluted Walnut Executive Desk",
    arabicName: "مكتب فيرونا التنفيذي من خشب الجوز المضلع",
    tagline: "Integrated discreet cable management, tambour modesty panel, and brass accents",
    category: "office",
    categoryLabel: "Home Office",
    price: 1290,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 27,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 7,
    material: "American Black Walnut, Soft-Grain Leather & Brushed Brass",
    materialCategory: "solid-wood",
    colors: [
      { name: "Rich Walnut & Brass", hex: "#5C3A21", label: "American Walnut" },
      { name: "Ash Gray & Matte Black", hex: "#383633", label: "Ash Black" }
    ],
    dimensions: {
      width: "160 cm (63.0\")",
      depth: "75 cm (29.5\")",
      height: "76 cm (29.9\")",
      tableClearance: "68 cm (26.8\")",
      weight: "58 kg"
    },
    description: "Elevate your work from home sanctuary. The Verona desk features a recessed top lined with full-grain magnetic desk pad leather, soft-closing tambour fluted drawers, and hidden wire passthroughs for clean, cable-free productivity.",
    features: [
      "Magnetic leather top blotter with concealed cable trench",
      "Precision fluted solid walnut drawer facades with soft-close Blum sliders",
      "Integrated dual Qi wireless charging pad beneath timber surface",
      "Brushed brass feet ferrule accents"
    ],
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 5 Business Days",
    assembly: "Pre-Assembled Cabinetry with Simple Leg Setup",
    warranty: "10-Year Craftsmanship Guarantee",
    reviews: [
      {
        id: "rev-7",
        author: "Dr. Waleed A.",
        city: "Doha",
        rating: 5,
        date: "3 weeks ago",
        comment: "The built-in wireless charging and fluted wood detailing make this desk look like it belongs in an architectural digest shoot.",
        verified: true
      }
    ]
  },
  {
    id: "elysian-boucle-dining-chairs-set",
    name: "Elysian Dining Armchairs (Set of 2)",
    arabicName: "طقم كراسي طعام إليزيان القماشية (قطعتان)",
    tagline: "Curved wraparound backrest with slender matte black steel architecture",
    category: "dining",
    categoryLabel: "Dining Room",
    price: 580,
    originalPrice: 690,
    rating: 4.8,
    reviewsCount: 34,
    isBestseller: false,
    isNew: false,
    inStock: true,
    stockCount: 16,
    material: "Textured Bouclé Fabric & Carbon Matte Steel",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Pearl Cream", hex: "#F5F0E6", label: "Pearl Cream" },
      { name: "Warm Taupe", hex: "#B3A28F", label: "Warm Taupe" },
      { name: "Charcoal Heather", hex: "#3E3B36", label: "Charcoal" }
    ],
    dimensions: {
      width: "58 cm (22.8\")",
      depth: "56 cm (22.0\")",
      height: "77 cm (30.3\")",
      seatHeight: "47 cm (18.5\")",
      weight: "14 kg (pair)"
    },
    description: "Long dinners require uncompromised comfort. The Elysian chair provides full lumbar wrap with pillowed bouclé seating, effortlessly tucking under standard dining tables while maintaining sculptural elegance.",
    features: [
      "Set of 2 matching armchairs",
      "Tuck-under compact armrest height (66 cm)",
      "High-density molded foam retaining shape after thousands of dinner parties",
      "Floor-safe felt glider caps included"
    ],
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "Minimal assembly required (8 screws per chair)",
    warranty: "5-Year Structural Frame Guarantee",
    reviews: [
      {
        id: "rev-8",
        author: "Nadine K.",
        city: "Kuwait City",
        rating: 5,
        date: "1 month ago",
        comment: "So comfortable that our guests stayed chatting at the table until midnight. The fabric cleans easily with a damp cloth.",
        verified: true
      }
    ]
  },
  {
    id: "atlas-fluted-credenza-sideboard",
    name: "Atlas Fluted Oak Credenza & Sideboard",
    arabicName: "بوفيه وخزانة أطلس من خشب البلوط المضلع",
    tagline: "Sculptural storage featuring four soft-touch doors and Spanish travertine top",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 1720,
    originalPrice: 1990,
    rating: 4.9,
    reviewsCount: 22,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 4,
    material: "FSC® Solid White Oak & Honed Spanish Travertine",
    materialCategory: "stone-marble",
    colors: [
      { name: "Natural Sand Oak", hex: "#D6C3A7", label: "Sand Oak" },
      { name: "Ebonized Ash", hex: "#22201E", label: "Ebonized Ash" }
    ],
    dimensions: {
      width: "185 cm (72.8\")",
      depth: "48 cm (18.9\")",
      height: "76 cm (29.9\")",
      weight: "89 kg"
    },
    description: "The Atlas credenza marries tactile rhythm with expansive storage. Vertical solid oak tambour slats wrap continuous rounded pill corners, topped with a monolithic slab of polished natural travertine.",
    features: [
      "Removable solid travertine stone surface slab",
      "Four push-to-open doors with German soft-close hydraulic dampers",
      "Adjustable interior shelving with concealed media cable pass-throughs",
      "Subtle brass shadow line reveal beneath stone top"
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 6 Business Days",
    assembly: "Full In-Home Unpacking & Leveling Support",
    warranty: "10-Year Craftsmanship Guarantee",
    reviews: [
      {
        id: "rev-9",
        author: "Zaid M.",
        city: "Dubai",
        rating: 5,
        date: "2 weeks ago",
        comment: "The stone top is breathtaking and the push-to-open doors feel wonderfully solid. Worth every penny.",
        verified: true
      }
    ]
  },
  {
    id: "luma-sculptural-brass-floor-lamp",
    name: "Luma Brass Arc & Alabaster Floor Lamp",
    arabicName: "مصباح لوما الأرضي من النحاس وحجر المرمر",
    tagline: "Warm ambient glow diffused through natural Spanish alabaster stone sphere",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 490,
    originalPrice: 590,
    rating: 4.8,
    reviewsCount: 37,
    isBestseller: false,
    isNew: false,
    inStock: true,
    stockCount: 19,
    material: "Spun Brass, Hand-Carved Alabaster & Nero Marquina Base",
    materialCategory: "leather-metal",
    colors: [
      { name: "Brushed Satin Brass", hex: "#D4AF37", label: "Brushed Brass" },
      { name: "Gunmetal Bronzed Black", hex: "#3B3835", label: "Bronzed Black" }
    ],
    dimensions: {
      width: "45 cm (17.7\")",
      depth: "45 cm (17.7\")",
      height: "168 cm (66.1\")",
      weight: "18 kg"
    },
    description: "The Luma lamp casts a warm, museum-quality 2700K ambient glow. A hand-turned Spanish alabaster sphere rests atop an architectural brushed brass stem, stabilized by a heavy black Nero Marquina marble counterweight base.",
    features: [
      "Hand-turned solid Spanish alabaster stone globe",
      "Stepless foot dimmer pedal for setting intimate evening atmosphere",
      "Heavy anti-tip solid Nero Marquina marble floor disc",
      "Included warm dimmable 2700K energy-efficient LED module"
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "1 - 3 Business Days",
    assembly: "Simple 5-Minute Toolless Assembly",
    warranty: "3-Year Electrical & Finish Warranty",
    reviews: [
      {
        id: "rev-10",
        author: "Sarah L.",
        city: "Riyadh",
        rating: 5,
        date: "3 weeks ago",
        comment: "Creates the most romantic evening glow in our salon. The stone shade is pure art.",
        verified: true
      }
    ]
  },
  {
    id: "serena-linen-upholstered-bench",
    name: "Serena Bed-End Belgian Linen Bench",
    arabicName: "مقعد سيرينا لنهاية السرير بالكتان البلجيكي",
    tagline: "Plush tufted bolster bench resting on fluted oak cylindrical legs",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 460,
    originalPrice: 540,
    rating: 4.7,
    reviewsCount: 18,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 12,
    material: "Washed Belgian Linen & Solid Oak",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Oatmeal Linen", hex: "#DFD5C6", label: "Oatmeal Linen" },
      { name: "French Clay", hex: "#C7B8A5", label: "French Clay" }
    ],
    dimensions: {
      width: "140 cm (55.1\")",
      depth: "45 cm (17.7\")",
      height: "46 cm (18.1\")",
      weight: "19 kg"
    },
    description: "The ideal companion at the foot of your bed or welcoming entryway. Styled with hand-pulled biscuit tufting in breathable Belgian flax linen and supported by four fluted solid oak columns.",
    features: [
      "High-density rebound foam cushion maintains tailored shape",
      "100% natural pre-washed Belgian flax linen",
      "Solid European oak pillars with hidden leveling glides"
    ],
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "Fully Pre-Assembled",
    warranty: "5-Year Guarantee",
    reviews: [
      {
        id: "rev-11",
        author: "Hala N.",
        city: "Sharjah",
        rating: 5,
        date: "2 months ago",
        comment: "Fits our king bed width perfectly. The linen is soft and the wood legs match our oak floors.",
        verified: true
      }
    ]
  },
  {
    id: "artisan-woven-cane-bookshelf",
    name: "Aura French Oak & Woven Cane Bookshelf",
    arabicName: "مكتبة أورا من خشب البلوط والخيزران المنسوج",
    tagline: "Architectural arched shelving featuring natural Viennese cane webbing",
    category: "office",
    categoryLabel: "Home Office",
    price: 1120,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 29,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 6,
    material: "French White Oak & Hand-Woven Rattan Cane",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Honey Oak", hex: "#D6B88D", label: "Natural Oak" },
      { name: "Smoked Walnut", hex: "#3D3128", label: "Smoked Walnut" }
    ],
    dimensions: {
      width: "95 cm (37.4\")",
      depth: "40 cm (15.7\")",
      height: "195 cm (76.8\")",
      weight: "48 kg"
    },
    description: "An elegant tribute to Mid-century modernist arches. Hand-woven rattan cane backing filters light beautifully while five reinforced solid oak shelves support your curated book collection, ceramic vases, and decorative treasures.",
    features: [
      "Graceful neoclassical rounded arch profile",
      "Authentic hand-woven Viennese cane mesh backboard",
      "5 solid oak shelves rated for 35 kg load per tier",
      "Integrated wall anchor safety kit included"
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 5 Business Days",
    assembly: "Free White-Glove In-Room Setup & Wall Securing",
    warranty: "10-Year Craftsmanship Guarantee",
    reviews: [
      {
        id: "rev-12",
        author: "Mansoor T.",
        city: "Al Ain",
        rating: 5,
        date: "1 month ago",
        comment: "The arch detail softens the entire room. Spectacular build quality.",
        verified: true
      }
    ]
  }
];

export const ROOM_CATEGORIES = [
  {
    id: "living-room",
    title: "Living with FRASHI",
    arabicTitle: "غرف المعيشة الراقية",
    subtitle: "Organic curves, cloud-soft bouclé & sculptural stone centerpieces",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    itemCount: 42,
    badge: "Most Popular"
  },
  {
    id: "bedroom",
    title: "Bedroom Sanctuary",
    arabicTitle: "ملاذ غرف النوم الهادئة",
    subtitle: "Low-profile timber platform beds, Belgian washed linen & ambient calm",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    itemCount: 28,
    badge: "Trending"
  },
  {
    id: "dining",
    title: "Culinary & Dining",
    arabicTitle: "مساحات تناول الطعام",
    subtitle: "Monolithic solid oak tables and welcoming wraparound dining armchairs",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    itemCount: 24,
    badge: "Artisanal"
  },
  {
    id: "office",
    title: "Executive Study",
    arabicTitle: "المكاتب المنزلية الفاخرة",
    subtitle: "Fluted timber executive desks, ergonomic luxury & woven cane shelving",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    itemCount: 19,
    badge: "Refined"
  }
];

export const TRUST_BADGES = [
  {
    icon: "Truck",
    title: "White-Glove Home Delivery",
    desc: "Free room-of-choice placement and unboxing on all furniture orders."
  },
  {
    icon: "ShieldCheck",
    title: "10-Year Solid Warranty",
    desc: "Heirloom-grade craftsmanship backed by our structural frame guarantee."
  },
  {
    icon: "Wrench",
    title: "Complimentary Assembly",
    desc: "Professional assembly team assembles and removes packaging waste."
  },
  {
    icon: "Clock",
    title: "30-Day In-Home Trial",
    desc: "Experience FRASHI in your home with effortless return support."
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does FRASHI White-Glove delivery and assembly work?",
    a: "Every large furniture piece is delivered by our specialized two-person white-glove team. We schedule an exact delivery window, bring the items directly into your room of choice, handle complete professional assembly, and remove all eco-packaging materials."
  },
  {
    q: "Can I pay with Cash on Delivery (COD)?",
    a: "Yes! FRASHI proudly supports Cash on Delivery across the UAE, Saudi Arabia, Qatar, and Kuwait. You inspect your furniture in your home before paying our delivery team, or you can pay securely online via Credit/Debit card."
  },
  {
    q: "Can I order or customize dimensions directly via WhatsApp?",
    a: "Absolutely. Our design stylists are available via WhatsApp 7 days a week. You can tap our floating WhatsApp button to share your floor plans, request custom upholstery swatches, or finalize an order instantly."
  },
  {
    q: "What materials and sustainability certifications does FRASHI use?",
    a: "We only use FSC® certified European oak, kiln-dried hardwoods, raw Italian travertine, OEKO-TEX® certified bouclé, and non-toxic water-based waxes to ensure zero VOC emissions inside your home."
  },
  {
    q: "What is your return policy if the piece doesn't fit my room?",
    a: "We offer a 30-day in-home trial. If a piece does not suit your space, simply contact our concierge team and we will arrange a complimentary pickup and full refund."
  }
];
