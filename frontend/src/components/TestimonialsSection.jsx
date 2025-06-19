import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { Quote } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Awesome tool!",
      description:
        "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials",
      name: "Olivia Wilson",
      title: "Founder of Borcelle",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 2,
      quote: "Super cool!",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      name: "Matt Zhang",
      title: "CEO at Borcelle",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 3,
      quote: "Awesome tool!",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      name: "Hannah Morales",
      title: "CFO at Borcelle",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  ];

  return (
    <div
      className="text-white relative"
      style={{
        backgroundImage: `url('./testimonial.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "'PP Neue Montreal', sans-serif",
      }}
    >
      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 tracking-wider">
            TESTIMONIALS
          </h1>
          <p className="text-xl text-gray-300 font-medium">Lorem Epsum</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
