import React, { useEffect, useRef, useState } from "react";
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
  const touchStartYRef = useRef(0);
  const lastScrollLeftRef = useRef(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const el = scrollRef.current;

    if (!container || !el || stats.length <= 3) return;

    // Function to update active card index
    const updateActiveCard = () => {
      const cardWidth = el.offsetWidth;
      const scrollPosition = el.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveCardIndex(Math.min(Math.max(0, newIndex), stats.length - 1));
    };

    // Add scroll event listener for updating active card
    el.addEventListener("scroll", updateActiveCard);

    // Desktop wheel event handler
    const handleWheel = (e) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const atStart = currentScroll <= 0;
      const atEnd = currentScroll >= maxScrollLeft - 1;

      // Allow page scrolling if we're at the ends
      if ((scrollingRight && atEnd) || (scrollingLeft && atStart)) {
        return;
      }

      e.preventDefault();
      el.scrollLeft += e.deltaY * 3;
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
      lastScrollLeftRef.current = el.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!touchStartYRef.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;
      const nextScroll = currentScroll + deltaY * 3;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      const atStart = currentScroll <= 0;
      const atEnd = currentScroll >= maxScrollLeft - 1;

      // Check if we should allow page scrolling
      if ((scrollingDown && atEnd) || (scrollingUp && atStart)) {
        // If we're at the ends, don't prevent default to allow page scroll
        if (Math.abs(currentScroll - lastScrollLeftRef.current) < 1) {
          return;
        }
      } else {
        // Only prevent default if we're still within the card scroll range
        e.preventDefault();
        el.scrollLeft = nextScroll;
      }

      lastScrollLeftRef.current = currentScroll;
      touchStartYRef.current = touchEndY;
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = 0;
      lastScrollLeftRef.current = 0;
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Initial active card update
    updateActiveCard();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("scroll", updateActiveCard);
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
              touchAction: "pan-y pinch-zoom",
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
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeCardIndex ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
