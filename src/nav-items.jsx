import { lazy } from "react";
import Presale from "./pages/Presale";

const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Arbitrage = lazy(() => import("./pages/Arbitrage"));
const Purchase = lazy(() => import("./pages/Purchase"));

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/dashboard",
    page: <Dashboard />,
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
    to: "/whitepaper",
    page: <Whitepaper />,
  },
  {
    to: "/arbitrage",
    page: <Arbitrage />,
  },
  {
    to: "/purchase",
    page: <Purchase />,
  },
  {
    to: "/presale",
    page: <Presale />,
  },
];
