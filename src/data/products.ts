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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1580481077195-c328ad4f3e69?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580481077195-c328ad4f3e69?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
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
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
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
  },
  {
    id: "andalus-modular-boucle-sectional",
    name: "Andalus Modular Curved Bouclé Sectional",
    arabicName: "كنبة أندلس المعيارية الفاخرة المنحنية",
    tagline: "Expansive cloud seating sculpted with organic curves and sink-in luxury",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 2450,
    originalPrice: 2890,
    rating: 5.0,
    reviewsCount: 42,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 5,
    material: "Textured Bouclé Fabric & Solid Beech Frame",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Alabaster White", hex: "#F5F2EB", label: "Alabaster" },
      { name: "Desert Sand", hex: "#DDD2C1", label: "Sand" },
      { name: "Charcoal Shadow", hex: "#2C2A29", label: "Charcoal" }
    ],
    dimensions: {
      width: "310 cm (122.0\")",
      depth: "165 cm (Chaise: 65.0\")",
      height: "75 cm (29.5\")",
      seatHeight: "43 cm (16.9\")",
      weight: "110 kg"
    },
    description: "The Andalus sectional commands attention with monumental organic fluidity. Designed as modular segments with interlocking hidden crocodile clips, allowing customizable right or left chaise orientations. Upholstered in tactile cloud-soft European bouclé.",
    features: [
      "Modular 3-piece interlocking sectional design",
      "Extra-deep 105 cm sink-in lounge seating depth",
      "Stain-resistant commercial performance bouclé weave",
      "Feather-fiber blend topper over pocket-sprung core"
    ],
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 5 Business Days",
    assembly: "Two-Person White-Glove Installation & Packaging Disposal",
    warranty: "10-Year Solid Hardwood Frame Warranty",
    reviews: [
      {
        id: "rev-13",
        author: "Yasmine B.",
        city: "Casablanca, Maroc",
        rating: 5,
        date: "1 week ago",
        comment: "Magnifique canapé ! Le tissu bouclé est d'une douceur incroyable et le design courbé transforme notre salon.",
        verified: true
      }
    ]
  },
  {
    id: "marrakech-round-marble-dining-table",
    name: "Marrakech Round Nero Marquina Marble Table",
    arabicName: "طاولة طعام مراكش الرخامية الدائرية",
    tagline: "Solid Nero Marquina marble slab resting on monolithic fluted smoked oak base",
    category: "dining",
    categoryLabel: "Dining Room",
    price: 1890,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 31,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 6,
    material: "Spanish Nero Marquina Marble & Solid Smoked Oak",
    materialCategory: "stone-marble",
    colors: [
      { name: "Nero Marquina & Smoked Oak", hex: "#1C1B1A", label: "Black Marble" },
      { name: "Calacatta Gold & Natural Oak", hex: "#F3EDE4", label: "White Marble" }
    ],
    dimensions: {
      width: "140 cm (Diameter: 55.1\")",
      depth: "140 cm (55.1\")",
      height: "76 cm (29.9\")",
      tableClearance: "72 cm (28.3\")",
      weight: "95 kg"
    },
    description: "Celebrating Moroccan and Mediterranean convivial dining, the Marrakech round table brings intimate dinner conversations to life. Features a honed solid marble disc with natural dramatic white veining over a cylindrical fluted oak pedestal.",
    features: [
      "Solid 30mm thick honed natural marble tabletop",
      "Circular footprint comfortably seats 6 to 8 people",
      "Stain-shield nano impregnator protects against wine and citrus",
      "Fluted solid European oak pedestal weighted for zero wobble"
    ],
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 6 Business Days",
    assembly: "Free White-Glove Heavy Marble Setup Included",
    warranty: "Lifetime Natural Stone Integrity Guarantee",
    reviews: [
      {
        id: "rev-14",
        author: "Mehdi K.",
        city: "Rabat, Maroc",
        rating: 5,
        date: "2 weeks ago",
        comment: "Le marbre est sublime avec des veines blanches naturelles uniques. Table majestueuse pour notre salle à manger.",
        verified: true
      }
    ]
  },
  {
    id: "palais-japandi-minimalist-wardrobe",
    name: "Palais Fluted Solid Oak Wardrobe",
    arabicName: "خزانة ملابس قصر من خشب البلوط المضلع",
    tagline: "Floor-to-ceiling sanctuary storage with integrated warm LED illumination",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 2150,
    originalPrice: 2500,
    rating: 4.9,
    reviewsCount: 23,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 4,
    material: "FSC® French White Oak & Brushed Brass Hardware",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Honey Oak", hex: "#D8C3A5", label: "Natural Oak" },
      { name: "Smoked Espresso", hex: "#4A3B32", label: "Espresso Oak" }
    ],
    dimensions: {
      width: "125 cm (49.2\")",
      depth: "60 cm (23.6\")",
      height: "210 cm (82.7\")",
      weight: "115 kg"
    },
    description: "The Palais Wardrobe redefines bedroom organization. Dual soft-close doors with architectural vertical fluting open to reveal solid oak hanging rails, felt-lined jewelry drawers, and automated motion-activated warm LED light bars.",
    features: [
      "Precision fluted solid European white oak front doors",
      "Integrated motion-sensor warm 2700K LED interior lighting",
      "Adjustable modular shelving and dual solid wood hanging rods",
      "Two hidden velvet-lined push-to-open accessory drawers"
    ],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "4 - 7 Business Days",
    assembly: "Complete In-Bedroom Unpacking, Leveling & Wall Anchoring",
    warranty: "15-Year Structural Frame Warranty",
    reviews: [
      {
        id: "rev-15",
        author: "Khadija E.",
        city: "Casablanca, Maroc",
        rating: 5,
        date: "3 weeks ago",
        comment: "Un chef d'œuvre dans notre chambre. L'éclairage intérieur automatique et la finition du bois sont d'une perfection rare.",
        verified: true
      }
    ]
  },
  {
    id: "riad-sculptural-lounge-chaise",
    name: "Riad Sculptural Bouclé Chaise Lounge",
    arabicName: "شيزلونج رياض الاسترخائي المنحوت",
    tagline: "Waveform ergonomic curves draped in tactile textured bouclé",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 1180,
    originalPrice: 1390,
    rating: 4.8,
    reviewsCount: 36,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 8,
    material: "Textured Italian Bouclé & Kiln-Dried Hardwood",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Chalk Cream", hex: "#F3ECE1", label: "Chalk Cream" },
      { name: "Oatmeal Warmth", hex: "#D8CAB8", label: "Oatmeal" },
      { name: "Olive Velvet", hex: "#5C6753", label: "Olive" }
    ],
    dimensions: {
      width: "175 cm (68.9\")",
      depth: "78 cm (30.7\")",
      height: "72 cm (28.3\")",
      seatHeight: "38 cm (15.0\")",
      weight: "36 kg"
    },
    description: "Designed for afternoon reading and tranquil reverie. The Riad Chaise Lounge follows the natural ergonomic contours of the human spine, offering zero-pressure body support enveloped in tactile textured Italian bouclé.",
    features: [
      "Ergonomic serpentine silhouette supporting full spinal alignment",
      "Weighted anti-shift base with hidden protective glide pads",
      "High-resiliency cold-cured molded foam retains form indefinitely",
      "Matching cylindrical neck bolster cushion included"
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "Arrives Fully Assembled in Protective Crate",
    warranty: "5-Year Structural Frame Warranty",
    reviews: [
      {
        id: "rev-16",
        author: "Anas M.",
        city: "Marrakech, Maroc",
        rating: 5,
        date: "2 weeks ago",
        comment: "Confort absolu pour la lecture. La ligne sculpturale attire tous les regards dans notre salon.",
        verified: true
      }
    ]
  },
  {
    id: "atlas-travertine-brass-table-lamp",
    name: "Atlas Travertine & Fluted Brass Table Lamp",
    arabicName: "مصباح طاولة أطلس بحجر الترافرتين والنحاس (مصابيح فاخرة)",
    tagline: "Sculptural honed Roman travertine cylinder base with warm fluted brass shade",
    category: "living-room",
    categoryLabel: "Lighting & Living",
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 26,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 15,
    material: "Honed Roman Travertine, Spun Brushed Brass & Matte Linen Shade",
    materialCategory: "stone-marble",
    colors: [
      { name: "Raw Roman Ivory", hex: "#EBE3D5", label: "Travertine Ivory" },
      { name: "Smoked Silver Travertine", hex: "#B8B1A7", label: "Silver Travertine" }
    ],
    dimensions: {
      width: "35 cm (13.8\")",
      depth: "35 cm (13.8\")",
      height: "54 cm (21.3\")",
      weight: "8.5 kg"
    },
    description: "The Atlas table lamp brings sculptural warmth and ambient museum-quality lighting to consoles, bedside tables, and executive desks. The monolithic cylindrical base is carved from solid Italian travertine, topped with a warm brushed brass rotary dimmer switch.",
    features: [
      "Solid carved Roman travertine stone cylinder base",
      "Satin spun brushed brass accent collar and finial",
      "Rotary brass dimmer on base controlling 2700K warm LED light",
      "Textured natural linen drum shade dispersing soft glare-free light"
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "1 - 3 Business Days",
    assembly: "Arrives Fully Assembled with Included Warm LED Bulb",
    warranty: "3-Year Electrical & Finish Guarantee",
    reviews: [
      {
        id: "rev-20",
        author: "Amina R.",
        city: "Casablanca, Maroc",
        rating: 5,
        date: "5 days ago",
        comment: "Une lampe bijou ! Le socle en travertin véritable est lourd et magnifique sur notre buffet en chêne.",
        verified: true
      }
    ]
  },
  {
    id: "mila-curved-boucle-loveseat",
    name: "Mila Compact Curved 2-Seater Bouclé Loveseat",
    arabicName: "أريكة ميلا الصغيرة ثنائية المقاعد بقماش البوكلي (أريكة صغيرة)",
    tagline: "Intimate sculptural curves tailored for cozy salons, reading corners, and master suites",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 1190,
    originalPrice: 1380,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 9,
    material: "Italian Textured Bouclé & Solid Oak Hidden Frame",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Warm Alabaster", hex: "#F3ECE1", label: "Alabaster" },
      { name: "Oatmeal Beige", hex: "#D6C7B2", label: "Oatmeal" },
      { name: "Moss Velvet", hex: "#5C6753", label: "Moss" }
    ],
    dimensions: {
      width: "165 cm (65.0\")",
      depth: "92 cm (36.2\")",
      height: "76 cm (29.9\")",
      seatHeight: "42 cm (16.5\")",
      weight: "44 kg"
    },
    description: "The Mila Loveseat delivers the celebrated organic contours of our larger sofas in a space-conscious compact 2-seater scale. Perfect for apartments, bedroom seating zones, or complementary fireside seating in larger salons.",
    features: [
      "Compact 165 cm width fitting standard Moroccan salons and boutique spaces",
      "Continuous barrel backrest enveloping two sitters in cocooning comfort",
      "Commercial-grade stain-resistant European bouclé",
      "Reinforced corner-blocked kiln-dried hardwood frame"
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "White-Glove In-Room Delivery & Leveling Included",
    warranty: "10-Year Structural Frame Warranty",
    reviews: [
      {
        id: "rev-21",
        author: "Nabila T.",
        city: "Rabat, Maroc",
        rating: 5,
        date: "1 week ago",
        comment: "Idéal pour notre coin lecture. La courbe est très raffinée et l'assise est ferme et moelleuse à la fois.",
        verified: true
      }
    ]
  },
  {
    id: "somno-luxury-convertible-sleeper-sofa",
    name: "Somno Luxury Queen Convertible Sleeper Sofa",
    arabicName: "أريكة سومنو الكبيرة للنوم الفاخرة القابلة للتحويل (أريكة سرير)",
    tagline: "Effortless silent German conversion mechanism transforming into a deep queen memory-foam bed",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 2280,
    originalPrice: 2650,
    rating: 5.0,
    reviewsCount: 45,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 6,
    material: "High-Density Belgian Weave Fabric & Kiln-Dried Hardwood",
    materialCategory: "boucle-velvet",
    colors: [
      { name: "Sandstone Linen Weave", hex: "#D6C7B2", label: "Sandstone" },
      { name: "Charcoal Slate", hex: "#3A3835", label: "Charcoal" },
      { name: "Pebble Cream", hex: "#ECE6DD", label: "Pebble Cream" }
    ],
    dimensions: {
      width: "228 cm (89.8\")",
      depth: "105 cm (Bed open: 215 cm)",
      height: "82 cm (32.3\")",
      seatHeight: "44 cm (17.3\")",
      weight: "98 kg"
    },
    description: "No compromise between day lounge aesthetics and restful night sleep. The Somno sleeper sofa converts silently in one fluid movement without removing back cushions, revealing an authentic 14 cm pocket-sprung queen mattress with breathable cooling memory foam.",
    features: [
      "Patented one-touch conversion mechanism without removing cushions",
      "True Queen-size 150x200 cm sleeping surface for 2 adults",
      "Integrated 14 cm multi-density pocket-spring mattress with gel topper",
      "Breathable stain-guarded Belgian architectural weave fabric"
    ],
    images: [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 5 Business Days",
    assembly: "Two-Person White-Glove Installation & Demonstration Included",
    warranty: "10-Year Mechanism & Structural Frame Warranty",
    reviews: [
      {
        id: "rev-22",
        author: "Karim D.",
        city: "Marrakech, Maroc",
        rating: 5,
        date: "2 weeks ago",
        comment: "Nos invités ont dormi comme dans un hôtel 5 étoiles. Le mécanisme s'ouvre d'une seule main sans aucun effort.",
        verified: true
      }
    ]
  },
  {
    id: "majlis-oak-dining-set-with-chairs",
    name: "Majlis Solid Oak Dining Table & 6 Armchairs Ensemble",
    arabicName: "طقم مائدة طعام مجلس مع 6 كراسي فاخرة (مائدة بالكراسي)",
    tagline: "Complete monolithic chamfered oak dining table paired with 6 tactile curved armchairs",
    category: "dining",
    categoryLabel: "Dining Ensemble",
    price: 2680,
    originalPrice: 3100,
    rating: 5.0,
    reviewsCount: 39,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 4,
    material: "100% Solid European Oak & Textured Bouclé Dining Chairs",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Honey Oak & Pearl Bouclé", hex: "#C79D6D", label: "Natural Oak" },
      { name: "Smoked Espresso Oak & Charcoal", hex: "#3D3128", label: "Smoked Oak" }
    ],
    dimensions: {
      width: "240 cm (Table: 94.5\")",
      depth: "100 cm (39.4\")",
      height: "76 cm (29.9\")",
      weight: "118 kg (Full 7-piece set)"
    },
    description: "The complete dining ensemble designed for harmonious banquets. Includes our 240 cm solid French oak table and 6 perfectly proportioned Elysian bouclé armchairs that tuck seamlessly beneath the chamfered table edge.",
    features: [
      "Complete 7-Piece Set: 1 Solid Oak Dining Table + 6 Curved Armchairs",
      "Accommodates up to 8-10 people comfortably",
      "Stain-resistant hardwax oil finish immune to hot plates and spills",
      "High-density molded chairs with seamless bouclé lumbar cushioning"
    ],
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "3 - 6 Business Days",
    assembly: "White-Glove Assembly, Chair Leveling & Packaging Clearance",
    warranty: "25-Year Solid Wood Table Warranty & 5-Year Chair Warranty",
    reviews: [
      {
        id: "rev-23",
        author: "Soukaina H.",
        city: "Tanger, Maroc",
        rating: 5,
        date: "3 weeks ago",
        comment: "Achat parfait. L'ensemble est d'une élégance rare et le bois sent le chêne naturel noble.",
        verified: true
      }
    ]
  },
  {
    id: "atlas-triple-door-mirrored-wardrobe",
    name: "Atlas Triple-Door Oak & Smoked Glass Wardrobe",
    arabicName: "خزانة ملابس أطلس ثلاثية الأبواب بالزجاج المدخن والبلوط (خزانة ملابس)",
    tagline: "Architectural wardrobe with acoustic soft-close doors, integrated wardrobe rail, and drawer vaults",
    category: "bedroom",
    categoryLabel: "Bedroom Storage",
    price: 2450,
    originalPrice: 2850,
    rating: 4.9,
    reviewsCount: 28,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 5,
    material: "French Solid Oak, Smoked Tempered Glass & Brushed Brass",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Honey Oak", hex: "#D8C3A5", label: "Natural Oak" },
      { name: "Smoked Raven Oak", hex: "#2E2822", label: "Smoked Raven" }
    ],
    dimensions: {
      width: "180 cm (70.9\")",
      depth: "62 cm (24.4\")",
      height: "215 cm (84.6\")",
      weight: "145 kg"
    },
    description: "An architectural tour de force for the master bedroom sanctuary. Featuring three full-height doors pairing solid fluted oak with subtly smoked bronze glass panels, lined with dual soft-glow interior LED vertical strip channels.",
    features: [
      "Three soft-close doors with fluted solid oak and smoked safety glass",
      "Integrated dual warm 2700K motion-sensing LED light channels",
      "Four internal velvet-lined soft-close accessory drawers with dividers",
      "Dual heavy-gauge brass coat hanging rails for suits, dresses and abayas"
    ],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "4 - 7 Business Days",
    assembly: "Professional In-Home Installation, Leveling & Wall Anchor Included",
    warranty: "15-Year Structural Frame Warranty",
    reviews: [
      {
        id: "rev-24",
        author: "Dr. Hamza F.",
        city: "Casablanca, Maroc",
        rating: 5,
        date: "2 weeks ago",
        comment: "Rangement immense et éclairage somptueux. Les portes se ferment dans un silence absolu.",
        verified: true
      }
    ]
  },
  {
    id: "andalus-fluted-oak-shoe-cabinet",
    name: "Andalus Fluted Oak Entryway Shoe Storage Cabinet",
    arabicName: "خزانة أحذية أندلس العصرية من خشب البلوط المضلع (خزانة الأحذية)",
    tagline: "Slimline architectural entryway cabinet holding 24+ pairs with ventilated fluted slats & brass handles",
    category: "living-room",
    categoryLabel: "Entryway & Storage",
    price: 780,
    originalPrice: 920,
    rating: 4.8,
    reviewsCount: 34,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 11,
    material: "FSC® Solid White Oak, Ventilated Louvers & Brushed Brass",
    materialCategory: "solid-wood",
    colors: [
      { name: "Natural Sand Oak", hex: "#D6C3A7", label: "Sand Oak" },
      { name: "Smoked Espresso Oak", hex: "#4A3B32", label: "Espresso Oak" }
    ],
    dimensions: {
      width: "110 cm (43.3\")",
      depth: "36 cm (Slimline: 14.2\")",
      height: "105 cm (41.3\")",
      weight: "46 kg"
    },
    description: "Transforms the entrance of your home with uncluttered minimalist calm. Behind the three fluted push-to-open doors lie four adjustable tiers holding up to 24 pairs of shoes, complete with rear air ventilation slots to keep footwear fresh.",
    features: [
      "Slimline 36 cm depth designed specifically for entryways and corridors",
      "Holds 20-24 pairs of adult shoes across four adjustable tiers",
      "Concealed rear ventilation airflow slots prevent moisture and odors",
      "Recessed upper catch-all tray for keys, sunglasses, and fragrances"
    ],
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "2 - 4 Business Days",
    assembly: "Arrives Pre-Assembled with Wall Anti-Tip Hardware",
    warranty: "10-Year Craftsmanship Warranty",
    reviews: [
      {
        id: "rev-25",
        author: "Meryem A.",
        city: "Rabat, Maroc",
        rating: 5,
        date: "4 days ago",
        comment: "Parfait pour notre entrée ! Très peu encombrant en profondeur mais contient toutes nos chaussures sans désordre.",
        verified: true
      }
    ]
  },
  {
    id: "sahara-sculptural-ceramic-vases-set",
    name: "Sahara Sculptural Hand-Thrown Ceramic Vases (Set of 3)",
    arabicName: "طقم مزهريات صحراء الخزفية النحتية - 3 قطع (مزهريات وديكور)",
    tagline: "Trio of textured sand-matte terracotta & porous ceramic sculptural vessels for olive branches & pampas",
    category: "living-room",
    categoryLabel: "Decor & Vases",
    price: 260,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 52,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 22,
    material: "Hand-Thrown Stoneware Ceramic & Natural Textured Sand Glaze",
    materialCategory: "stone-marble",
    colors: [
      { name: "Textured Sand & Chalk", hex: "#E8DFC8", label: "Desert Sand" },
      { name: "Terracotta Earth", hex: "#B85D43", label: "Terracotta" },
      { name: "Basalt Charcoal", hex: "#32302E", label: "Basalt Black" }
    ],
    dimensions: {
      width: "Large: 22 cm, Med: 18 cm, Small: 14 cm",
      depth: "Large: 22 cm, Med: 18 cm, Small: 14 cm",
      height: "Large: 38 cm, Med: 28 cm, Small: 18 cm",
      weight: "8.2 kg (Trio total)"
    },
    description: "Inspired by the organic dunes of the Sahara and traditional Moroccan potteries of Safi. Each vase in this trio is hand-thrown on a potter's wheel and finished with raw tactile textured slip glaze. 100% watertight for fresh flowers, olive branches, or dried botanical pampas.",
    features: [
      "Complete set of 3 complementary organic tiered vases",
      "Hand-thrown heavy stoneware ceramic with textured raw slip",
      "100% Watertight glazed interior for fresh floral arrangements",
      "Soft padded silicone protective feet prevent scratching table surfaces"
    ],
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533779283484-84e1871a2575?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryEstimate: "1 - 3 Business Days",
    assembly: "Arrives in Custom Foam Fitted Gift Box",
    warranty: "Breakage-Free Safe Delivery Guarantee",
    reviews: [
      {
        id: "rev-26",
        author: "Leila C.",
        city: "Casablanca, Maroc",
        rating: 5,
        date: "1 week ago",
        comment: "Le trio de vases est superbe sur notre table basse en travertin avec des branches d'olivier. Texture minérale sublime.",
        verified: true
      }
    ]
  }
];

