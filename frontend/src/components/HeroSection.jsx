import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "./images/heroImage.png",
    title1: "Empowering Futures,",
    title2: "Engineered Today",
    description: "We build transformative tech for smart cities",
    temperature: "28°C",
    weather: "Cloudy",
  },
  {
    image: "./smart.jpg",
    title1: "Smart Infrastructure",
    title2: "Revolution",
    description: "build education, and digital systems with social impact.",
    temperature: "32°C",
    weather: "Sunny",
  },
  {
    image: "./skill.jpg",
    title1: "Digital Identity",
    title2: "Solutions",
    description:
      "We enable secure, scalable identity platforms that drive inclusion and innovation.",
    temperature: "25°C",
    weather: "Rainy",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen font-heading flex items-center overflow-hidden text-start"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Images - fading one at a time */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90"></div>

      {/* Text Content (Fixed Position) */}
      <div className="z-20 w-full px-4 sm:px-6 md:px-12 flex flex-col items-start text-start text-white max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-extrabold tracking-tight">
          {slides[currentIndex].title1}
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 md:mt-4 tracking-tight">
          {slides[currentIndex].title2}
        </h1>
        <p className="mt-4 md:mt-6 text-[#ea4820] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {slides[currentIndex].description}
        </p>

        {/* Dot Indicators */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white/40"
              } transition-all duration-300`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center items-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
