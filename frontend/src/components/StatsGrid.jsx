import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";
import Team from "./TeamSection";

gsap.registerPlugin(ScrollTrigger);

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
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth + 100), // Added padding
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 0.5,
        snap: 1 / (stats.length - 1),
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id="team">
        <Team />
      </div>

      <div className="bg-black">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
          </h2>
        </div>

        <div
          ref={containerRef}
          className="w-full h-screen flex items-center overflow-hidden"
        >
          <div
            ref={cardsContainerRef}
            className="flex flex-nowrap gap-[50px] px-[50px]"
          >
            {stats.map((stat, index) => (
              <div key={index} className="card min-w-[400px] flex-shrink-0">
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
