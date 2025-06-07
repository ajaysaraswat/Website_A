import React from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToHero = () => {
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToHero}
      className="fixed bottom-6 right-6 bg-[#EA6220] text-white p-3 rounded-full shadow-2xl hover:bg-white hover:text-[#EA6220] transition-all z-50 animate-float"
    >
      <ArrowUpCircle size={28} />
    </button>
  );
};

export default ScrollToTopButton;
