// // import React, { useState, useEffect } from "react";
// // import { Button } from "./Button";

// // const HeroSection = () => {
// //   const [currentBg, setCurrentBg] = useState(0);

// //   const backgrounds = [
// //     "from-cyan-400 via-blue-500 to-purple-600",
// //     "from-pink-400 via-red-500 to-yellow-500",
// //     "from-green-400 via-cyan-500 to-blue-600",
// //     "from-purple-400 via-pink-500 to-red-500",
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* Animated Background */}
// //       <div
// //         className={`absolute inset-0 bg-gradient-to-br ${backgrounds[currentBg]} transition-all duration-1000 opacity-20`}
// //       ></div>

// //       {/* Floating Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
// //         <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
// //         <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
// //         <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-700"></div>
// //       </div>

// //       {/* Paint Splash Effects */}
// //       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
// //         <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
// //         <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-xl animate-pulse delay-1000"></div>
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
// //         <div className="mb-8 animate-fade-in">
// //           <h1 className="text-6xl md:text-8xl font-black mb-4">
// //             <span className="text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
// //               square
// //             </span>
// //           </h1>
// //           <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
// //             pixels
// //           </h2>
// //         </div>

// //         <div className="flex justify-center space-x-6 animate-fade-in delay-500">
// //           <Button
// //             size="lg"
// //             className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
// //           >
// //             Get Started
// //           </Button>
// //           <Button
// //             variant="outline"
// //             size="lg"
// //             className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
// //           >
// //             View Portfolio
// //           </Button>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
// //             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// // import React, { useState, useEffect } from "react";
// // import { Button } from "./Button";

// // const HeroSection = () => {
// //   const [currentBg, setCurrentBg] = useState(0);

// //   //   const backgrounds = [
// //   //     "from-cyan-400 via-blue-500 to-purple-600",
// //   //     "from-pink-400 via-red-500 to-yellow-500",
// //   //     "from-green-400 via-cyan-500 to-blue-600",
// //   //     "from-purple-400 via-pink-500 to-red-500",
// //   //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBg((prev) => (prev + 1) % backgrounds.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* 🔁 Background Video */}
// //       <video
// //         className="absolute inset-0 w-full h-full object-cover z-0"
// //         src="./video.mp4" // 👈 Make sure to place video in `public/video.mp4`
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //       ></video>

// //       {/* 🔮 Optional: Animated Color Overlay */}
// //       <div
// //         className={`absolute inset-0 bg-gradient-to-br ${backgrounds[currentBg]} transition-all duration-1000 opacity-20 z-10`}
// //       ></div>

// //       {/* 🔵 Floating Elements */}
// //       {/* <div className="absolute inset-0 pointer-events-none z-10">
// //         <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
// //         <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
// //         <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
// //         <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-700"></div>
// //       </div> */}

// //       {/* 💧 Paint Splash Effects */}
// //       {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
// //         <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
// //         <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-xl animate-pulse delay-1000"></div>
// //       </div> */}

// //       {/* 🎯 Content */}
// //       <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
// //         <div className="mb-8 animate-fade-in">
// //           <h1 className="text-6xl md:text-8xl font-black mb-4">
// //             <span className="text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
// //               square
// //             </span>
// //           </h1>
// //           <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
// //             pixels
// //           </h2>
// //         </div>

// //         <div className="flex justify-center space-x-6 animate-fade-in delay-500">
// //           <Button
// //             size="lg"
// //             className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
// //           >
// //             Get Started
// //           </Button>
// //           <Button
// //             variant="outline"
// //             size="lg"
// //             className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
// //           >
// //             View Portfolio
// //           </Button>
// //         </div>

// //         {/* ↓ Scroll Indicator */}
// //         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
// //             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// // HeroSection.jsx
// // import React from "react";
// // import { Button } from "./Button";
// // import Header from "./Header";

// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen bg-black font-[Fira_Code] overflow-hidden">
// //       {/* Background Video */}
// //       <div className="absolute inset-0 z-0">
// //         <video
// //           className="w-full h-full object-cover"
// //           src="./video.mp4"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         ></video>
// //         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
// //         <div className="max-w-4xl text-white text-center space-y-8">
// //           {/* Company Name */}
// //           <h1 className="text-6xl font-semibold tracking-tight">
// //             Instrek Technologies
// //           </h1>

