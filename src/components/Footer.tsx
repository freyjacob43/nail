import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "213553409266";

const navLinks = ["Collection", "About", "Process"];

const Footer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const safeName = encodeURIComponent(name.trim().slice(0, 100));
    const safePhone = encodeURIComponent(phone.trim().slice(0, 30));
    const safeMessage = encodeURIComponent((message || "").trim().slice(0, 500));

    const text = `✨ *New Inquiry — ONGLERIE BY MEL*%0A%0A👤 *Name:* ${safeName}%0A📱 *Phone:* ${safePhone}%0A💬 *Message:* ${safeMessage}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setPhone("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="bg-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* Contact form + info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left — Branding & info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl tracking-[0.3em] text-white mb-3"
            >
              ONGLERIE BY MEL
            </motion.p>
            <p className="font-body text-sm text-white/50 mb-8 max-w-sm leading-relaxed">
              Handcrafted luxury press-on nails for professionals and influencers.
              Reach out to us anytime — we'd love to hear from you.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-body text-sm">contact@ongleriebymel.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-body text-sm">+213 553 409 266</span>
              </div>
            </div>

            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display italic text-2xl text-white mb-2">
              Get In <span className="text-blush">Touch</span>
            </h3>
            <p className="font-body text-sm text-white/40 mb-8">
              Fill out the form and we'll reach you on WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name *"
                required
                maxLength={100}
                className="w-full rounded-2xl px-5 py-4 font-body text-sm text-white placeholder:text-white/30 outline-none focus:ring-1 focus:ring-blush/50 transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                required
                maxLength={30}
                className="w-full rounded-2xl px-5 py-4 font-body text-sm text-white placeholder:text-white/30 outline-none focus:ring-1 focus:ring-blush/50 transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message (optional)"
                rows={3}
                maxLength={500}
                className="w-full rounded-2xl px-5 py-4 font-body text-sm text-white placeholder:text-white/30 outline-none focus:ring-1 focus:ring-blush/50 transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full py-4 font-body font-medium text-sm tracking-wide text-dark flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, hsl(0 58% 85%), hsl(0 24% 73%))",
                  boxShadow: "0 8px 32px rgba(244,194,194,0.3)",
                }}
              >
                {submitted ? (
                  "✓ Opening WhatsApp..."
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-xs text-white/30">
            © 2026 DivaNails. All rights reserved. Handcrafted with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
