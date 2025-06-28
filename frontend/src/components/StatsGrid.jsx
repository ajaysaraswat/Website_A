import React, { useEffect, useRef } from "react";
import { Youtube, Shield, CheckCircle, Rocket } from "lucide-react";
import StatCard from "./StatCard";
import HeroSection from "./HeroSection";
import Team from "./TeamSection";
import Footer from "./Footer";

const stats = [
  {
    title: "Trusted",
    value: "500K+",
    label: "years in public and enterprise digital transformation",
  },
  {
    value: "99.9%",
    label: "countries served with digital excellence",
    title: "Global Reach",
  },
  {
    value: "< 30s",
    label: "solutions deployed across industries",
    title: "Innovators",
  },
  {
    value: "100+",
    label: "happy public & private sector collaborations",
    title: "Clients",
  },
  {
    value: "20K+",
    label: "Clients have strong belief to us",
    title: "Reliable",
  },
];

const StatsGrid = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const el = scrollRef.current;

    if (!container || !el || stats.length <= 3) return;

    // Desktop wheel event handler with better performance
    const handleWheel = (e) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const atStart = currentScroll <= 0;
      const atEnd = currentScroll >= maxScrollLeft - 1;

      if ((scrollingRight && atEnd) || (scrollingLeft && atStart)) {
        return; // Let page scroll normally
      }

      e.preventDefault();
      // Fast and smooth scrolling - increased multiplier
      el.scrollLeft += e.deltaY * 3;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div id="team">
        <Team />
      </div>

      <div className="bg-black py-16 px-4">
        {/* WHY CHOOSE US heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
          </h2>
        </div>

        {/* Scrollable stats */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="min-w-[400px] flex-shrink-0 md:min-w-[400px] sm:min-w-[300px]"
              >
                <StatCard
                  title={stat.title}
                  value={stat.value}
                  label={stat.label}
                />
              </div>
            ))}
          </div>

          {/* Optional: Touch scroll indicators for mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-2">
              {stats.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-600" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
