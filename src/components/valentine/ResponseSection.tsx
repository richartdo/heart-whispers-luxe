import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "254795594142";
const DEFAULT_MESSAGE = "Hey love ❤️ I said YES! Happy Valentine 💕";

const ResponseSection = () => {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const sendToWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <div className="section-fullscreen bg-midnight-deep">
      <div className="relative z-10 w-full max-w-lg mx-auto px-6">
        <motion.div
          className="glass-romantic rounded-3xl p-8 md:p-12 text-center space-y-8"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-5xl animate-heartbeat">💖</div>

          <h3 className="text-cream text-2xl md:text-3xl font-display">
            Send me a little message from your heart 💬
          </h3>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 rounded-xl border-none p-4 text-lg font-body resize-none focus:outline-none focus:ring-2 focus:ring-rose"
            style={{
              background: "hsl(220, 50%, 12%, 0.8)",
              color: "hsl(30, 60%, 92%)",
              borderColor: "hsl(345, 100%, 74%, 0.2)",
              border: "1px solid hsl(345, 100%, 74%, 0.2)",
            }}
            placeholder="Write your sweet message..."
          />

          <motion.button
            className="btn-romantic w-full text-xl"
            onClick={sendToWhatsApp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg, hsl(142, 70%, 35%), hsl(142, 60%, 45%))",
            }}
          >
            Send to WhatsApp 💚
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResponseSection;
