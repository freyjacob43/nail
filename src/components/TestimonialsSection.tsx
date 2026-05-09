import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote:
      "Finally, press-ons that don't look like press-ons. I've worn these to board meetings and no one knew. The quality is absolutely salon-level.",
    name: "Sarah K.",
    designation: "Marketing Director · 12K followers",
    src: testimonial1,
  },
  {
    quote:
      "The custom fit is unreal. I have tiny nail beds and these actually fit without filing. I'm obsessed and have ordered every collection since.",
    name: "Jessica M.",
    designation: "Content Creator · 45K followers",
    src: testimonial2,
  },
  {
    quote:
      "I change my nails weekly now. It's my favorite form of self-care. DivaNails has completely replaced my salon visits — and I'm saving hundreds.",
    name: "Amanda L.",
    designation: "Entrepreneur · 8K followers",
    src: testimonial3,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const t = testimonials[active];

  return (
    <section className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[11px] tracking-[0.5em] uppercase text-muted-foreground mb-4 text-center"
        >
          What They Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display italic text-[clamp(32px,5vw,56px)] text-foreground leading-tight text-center mb-16"
        >
          Client <span className="text-blush">Love</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="relative h-80 w-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="h-full w-full rounded-3xl object-cover object-top shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.p className="font-display italic text-xl sm:text-2xl text-foreground leading-relaxed mb-8">
                    "{t.quote}"
                  </motion.p>
                  <p className="font-body font-semibold text-base text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {t.designation}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors group"
                >
                  <svg className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors group"
                >
                  <svg className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="font-body text-sm text-muted-foreground ml-2">
                  {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;