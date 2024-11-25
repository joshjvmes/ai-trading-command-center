import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award } from "lucide-react";
import Navigation from "../components/Navigation";
import PerformanceDashboard from "../components/PerformanceDashboard";
import { motion } from "framer-motion";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { StepsSection } from "../components/sections/StepsSection";
import { AwardsSection } from "../components/sections/AwardsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { Footer } from "../components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-rok-dark via-black to-rok-dark opacity-50 pointer-events-none" />
      
      <Navigation />
      
      <HeroSection />

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rok-blue/5 to-rok-green/5 rounded-3xl backdrop-blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Track Record</h2>
          <PerformanceDashboard />
        </div>
      </motion.section>

      <StepsSection />
      <AwardsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;