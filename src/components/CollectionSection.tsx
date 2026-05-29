import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhatsAppOrderModal from "./WhatsAppOrderModal";
import { featuredProducts, type Product } from "@/lib/products";

// ── Re-usable WhatsApp button ─────────────────────────────────────────────────
export const WhatsAppButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 hover:w-[150px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]"
    style={{ background: "#00d757", boxShadow: "2px 2px 10px rgba(0,0,0,0.199)" }}
  >
    <div className="w-full flex items-center justify-center transition-all duration-300">
      <svg className="w-[25px] h-[25px]" viewBox="0 0 16 16" fill="white">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
    </div>
    <span className="absolute right-0 w-0 opacity-0 text-white text-[1.1em] font-semibold transition-all duration-300 whitespace-nowrap">Buy</span>
  </button>
);

// ── Re-usable Product Card ────────────────────────────────────────────────────
export const ProductCard = ({ product, onBuy }: { product: Product; onBuy: () => void }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -16, y: x * 24 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="w-[280px] h-[380px] rounded-[24px] overflow-hidden cursor-pointer flex-shrink-0"
      style={{ perspective: "1000px" }}
    >
      <div
        className="w-full h-full rounded-[24px] p-4 flex flex-col transition-transform duration-200 ease-out"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(250,250,250,0.9) 100%)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="overflow-hidden rounded-[16px] h-[220px]" style={{ transform: "translateZ(40px)" }}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1 flex-1 justify-center" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display italic text-xl text-foreground">{product.name}</h3>
              <p className="font-body text-[13px] text-muted-foreground">{product.style}</p>
              <p className="font-body font-medium text-base text-gold mt-1">{product.price}</p>
            </div>
            <WhatsAppButton onClick={onBuy} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Home section: shows 8 featured products + "Shop All" CTA ─────────────────
const CollectionSection = () => {
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  return (
    <section id="collection" className="py-32 bg-card relative">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-4"
        >
          The Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display italic text-[clamp(36px,5vw,72px)] leading-tight"
        >
          Find Your<br />
          <span className="text-blush">Signature</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-muted-foreground mt-4"
        >
          A curated selection — explore the full catalog below
        </motion.p>
      </div>

      {/* Featured grid (8 cards) */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 justify-items-center">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <ProductCard product={product} onBuy={() => setOrderProduct(product)} />
            </motion.div>
          ))}
        </div>

        {/* Shop All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center mt-20 gap-3"
        >
          <p className="font-body text-sm text-muted-foreground tracking-wide">
            55+ designs available in our full catalog
          </p>
          <button
            onClick={() => navigate("/shop")}
            id="shop-all-btn"
            className="group relative inline-flex items-center gap-3 bg-foreground text-background rounded-full px-10 py-4 font-body text-[14px] font-medium tracking-[0.1em] uppercase overflow-hidden transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Shop All Products</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Shine sweep */}
            <span className="absolute inset-0 -translate-x-full bg-white/10 skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </motion.div>
      </div>

      <WhatsAppOrderModal
        isOpen={!!orderProduct}
        onClose={() => setOrderProduct(null)}
        product={orderProduct || { name: "", style: "", price: "" }}
      />
    </section>
  );
};

export default CollectionSection;