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
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const el = scrollRef.current;

    if (!container || !el || stats.length <= 3) return;

    // Desktop wheel event handler
    const handleWheel = (e) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const atStart = currentScroll <= 0;
      const atEnd = currentScroll >= maxScrollLeft - 1;

      if ((scrollingRight && atEnd) || (scrollingLeft && atStart)) {
        return;
      }

      e.preventDefault();
      el.scrollLeft += e.deltaY * 3;
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartXRef.current || !touchStartYRef.current) return;

      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;

      const deltaX = touchStartXRef.current - touchEndX;
      const deltaY = touchStartYRef.current - touchEndY;

      // If horizontal scrolling is more prominent than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        el.scrollLeft += deltaX;
      }

      touchStartXRef.current = touchEndX;
      touchStartYRef.current = touchEndY;
    };

    const handleTouchEnd = () => {
      touchStartXRef.current = 0;
      touchStartYRef.current = 0;
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
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
        <div ref={containerRef} className="relative max-w-6xl mx-auto touch-pan-x">
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