export interface LookbookItem {
  id: string;
  title: string;
  arabicTitle: string;
  space: string;
  image: string;
  featuredProductId: string;
  description: string;
}

export const FURNITURE_LOOKBOOK: LookbookItem[] = [
  {
    id: "lookbook-1",
    title: "The Sculptural Sunlit Salon",
    arabicTitle: "صالون المعيشة المنحوت والمضيء",
    space: "Living Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "al-noor-curved-boucle-sofa",
    description: "Organic serpentine lines meeting natural Mediterranean sunlight and French oak details."
  },
  {
    id: "lookbook-2",
    title: "Minimalist Master Sanctuary",
    arabicTitle: "جناح النوم الهادئ بالخشب الطبيعي",
    space: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "zephyr-oak-canopy-platform-bed",
    description: "Low-profile French oak platform bed with soft layered Belgian linen and ambient calm."
  },
  {
    id: "lookbook-3",
    title: "Convivial Monolithic Dining",
    arabicTitle: "مساحة الطعام العائلية الرخامية",
    space: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "kanso-solid-oak-dining-table",
    description: "Chamfered solid oak table welcoming family banquets and intimate candlelight dinners."
  },
  {
    id: "lookbook-4",
    title: "Tactile Travertine & Bouclé Lounge",
    arabicTitle: "جلسة رخام الترافرتين وأقمشة البوكلي",
    space: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "solstice-travertine-coffee-table",
    description: "Monolithic Italian travertine paired with cloud-soft bouclé upholstery."
  },
  {
    id: "lookbook-5",
    title: "Executive Fluted Study",
    arabicTitle: "المكتب التنفيذي من خشب الجوز المضلع",
    space: "Home Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "verona-executive-desk",
    description: "Cable-free refined productivity with walnut tambour fluting and leather top."
  },
  {
    id: "lookbook-6",
    title: "Curved Velveteen Reading Nook",
    arabicTitle: "ركن القراءة بالمخمل والتصميم الدوار",
    space: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "dune-velvet-swivel-armchair",
    description: "360-degree silent brushed brass swivel armchair enveloping the reader in cocooning comfort."
  },
  {
    id: "lookbook-7",
    title: "The Grand Banqueting Dining Ensemble",
    arabicTitle: "طقم مائدة الطعام الكاملة بالكراسي",
    space: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "majlis-oak-dining-set-with-chairs",
    description: "Solid French oak 240 cm dining table unified with 6 curved Elysian bouclé armchairs."
  },
  {
    id: "lookbook-8",
    title: "Sculptural Ceramic & Floral Vessels",
    arabicTitle: "طقم مزهريات صحراء الخزفية النحتية",
    space: "Living Room",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "sahara-sculptural-ceramic-vases-set",
    description: "Trio of hand-thrown stoneware pottery vessels creating textural serenity on travertine tables."
  },
  {
    id: "lookbook-9",
    title: "Fluted Oak Entryway Shoe Sanctuary",
    arabicTitle: "خزانة أحذية أندلس والمدخل العصري",
    space: "Living Room",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    featuredProductId: "andalus-fluted-oak-shoe-cabinet",
    description: "Minimalist fluted timber shoe storage holding 24+ pairs without hallway clutter."
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
