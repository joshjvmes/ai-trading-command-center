import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "AI Trading Intelligence",
    description: "Real-time market analysis across 10 chains with institutional-grade algorithms",
    icon: "🤖"
  },
  {
    title: "Security & Control",
    description: "Full liquidity maintenance with timelock encryption protection",
    icon: "🔒"
  },
  {
    title: "Performance Metrics",
    description: "2-5% average return per transaction with multiple daily opportunities",
    icon: "📈"
  }
];

export const FeaturesSection = () => (
  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
      >
        <Card className="glass-card p-6 hover:bg-white/10 transition-all duration-200">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </Card>
      </motion.div>
    ))}
  </div>
);