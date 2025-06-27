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
      el.scrollLeft += e.deltaY;
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
          >
            {stats.map((stat, index) => (
              <div key={index} className="min-w-[400px] flex-shrink-0">
                <StatCard
                  title={stat.title}
                  value={stat.value}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
