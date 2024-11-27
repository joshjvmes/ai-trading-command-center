import { Link } from "react-router-dom";
import { navItems } from "../nav-items";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bitcoin, Infinity, CircleDollarSign, Pin } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleSecondaryMenu = () => {
    setIsSecondaryMenuOpen(!isSecondaryMenuOpen);
  };

  const handleChainClick = (chain) => {
    const root = document.documentElement;
    switch (chain) {
      case 'bitcoin':
        root.style.setProperty('--background', '32, 84%, 4.9%');
        document.body.style.backgroundColor = '#ff8c00';
        break;
      case 'polygon':
        root.style.setProperty('--background', '32, 84%, 4.9%');
        document.body.style.backgroundColor = '#8b5cf6';
        break;
      case 'solana':
        root.style.setProperty('--background', '32, 84%, 4.9%');
        document.body.style.backgroundColor = '#ffd700';
        break;
      case 'ethereum':
        root.style.setProperty('--background', '32, 84%, 4.9%');
        document.body.style.backgroundColor = '#00f2a9';
        break;
      default:
        root.style.setProperty('--background', '222.2, 84%, 4.9%');
        document.body.style.backgroundColor = '#0A1428';
        break;
    }
  };

  return (
    <div className={`${isSticky ? 'sticky' : 'relative'} top-0 z-50 backdrop-blur-lg`}>
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={toggleSecondaryMenu}
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                ROCKET $ROK
              </button>
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
      <div 
        className={`bg-black/30 border-b border-white/10 transition-all duration-300 ${
          isSecondaryMenuOpen ? 'h-14 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 space-x-4 overflow-x-auto">
            <button 
              onClick={() => handleChainClick('all')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <CircleDollarSign size={20} />
              <span>All Chains</span>
            </button>
            <div className="h-5 w-px bg-white/10"></div>
            <button 
              onClick={() => handleChainClick('bitcoin')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <Bitcoin size={20} />
              <span>Bitcoin</span>
            </button>
            <button 
              onClick={() => handleChainClick('polygon')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <Infinity size={20} />
              <span>Polygon</span>
            </button>
            <button 
              onClick={() => handleChainClick('solana')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <Infinity size={20} />
              <span>Solana</span>
            </button>
            <button 
              onClick={() => handleChainClick('ethereum')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <Infinity size={20} />
              <span>Ethereum</span>
            </button>
            <div className="ml-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Toggle 
                      pressed={isSticky} 
                      onPressedChange={setIsSticky}
                      className="data-[state=on]:bg-rok-blue"
                    >
                      <Pin size={16} className="mr-1" />
                      Sticky
                    </Toggle>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle sticky navigation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;