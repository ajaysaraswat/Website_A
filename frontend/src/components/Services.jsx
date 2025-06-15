import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "./Card";
import InlineScrollImages from "./InlineScroll";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const optionDescriptions = {
    AI: "We empower industries with next-generation agentic AI systems that not only learn and adapt but also autonomously execute intelligent decisions. Our solutions transform workflows, enhance efficiency, and drive innovation at scale.",
    IOT: "IoT connects devices for smarter interactions.",
    "CYBER SECURITY": "Cybersecurity protects your data and systems.",
    "AR/VR": "Augmented and Virtual Reality for immersive experiences.",
    BLOCKCHAIN: "Blockchain offers secure, decentralized transactions.",
    "STEM TRAINING FOR GRADES 1–12":
      "STEM education builds future-ready skills.",
    "Long-Term Training": "Enhance capabilities with structured training.",
    "CLOUD & DEVOPS": "Efficient deployment through cloud and DevOps.",
    "INTERNET OF THINGS (IoT) & AIoT":
      "Smart solutions using connected sensors.",
    "ADVANCED NETWORKS": "Build fast and scalable network systems.",
    "AIR PURIFICATION TECHNOLOGIES": "Clean air solutions powered by AI.",
    "DRONES & AI SURVILLENCE": "Autonomous monitoring for security.",
    "SOLAR ENERGY & RENEWAL POWER": "Green energy for sustainable cities.",
  };

  const services = [
    {
      id: 1,
      number: "01",
      total: "03",
      title: "Future-Forward Technology Solutions",
      image: "./images/blockchainlern.jpg",
      options: ["AI", "IOT", "CYBER SECURITY", "AR/VR", "BLOCKCHAIN"],
    },
    {
      id: 2,
      number: "02",
      total: "03",
      title: "Training & Development",
      image: "./images/digitaltrans.jpg",
      options: ["STEM TRAINING FOR GRADES 1–12", "Long-Term Training"],
    },
    {
      id: 3,
      number: "03",
      total: "03",
      title: "Smart Cities ",
      image: "./images/smartcity2.jpg",
      options: [
        "CLOUD & DEVOPS",
        "INTERNET OF THINGS (IoT) & AIoT",
        "ADVANCED NETWORKS",
        "AIR PURIFICATION TECHNOLOGIES",
        "DRONES & AI SURVILLENCE",
        "SOLAR ENERGY & RENEWAL POWER",
      ],
    },
  ];

  return (
    <div
      className=" bg-gradient-to-b from-[#121212] to-[#2A2342]  overflow-visible"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-1 bg-black text-white p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Future Mind</h1>
              <h2 className="text-3xl font-bold text-[#EA6220] mb-8">
                Services
              </h2>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                As a one-stop Advisory & Delivery company, we help Clients
                achieve ambitious goals in the digital economy
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-gray-100 cursor-pointer border-border transition-all duration-300 overflow-visible relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setActiveTooltip(null);
                }}
              >
                <CardContent className="p-4 h-full">
                  {hoveredCard === service.id ? (
                    <div className="space-y-1 relative">
                      {service.options.map((name, index) => {
                        const trimmedName = name.trim();
                        const isActive = activeTooltip === trimmedName;
                        return (
                          <div key={index} className="relative">
                            <button
                              onClick={() =>
                                setActiveTooltip(isActive ? null : trimmedName)
                              }
                              className="flex items-center justify-between w-full text-left  px-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                            >
                              <span className="font-medium cursor-pointer hover:text-[#EA6220]">
                                {trimmedName}
                              </span>
                              <ChevronRight className="h-4 w-4 text-primary" />
                            </button>

                            {/* Tooltip box with animation */}
                            <div
                              className={`transition-all duration-300 ease-in-out transform ${
                                isActive
                                  ? "opacity-100 max-h-40 translate-y-0"
                                  : "opacity-0 max-h-0 -translate-y-2"
                              } overflow-hidden bg-white text-black text-sm rounded-lg shadow-lg z-20 border border-gray-300 mt-1 p-3 custom-scroll`}
                            >
                              {optionDescriptions[trimmedName]}
                            </div>

                            {index < service.options.length - 1 && (
                              <div className="border-t border-border/50 mx-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col h-full justify-between">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-52 object-cover rounded mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs text-muted-foreground block">
                            {service.number} / {service.total}
                          </span>
                          <h3 className="text-lg font-bold text-foreground">
                            {service.title}
                          </h3>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
