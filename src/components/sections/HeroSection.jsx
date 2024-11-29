import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="container mx-auto px-4 pt-32 pb-32 text-center relative"
  >
    <motion.h1 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="text-4xl md:text-6xl font-bold mb-6 gradient-text flex flex-col"
    >
      <span>Your Personal AI</span>
      <span>Trading Command Center</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
    >
      Join an exclusive community of 100,000 smart wallet holders leveraging institutional-grade AI arbitrage across 10 major cryptocurrencies
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to="/purchase">
        <Button size="lg" className="bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all">
          Reserve Your Smart Wallet Now
        </Button>
      </Link>
    </motion.div>
  </motion.section>
);