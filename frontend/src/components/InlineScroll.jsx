import React from "react";

const InlineScrollImages = () => {
  const images = ["./first.png", "./second.png", "./third.png", "./forth.png"];

  // Repeat images for smooth infinite scroll
  const repeatedImages = [...images, , ...images, ...images];

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-[80%] overflow-hidden whitespace-nowrap bg-transparent py-4">
        <div className="animate-marquee inline-flex gap-8">
          {repeatedImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`team-${idx}`}
              className="h-40 px-5 w-auto object-contain"
            />
          ))}
        </div>

        {/* Tailwind Custom Animation */}
        <style>
          {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-10%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default InlineScrollImages;
