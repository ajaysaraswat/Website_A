import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//const Header = lazy(() => import("./components/Header"));
import HeroSection from "./components/HeroSection";
// const HeroSection = lazy(() => import("./components/HeroSection"));
// const AboutSection = lazy(() => import("./components/AboutSection"));
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/Services";
import TeamSection from "./components/TeamSection";
// const TeamSection = lazy(() => import("./components/TeamSection"));
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
//const TestimonialsSection = lazy(() =>
// import("./components/TestimonialsSection")
//);
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Why from "./components/Why";
import WhyCard from "./components/WhyCard";
//const WhyCard = lazy(() => import("./components/WhyCard"));
import FlotingIndex from "./components/FlotingIndex";
import Technology from "./components/Technology";
import Nature from "./components/Nature";
import Architecture from "./components/Architecture";
import NotFound from "./components/NotFound";

import Services from "./components/Services";
import WholeTeam from "./components/WholeTeam";
import InlineScrollImages from "./components/InlineScroll";

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
                </section>
                <section id="team">
                  <TeamSection />
                </section>
                <section id="why">
                  <WhyCard />
                </section>
                <TestimonialsSection />

                {/* <section id="blog">
                  <BlogSection />
                </section> */}

                <section id="contact">
                  <Footer />
                  <InlineScrollImages />
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
