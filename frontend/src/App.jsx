import React from "react";

// Importing components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Header />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default App;
