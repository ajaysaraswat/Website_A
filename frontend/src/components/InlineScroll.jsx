import React from "react";
import { motion } from "framer-motion";

const InlineScrollImages = () => {
  const images = [
    "./second.png",
    "./tata.png",
    "./first.png",
    "./yes.png",
    "./forth.png",
  ];

  // Create multiple copies to ensure seamless infinite loop
  const loopedImages = [...images, ...images, ...images, ...images];

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-t from-black via-black to-black  py-4"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <h2 className="text-3xl md:text-5xl mb-12 font-bold tracking-tight text-[#ea4820] text-center">
        OUR <span className="text-white"> CUSTOMERS</span>
      </h2>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
      >
        {loopedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 mx-10">
            <img
              src={src}
              alt={`logo-${idx}`}
              className="h-20 w-auto object-contain bg-transparent p-3 rounded-lg mb-10 "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InlineScrollImages;
