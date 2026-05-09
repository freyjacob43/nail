import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import nailCeo from "@/assets/nail-ceo.jpg";
import nailAfterHours from "@/assets/nail-afterhours.jpg";
import nailBrunch from "@/assets/nail-brunch.jpg";
import nailRedCarpet from "@/assets/nail-redcarpet.jpg";
import nailMinimalist from "@/assets/nail-minimalist.jpg";
import nailGold from "@/assets/nail-gold.jpg";
import aboutHands from "@/assets/about-hands.jpg";

const cards = [
  {
    title: "Handcrafted with Love",
    desc: "Each set is meticulously crafted by our artisans, ensuring salon-quality perfection in every nail.",
    image: nailCeo,
    gradient: "linear-gradient(135deg, #f4c2c2 0%, #e8a8a8 50%, #d4919a 100%)",
  },
  {
    title: "Reusable Luxury",
    desc: "Wear up to 7+ times per set. Sustainable glamour that saves you time and money.",
    image: nailAfterHours,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    title: "10 Minutes to Perfection",
    desc: "No salon appointment needed. Press, set, and walk out the door looking flawless.",
    image: nailBrunch,
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
  },
  {
    title: "Custom Fit System",
    desc: "24 nails in 12 sizes per set. Our sizing guide guarantees a perfect, seamless fit.",
    image: nailRedCarpet,
    gradient: "linear-gradient(135deg, #b71c1c 0%, #880e4f 50%, #4a148c 100%)",
  },
  {
    title: "Professional Grade",
    desc: "Trusted by influencers and professionals. Salon results without the salon price.",
    image: nailGold,
    gradient: "linear-gradient(135deg, #bf9b30 0%, #a67c00 50%, #8b6914 100%)",
  },
  {
    title: "Safe & Gentle",
    desc: "No damage to your natural nails. Our adhesive tabs ensure clean application and removal.",
    image: nailMinimalist,
    gradient: "linear-gradient(135deg, #efebe9 0%, #d7ccc8 50%, #bcaaa4 100%)",
  },
];

const AboutSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % cards.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  }, []);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [next]);

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4000);
  };

  const card = cards[active];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9, rotateY: dir > 0 ? 15 : -15 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.9, rotateY: dir > 0 ? -15 : 15 }),
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 min-h-[90vh] overflow-hidden">
      {/* Reactive gradient background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
          style={{ background: card.gradient }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-[1] bg-black/30" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.5em] uppercase text-white/60 mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display italic text-[clamp(32px,5vw,64px)] text-white leading-tight"
          >
            Why <span style={{ color: "hsl(0 58% 85%)" }}>Onglerie By mel</span>
          </motion.h2>
        </div>

        {/* 3D Carousel */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Card */}
          <div className="w-full lg:w-1/2 flex justify-center" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-full max-w-[420px] rounded-[28px] overflow-hidden"
                style={{
                  boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="font-display italic text-2xl sm:text-3xl text-white mb-2">{card.title}</h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails + Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Mini carousel thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
              {cards.map((c, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetAutoPlay(); }}
                  className={`relative rounded-[16px] overflow-hidden aspect-square transition-all duration-300 ${
                    i === active
                      ? "ring-2 ring-white/80 scale-105"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                  {i === active && (
                    <motion.div
                      layoutId="thumb-indicator"
                      className="absolute inset-0 border-2 border-white rounded-[16px]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12">
              {[
                { number: "10K+", label: "Sets Sold" },
                { number: "4.9★", label: "Rating" },
                { number: "7+", label: "Day Wear" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl text-white">{stat.number}</p>
                  <p className="font-body text-[12px] text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => { prev(); resetAutoPlay(); }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => { next(); resetAutoPlay(); }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                →
              </button>
              <span className="font-body text-sm text-white/40 self-center ml-2">
                {String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
