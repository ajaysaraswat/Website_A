import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    "Home",
    "About",
    "Team",
    "Portfolio",
    "Blog",
    "Shortcodes",
    "Shop",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
              splashes
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                  activeMenu === item ? "text-cyan-400" : "text-gray-700"
                }`}
              >
                {item}
                {activeMenu === item && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
