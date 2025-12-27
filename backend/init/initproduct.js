const mongoose = require('mongoose');
const Product = require('../models/Product');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const products = [
  {
    name: "Nomad Wool Cardigan",
    price: "6800",
    images: [
      { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80", alt: "Structured Wool Cardigan" },
      { src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80", alt: "Wool Texture Close-up" },
      { src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80", alt: "Layered Style" },
      { src: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80", alt: "Hanging View" }
    ],
    colors: [{ name: "Stone" }, { name: "Mocha" }],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true }
    ],
    description: "A chunky-knit cardigan designed for layering during coastal autumns.",
    highlights: ["Ethically Sourced Wool", "Real Horn Buttons", "Oversized Fit"],
    details: "The heavy knit pattern provides natural insulation while remaining highly breathable."
  },
  {
    name: "Ghost Shell Bomber",
    price: "9200",
    images: [
      { src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80", alt: "Translucent Tech Bomber" },
      { src: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80", alt: "Tech Detail" },
      { src: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1200&q=80", alt: "Back Profile" },
      { src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80", alt: "Cuff Detail" }
    ],
    colors: [{ name: "Ice" }, { name: "Ink" }],
    sizes: [
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false }
    ],
    description: "A semi-translucent technical jacket that layers beautifully over graphic tees.",
    highlights: ["Water-repellent Shell", "Internal Utility Straps", "Minimalist Silhouette"],
    details: "Crafted from a Japanese micro-ripstop fabric that is as light as air but incredibly strong."
  },
  {
    name: "Symmetry Linen Shorts",
    price: "2400",
    images: [
      { src: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1200&q=80", alt: "White Linen Shorts" },
      { src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80", alt: "Linen Texture" },
      { src: "https://images.unsplash.com/photo-1565084888279-aff9969be04c?auto=format&fit=crop&w=1200&q=80", alt: "Pocket Detail" },
      { src: "https://images.unsplash.com/photo-1506629082925-62bbda782979?auto=format&fit=crop&w=1200&q=80", alt: "Back View" }
    ],
    colors: [{ name: "White" }, { name: "Sand" }],
    sizes: [
      { name: "30", inStock: true },
      { name: "32", inStock: true },
      { name: "34", inStock: true }
    ],
    description: "The ultimate warm-weather essential, designed with a clean, tailored hem.",
    highlights: ["Italian Linen Blend", "Drawstring Waist", "Quick-Dry Properties"],
    details: "Perfect for poolside lounging or casual outdoor dining. Features hidden zippered pockets."
  },
  {
    name: "Void Leather Chelsea",
    price: "15500",
    images: [
      { src: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80", alt: "Black Leather Boots" },
      { src: "https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?auto=format&fit=crop&w=1200&q=80", alt: "Side Profile" },
      { src: "https://images.unsplash.com/photo-1549037170-819df9ad3e0e?auto=format&fit=crop&w=1200&q=80", alt: "Sole Detail" },
      { src: "https://images.unsplash.com/photo-1542491595-3004b4475871?auto=format&fit=crop&w=1200&q=80", alt: "In-box View" }
    ],
    colors: [{ name: "Midnight" }],
    sizes: [
      { name: "40", inStock: true },
      { name: "42", inStock: true },
      { name: "44", inStock: true }
    ],
    description: "Handcrafted Italian leather boots with a modern, sleek profile.",
    highlights: ["Full-Grain Nappa Leather", "Vibram Outsole", "Elastic Side Panels"],
    details: "A timeless silhouette reinterpreted with a slightly squared toe and premium comfort insole."
  },
  {
    name: "Aether Tech Shell",
    price: "11500",
    images: [
      { src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80", alt: "Tech Shell Front" },
      { src: "https://images.unsplash.com/photo-1504191463004-41150fb7d7c6?auto=format&fit=crop&w=800&q=80", alt: "Tech Shell Detail" },
      { src: "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?auto=format&fit=crop&w=800&q=80", alt: "Tech Shell Side" },
      { src: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80", alt: "Tech Shell Back" }
    ],
    colors: [{ name: "Cobalt" }, { name: "Midnight" }],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true }
    ],
    description: "A high-performance waterproof shell featuring GORE-TEX technology and laser-cut ventilation.",
    highlights: ["Seam-sealed Construction", "Magnetic Closures", "3-Layer Lamination"],
    details: "Designed for extreme conditions. The fabric is both highly breathable and 100% windproof."
  },
  {
    name: "Sculpt Oversized Tee",
    price: "2400",
    images: [
      { src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", alt: "Sculpt Tee View 1" },
      { src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80", alt: "Sculpt Tee View 2" },
      { src: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80", alt: "Sculpt Tee View 3" },
      { src: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=800&q=80", alt: "Sculpt Tee View 4" }
    ],
    colors: [{ name: "Cement" }, { name: "Olive" }, { name: "Sand" }],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true }
    ],
    description: "Heavyweight jersey tee with a structured boxy fit that holds its shape.",
    highlights: ["320 GSM Cotton", "Reinforced Ribbing", "Garment Dyed"],
    details: "The cement gray color features subtle marbling due to the unique garment-dye process."
  },
  {
    name: "Linear Trouser",
    price: "5800",
    images: [
      { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80", alt: "Linear Trouser 1" },
      { src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80", alt: "Linear Trouser 2" },
      { src: "https://images.unsplash.com/photo-1506629082925-62bbda782979?auto=format&fit=crop&w=800&q=80", alt: "Linear Trouser 3" },
      { src: "https://images.unsplash.com/photo-1473963456453-15794770289a?auto=format&fit=crop&w=800&q=80", alt: "Linear Trouser 4" }
    ],
    colors: [{ name: "Charcoal" }, { name: "Black" }],
    sizes: [
      { name: "30", inStock: true },
      { name: "32", inStock: true },
      { name: "34", inStock: true }
    ],
    description: "Minimalist trousers with a sharp front crease and hidden clasp closure.",
    highlights: ["Wool Blend Twill", "Hidden Seam Pockets", "Tapered Leg"],
    details: "Tailored to sit perfectly just above the ankle. Ideal for pairing with Chelsea boots."
  },
  {
    name: "Prism Knit Sweater",
    price: "7200",
    images: [
      { src: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&w=800&q=80", alt: "Prism Knit 1" },
      { src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80", alt: "Prism Knit 2" },
      { src: "https://images.unsplash.com/photo-1517231939525-4676449171e2?auto=format&fit=crop&w=800&q=80", alt: "Prism Knit 3" },
      { src: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80", alt: "Prism Knit 4" }
    ],
    colors: [{ name: "Oatmeal" }, { name: "Rust" }],
    sizes: [
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true }
    ],
    description: "A waffle-knit sweater crafted from sustainable alpaca wool.",
    highlights: ["Anti-pilling Yarn", "Ribbed Hem", "Thermal Insulation"],
    details: "The alpaca wool is naturally hypoallergenic and softer than traditional sheep's wool."
  },
  {
    name: "Vector Utility Vest",
    price: "4900",
    images: [
      { src: "https://images.unsplash.com/photo-1614031679232-04e89396740b?auto=format&fit=crop&w=800&q=80", alt: "Vest 1" },
      { src: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?auto=format&fit=crop&w=800&q=80", alt: "Vest 2" },
      { src: "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?auto=format&fit=crop&w=800&q=80", alt: "Vest 3" },
      { src: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80", alt: "Vest 4" }
    ],
    colors: [{ name: "Army" }, { name: "Tan" }],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false }
    ],
    description: "Technical vest with 8-pocket storage and a mesh breathable back panel.",
    highlights: ["Ripstop Nylon", "D-Ring Attachments", "Adjustable Side Straps"],
    details: "The ultimate layering piece for techwear enthusiasts and outdoor photographers."
  },
  {
    name: "Eclipse Denim Shirt",
    price: "3900",
    images: [
      { src: "https://images.unsplash.com/photo-1588359348347-9bc6cbb6cf97?auto=format&fit=crop&w=800&q=80", alt: "Denim Shirt 1" },
      { src: "https://images.unsplash.com/photo-1516257984877-a03aae3acbc8?auto=format&fit=crop&w=800&q=80", alt: "Denim Shirt 2" },
      { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80", alt: "Denim Shirt 3" },
      { src: "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?auto=format&fit=crop&w=800&q=80", alt: "Denim Shirt 4" }
    ],
    colors: [{ name: "Acid Wash" }, { name: "Black Indigo" }],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true }
    ],
    description: "Softened denim shirt with pearl-snap buttons and a western-style yoke.",
    highlights: ["Double-needle Stitching", "Soft-washed Finish", "Western Yoke"],
    details: "We have pre-distressed the edges slightly to give it a vintage, lived-in feel."
  },
  {
    name: "Summit Cargo Joggers",
    price: "4600",
    images: [
      { src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80", alt: "Cargo 1" },
      { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80", alt: "Cargo 2" },
      { src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", alt: "Cargo 3" },
      { src: "https://images.unsplash.com/photo-1517441662411-9dd2b367c2c9?auto=format&fit=crop&w=800&q=80", alt: "Cargo 4" }
    ],
    colors: [{ name: "Khaki" }, { name: "Black" }],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true }
    ],
    description: "Modern cargo pants with elasticated cuffs and high-tension bungee cords.",
    highlights: ["4-Way Stretch Fabric", "Reinforced Knees", "Bungee Hem Adjusters"],
    details: "Designed for agility. The stretch fabric allows for full range of motion."
  },
  {
    name: "Nimbus Rain Coat",
    price: "9800",
    images: [
      { src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80", alt: "Raincoat 1" },
      { src: "https://images.unsplash.com/photo-1504191463004-41150fb7d7c6?auto=format&fit=crop&w=800&q=80", alt: "Raincoat 2" },
      { src: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80", alt: "Raincoat 3" },
      { src: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?auto=format&fit=crop&w=800&q=80", alt: "Raincoat 4" }
    ],
    colors: [{ name: "Yellow" }, { name: "Navy" }],
    sizes: [
      { name: "M", inStock: true },
      { name: "L", inStock: true }
    ],
    description: "A classic rubberized raincoat that keeps you dry in the heaviest downpours.",
    highlights: ["Welded Seams", "Waterproof Zippers", "Reflective Trim"],
    details: "Inspired by traditional Nordic fisherman gear, updated for the modern city."
  },
  {
    name: "Avenue Suede Loafers",
    price: "13500",
    images: [
      { src: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80", alt: "Loafer 1" },
      { src: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80", alt: "Loafer 2" },
      { src: "https://images.unsplash.com/photo-1515347611653-0a596973b850?auto=format&fit=crop&w=800&q=80", alt: "Loafer 3" },
      { src: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80", alt: "Loafer 4" }
    ],
    colors: [{ name: "Tan" }, { name: "Chocolate" }],
    sizes: [
      { name: "40", inStock: true },
      { name: "42", inStock: true },
      { name: "44", inStock: true }
    ],
    description: "Premium suede loafers with a lightweight rubber sole for all-day wearability.",
    highlights: ["Hand-stitched Apron", "Memory Foam Insole", "Italian Suede"],
    details: "These loafers are unlined for a soft, sock-like feel that requires no break-in period."
  },
  {
    name: "Drift Canvas Cap",
    price: "1200",
    images: [
      { src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80", alt: "Cap 1" },
      { src: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80", alt: "Cap 2" },
      { src: "https://images.unsplash.com/photo-1576871231735-37da409efdee?auto=format&fit=crop&w=800&q=80", alt: "Cap 3" },
      { src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80", alt: "Cap 4" }
    ],
    colors: [{ name: "Fossil" }, { name: "Washed Blue" }],
    sizes: [{ name: "One Size", inStock: true }],
    description: "6-panel dad hat made from rugged cotton canvas with an antique brass buckle.",
    highlights: ["Curved Brim", "Embroidered Eyelets", "Brass Adjuster"],
    details: "The 'Fossil' color has a natural, undyed appearance that complements any outfit."
  }
];

const initDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products initialized successfully');
  } catch (error) {
    console.error('Initialization failed:', error);
  } finally {
    mongoose.connection.close();
  }
};

initDB();