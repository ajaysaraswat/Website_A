import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "#home", isHashLink: true },
    { label: "About", link: "#about", isHashLink: true },
    { label: "Team", link: "#team", isHashLink: true },
    { label: "Services", link: "#services", isHashLink: true },
    { label: "Blog", link: "/blog", isHashLink: false },
    { label: "Contact", link: "#contact", isHashLink: true },
  ];

  return (
    <header
      className="absolute z-50 bg-[#181344] rounded-3xl top-[20px] left-[4%] right-[4%]"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-1 py-3 flex items-center justify-between h-[60px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./Logo_White.png"
            alt="Instrek Logo"
            className="h-20 w-25 pl-4 lg:pl-0.5 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) =>
            item.isHashLink ? (
              <a
                key={item.label}
                href={item.link}
                className={`relative px-3 py-2 text-xl font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-white"
                }`}
                onClick={() => setActiveMenu(item.label)}
              >
                {item.label}
                {activeMenu === item.label && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EA6220] to-white animate-fade-in"></div>
                )}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className={`relative px-3 py-2 text-xl font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-white"
                }`}
                onClick={() => setActiveMenu(item.label)}
              >
                {item.label}
                {activeMenu === item.label && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EA6220] to-white animate-fade-in"></div>
                )}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden ml-auto text-white pr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-[#181344] text-white transition-all rounded-b-4xl">
          {menuItems.map((item) =>
            item.isHashLink ? (
              <a
                key={item.label}
                href={item.link}
                className={`block text-base font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-gray-300"
                }`}
                onClick={() => {
                  setActiveMenu(item.label);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className={`block text-base font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-gray-300"
                }`}
                onClick={() => {
                  setActiveMenu(item.label);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
