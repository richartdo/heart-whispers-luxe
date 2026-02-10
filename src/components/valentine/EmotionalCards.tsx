import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const messages = [
  "I crave your presence.",
  "I adore your smile.",
  "I love the way you exist in my world.",
  "With you, my heart feels at home.",
];

const EmotionalCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="section-fullscreen bg-midnight-deep py-24">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-romantic text-3xl md:text-5xl font-display text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          What My Heart Whispers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              className="glass-romantic rounded-2xl p-8 md:p-10 text-center"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-romantic text-3xl mb-4 animate-heartbeat inline-block">💖</div>
              <p className="text-cream text-xl md:text-2xl font-display italic">
                "{msg}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalCards;
