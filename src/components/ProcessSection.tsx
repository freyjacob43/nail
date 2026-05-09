import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import processChoose from "@/assets/process-choose.jpg";
import processFit from "@/assets/process-fit.jpg";
import processPress from "@/assets/process-press.jpg";
import processFlaunt from "@/assets/process-flaunt.jpg";

const StepContent = ({ step }: { step: { title: string; desc: string; details: string[] } }) => (
  <div className="bg-neutral-50 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      {step.desc}
    </p>
    <ul className="space-y-3">
      {step.details.map((d, i) => (
        <li key={i} className="flex items-start gap-3 text-neutral-700">
          <span className="text-pink-400 mt-1">✦</span>
          <span className="text-sm md:text-base">{d}</span>
        </li>
      ))}
    </ul>
  </div>
);

const steps = [
  {
    category: "Step 01",
    title: "Choose Your Set",
    src: processChoose,
    desc: "Browse our curated collections of handcrafted designs, each meticulously created by our artisans.",
    details: [
      "Over 30+ exclusive designs updated monthly",
      "From subtle nudes to bold statement sets",
      "Each set handcrafted with premium materials",
    ],
  },
  {
    category: "Step 02",
    title: "Custom Fit",
    src: processFit,
    desc: "Each set includes 24 nails in 12 sizes. Use our sizing guide for a perfect, seamless fit.",
    details: [
      "24 nails in 12 sizes per set",
      "Free sizing kit with first order",
      "Guarantees a salon-perfect look every time",
    ],
  },
  {
    category: "Step 03",
    title: "Press & Set",
    src: processPress,
    desc: "Apply in under 10 minutes. No glue damage, no salon appointment. Just flawless nails.",
    details: [
      "Adhesive tabs included — no harsh glue",
      "Apply in just 10 minutes",
      "Zero damage to your natural nails",
    ],
  },
  {
    category: "Step 04",
    title: "Flaunt & Repeat",
    src: processFlaunt,
    desc: "Walk out the door looking like a million dollars. Each set is reusable up to 7+ times.",
    details: [
      "Wear for up to 7+ days per application",
      "Reusable — sustainable luxury",
      "Trusted by influencers & professionals",
    ],
  },
];

const ProcessSection = () => {
  const cards = steps.map((step, index) => (
    <Card
      key={step.title}
      card={{
        ...step,
        content: <StepContent step={step} />,
      }}
      index={index}
      layout
    />
  ));

  return (
    <section id="process" className="w-full bg-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[11px] tracking-[0.5em] uppercase text-muted-foreground mb-4 text-center"
        >
          The Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display italic text-[clamp(36px,5vw,64px)] text-foreground leading-tight text-center"
        >
          How It <span className="text-blush">Works</span>
        </motion.h2>
      </div>
      <Carousel items={cards} />
    </section>
  );
};

export default ProcessSection;