// //           {/* Tagline */}
// //           <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white/90">
// //             Empowering Futures, Engineered Today
// //           </h2>

// //           {/* Description */}
// //           <p className="text-[16px] leading-relaxed text-white/70">
// //             Instrek Technologies – Empowering futures with next-gen,
// //             purpose-driven tech innovations. We design, build, and deliver
// //             solutions that integrate technology with societal impact — across
// //             education, smart cities, digital identity, and automation.
// //           </p>

// //           {/* Call to Action */}
// //           <div className="flex flex-wrap justify-center gap-4 pt-4">
// //             <Button className="bg-white text-black px-6 py-3 text-[16px]">
// //               Get Started
// //             </Button>
// //             {/* <Button
// //               variant="outline"
// //               className="border-white text-white hover:bg-white hover:text-black px-6 py-3 text-[16px]"
// //             >
// //               View Portfolio
// //             </Button> */}
// //           </div>
// //           <div>
// //             <h6 className="text-3xl text-white font-bold">^</h6>
// //           </div>
// //           <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
// //             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
// //               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Optional Bottom Header */}
// //       <div className="absolute bottom-0 w-full z-20">
// //         <Header />
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from "react";
// import { Button } from "./Button";
// import Header from "./Header";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative min-h-screen bg-black overflow-hidden font-heading"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           src="./video.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         ></video>
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
//         <div className="max-w-4xl text-white text-center space-y-8">
//           {/* Company Name */}
//           <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
//             Instrek Technologies
//           </h1>

//           {/* Tagline */}
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#EA6220] leading-tight">
//             Empowering Futures, Engineered Today
//           </h2>

//           {/* Description */}
//           <p className="font-body text-white/80 text-base md:text-lg leading-relaxed">
//             Instrek Technologies – Empowering futures with next-gen,
//             purpose-driven tech innovations. We design, build, and deliver
//             solutions that integrate technology with societal impact — across
//             education, smart cities, digital identity, and automation.
//           </p>

//           {/* Call to Action */}
//           <div className="flex flex-wrap justify-center gap-4 pt-4">
//             <Button className="bg-white text-black px-6 py-3 text-base font-semibold">
//               Get Started
//             </Button>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional Bottom Header */}
//     </section>
//   );
// };

// export default HeroSection;

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
// import React from "react";
// import { Button } from "./Button";
// import Header from "./Header";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-black font-[Fira_Code] overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           src="./video.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         ></video>
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
//         <div className="max-w-4xl text-white text-center space-y-8">
//           {/* Company Name */}
//           <h1 className="text-6xl font-semibold tracking-tight">
//             Instrek Technologies
//           </h1>

//           {/* Tagline */}
//           <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white/90">
//             Empowering Futures, Engineered Today
//           </h2>

//           {/* Description */}
//           <p className="text-[16px] leading-relaxed text-white/70">
//             Instrek Technologies – Empowering futures with next-gen,
//             purpose-driven tech innovations. We design, build, and deliver
//             solutions that integrate technology with societal impact — across
//             education, smart cities, digital identity, and automation.
//           </p>

//           {/* Call to Action */}
//           <div className="flex flex-wrap justify-center gap-4 pt-4">
//             <Button className="bg-white text-black px-6 py-3 text-[16px]">
//               Get Started
//             </Button>
//             {/* <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-black px-6 py-3 text-[16px]"
//             >
//               View Portfolio
//             </Button> */}
//           </div>
//           <div>
//             <h6 className="text-3xl text-white font-bold">^</h6>
//           </div>
//           <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional Bottom Header */}
//       <div className="absolute bottom-0 w-full z-20">
//         <Header />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Button } from "./Button"; // Make sure Button is properly imported

// const HeroSection = () => {
//   return (
//     <section
//       className="relative w-full h-screen font-heading flex items-center overflow-hidden text-start"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover object-[80%]" // Shift video to right
//           src="./video.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         ></video>
//         {/* <img
//           src="./back1.avif"
//           alt="Background"
//           className="w-full h-full object-cover"
//         /> */}
//         {/* <div className="absolute inset-0 bg-black/80"></div>{" "} */}
//         {/* Optional overlay */}
//       </div>

//       {/* Content */}
//       <div className="z-10 w-full px-6 md:px-12 flex flex-col items-start text-start text-white max-w-4xl">
//         {/* Company Name */}
//         <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
//           Instrek
//         </h1>
//         <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
//           Technologies
//         </h1>

