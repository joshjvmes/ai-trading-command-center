import { lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const Arbitrage = lazy(() => import("./pages/Arbitrage"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

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
  {
    to: "/login",
    page: <Login />,
  },
  {
    to: "/register",
    page: <Register />,
  },
  {
    to: "/dashboard",
    page: <Dashboard />,
  },
];