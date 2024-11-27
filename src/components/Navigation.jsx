import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-bold text-xl">
            <span className="hidden md:inline">ROCKET </span>$ROK
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <Link to={item.to}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register" className="hidden md:block">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;