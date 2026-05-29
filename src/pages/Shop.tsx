import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowLeft } from "lucide-react";
import { ProductCard, WhatsAppButton } from "@/components/CollectionSection";
import WhatsAppOrderModal from "@/components/WhatsAppOrderModal";
import { allProducts, type Product } from "@/lib/products";

const CATEGORIES = ["All", "Featured", "New Arrivals", "Classics"] as const;

const ShopPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = allProducts;
    if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) || p.style.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky top bar ───────────────────────────────────── */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px]"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(40px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="ONGLERIE BY MEL"
            className="h-12 w-12 object-cover rounded-full border-2 border-black shadow-md"
          />
        </a>

        <a
          href="https://wa.me/213553409266"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 font-body text-sm font-medium text-white rounded-full px-5 py-2"
          style={{ background: "#00d757", boxShadow: "0 4px 16px rgba(0,215,87,0.3)" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
          </svg>
          Order via WhatsApp
        </a>
      </div>

      {/* ── Hero header ──────────────────────────────────────── */}
      <div className="text-center pt-16 pb-12 px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-3"
        >
          ONGLERIE BY MEL
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
          className="font-display italic text-[clamp(40px,6vw,80px)] leading-tight"
        >
          The Full<br />
          <span className="text-blush">Collection</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
          className="font-body text-sm text-muted-foreground mt-4"
        >
          {allProducts.length} luxury press-on designs · Cash on Delivery · WhatsApp Order
        </motion.p>
      </div>

      {/* ── Filters + Search ─────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-[12px] tracking-[0.12em] uppercase px-5 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 opacity-50 text-[10px]">
                    ({allProducts.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative flex-1 min-w-[220px] max-w-xs">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or style…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full font-body text-sm rounded-full border border-border bg-background pl-10 pr-10 py-2.5 focus:outline-none focus:border-foreground transition-colors"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        <p className="font-body text-xs text-muted-foreground mt-4 text-center sm:text-left">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
        </p>
      </div>

      {/* ── Product Grid ─────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-7xl pb-32">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24 text-muted-foreground font-body"
            >
              No products found — try a different search or category.
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${search}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 justify-items-center"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={`${product.name}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.04, 0.6) }}
                >
                  <ProductCard product={product} onBuy={() => setOrderProduct(product)} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sticky WhatsApp CTA at bottom on mobile */}
        <div className="fixed bottom-6 right-6 z-50 sm:hidden">
          <a
            href="https://wa.me/213553409266"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
            style={{ background: "#00d757" }}
          >
            <svg className="w-7 h-7" viewBox="0 0 16 16" fill="white">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>
      </div>

      <WhatsAppOrderModal
        isOpen={!!orderProduct}
        onClose={() => setOrderProduct(null)}
        product={orderProduct || { name: "", style: "", price: "" }}
      />
    </div>
  );
};

export default ShopPage;
