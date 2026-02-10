import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import sceneMoon from "@/assets/scene-moon.jpg";

const FinalScreen = () => {
  return (
    <div className="section-fullscreen relative">
      <img
        src={sceneMoon}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4) saturate(1.2)" }}
      />
      <div className="overlay-dark" />
      <FloatingHearts count={15} />

      <div className="relative z-10 text-center px-6 max-w-2xl space-y-8">
        <motion.p
          className="text-cream text-3xl md:text-5xl font-display glow-champagne leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Forever starts with moments like this 💖
        </motion.p>

        <motion.p
          className="text-romantic text-2xl md:text-3xl font-display italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Happy Valentine's, my love ✨
        </motion.p>
      </div>
    </div>
  );
};

export default FinalScreen;