//         {/* Tagline */}
//         <h2 className="text-3xl md:text-5xl font-semibold text-[#EA6220] mt-4">
//           Empowering Futures, Engineered Today
//         </h2>

//         {/* Description */}
//         <p className="mt-6 text-white/100 text-2xl md:text-lg leading-relaxed">
//           Instrek Technologies – Empowering futures with next-gen,
//           purpose-driven tech innovations. We design, build, and deliver
//           solutions that integrate technology with societal impact — across
//           education, smart cities, digital identity, and automation.
//         </p>

//         {/* Call to Action */}
//         <div className="mt-8 flex flex-wrap gap-4">
//           <Button className="bg-white text-black px-6 py-3 text-base font-semibold">
//             Get Started
//           </Button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

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
      <div className="z-20 w-full px-6 md:px-12 flex flex-col items-start text-start text-white max-w-4xl">
        <h1 className="text-5xl md:text-6xl mt-2 font-extrabold tracking-tight">
          {slides[currentIndex].title1}
        </h1>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4 tracking-tight">
          {slides[currentIndex].title2}
        </h1>
        <p className="mt-6 text-[#ea4820] text-4xl md:text-lg leading-relaxed">
          {slides[currentIndex].description}
        </p>

        {/* Dot Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white/40"
              } transition-all duration-300`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// first website
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, Play } from "lucide-react";

// const HeroSection = () => {
//   const heroRef = useRef(null);
//   const [textVisible, setTextVisible] = useState(false);
//   const text = "Empowering Futures, Engineered Today";

//   // Trigger text animation on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTextVisible(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Animate hero elements on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const textElements =
//               entry.target.querySelectorAll(".hero-text-reveal");
//             textElements.forEach((el, index) => {
//               el.style.setProperty("--delay", `${index * 0.3}s`);
//               el.classList.add("animate-fade-in");
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       <section
//         ref={heroRef}
//         className="bg-[#2A2342] min-h-screen flex items-center justify-start relative overflow-hidden px-6"
//         style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//       >
//         {/* Grid Overlay */}

//         {/* Hero Content */}
//         <div className="container mx-auto text-left relative z-10">
//           <div className="max-w-4xl space-y-8">
//             {/* Sliding Text Headline */}
//             <div className="relative overflow-hidden">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-cyan-400 relative">
//                 {/* Background Slider */}
//                 <div
//                   className={`absolute inset-0 transform transition-transform duration-2000 ease-out ${
//                     textVisible ? "translate-x-0" : "translate-x-full"
//                   }`}
//                 ></div>

//                 {/* Text with right-to-left animation */}
//                 <span
//                   className={`relative z-10 inline-block transform transition-all duration-1500 ease-out ${
//                     textVisible
//                       ? "translate-x-0 opacity-100"
//                       : "translate-x-full opacity-0"
//                   }`}
//                   style={{ transitionDelay: "0.7s" }}
//                 >
//                   {text}
//                 </span>
//               </h1>
//             </div>

//             {/* Subheading with staggered animation */}
//             <p className="hero-text-reveal text-white mt-4 text-2xl leading-relaxed opacity-0 transform translate-x transition-all duration-1000 ease-out delay-1000">
//               Empowering futures with next gen, purpose driven tech innovations.
//               We design, build, and deliver solutions that integrate technology
//               with societal impact across education, smart cities, digital
//               identity, and automation.
//             </p>
//           </div>
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${5 + Math.random() * 10}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Enhanced Animations */}
//         <style jsx>{`
//           @keyframes float {
//             0% {
//               transform: translateY(100vh) rotate(0deg);
//               opacity: 0;
//             }
//             10%,
//             90% {
//               opacity: 1;
//             }
//             100% {
//               transform: translateY(-100vh) rotate(360deg);
//               opacity: 0;
//             }
//           }

//           .animate-float {
//             animation: float linear infinite;
//           }

//           .hero-text-reveal {
//             animation: slideInFromRight 1s ease-out forwards;
//           }

//           @keyframes slideInFromRight {
//             from {
//               opacity: 0;
//               transform: translateX(50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           /* Smooth text reveal effect */
//           .hero-text-reveal.animate-fade-in {
//             opacity: 1 !important;
//             transform: translateX(0) !important;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

//second
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, Play } from "lucide-react";

// const HeroSection = () => {
//   const heroRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const text = "Empowering Futures, Engineered Today";

