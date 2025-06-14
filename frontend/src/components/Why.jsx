import React, { useEffect, useRef, useState } from "react";

const tagline = [
  "5+ years in public and enterprise digital transformation",
  "30,000+ lives impacted through tech and training",
  "100% India-built, scalable platforms",
  "Transparent, ethical, and future-ready solutions",
  "“We don’t build software—we build ecosystems.”",
];

const heading = "Trusted, Innovative, Impact-Driven";

const shortDescription =
  "At Instrek, our mission is to bridge the gap between cutting-edge technology and everyday impact. We design and deliver purpose-driven digital solutions in education, automation, broadcasting, and smart cities—making innovation work for everyone, everywhere.";

const keyPoints = [
  "Timely delivery",
  "Scalable solutions",
  "Skilled team",
  "Purpose-led",
  "Trusted by institutions",
  "Hands-on expertise",
];

const Why = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const [scale, setScale] = useState(0.8); // start small
  const [bgOpacity, setBgOpacity] = useState(0); // start transparent

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !boxRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.max(
        0,
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      );
      const percentVisible = visible / rect.height;

      const newScale = 0.8 + 0.2 * percentVisible; // scale from 0.8 to 1
      const newOpacity = Math.min(1, percentVisible); // fade in bg

      setScale(newScale);
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#2A2342] to-[#121212] relative min-h-screen py-12 px-4 flex flex-col items-center justify-center transition-colors duration-700 ease-in-out"
      style={{
        backgroundColor: `#2A2342`,
        fontFamily: "'PP Neue Montreal', sans-serif",
      }}
    >
      <div
        ref={boxRef}
        className="font-['Fira_Code'] max-w-7xl border-2 border-white w-full bg-[#2a2342] rounded-2xl shadow-xl p-8  transition-transform duration-500 ease-in-out"
        style={{ transform: `scale(${scale})` }}
      >
        <h2 className="text-3xl font-extrabold text-[#EA6220] mb-2 text-center">
          Why Choose Us
        </h2>
        <div className="mb-6">
          <ul className="list-disc pl-6 text-white space-y-1 ">
            {tagline.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          {heading}
        </h3>
        <p className="text-gray-800 mb-6 leading-relaxed">{shortDescription}</p>
        <div>
          <h4 className="text-lg font-bold text-[#EA6220] mb-2">Key Points</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-cyan-600">
            {keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#EA6220] rounded-full"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;
