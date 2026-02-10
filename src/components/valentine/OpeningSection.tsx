import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-romantic.jpg";

interface Props {
  onEnter: () => void;
}

const OpeningSection = ({ onEnter }: Props) => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(onEnter, 1000);
  };

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          className="section-fullscreen fixed inset-0 z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="overlay-dark" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl">
            <motion.p
              className="text-cream text-xl md:text-2xl font-body italic mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              Close your eyes for a moment...
            </motion.p>

            <motion.p
              className="text-romantic text-2xl md:text-3xl font-display mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1.2 }}
            >
              Imagine you and me, just us...
            </motion.p>

            <motion.p
              className="text-champagne text-lg md:text-xl font-body italic mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1.2 }}
            >
              In a world where time slows down.
            </motion.p>

            <motion.button
              className="btn-romantic animate-glow-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5, duration: 0.8 }}
              onClick={handleEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Enter Our Moment ✨
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSection;
