import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    title: "Trusted",
    value: "500K+",
    label: "years in digital transformation",
  },
  { title: "Global Reach", value: "99.9%", label: "countries served" },
  { title: "Innovators", value: "< 30s", label: "deployment time" },
  { title: "Clients", value: "100+", label: "public & private collaborations" },
  { title: "Reliable", value: "20K+", label: "Client trust" },
];

const WhyCard = () => {
  const frameRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const frameWidth = frameRef.current.offsetWidth;

    gsap.to(scrollRef.current, {
      x: () => -(scrollWidth - frameWidth),
      ease: "none",
      scrollTrigger: {
        trigger: frameRef.current,
        start: "top bottom", // start animation when frame comes into view
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: false, // Do NOT pin the section
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold">
          WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
        </h2>
      </div>

      <div
        ref={frameRef}
        className="relative w-full h-[600px] overflow-hidden border-y border-gray-700"
      >
        <div ref={scrollRef} className="flex flex-nowrap gap-10 px-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="min-w-[350px] md:min-w-[400px] flex-shrink-0"
            >
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
  );
};

export default WhyCard;
