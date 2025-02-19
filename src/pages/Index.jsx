import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";
import PerformanceDashboard from "../components/PerformanceDashboard";
import { HeroSection } from "../components/sections/HeroSection";
import { StepsSection } from "../components/sections/StepsSection";
import { AwardsSection } from "../components/sections/AwardsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { Footer } from "../components/sections/Footer";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Step 1",
    description: "Click the last icon in the navbar to go to the presale page.",
  },
  {
    title: "Step 2",
    description: "Connect your Phantom wallet and ensure it has funds.",
  },
  {
    title: "Step 3",
    description: 'Click the "Contribute" button and enter the amount.',
  },
  {
    title: "Step 4",
    description: "Add your Twitter handle and confirm your contribution.",
  },
];

const Index = () => {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(0);

  const closeModal = () => setShowModal(false);
  const nextStep = () =>
    setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-rok-dark via-black to-rok-dark opacity-50 pointer-events-none -z-10" />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <div className="flex justify-center py-8">
          <motion.button
            className="text-rok-blue hover:text-rok-green transition-colors duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={48} />
          </motion.button>
        </div>
        <StepsSection />
        <AwardsSection />
        <FaqSection />
        <Footer />
      </div>

      {/* Enhanced Onboarding Modal */}
      {showModal && (
        <Dialog open={showModal} onOpenChange={closeModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{steps[step].title}</DialogTitle>
            </DialogHeader>
            <div className="text-center p-4">
              <p className="text-lg mb-4">{steps[step].description}</p>
              <div className="flex justify-between mt-6">
                <Button onClick={prevStep} disabled={step === 0}>
                  <ChevronLeft className="w-5 h-5" /> Prev
                </Button>
                {step === steps.length - 1 ? (
                  <Button onClick={closeModal} className="bg-green-500">
                    Got it!
                  </Button>
                ) : (
                  <Button onClick={nextStep}>
                    Next <ChevronRight className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
