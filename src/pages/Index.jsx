import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Zap } from "lucide-react";
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
  const scrollToTrackRecord = () => {
    const trackRecordSection = document.querySelector('#track-record');
    trackRecordSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-rok-dark via-black to-rok-dark opacity-50 pointer-events-none -z-10" />
      
      <div className="relative z-10">
        <Navigation />
        
        <HeroSection />

        <div className="flex justify-center py-16">
          <button
            onClick={scrollToTrackRecord}
            className="text-rok-blue hover:text-rok-green transition-colors duration-300"
          >
            <Zap size={48} />
          </button>
        </div>

        <motion.section 
          id="track-record"
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

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="py-32 bg-black/30"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Ready to Start Trading?</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the exclusive community of AI-powered traders today
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all"
            >
              Reserve Your Wallet Now
            </Button>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;