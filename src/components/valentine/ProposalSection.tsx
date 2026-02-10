import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface Props {
  onAccept: () => void;
}

const ProposalSection = ({ onAccept }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(onAccept, 2000);
  };

  return (
    <div ref={ref} className="section-fullscreen bg-midnight-deep relative">
      <Sparkles count={40} />
      {accepted && <FloatingHearts count={40} burst />}

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          className="text-6xl md:text-8xl mb-8 inline-block"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
        >
          <span className="animate-heartbeat inline-block">❤️</span>
        </motion.div>

        <motion.h2
          className="text-cream text-4xl md:text-6xl font-display mb-12 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Will you be my Valentine?
        </motion.h2>

        {!accepted ? (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              className="btn-accept"
              onClick={handleAccept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes, I will 💕
            </motion.button>
            <motion.button
              className="btn-accept"
              onClick={handleAccept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I choose you ❤️
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <p className="text-romantic text-3xl md:text-5xl font-display glow-text">
              You just made my heart overflow 💖
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProposalSection;
