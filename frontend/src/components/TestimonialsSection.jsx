// import React, { useState, useEffect } from "react";

// const TestimonialsSection = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       quote:
//         "Thank goodness I was never sent to school; it would have rubbed off some of the originality.; it would have rubbed off some of the originality.",
//       author: "BEATRIX POTTER, AUTHOR",
//     },
//     {
//       quote:
//         "The best time to plant a tree was 20 years ago. The second best time is now. This perfectly captures our approach to digital transformation.",
//       author: "STEVE JOBS, APPLE",
//     },
//     {
//       quote:
//         "Innovation distinguishes between a leader and a follower. We strive to be leaders in everything we create.",
//       author: "ELON MUSK, TESLA",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20  bg-gradient-to-b from-[#121212] to-[#2A2342]  relative overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={
//           {
//             // backgroundImage:
//             //   'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
//           }
//         }
//       ></div>

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-white mb-16">TESTIMONIALS</h2>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative h-48 flex items-center justify-center">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-1000 ${
//                   index === currentTestimonial
//                     ? "opacity-100 transform translate-y-0"
//                     : "opacity-0 transform translate-y-8"
//                 }`}
//               >
//                 <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <cite className="text-white/80 font-medium">
//                   - {testimonial.author}
//                 </cite>
//               </div>
//             ))}
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center space-x-3 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentTestimonial(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentTestimonial
//                     ? "bg-white scale-125"
//                     : "bg-white/40 hover:bg-white/60"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React from "react";
import { Card } from "./Card";
import InlineScrollImages from "./InlineScroll";

const testimonials = [
  {
    id: 1,
    name: "Avinash Kr",
    position: "Co-Founder at xyz",
    quote:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and Photoshop.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Bharat Kunal",
    position: "Manager at xyz",
    quote:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and Photoshop.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Prabhakar D",
    position: "Founder / CEO at xyz",
    quote:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and Photoshop.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <div className=" bg-gradient-to-b from-[#121212] to-[#2A2342]">
      <div
        className="py-16 px-4 "
        style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#EA6220] font-bold text-foreground mb-4 relative inline-block">
              TESTIMONIALS
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 "></div>
            </h2>
            <p className="text-muted-foreground text-white text-lg mt-6">
              Subscribe Easy Tutorials YouTube channel to watch more videos.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative bg-white">
                {/* Profile Image */}
                <div className="absolute -top-10  left-1/2 transform -translate-x-1/2 z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#EA6220] shadow-lg"
                  />
                </div>

                {/* Card */}
                <Card className="pt-16 pb-8 px-8  text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border">
                  <div className="mb-8 ">
                    <div className="relative">
                      <span className="text-[#EA6220] text-4xl font-bold absolute -top-2 -left-4">
                        "
                      </span>
                      <p className="text-muted-foreground text-xl leading-relaxed px-6">
                        {testimonial.quote}
                      </p>
                      <span className="text-[#EA6220] text-4xl font-bold absolute -bottom-6 -right-4">
                        "
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-orange-600 font-semibold text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <InlineScrollImages />
      </div>
    </div>
  );
};

export default TestimonialsSection;
