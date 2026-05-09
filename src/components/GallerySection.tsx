import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";

const columns = [
  [g1, g4, g7],
  [g2, g5, g8],
  [g3, g6, g9],
];

const GallerySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yValues = [y1, y2, y3];

  return (
    <section ref={ref} className="py-24 bg-card">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display italic text-[clamp(28px,3vw,48px)] text-center mb-12"
      >
        Follow the Glam
      </motion.h2>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {columns.map((col, colIdx) => (
          <motion.div key={colIdx} style={{ y: yValues[colIdx] }} className="flex flex-col gap-4">
            {col.map((src, imgIdx) => (
              <motion.img
                key={imgIdx}
                src={src}
                alt={`Nail art gallery image ${colIdx * 3 + imgIdx + 1}`}
                loading="lazy"
                width={640}
                height={640}
                className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;