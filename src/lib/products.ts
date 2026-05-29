export type Product = {
  name: string;
  style: string;
  price: string;
  image: string;
  category: "Featured" | "New Arrivals" | "Classics";
};

// ── Featured (processed / original pics) ──────────────────────────────────────
export const featuredProducts: Product[] = [
  { name: "The CEO", style: "Almond · Glossy · Nude", price: "1700 DZD", image: "/productpics/processed/pic0.png", category: "Featured" },
  { name: "After Hours", style: "Stiletto · Matte · Black", price: "1800 DZD", image: "/productpics/processed/pic1.png", category: "Featured" },
  { name: "Brunch Date", style: "Coffin · Glossy · Pastel", price: "1200 DZD", image: "/productpics/processed/pic2.png", category: "Featured" },
  { name: "Red Carpet", style: "Almond · Metallic · Red", price: "1200 DZD", image: "/productpics/processed/pic3.png", category: "Featured" },
  { name: "Minimalist", style: "Square · Matte · Cream", price: "1500 DZD", image: "/productpics/processed/pic4.png", category: "Featured" },
  { name: "Dripping in Gold", style: "Stiletto · Chrome · Gold", price: "1500 DZD", image: "/productpics/processed/pic5.png", category: "Featured" },
  { name: "Midnight Velvet", style: "Almond · Matte · Burgundy", price: "1200 DZD", image: "/productpics/pic6.jpeg", category: "Featured" },
  { name: "Rose Quartz", style: "Coffin · Glossy · Pink", price: "1200 DZD", image: "/productpics/pic7.jpeg", category: "Featured" },
];

// ── Classics (remaining original pics) ────────────────────────────────────────
export const classicProducts: Product[] = [
  { name: "Sapphire Dream", style: "Stiletto · Metallic · Blue", price: "1500 DZD", image: "/productpics/pic8.jpeg", category: "Classics" },
  { name: "Onyx Eclipse", style: "Square · Matte · Black", price: "1200 DZD", image: "/productpics/pic9.jpeg", category: "Classics" },
  { name: "Pearl Essence", style: "Almond · Pearlescent · White", price: "1200 DZD", image: "/productpics/pic10.jpeg", category: "Classics" },
  { name: "Ruby Slippers", style: "Coffin · Glitter · Red", price: "1200 DZD", image: "/productpics/pic11.jpeg", category: "Classics" },
  { name: "Emerald City", style: "Stiletto · Glossy · Green", price: "1500 DZD", image: "/productpics/pic12.jpeg", category: "Classics" },
  { name: "Amethyst Aura", style: "Almond · Chrome · Purple", price: "1500 DZD", image: "/productpics/pic13.jpeg", category: "Classics" },
  { name: "Diamond Dust", style: "Square · Glitter · Silver", price: "1200 DZD", image: "/productpics/pic14.jpeg", category: "Classics" },
  { name: "Topaz Sunset", style: "Coffin · Metallic · Orange", price: "1200 DZD", image: "/productpics/pic15.jpeg", category: "Classics" },
  { name: "Jade Whisper", style: "Almond · Matte · Mint", price: "1500 DZD", image: "/productpics/pic16.jpeg", category: "Classics" },
  { name: "Coral Reef", style: "Stiletto · Glossy · Coral", price: "1500 DZD", image: "/productpics/pic17.jpeg", category: "Classics" },
  { name: "Bronze Goddess", style: "Square · Chrome · Bronze", price: "1700 DZD", image: "/productpics/pic18.jpeg", category: "Classics" },
  { name: "Nude Reverie", style: "Almond · Glossy · Nude", price: "1700 DZD", image: "/productpics/pic.jpeg", category: "Classics" },
  { name: "Dusty Mauve", style: "Coffin · Matte · Mauve", price: "1700 DZD", image: "/productpics/pic1.jpeg", category: "Classics" },
  { name: "Plum Noir", style: "Almond · Glossy · Plum", price: "1200 DZD", image: "/productpics/pic2.jpeg", category: "Classics" },
  { name: "Blush Sorbet", style: "Square · Glossy · Pink", price: "1200 DZD", image: "/productpics/pic3.jpeg", category: "Classics" },
  { name: "Gold Foil", style: "Almond · Metallic · Champagne", price: "1200 DZD", image: "/productpics/pic4.jpeg", category: "Classics" },
  { name: "Caramel Latte", style: "Coffin · Glossy · Brown", price: "1500 DZD", image: "/productpics/pic5.jpeg", category: "Classics" },
];

