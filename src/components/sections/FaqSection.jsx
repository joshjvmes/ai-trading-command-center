import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    answer: "Your funds are protected by timelock encryption, and you maintain full withdrawal rights at all times. We implement strict risk management protocols."
  }
];

export const FaqSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="container mx-auto px-4 py-32"
  >
    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
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
);