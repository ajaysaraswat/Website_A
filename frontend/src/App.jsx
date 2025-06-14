import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
//import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Why from "./components/Why";
import FlotingIndex from "./components/FlotingIndex";
import Technology from "./components/Technology";
import Nature from "./components/Nature";
import Architecture from "./components/Architecture";
import NotFound from "./components/NotFound";
import TeamCard from "./components/TeamCard";
import ServiceDetail from "./components/ServiceDetail";
import Services from "./components/Services";
import WholeTeam from "./components/WholeTeam";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-[Neue_Montreal]">
        <Header />

        <Routes>
          <Route path="/index" element={<FlotingIndex />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/team" element={<WholeTeam />} />
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <HeroSection />
                </section>
                <section id="about">
                  <AboutSection />
                </section>
                {/* <section id="services">
                  <ServicesSection />
                </section>
                 */}
                <section id="services">
                  <Services />
                </section>
                <section id="team">
                  <TeamSection />
                </section>
                <section id="why">
                  <Why />
                </section>
                <TestimonialsSection />
                {/* <section id="blog">
                  <BlogSection />
                </section> */}
                <section id="contact">
                  <Footer />
                </section>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
