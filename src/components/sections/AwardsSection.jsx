import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

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

export const AwardsSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-black/30 py-32"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <Card className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-200">
              <motion.div 
                className="mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
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
);