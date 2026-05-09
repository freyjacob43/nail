import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("Enter");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { angle: number; radius: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * Math.min(canvas.width, canvas.height) * 0.35,
        speed: 0.005 + Math.random() * 0.01,
        size: 1 + Math.random() * 2,
      });
    }

    let speedMultiplier = 1;
    let globalAlpha = 1;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed > 1500) setText("Welcome to Onglerie By Mel");
      if (elapsed > 3000) {
        speedMultiplier = Math.min(speedMultiplier + 0.05, 5);
        globalAlpha = Math.max(globalAlpha - 0.02, 0);
        setFading(true);
      }
      if (globalAlpha <= 0) {
        onComplete();
        return;
      }

      ctx.fillStyle = `rgba(0,0,0,${globalAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed * speedMultiplier;
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${globalAlpha * 0.8})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!fading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
          <motion.p
            key={text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 font-display text-2xl md:text-4xl tracking-[0.2em] text-primary-foreground"
          >
            {text}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
