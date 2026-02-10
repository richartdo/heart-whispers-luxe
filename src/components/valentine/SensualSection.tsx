import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sceneCandles from "@/assets/scene-candles.jpg";

const SensualSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="section-fullscreen">
      <img
        src={sceneCandles}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5) saturate(1.3)" }}
      />
      <div className="overlay-warm" />

      <div className="relative z-10 text-center px-6 max-w-2xl space-y-8">
        <motion.p
          className="text-cream text-2xl md:text-4xl font-display italic glow-champagne"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          "If I could hold you right now..."
        </motion.p>

        <motion.p
          className="text-romantic text-xl md:text-3xl font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          "I would never let go."
        </motion.p>

        <motion.p
          className="text-champagne text-lg md:text-2xl font-body italic"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          "Because in your arms, everything feels right."
        </motion.p>
      </div>
    </div>
  );
};

export default SensualSection;
