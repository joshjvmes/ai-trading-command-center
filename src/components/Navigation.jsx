import { Link } from "react-router-dom";
import { navItems } from "../nav-items";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bitcoin, Infinity, CircleDollarSign } from "lucide-react";

const Navigation = () => {
  return (
    <div>
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text">
                ROCKET $ROK
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <TooltipProvider key={item.to}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.to}
                        className="p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      >
                        {item.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Chain Selector Menu */}
      <div className="bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 space-x-4 overflow-x-auto">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
              <CircleDollarSign size={20} />
              <span>All Chains</span>
            </button>
            <div className="h-5 w-px bg-white/10"></div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
              <Bitcoin size={20} />
              <span>Bitcoin</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
              <Infinity size={20} />
              <span>Polygon</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
              <Infinity size={20} />
              <span>Avalanche</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
              <Infinity size={20} />
              <span>Ethereum</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;