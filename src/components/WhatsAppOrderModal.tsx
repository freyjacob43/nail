import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string; style: string; price: string };
}

const WhatsAppOrderModal = ({ isOpen, onClose, product }: WhatsAppOrderModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedPhone = phone.trim().slice(0, 20);

    const message = `🛍️ *New Order — ONGLERIE BY MEL*\n\n` +
      `*Product:* ${product.name}\n` +
      `*Style:* ${product.style}\n` +
      `*Price:* ${product.price}\n\n` +
      `*Customer Name:* ${sanitizedName}\n` +
      `*Phone:* ${sanitizedPhone}\n` +
      `*Payment:* Cash on Delivery (COD)\n\n` +
      `Please confirm my order! ✨`;

    const url = `https://wa.me/213553409266?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[24px] p-8"
            style={{
              background: "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 30% 97%) 100%)",
              border: "1px solid rgba(244,194,194,0.3)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <p className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
                Order via WhatsApp
              </p>
              <h3 className="font-display italic text-2xl text-foreground">{product.name}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{product.style} · {product.price}</p>
              <p className="font-body text-xs text-blush mt-2">💰 Cash on Delivery</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  placeholder="e.g. Sarah"
                  className="w-full rounded-xl px-4 py-3 font-body text-sm bg-background border border-border focus:border-blush focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  maxLength={20}
                  placeholder="e.g. 0555 123 456"
                  className="w-full rounded-xl px-4 py-3 font-body text-sm bg-background border border-border focus:border-blush focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="whatsapp-btn w-full flex items-center justify-center gap-3 rounded-full py-3.5 font-body font-medium text-sm text-white transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                Order on WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppOrderModal;