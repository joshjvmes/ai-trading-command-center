import { lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const Arbitrage = lazy(() => import("./pages/Arbitrage"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/arbitrage",
    page: <Arbitrage />,
  },
  {
    to: "/whitepaper",
    page: <Whitepaper />,
  },
];