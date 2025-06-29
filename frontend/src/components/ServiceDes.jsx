import React, { useEffect } from "react";
import Footer from "./Footer";
import CapabilityCard from "./CapabilityCard";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceDes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serviceData = location.state?.service || {
    titleLine1: "Our",
    titleLine2: "Services",
    description: "Explore our comprehensive range of services.",
    image: "./optimized/services1R.webp",
  };

  const getCapabilities = () => {
    const defaultCapabilities = [
      {
        title: `${serviceData.titleLine1} ${serviceData.titleLine2} Solutions`,
        image: serviceData.image,
        description: serviceData.description,
      },
      {
        title: "Implementation & Integration",
        image: "./optimized/images/digitaltrans.webp",
        description:
          "End-to-end implementation and seamless integration with existing systems",
      },
      {
        title: "Consulting & Strategy",
        image: "./optimized/images/strategic.webp",
        description:
          "Expert consultation and strategic planning for optimal deployment",
      },
      {
        title: "Training & Support",
        image: "./optimized/images/workforceTrain.webp",
        description:
          "Comprehensive training programs and ongoing technical support",
      },
    ];
    return defaultCapabilities;
  };

  const capabilities = getCapabilities();

  return (
    <div className="relative bg-black text-white min-h-screen">
      <main
        className="relative"
        style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      >
        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 md:pb-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 h-[300px] sm:h-auto"
            style={{
              backgroundImage: `url('${serviceData.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-[#ea4820]">{serviceData.titleLine1}</span>{" "}
                {serviceData.titleLine2}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8">
                {serviceData.description}
              </p>

              {/* Overview Section */}
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
                Overview
              </h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-8 md:mb-10">
                At Instrek, our services are designed with precision and purpose
                to empower businesses across industries. Whether you're
                initiating a digital transformation or optimizing existing
                workflows, our expert teams provide tailored solutions that
                deliver measurable value.
              </p>

              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Our Capabilities:
              </h2>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="pb-4 sm:pb-6 md:pb-8 lg:pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 rounded-lg p-4 sm:p-6"
                >
                  <div className="w-full sm:w-1/2">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#ea4820]">
                      {capability.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-8 sm:pb-12 md:pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto bg-[#ea4820] hover:bg-[#d43d1b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all duration-300 hover:scale-105 transform"
            >
              Back to Home
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ServiceDes;
