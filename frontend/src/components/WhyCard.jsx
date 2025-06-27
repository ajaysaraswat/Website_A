// "use client";
// import { useEffect, useRef, useState, lazy } from "react";
// import ExperienceCard from "./Why";
// //const ExperienceCard = lazy(() => import("./Why"));

// const trustData = [
//   {
//     title: "Trusted",
//     value: "98%",
//     subtext: "years in public and enterprise digital transformation",
//   },
//   {
//     title: "Global Reach",
//     value: "12+",
//     subtext: "countries served with digital excellence",
//   },
//   {
//     title: "Innovators",
//     value: "30+",
//     subtext: "solutions deployed across industries",
//   },
//   {
//     title: "Clients",
//     value: "100+",
//     subtext: "happy public & private sector collaborations",
//   },
//   {
//     title: "Trusted",
//     value: "98%",
//     subtext: "years in public and enterprise digital transformation",
//   },
//   {
//     title: "Global Reach",
//     value: "12+",
//     subtext: "countries served with digital excellence",
//   },
//   {
//     title: "Innovators",
//     value: "30+",
//     subtext: "solutions deployed across industries",
//   },
//   {
//     title: "Clients",
//     value: "100+",
//     subtext: "happy public & private sector collaborations",
//   },
// ];

// export default function Why() {
//   const containerRef = useRef(null);
//   const scrollSectionRef = useRef(null);
//   const [scrollX, setScrollX] = useState(0);
//   const [scrollY, setScrollY] = useState(0);
//   const [maxScroll, setMaxScroll] = useState(0);
//   const [sectionTop, setSectionTop] = useState(0);
//   const [horizontalScrollHeight, setHorizontalScrollHeight] = useState(0);
//   const [verticalScrollHeight, setVerticalScrollHeight] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isInHorizontalPhase, setIsInHorizontalPhase] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const calculateDimensions = () => {
//       if (containerRef.current && scrollSectionRef.current) {
//         const section = scrollSectionRef.current;
//         const rect = section.getBoundingClientRect();
//         const topOffset = window.scrollY + rect.top;
//         setSectionTop(topOffset);

//         const cardWidth = isMobile ? 280 : 300;
//         const gap = isMobile ? 16 : 32;
//         const totalCards = trustData.length;
//         const totalWidth = (cardWidth + gap) * totalCards - gap;
//         const maxTranslation = Math.max(
//           0,
//           totalWidth - window.innerWidth + (isMobile ? 32 : 100)
//         );
//         setMaxScroll(maxTranslation);

//         // Calculate scroll heights for different phases
//         const horizontalPhaseHeight = window.innerHeight * 0.9; // 90% for horizontal scroll
//         const verticalPhaseHeight = window.innerHeight * 0.1; // 10% for vertical movement

//         setHorizontalScrollHeight(horizontalPhaseHeight);
//         setVerticalScrollHeight(verticalPhaseHeight);
//       }
//     };

//     calculateDimensions();
//     window.addEventListener("resize", calculateDimensions);
//     return () => window.removeEventListener("resize", calculateDimensions);
//   }, [isMobile]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const start = sectionTop;
//       const horizontalEnd = sectionTop + horizontalScrollHeight;
//       const totalEnd =
//         sectionTop + horizontalScrollHeight + verticalScrollHeight;

//       if (currentScrollY >= start && currentScrollY <= totalEnd) {
//         // Phase 1: Horizontal scroll (0% to 90% of section) - Page stays in position
//         if (currentScrollY <= horizontalEnd) {
//           setIsInHorizontalPhase(true);
//           const horizontalProgress =
//             (currentScrollY - start) / horizontalScrollHeight;
//           const easedHorizontal =
//             horizontalProgress *
//             horizontalProgress *
//             (3 - 2 * horizontalProgress);
//           const newScrollX = easedHorizontal * maxScroll;
//           setScrollX(newScrollX);
//           setScrollY(0);

//           // Prevent page from scrolling further during horizontal phase
//           if (currentScrollY > lastScrollY && currentScrollY < horizontalEnd) {
//             window.scrollTo(0, horizontalEnd);
//           }
//         }
//         // Phase 2: Vertical movement down (90% to 100% of section) - Only after horizontal is complete
//         else {
//           setIsInHorizontalPhase(false);
//           const verticalProgress =
//             (currentScrollY - horizontalEnd) / verticalScrollHeight;
//           const easedVertical =
//             verticalProgress * verticalProgress * (3 - 2 * verticalProgress);
//           const newScrollY = easedVertical * 200; // Move down by 200px
//           setScrollX(maxScroll); // Keep horizontal scroll at max
//           setScrollY(newScrollY);
//         }
//       } else if (currentScrollY < start) {
//         // Reset when above section
//         setIsInHorizontalPhase(false);
//         setScrollX(0);
//         setScrollY(0);
//       } else if (currentScrollY > totalEnd) {
//         // Keep at final position when below section
//         setIsInHorizontalPhase(false);
//         setScrollX(maxScroll);
//         setScrollY(200);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [
//     sectionTop,
//     horizontalScrollHeight,
//     verticalScrollHeight,
//     maxScroll,
//     lastScrollY,
//   ]);

