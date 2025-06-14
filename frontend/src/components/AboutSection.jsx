import React from "react";

const AboutSection = () => {
  return (
    <section
      className="min-h-screen py-20 bg-[#121212] relative overflow-hidden"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Elements */}
      {/* <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch h-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in flex flex-col justify-center">
            <div>
              <h2 className="text-5xl font-black mb-4">
                <span className="text-[#EA6220]">ABOUT US</span>
              </h2>
              <h3 className="text-5xl font-light text-white mb-8">
                Empowering Futures,
                <br />
                Engineered Today
              </h3>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-[#EA6220] font-medium text-2xl">
                To create a future where technology is accessible, inclusive,
                and truly transformative — empowering individuals, communities,
                and institutions to thrive in a digitally connected world.
              </p>

              <p className="leading-relaxed text-xl text-white">
                Instrek is a purpose-led technology company committed to solving
                real-world problems through smart innovation. From AI-driven
                career guidance systems to scalable smart city platforms, we
                create solutions that matter. Our approach blends deep tech with
                human insight — building tools that empower people, enable
                transformation, and drive lasting impact.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in delay-300 h-full flex items-stretch">
            <div className="relative w-full h-full">
              <img
                src="./images/ab.png"
                alt="Creative workspace"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Floating devices effect */}
              {/* <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-12 bg-[#EA6220] rounded"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-8 bg-black rounded"></div>
              </div> */}

              {/* Paint splash */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-500 opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// import React from "react";

// const AboutSection = () => {
//   return (
//     <section
//       className="min-h-screen py-24 bg-[#0e0e0e] relative overflow-hidden"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Background Blobs */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-12 bg-black">
//         {/* Card 1 */}
//         <div className="bg-gradient-to-b from-[#2A2342] to-black rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">✨</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             AI Research Assistant
//           </h3>
//           <p className="text-gray-400 text-sm">
//             24/7 AI moderation for consistent studies
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-gradient-to-b from-[#18181B] to-[#1E1E24] rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">🧠</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             Auto-Synthesis
//           </h3>
//           <p className="text-gray-400 text-sm">Automated research findings</p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-gradient-to-b from-[#18181B] to-[#1E1E24] rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">📊</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             Deep Analysis Tools
//           </h3>
//           <p className="text-gray-400 text-sm">
//             Multi-level insight generation
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
