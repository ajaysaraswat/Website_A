import Header from "./Header";
import Footer from "./Footer";
import CapabilityCard from "./CapabilityCard";

const ServiceDes = () => {
  const capabilities = [
    {
      title: "Agricultural spraying drones",
      image: "./images/blockchainlern.jpg",
      description:
        "Advanced precision agriculture solutions for optimal crop management",
    },
    {
      title: "Surveillance & crowd control drones",
      image: "./images/blockchainlern.jpg",
      description:
        "Comprehensive monitoring and security systems for public safety",
    },
    {
      title: "Emergency response systems",
      image: "./images/blockchainlern.jpg",
      description:
        "Rapid deployment solutions for critical emergency situations",
    },
    {
      title: "Training for drone pilots and technicians",
      image: "./images/blockchainlern.jpg",
      description:
        "Professional certification programs and technical skill development",
    },
  ];

  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-4 sm:pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Instrek's drone solutions span agriculture, surveillance,
              inspections, and emergency response. We offer complete lifecycle
              support including pilot training, drone repair, and data
              intelligence.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Capabilities:
            </h2>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="pb-4 sm:pb-6 md:pb-8 lg:pb-12">
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
      <section className="pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 transform">
            View more services
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDes;
