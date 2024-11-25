import { HomeIcon, BookOpenIcon, TrendingUpIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Whitepaper from "./pages/Whitepaper.jsx";
import Arbitrage from "./pages/Arbitrage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Whitepaper",
    to: "/whitepaper",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Whitepaper />,
  },
  {
    title: "Arbitrage",
    to: "/arbitrage",
    icon: <TrendingUpIcon className="h-4 w-4" />,
    page: <Arbitrage />,
  },
];