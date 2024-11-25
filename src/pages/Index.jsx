import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "../components/Navigation";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-up [--animation-delay:200ms]">
          Your Personal AI Trading Command Center
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-up [--animation-delay:400ms]">
          Join an exclusive community of 100,000 smart wallet holders leveraging institutional-grade AI arbitrage across 10 major cryptocurrencies
        </p>
        <Button size="lg" className="bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all animate-fade-up [--animation-delay:600ms]">
          Reserve Your Smart Wallet Now
        </Button>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up [--animation-delay:800ms]">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-black/30 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="glass-card p-8 text-center">
                <div className="text-2xl font-bold text-rok-blue mb-2">{step.price}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-black/30 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="glass-card p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/af550939-c681-4870-8fa5-243d90dc379a.png" 
                    alt="Award Trophy" 
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <div className="text-xl font-bold text-rok-blue mb-2">{award.organization}</div>
                <p className="text-gray-400">{award.achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">© 2024 ROK. All rights reserved.</p>
          <p className="text-sm">
            Trading in cryptocurrencies involves significant risk. Past performance is not indicative of future results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
