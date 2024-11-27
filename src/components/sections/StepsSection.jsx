import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Purchase Your Smart Wallet",
    description: "Secure your position among 100,000 exclusive wallets",
    price: "$100,000"
  },
  {
    title: "Fund Your Account",
    description: "Distribute funds across 10 major cryptocurrencies",
    price: "$250,000 min"
  },
  {
    title: "Watch Your AI Trade",
    description: "Advanced algorithms identify and execute arbitrage opportunities",
    price: "Earn 2-5%"
  }
];

export const StepsSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-black/30 py-32 relative overflow-hidden"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <Card className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-200 min-h-[280px] min-w-[280px] flex flex-col items-center justify-center relative">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-rok-blue to-rok-green flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <div className="text-2xl font-bold text-rok-blue mb-2">{step.price}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);