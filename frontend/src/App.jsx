import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "./components/Header";
const Header = lazy(() => import("./components/Header"));
//import HeroSection from "./components/HeroSection";
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
//import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
// const TeamSection = lazy(() => import("./components/TeamSection"));
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
//import TestimonialsSection from "./components/TestimonialsSection";
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection")
);
import ContactSection from "./components/ContactSection";
//import Footer from "./components/Footer";
const Footer = lazy(() => import("./components/Footer"));
import ScrollToTopButton from "./components/ScrollToTopButton";
import Why from "./components/Why";
import WhyCard from "./components/WhyCard";
//const WhyCard = lazy(() => import("./components/WhyCard"));
import FlotingIndex from "./components/FlotingIndex";
import Technology from "./components/Technology";
import Nature from "./components/Nature";
import Architecture from "./components/Architecture";
import NotFound from "./components/NotFound";
import ServiceDes from "./components/ServiceDes";

import Services from "./components/Services";
import WholeTeam from "./components/WholeTeam";
import InlineScrollImages from "./components/InlineScroll";
import { LogoCarousel } from "./components/LogoCoraousel";
import BlogIndex from "./components/BlogIndex";
import BlogPost from "./components/BlogPost";
import StatsGrid from "./components/StatsGrid.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-[Neue_Montreal] overflow-x-hidden">
        <Routes>
          <Route path="/team" element={<WholeTeam />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services-page" element={<ServiceDes />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <section id="home">
                  <HeroSection />
                  {/* <TiltedImage /> */}
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
                  {/* <InlineScrollImages /> */}
                </section>
                {/* <section id="inline">
                  <InlineScrollImages />
                </section> */}
                <section id="inline">
                  <LogoCarousel />
                </section>

                {/* <section id="team" className="scroll-mt-20">
                  <TeamSection />
                </section> */}
                <section id="why">
                  <StatsGrid />
                </section>
                <TestimonialsSection />

                {/* <section id="blog">
                  <BlogSection />
                </section> */}

                <section id="contact">
                  <Footer />
                  <ScrollToTopButton />
                </section>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
