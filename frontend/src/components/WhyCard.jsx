"use client";
import { useEffect, useRef, useState, lazy } from "react";
import ExperienceCard from "./Why";
//const ExperienceCard = lazy(() => import("./Why"));

const trustData = [
  {
    title: "Trusted",
    value: "5+",
    subtext: "years in public and enterprise digital transformation",
  },
  {
    title: "Global Reach",
    value: "12+",
    subtext: "countries served with digital excellence",
  },
  {
    title: "Innovators",
    value: "30+",
    subtext: "solutions deployed across industries",
  },
  {
    title: "Clients",
    value: "100+",
    subtext: "happy public & private sector collaborations",
  },
  {
    title: "Trusted",
    value: "5+",
    subtext: "years in public and enterprise digital transformation",
  },
  {
    title: "Global Reach",
    value: "12+",
    subtext: "countries served with digital excellence",
  },
  {
    title: "Innovators",
    value: "30+",
    subtext: "solutions deployed across industries",
  },
  {
    title: "Clients",
    value: "100+",
    subtext: "happy public & private sector collaborations",
  },
];

export default function Why() {
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [horizontalScrollHeight, setHorizontalScrollHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const calculateDimensions = () => {
      if (containerRef.current && scrollSectionRef.current) {
        const section = scrollSectionRef.current;
        const rect = section.getBoundingClientRect();
        const topOffset = window.scrollY + rect.top;
        setSectionTop(topOffset);

        const cardWidth = isMobile ? 280 : 300;
        const gap = isMobile ? 16 : 32;
        const totalCards = trustData.length;
        const totalWidth = (cardWidth + gap) * totalCards - gap;
        const maxTranslation = Math.max(
          0,
          totalWidth - window.innerWidth + (isMobile ? 32 : 100)
        );
        setMaxScroll(maxTranslation);

        // KEY CHANGE:
        const scrollHeight =
          (maxTranslation / window.innerWidth) * window.innerHeight;
        setHorizontalScrollHeight(scrollHeight);
      }
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const start = sectionTop;
      const end = sectionTop + horizontalScrollHeight;

      if (currentScrollY >= start && currentScrollY <= end) {
        const scrollProgress =
          (currentScrollY - start) / horizontalScrollHeight;
        const eased =
          scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // smoothstep
        const newScrollX = eased * maxScroll;
        setScrollX(newScrollX);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionTop, horizontalScrollHeight, maxScroll]);

  return (
    <div
      ref={scrollSectionRef}
      className="scroll-section relative overflow-hidden bg-black"
      style={{
        height: `${horizontalScrollHeight}px`,

        fontFamily: "'PP Neue Montreal', sans-serif",
      }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 h-screen py-8 md:py-20 text-white overflow-hidden"
        style={{
          fontFamily: "'PP Neue Montreal', sans-serif",
        }}
      >
        {/* Background Image + Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0)), url('./whyR.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />

        {/* Text Content */}
        <div className="relative z-10 px-4 md:px-6 text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
          </h2>
        </div>

        {/* Scrolling Cards */}
        <div className="relative z-10 w-full overflow-hidden px-4 md:px-8">
          <div
            className="flex gap-4 md:gap-8 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${scrollX}px)`,
              width: "max-content",
            }}
          >
            {trustData.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] md:w-[300px]">
                <ExperienceCard
                  title={card.title}
                  value={card.value}
                  subtext={card.subtext}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        {/* <div className="relative z-10 flex justify-center mt-8 md:mt-12">
          <div className="w-32 md:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="bg-[#ea4820] rounded-full transition-all duration-600"
              style={{
                width: `${(scrollX / maxScroll) * 100}%`,
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