//   // Trigger animations on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <section
//         ref={heroRef}
//         className="bg-[#2A2342] min-h-screen flex items-center justify-start relative overflow-hidden"
//         style={{
//           fontFamily: "'PP Neue Montreal', sans-serif",
//           backgroundImage: "url('./herobg.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "100% 100%",
//           backgroundPosition: "bottom",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40 z-0"></div>
//         {/* Animated Grid Overlay */}
//         {/* Animated Grid Overlay */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//         linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
//         linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
//       `,
//               backgroundSize: "50px 50px",
//             }}
//           />
//         </div>

//         {/* Glowing Orbs */}
//         <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

//         {/* Hero Content */}
//         <div className="container mx-auto px-6 lg:px-12 text-left relative z-20">
//           <div className="max-w-5xl space-y-10">
//             {/* Main Headline with Sliding Effect */}
//             <div className="relative overflow-hidden rounded-xl p-2">
//               {/* Background Slider with Gradient */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-purple-500/20 transform transition-all duration-2000 ease-out shadow-2xl ${
//                   isLoaded
//                     ? "translate-x-0 scale-100"
//                     : "translate-x-full scale-95"
//                 }`}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 51, 234, 0.15) 100%)",
//                   backdropFilter: "blur(10px)",
//                   borderRadius: "12px",
//                 }}
//               />

//               {/* Main Text */}
//               <h1
//                 className={`relative z-10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent transform transition-all duration-1800 ease-out ${
//                   isLoaded
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-full opacity-0"
//                 }`}
//                 style={{
//                   transitionDelay: "0.5s",
//                   textShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
//                 }}
//               >
//                 {text}
//               </h1>
//             </div>

//             {/* Subtitle with enhanced animation */}
//             <div className="relative">
//               <p
//                 className={`text-cyan-600 font-bold text-2xl md:text-2xl lg:text-3xl leading-relaxed  max-w-4xl transform transition-all duration-1200 ease-out ${
//                   isLoaded
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-12 opacity-0"
//                 }`}
//                 style={{
//                   transitionDelay: "1.2s",
//                   textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Empowering futures with{" "}
//                 <span className="text-cyan-300 font-semibold">next-gen</span>,
//                 purpose-driven tech innovations. We design, build, and deliver
//                 solutions that integrate
//                 <span className="text-blue-300 font-semibold">
//                   {" "}
//                   technology
//                 </span>{" "}
//                 with
//                 <span className="text-purple-300 font-semibold">
//                   {" "}
//                   societal impact
//                 </span>{" "}
//                 across education, smart cities, digital identity, and
//                 automation.
//               </p>
//             </div>

//             {/* Enhanced CTA Buttons */}
//           </div>
//         </div>

//         {/* Enhanced Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
//           {[...Array(25)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full animate-float opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 width: `${2 + Math.random() * 4}px`,
//                 height: `${2 + Math.random() * 4}px`,
//                 backgroundColor:
//                   i % 3 === 0
//                     ? "rgba(34, 211, 238, 0.4)"
//                     : i % 3 === 1
//                     ? "rgba(59, 130, 246, 0.4)"
//                     : "rgba(147, 51, 234, 0.4)",
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${8 + Math.random() * 12}s`,
//                 boxShadow: "0 0 10px currentColor",
//               }}
//             />
//           ))}
//         </div>

//         {/* Custom Styles */}
//         <style>{`
//           @keyframes float {
//             0% {
//               transform: translateY(100vh) rotate(0deg) scale(0);
//               opacity: 0;
//             }
//             10% {
//               opacity: 1;
//               transform: translateY(90vh) rotate(36deg) scale(1);
//             }
//             90% {
//               opacity: 1;
//               transform: translateY(-10vh) rotate(324deg) scale(1);
//             }
//             100% {
//               transform: translateY(-20vh) rotate(360deg) scale(0);
//               opacity: 0;
//             }
//           }

//           .animate-float {
//             animation: float linear infinite;
//           }

//           /* Custom scrollbar for webkit browsers */
//           ::-webkit-scrollbar {
//             width: 8px;
//           }

//           ::-webkit-scrollbar-track {
//             background: #2A2342;
//           }

//           ::-webkit-scrollbar-thumb {
//             background: linear-gradient(to bottom, #22d3ee, #3b82f6);
//             border-radius: 10px;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

//third
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, Play } from "lucide-react";

