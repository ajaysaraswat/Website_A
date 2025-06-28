"use client";
import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./Why";

const trustData = [
  {
    title: "Trusted",
    value: "98%",
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
    title: "Security",
    value: "100%",
    subtext: "compliance with industry standards",
  },
  { title: "Support", value: "24/7", subtext: "customer care availability" },
  {
    title: "Security",
    value: "100%",
    subtext: "compliance with industry standards",
  },
  { title: "Support", value: "24/7", subtext: "customer care availability" },
  {
    title: "Security",
    value: "100%",
    subtext: "compliance with industry standards",
  },
  { title: "Support", value: "24/7", subtext: "customer care availability" },
  {
    title: "Security",
    value: "100%",
    subtext: "compliance with industry standards",
  },
  { title: "Support", value: "24/7", subtext: "customer care availability" },
];

export default function WhyCard() {
  /* ---------- refs & state ---------- */
  const sectionRef = useRef(null); // whole section
  const containerRef = useRef(null); // overflow-x wrapper
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [active, setActive] = useState(false); // ← in-view flag

  /* ---------- size / maxScroll ---------- */
  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      setMaxScroll(
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  /* ---------- intersection observer ---------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { root: null, threshold: 0.5 } // 50 % visible = “active”
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- wheel → horizontal ---------- */
  useEffect(() => {
    if (!active) return;

    const handle = (e) => {
      if (!containerRef.current) return;

      const delta = e.deltaY;
      const container = containerRef.current;

      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft >= maxScroll;

      // Allow normal vertical scroll only if:
      // at end and scrolling forward OR at start and scrolling backward
      const allowScrollDown = atEnd && delta > 0;
      const allowScrollUp = atStart && delta < 0;

      if (allowScrollDown || allowScrollUp) return;

      // Otherwise scroll horizontally
      e.preventDefault();
      const next = Math.max(0, Math.min(scrollLeft + delta, maxScroll));
      container.scrollLeft = next;
      setScrollLeft(next);
    };

    window.addEventListener("wheel", handle, { passive: false });
    return () => window.removeEventListener("wheel", handle);
  }, [active, scrollLeft, maxScroll]);

  /* ---------- render ---------- */
  return (
    <section
      ref={sectionRef}
      className="sticky top-0 h-screen w-full bg-black text-white"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="absolute inset-0 bg-[url('/whyR.jpg')] bg-cover bg-center opacity-50" />

      <div className="relative z-10 h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
          WHY CHOOSE <span className="text-[#ea4820]">US</span>?
        </h2>

        <div
          ref={containerRef}
          className="overflow-x-auto whitespace-nowrap no-scrollbar px-8 py-4"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="inline-flex gap-8">
            {trustData.map((card, i) => (
              <div key={i} className="inline-block w-[300px]">
                <ExperienceCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