//   return (
//     <div
//       ref={scrollSectionRef}
//       className="scroll-section relative overflow-hidden bg-black"
//       style={{
//         height: `${horizontalScrollHeight + verticalScrollHeight}px`,
//         fontFamily: "'PP Neue Montreal', sans-serif",
//       }}
//     >
//       <div
//         ref={containerRef}
//         className="sticky top-0 h-screen py-8 md:py-20 text-white overflow-hidden"
//         style={{
//           fontFamily: "'PP Neue Montreal', sans-serif",
//         }}
//       >
//         {/* Background Image + Gradient Overlay */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0)), url('./whyR.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />

//         {/* Text Content */}
//         <div className="relative z-10 px-4 md:px-6 text-center mb-8 md:mb-16">
//           <h2 className="text-3xl md:text-5xl font-semibold text-white">
//             WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
//           </h2>
//         </div>

//         {/* Scrolling Cards */}
//         <div className="relative z-10 w-full overflow-hidden px-4 md:px-8">
//           <div
//             className="flex gap-4 md:gap-8 transition-transform duration-300 ease-out"
//             style={{
//               transform: `translateX(-${scrollX}px) translateY(${scrollY}px)`,
//               width: "max-content",
//             }}
//           >
//             {trustData.map((card, index) => (
//               <div key={index} className="flex-shrink-0 w-[280px] md:w-[300px]">
//                 <ExperienceCard
//                   title={card.title}
//                   value={card.value}
//                   subtext={card.subtext}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Progress Bar */}
//         {/* <div className="relative z-10 flex justify-center mt-8 md:mt-12">
//           <div className="w-32 md:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
//             <div
//               className="bg-[#ea4820] rounded-full transition-all duration-600"
//               style={{
//                 width: `${(scrollX / maxScroll) * 100}%`,
//               }}
//             />
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./Why"; // your card component

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
  
];

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);
  const [scrollLength, setScrollLength] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const section = sectionRef.current;
      const scrollable = scrollableRef.current;

      if (!section || !scrollable) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = scrollable.scrollWidth - window.innerWidth;

      if (
        rect.top <= 0 &&
        Math.abs(rect.top) <= section.offsetHeight - window.innerHeight
      ) {
        const scrollProgress = Math.min(
          Math.abs(rect.top) / (section.offsetHeight - window.innerHeight),
          1
        );
        setScrollX(scrollProgress * totalScrollable);
      }
    };

    const updateSize = () => {
      if (!scrollableRef.current) return;
      setScrollLength(scrollableRef.current.scrollWidth);
    };

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const sectionHeight = scrollLength
    ? `${scrollLength - window.innerWidth + window.innerHeight}px`
    : "50vh";

  return (
    // <section
    //   ref={sectionRef}
    //   className="scroll-infographic-ui-23 relative w-full bg-black"
    //   style={{ height: sectionHeight }}
    // >
    //   <div
    //     className="scroll-infographic-ui-23__scrollable-section sticky top-0 h-screen flex items-center"
    //     style={{
    //       transform: `translate3d(-${scrollX}px, 0, 0)`,
    //       transition: "transform 0.05s",
    //       padding: "0 3.2rem",
    //     }}
    //     ref={scrollableRef}
    //   >
    //     {trustData.map((card, index) => (
    //       <div
    //         key={index}
    //         className="flex-shrink-0 w-[280px] md:w-[300px] mr-6"
    //       >
    //         <ExperienceCard
    //           title={card.title}
    //           value={card.value}
    //           subtext={card.subtext}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section
      ref={sectionRef}
      className="scroll-infographic-ui-23 relative w-full bg-black text-white"
      style={{
        height: sectionHeight,
        fontFamily: "'PP Neue Montreal', sans-serif",
      }}
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0)), url('./whyR.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />

      {/* Text Content */}
      <div className="relative z-10 px-4 md:px-6 text-center mb-8 md:mb-16 pt-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
        </h2>
      </div>

      {/* Scrolling Cards */}
      <div
        className="scroll-infographic-ui-23__scrollable-section sticky top-0 h-screen flex items-center z-10"
        style={{
          transform: `translate3d(-${scrollX}px, 0, 0)`,
          transition: "transform 0.05s",
          padding: "0 3.2rem",
        }}
        ref={scrollableRef}
      >
        {trustData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[380px] md:w-[400px] mr-6"
          >
            <ExperienceCard
              title={card.title}
              value={card.value}
              subtext={card.subtext}
            />
          </div>
        ))}
      </div>

      {/* Optional: Progress Bar (not functional, placeholder only) */}
      {/* 
  <div className="relative z-10 flex justify-center mt-8 md:mt-12">
    <div className="w-32 md:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
      <div
        className="bg-[#ea4820] rounded-full transition-all duration-600"
        style={{
          width: `${(scrollX / (scrollLength - window.innerWidth)) * 100}%`,
        }}
      />
    </div>
  </div>
  */}
    </section>
  );
}