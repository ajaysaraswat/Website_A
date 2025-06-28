import React from "react";

export const LogoSection = ({
  title,
  subtitle,
  sectionTitle,
  logos,
  direction = "left",
}) => {
  // Duplicate logos 4 times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  // Define scroll animation direction and duration
  const scrollAnimation = {
    animation:
      direction === "left"
        ? "scroll-left 30s linear infinite"
        : "scroll-right 30s linear infinite",
    willChange: "transform",
  };

  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ea4820]">
          {title} <span className="text-white">{subtitle}</span>
        </h2>
        {sectionTitle && (
          <p className="text-gray-400 mt-2 text-lg md:text-xl">
            {sectionTitle}
          </p>
        )}
      </div>

      {/* Logo Scroll Grid */}
      <div
        className={`flex gap-8 md:gap-12 py-4 hover:[animation-play-state:paused] ${
          direction === "left" ? "" : "flex-row-reverse"
        }`}
        style={scrollAnimation}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 
                       bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 
                       hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                       hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20
                       group"
          >
            <div className="w-full h-full flex justify-center items-center p-2">
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain filter brightness-[1.2] contrast-[1.1] 
                         group-hover:brightness-[1.4] group-hover:contrast-[1.2] 
                         transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
