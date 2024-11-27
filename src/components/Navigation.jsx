import { Link } from "react-router-dom";
import { navItems } from "../nav-items";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bitcoin, Infinity, CircleDollarSign, Pin, ArrowLeft, ArrowRight } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

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

  const navigationItems = [
    { to: "/", icon: <ArrowLeft size={20} />, title: "Home" },
    { to: "/arbitrage", icon: <ArrowRight size={20} />, title: "Arbitrage" },
    { to: "/whitepaper", icon: <ArrowRight size={20} />, title: "Whitepaper" },
  ];

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
              {navigationItems.map((item) => (
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
          isSecondaryMenuOpen ? 'h-auto py-2 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
            <button 
              onClick={() => handleChainClick('all')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <CircleDollarSign size={16} />
              <span>All Chains</span>
            </button>
            <div className="h-5 w-px bg-white/10 hidden sm:block"></div>
            <button 
              onClick={() => handleChainClick('bitcoin')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Bitcoin size={16} />
              <span>Bitcoin</span>
            </button>
            <button 
              onClick={() => handleChainClick('polygon')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Infinity size={16} />
              <span>Polygon</span>
            </button>
            <button 
              onClick={() => handleChainClick('solana')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Infinity size={16} />
              <span>Solana</span>
            </button>
            <button 
              onClick={() => handleChainClick('ethereum')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Infinity size={16} />
              <span>Ethereum</span>
            </button>
            <div className="ml-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Toggle 
                      pressed={isSticky} 
                      onPressedChange={setIsSticky}
                      className="data-[state=on]:bg-rok-blue text-sm"
                    >
                      <Pin size={14} className="mr-1" />
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