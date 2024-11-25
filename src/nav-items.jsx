import { lazy } from "react";
import { Home, BookOpen, ArrowLeftRight } from "lucide-react";

const Index = lazy(() => import("./pages/Index"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Arbitrage = lazy(() => import("./pages/Arbitrage"));

export const navItems = [
  {
    title: "Home",
    to: "/home",
    page: <Index />,
    icon: <Home className="w-5 h-5" />
  },
  {
    title: "Whitepaper",
    to: "/whitepaper",
    page: <Whitepaper />,
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Arbitrage",
    to: "/arbitrage",
    page: <Arbitrage />,
    icon: <ArrowLeftRight className="w-5 h-5" />
  }
];