// const HeroSection = () => {
//   const heroRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const text = "Empowering Futures, Engineered Today";

//   // Trigger animations on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <section
//         ref={heroRef}
//         className="bg-[#121212] min-h-screen flex items-center justify-start relative overflow-hidden"
//         style={{
//           fontFamily: "'PP Neue Montreal', sans-serif",
//           backgroundImage: "url('./robo.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "100% 100%",
//           backgroundPosition: "bottom",
//         }}
//       >
//         {/* Animated Grid Overlay */}
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div
//             className="absolute inset-0 animate-pulse"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: "50px 50px",
//             }}
//           />
//         </div>

//         {/* Glowing Orbs */}
//         <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

//         {/* Hero Content */}
//         <div className="container mx-auto px-6 lg:px-12 text-left relative z-20">
//           <div className="max-w-5xl space-y-10">
//             {/* Main Headline with Sliding Effect */}
//             <div className="relative overflow-hidden rounded-xl p-2">
//               {/* Background Slider with Gradient */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-purple-500/20 transform transition-all duration-2000 ease-out shadow-2xl ${
//                   isLoaded
//                     ? "translate-x-0 scale-100"
//                     : "translate-x-full scale-95"
//                 }`}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 51, 234, 0.15) 100%)",
//                   backdropFilter: "blur(10px)",
//                   borderRadius: "12px",
//                 }}
//               />

//               {/* Main Text */}
//               <h1
//                 className={`relative z-10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent transform transition-all duration-1800 ease-out ${
//                   isLoaded
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-full opacity-0"
//                 }`}
//                 style={{
//                   transitionDelay: "0.5s",
//                   textShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
//                 }}
//               >
//                 {text}
//               </h1>
//             </div>

//             {/* Subtitle with enhanced animation */}
//             <div className="relative">
//               <p
//                 className={`text-cyan-600 font-bold text-2xl md:text-2xl lg:text-3xl leading-relaxed  max-w-4xl transform transition-all duration-1200 ease-out ${
//                   isLoaded
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-12 opacity-0"
//                 }`}
//                 style={{
//                   transitionDelay: "1.2s",
//                   textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Empowering futures with{" "}
//                 <span className="text-cyan-300 font-semibold">next-gen</span>,
//                 purpose-driven tech innovations. We design, build, and deliver
//                 solutions that integrate
//                 <span className="text-blue-300 font-semibold">
//                   {" "}
//                   technology
//                 </span>{" "}
//                 with
//                 <span className="text-purple-300 font-semibold">
//                   {" "}
//                   societal impact
//                 </span>{" "}
//                 across education, smart cities, digital identity, and
//                 automation.
//               </p>
//             </div>

//             {/* Enhanced CTA Buttons */}
//           </div>
//         </div>

//         {/* Enhanced Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
//           {[...Array(25)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full animate-float opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 width: `${2 + Math.random() * 4}px`,
//                 height: `${2 + Math.random() * 4}px`,
//                 backgroundColor:
//                   i % 3 === 0
//                     ? "rgba(34, 211, 238, 0.4)"
//                     : i % 3 === 1
//                     ? "rgba(59, 130, 246, 0.4)"
//                     : "rgba(147, 51, 234, 0.4)",
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${8 + Math.random() * 12}s`,
//                 boxShadow: "0 0 10px currentColor",
//               }}
//             />
//           ))}
//         </div>

//         {/* Custom Styles */}
//         <style>{`
//           @keyframes float {
//             0% {
//               transform: translateY(100vh) rotate(0deg) scale(0);
//               opacity: 0;
//             }
//             10% {
//               opacity: 1;
//               transform: translateY(90vh) rotate(36deg) scale(1);
//             }
//             90% {
//               opacity: 1;
//               transform: translateY(-10vh) rotate(324deg) scale(1);
//             }
//             100% {
//               transform: translateY(-20vh) rotate(360deg) scale(0);
//               opacity: 0;
//             }
//           }

//           .animate-float {
//             animation: float linear infinite;
//           }

//           /* Custom scrollbar for webkit browsers */
//           ::-webkit-scrollbar {
//             width: 8px;
//           }

//           ::-webkit-scrollbar-track {
//             background: #2A2342;
//           }

//           ::-webkit-scrollbar-thumb {
//             background: linear-gradient(to bottom, #22d3ee, #3b82f6);
//             border-radius: 10px;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
