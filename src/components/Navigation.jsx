import { Link } from "react-router-dom";
import { navItems } from "../nav-items";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;