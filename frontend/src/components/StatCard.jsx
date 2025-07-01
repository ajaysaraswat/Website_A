import React from "react";
import CountUp from "react-countup";

export default function StatCard({ title = "ajay", value, label }) {
  const numericValue = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div
      className="w-full max-w-[480px] md:max-w-[540px] h-auto rounded-3xl bg-transparent text-white flex flex-col justify-center items-center text-center px-10 py-8 md:py-20 shadow-xl"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Top white line */}
      <div className="w-full h-[4px] md:h-[5px] bg-white mb-8 md:mb-10" />

      {/* Title */}
      <h3 className="text-2xl md:text-5xl font-semibold text-white mb-8 md:mb-10">
        {title}
      </h3>

      {/* Bottom white line */}
      <div className="w-full h-[4px] md:h-[5px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white mb-8 md:mb-10" />

      {/* Gradient Number */}
      <div className="text-6xl md:text-7xl lg:text-9xl font-extralight bg-gradient-to-r from-[#ea4820] to-white bg-clip-text text-transparent mb-6 md:mb-8">
        <CountUp end={parseInt(numericValue)} duration={10} separator="," />
        {suffix}
      </div>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-white leading-relaxed">{label}</p>
    </div>
  );
}
