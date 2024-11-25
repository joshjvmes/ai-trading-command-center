import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award } from "lucide-react";
import Navigation from "../components/Navigation";
import PerformanceDashboard from "../components/PerformanceDashboard";
import { motion } from "framer-motion";

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

const steps = [
  {
    title: "Purchase Your Smart Wallet",
    description: "Secure your position among 100,000 exclusive wallets",
    price: "$1,000"
  },
  {
    title: "Fund Your Account",
    description: "Distribute funds across 10 major cryptocurrencies",
    price: "$10,000 min"
  },
  {
    title: "Watch Your AI Trade",
    description: "Advanced algorithms identify and execute arbitrage opportunities",
    price: "Earn 2-5%"
  }
];

const awards = [
  {
    organization: "Barclays Hedge",
    achievement: "Top 10 Systematic Traders for The Year (Ranked by Net Return) - 2021"
  },
  {
    organization: "Barclays Hedge",
    achievement: "2nd Best Performing Diversified Trader (Ranked by Net Returns) - 2021"
  },
  {
    organization: "Barclays Hedge",
    achievement: "Top 3 Performing Short Term Strategies (Ranked by Net Returns) - 2021"
  },
  {
    organization: "Barclays Hedge",
    achievement: "Top 10 Diversified Traders Managing Less Than $10M (Ranked by Net Returns)"
  },
  {
    organization: "BCR Broker",
    achievement: "Top 10 Longest Track Record (Ranked by Net Returns) 2016 - Present"
  },
  {
    organization: "Dubai Expo",
    achievement: "Most Consistent AI Trading Algorithm (Ranked by Net Returns) - 2023"
  }
];

const faqs = [
  {
    question: "How does the AI trading system work?",
    answer: "Our AI system continuously monitors price differences across multiple exchanges and chains, executing trades when profitable opportunities arise. It uses institutional-grade algorithms developed by top trading firms."
  },
  {
    question: "What makes ROK different from other platforms?",
    answer: "ROK combines institutional-grade AI technology with full liquidity control and a proven track record. We're backed by Delta1, a top 10 global trading firm."
  },
  {
    question: "How is my investment protected?",
    answer: "Your funds are protected by timelock encryption, and you maintain full withdrawal rights at all times. We implement strict risk management protocols and offer a zero-loss trading guarantee."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-rok-dark via-black to-rok-dark opacity-50 pointer-events-none" />
      
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-20 pb-32 text-center relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-up [--animation-delay:200ms]">
          Your Personal AI Trading Command Center
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-up [--animation-delay:400ms]">
          Join an exclusive community of 100,000 smart wallet holders leveraging institutional-grade AI arbitrage across 10 major cryptocurrencies
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all animate-fade-up [--animation-delay:600ms]">
            Reserve Your Smart Wallet Now
          </Button>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Performance Dashboard Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32"
      >
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Track Record</h2>
        <PerformanceDashboard />
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/30 py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-rok-blue mb-2">{step.price}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/30 py-32"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <motion.div 
                    className="mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Award className="w-16 h-16 mx-auto text-rok-blue" />
                  </motion.div>
                  <div className="text-xl font-bold text-rok-blue mb-2">{award.organization}</div>
                  <p className="text-gray-400">{award.achievement}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32"
      >
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-rok-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
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
    </div>
  );
};

export default Index;
