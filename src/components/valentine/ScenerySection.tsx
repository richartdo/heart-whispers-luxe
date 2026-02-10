import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sceneFlowers from "@/assets/scene-flowers.jpg";
import sceneLake from "@/assets/scene-lake.jpg";
import sceneCandles from "@/assets/scene-candles.jpg";
import sceneMoon from "@/assets/scene-moon.jpg";

const scenes = [
  {
    image: sceneFlowers,
    caption: "Every place feels warmer when I imagine you there.",
  },
  {
    image: sceneLake,
    caption: "Every moment feels deeper when it's with you.",
  },
  {
    image: sceneCandles,
    caption: "You make ordinary life feel extraordinary.",
  },
  {
    image: sceneMoon,
    caption: "Every star reminds me of the light you bring into my life.",
  },
];

const SceneSlide = ({ image, caption }: { image: string; caption: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="section-fullscreen">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="overlay-warm" />
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <p className="text-cream text-xl sm:text-2xl md:text-4xl font-display italic leading-relaxed glow-champagne">
          "{caption}"
        </p>
      </motion.div>
    </div>
  );
};

const ScenerySection = () => {
  return (
    <div>
      {scenes.map((scene, i) => (
        <SceneSlide key={i} image={scene.image} caption={scene.caption} />
      ))}
    </div>
  );
};

export default ScenerySection;
