// import React, { useState, useEffect } from "react";
// import { Button } from "./Button";

// const HeroSection = () => {
//   const [currentBg, setCurrentBg] = useState(0);

//   const backgrounds = [
//     "from-cyan-400 via-blue-500 to-purple-600",
//     "from-pink-400 via-red-500 to-yellow-500",
//     "from-green-400 via-cyan-500 to-blue-600",
//     "from-purple-400 via-pink-500 to-red-500",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${backgrounds[currentBg]} transition-all duration-1000 opacity-20`}
//       ></div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
//         <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
//         <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
//         <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-700"></div>
//       </div>

//       {/* Paint Splash Effects */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
//         <div className="mb-8 animate-fade-in">
//           <h1 className="text-6xl md:text-8xl font-black mb-4">
//             <span className="text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
//               square
//             </span>
//           </h1>
//           <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
//             pixels
//           </h2>
//         </div>

//         <div className="flex justify-center space-x-6 animate-fade-in delay-500">
//           <Button
//             size="lg"
//             className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
//           >
//             Get Started
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
//           >
//             View Portfolio
//           </Button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import { Button } from "./Button";

// const HeroSection = () => {
//   const [currentBg, setCurrentBg] = useState(0);

//   //   const backgrounds = [
//   //     "from-cyan-400 via-blue-500 to-purple-600",
//   //     "from-pink-400 via-red-500 to-yellow-500",
//   //     "from-green-400 via-cyan-500 to-blue-600",
//   //     "from-purple-400 via-pink-500 to-red-500",
//   //   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* 🔁 Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         src="./video.mp4" // 👈 Make sure to place video in `public/video.mp4`
//         autoPlay
//         muted
//         loop
//         playsInline
//       ></video>

//       {/* 🔮 Optional: Animated Color Overlay */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${backgrounds[currentBg]} transition-all duration-1000 opacity-20 z-10`}
//       ></div>

//       {/* 🔵 Floating Elements */}
//       {/* <div className="absolute inset-0 pointer-events-none z-10">
//         <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
//         <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
//         <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
//         <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-700"></div>
//       </div> */}

//       {/* 💧 Paint Splash Effects */}
//       {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
//         <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-xl animate-pulse delay-1000"></div>
//       </div> */}

//       {/* 🎯 Content */}
//       <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
//         <div className="mb-8 animate-fade-in">
//           <h1 className="text-6xl md:text-8xl font-black mb-4">
//             <span className="text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
//               square
//             </span>
//           </h1>
//           <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
//             pixels
//           </h2>
//         </div>

//         <div className="flex justify-center space-x-6 animate-fade-in delay-500">
//           <Button
//             size="lg"
//             className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
//           >
//             Get Started
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
//           >
//             View Portfolio
//           </Button>
//         </div>

//         {/* ↓ Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// HeroSection.jsx
import React from "react";
import { Button } from "./Button";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 🔁 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* ✅ Green Overlay */}
      <div className="absolute inset-0 bg-green-800/50 z-0 mix-blend-multiply"></div>

      {/* 🎯 Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Empowering Futures, Engineered Today
        </h1>

        <p className="text-lg md:text-2xl text-green-100 font-light mb-10 leading-relaxed">
          Instrek Technologies – Empowering futures with next-gen,
          purpose-driven tech innovations. We design, build, and deliver
          solutions that integrate technology with societal impact — across
          education, smart cities, digital identity, and automation.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg transition-all duration-300"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg transition-all duration-300"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* ⬇️ Header at bottom */}
      <div className="w-full z-10 relative">
        <Header />
      </div>
    </section>
  );
};

export default HeroSection;
