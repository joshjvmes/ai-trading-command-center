import { motion } from "framer-motion";

export const Footer = () => (
  <motion.footer 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="border-t border-white/10 py-12"
  >
    <div className="container mx-auto px-4 text-center text-gray-400">
      <p className="mb-4">© 2024 ROK. All rights reserved.</p>
      <p className="text-sm">
        Trading in cryptocurrencies involves significant risk. Past performance is not indicative of future results.
      </p>
    </div>
  </motion.footer>
);