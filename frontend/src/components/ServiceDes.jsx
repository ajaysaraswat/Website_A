import Footer from "./Footer";
import CapabilityCard from "./CapabilityCard";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceDes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceData = location.state?.service || {
    titleLine1: "Our",
    titleLine2: "Services",
    description: "Explore our comprehensive range of services.",
    image: "./services1R.jpg",
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
        image: "./images/digitaltrans.jpg",
        description:
          "End-to-end implementation and seamless integration with existing systems",
      },
      {
        title: "Consulting & Strategy",
        image: "./images/strategic.webp",
        description:
          "Expert consultation and strategic planning for optimal deployment",
      },
      {
        title: "Training & Support",
        image: "./images/workforceTrain.jpeg",
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
        <section className="pt-20 pb-4 sm:pb-6 md:pb-8 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${serviceData.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // Removed blur and opacity for clarity
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#ea4820]">{serviceData.titleLine1}</span>{" "}
                {serviceData.titleLine2}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8">
                {serviceData.description}
              </p>

              {/* ➕ Overview Section */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                Overview
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
                At Instrek, our services are designed with precision and purpose
                to empower businesses across industries. Whether you're
                initiating a digital transformation or optimizing existing
                workflows, our expert teams provide tailored solutions that
                deliver measurable value.
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Our Capabilities:
              </h2>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="pb-4 sm:pb-6 md:pb-8 lg:pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  title={capability.title}
                  image={capability.image}
                  description={capability.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-8 sm:pb-12 md:pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/")}
              className="bg-[#ea4820] hover:bg-[#d43d1b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 transform"
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
