import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Purchase = () => {
  const [amount, setAmount] = useState("");

  const handlePurchase = (e) => {
    e.preventDefault();
    toast.success("Purchase request submitted! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-rok-dark via-black to-rok-dark opacity-50 pointer-events-none -z-10" />
      
      <div className="relative z-10">
        <Navigation />
        
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 pt-32 pb-32"
        >
          <Card className="max-w-2xl mx-auto p-8 glass-card">
            <h1 className="text-4xl font-bold mb-6 gradient-text">Reserve Your Smart Wallet</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Smart Wallet Details</h2>
                <p className="text-gray-400 mb-4">Secure your position among 100,000 exclusive wallets</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Initial wallet price: $100,000</li>
                  <li>• Minimum funding required: $250,000</li>
                  <li>• Expected returns: 2-5% monthly</li>
                </ul>
              </div>

              <form onSubmit={handlePurchase} className="space-y-4">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium mb-2">
                    Investment Amount (USD)
                  </label>
                  <Input
                    id="amount"
                    type="number"
                    min="100000"
                    placeholder="Enter amount (min. $100,000)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="bg-black/20"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all"
                >
                  Submit Purchase Request
                </Button>
              </form>

              <p className="text-sm text-gray-400 mt-4">
                After submission, our team will contact you with detailed instructions for completing your purchase and funding your smart wallet.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Purchase;