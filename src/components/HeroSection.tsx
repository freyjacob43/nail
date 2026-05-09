import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/images/hero.mp4"
        />
        {/* Soft overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.25) 0%, transparent 40%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-[12px] sm:text-[13px] tracking-[0.5em] uppercase text-white/70 mb-4 sm:mb-6"
        >
          Handcrafted Luxury Press-Ons
        </motion.p>

        {/* New H1 in black */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(40px,8vw,88px)] mb-6 sm:mb-8 font-semibold"
          style={{
            color: "#000000",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          The Modern Nail Revolution
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-base sm:text-lg text-white/75 max-w-[520px] leading-relaxed mx-auto mb-10"
        >
          Salon-quality press-on nails designed for the modern professional.
          Reusable. Customizable. Unapologetically glamorous.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#collection"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full font-body font-medium text-sm tracking-wide text-dark"
            style={{
              background: "linear-gradient(135deg, hsl(0 58% 85%), hsl(0 24% 73%))",
              boxShadow: "0 8px 32px rgba(244,194,194,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            Shop Collection
          </motion.a>
          <motion.a
            href="#process"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full font-body font-medium text-sm tracking-wide text-white/90 border border-white/25 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            How It Works
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50">
          Scroll
        </span>
      </motion.div>

      {/* Inline CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
