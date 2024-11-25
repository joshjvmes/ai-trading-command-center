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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32"
      >
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Track Record</h2>
        <PerformanceDashboard />
      </motion.section>

      <StepsSection />
      <AwardsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;