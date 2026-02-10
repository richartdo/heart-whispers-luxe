import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingHearts = ({ count = 20, burst = false }: { count?: number; burst?: boolean }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 12 + Math.random() * 24,
      delay: burst ? Math.random() * 0.5 : Math.random() * 8,
      duration: burst ? 2 + Math.random() * 2 : 6 + Math.random() * 8,
    }));
    setHearts(generated);
  }, [count, burst]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: `${heart.x}%`, bottom: burst ? "50%" : "-10%" }}
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{
            y: burst ? [0, -300 - Math.random() * 400] : [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.5],
            x: burst ? [(Math.random() - 0.5) * 300] : [Math.sin(heart.id) * 50],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: burst ? 0 : Infinity,
            ease: "easeOut",
          }}
        >
          <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill="hsl(345, 100%, 65%)">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