// ── New Arrivals (propics) ─────────────────────────────────────────────────────
export const newArrivals: Product[] = [
  { name: "Cloud Nine", style: "Almond · Glossy · White", price: "1500 DZD", image: "/productpics/propic/Copilot_20260518_160316.png", category: "New Arrivals" },
  { name: "Violet Haze", style: "Coffin · Shimmer · Lavender", price: "1500 DZD", image: "/productpics/propic/Copilot_20260518_160319.png", category: "New Arrivals" },
  { name: "Aurora Borealis", style: "Stiletto · Holographic · Multi", price: "1500 DZD", image: "/productpics/propic/Copilot_20260518_160400.png", category: "New Arrivals" },
  { name: "Rose Mirage", style: "Almond · Chrome · Rose Gold", price: "1200 DZD", image: "/productpics/propic/Copilot_20260518_160434.png", category: "New Arrivals" },
  { name: "Cosmic Dusk", style: "Square · Glitter · Galaxy", price: "1500 DZD", image: "/productpics/propic/Copilot_20260518_160621.png", category: "New Arrivals" },
  { name: "Velvet Storm", style: "Coffin · Matte · Deep Violet", price: "1500 DZD", image: "/productpics/propic/Copilot_20260518_161544.png", category: "New Arrivals" },
  { name: "Iced Latte", style: "Almond · Glossy · Warm Beige", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181523.jpeg", category: "New Arrivals" },
  { name: "Cotton Candy", style: "Coffin · Glossy · Soft Pink", price: "1200 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(1).jpeg", category: "New Arrivals" },
  { name: "Champagne Toast", style: "Stiletto · Shimmer · Champagne", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(2).jpeg", category: "New Arrivals" },
  { name: "Berry Bliss", style: "Almond · Matte · Berry", price: "1200 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(3).jpeg", category: "New Arrivals" },
  { name: "Peachy Keen", style: "Square · Glossy · Peach", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(4).jpeg", category: "New Arrivals" },
  { name: "Silver Lining", style: "Coffin · Chrome · Silver", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(5).jpeg", category: "New Arrivals" },
  { name: "Terracotta Dream", style: "Almond · Matte · Terracotta", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(6).jpeg", category: "New Arrivals" },
  { name: "Frosted Petal", style: "Stiletto · Glossy · Icy Pink", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(7).jpeg", category: "New Arrivals" },
  { name: "Mocha Glam", style: "Coffin · Glossy · Mocha", price: "1200 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524(8).jpeg", category: "New Arrivals" },
  { name: "Garden Party", style: "Almond · Glossy · Floral", price: "2000 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181524.jpeg", category: "New Arrivals" },
  { name: "Dusty Rose Era", style: "Square · Matte · Dusty Rose", price: "1700 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181525(1).jpeg", category: "New Arrivals" },
  { name: "Soft Launch", style: "Coffin · Pearlescent · Nude", price: "1200 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181525(2).jpeg", category: "New Arrivals" },
  { name: "Midnight Glitter", style: "Stiletto · Glitter · Black", price: "1200 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181525(3).jpeg", category: "New Arrivals" },
  { name: "Honey Glazed", style: "Almond · Glossy · Honey", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181525(4).jpeg", category: "New Arrivals" },
  { name: "Satin Veil", style: "Square · Matte · Oat", price: "1500 DZD", image: "/productpics/propic/Take_this_nail_product_photo_202605181525.jpeg", category: "New Arrivals" },
  { name: "Marble Queen", style: "Coffin · Glossy · White Marble", price: "1500 DZD", image: "/productpics/propic/photo_10_2026-05-18_15-13-49.jpg_202605181555.jpeg", category: "New Arrivals" },
  { name: "Cinnamon Sugar", style: "Almond · Matte · Warm Nude", price: "1200 DZD", image: "/productpics/propic/photo_17_2026-05-18_15-13-49.jpg_202605181555.jpeg", category: "New Arrivals" },
  { name: "Electric Plum", style: "Stiletto · Chrome · Electric", price: "1500 DZD", image: "/productpics/propic/photo_21_2026-05-18_15-13-49.jpg_202605181555.jpeg", category: "New Arrivals" },
  { name: "Lychee Sorbet", style: "Coffin · Glossy · Light Pink", price: "1200 DZD", image: "/productpics/propic/photo_24_2026-05-18_15-13-49.jpg_202605181555.jpeg", category: "New Arrivals" },
  { name: "Obsidian", style: "Square · Matte · Jet Black", price: "1500 DZD", image: "/productpics/propic/photo_29_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Lavender Fog", style: "Almond · Shimmer · Lavender", price: "1200 DZD", image: "/productpics/propic/photo_31_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Sandstorm", style: "Coffin · Matte · Sand Beige", price: "1200 DZD", image: "/productpics/propic/photo_32_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "True Red", style: "Stiletto · Glossy · Classic Red", price: "1200 DZD", image: "/productpics/propic/photo_33_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Frosted Mint", style: "Almond · Matte · Mint", price: "1700 DZD", image: "/productpics/propic/photo_36_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Tangerine Twist", style: "Square · Glossy · Orange", price: "1200 DZD", image: "/productpics/propic/photo_37_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Nude Gloss", style: "Coffin · Ultra Glossy · Nude", price: "1500 DZD", image: "/productpics/propic/photo_39_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Blush Rush", style: "Almond · Glossy · Blush", price: "1200 DZD", image: "/productpics/propic/photo_40_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Espresso Shot", style: "Stiletto · Matte · Dark Brown", price: "1500 DZD", image: "/productpics/propic/photo_43_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Summer Rain", style: "Coffin · Shimmer · Baby Blue", price: "1200 DZD", image: "/productpics/propic/photo_45_2026-05-18_15-13-49.jpg_202605181554.jpeg", category: "New Arrivals" },
  { name: "Dusty Lilac", style: "Square · Matte · Lilac", price: "1200 DZD", image: "/productpics/propic/photo_9_2026-05-18_15-13-49.jpg_202605181555.jpeg", category: "New Arrivals" },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  ...classicProducts,
  ...newArrivals,
];
