import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";
import InlineScrollImages from "./InlineScroll";

const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      total: "03",
      title: "Future-Forward Technology Solutions",
      options: [
        { name: "AI ", path: "/data-strategy" },
        { name: "IOT", path: "/machine-learning" },
        { name: "CYBER SECURITY", path: "/artificial-intelligence" },
        { name: "AR/VR", path: "/data-analytics" },
        { name: "BLOCKCHAIN", path: "/business-intelligence" },
      ],
    },
    {
      id: 2,
      number: "02",
      total: "03",
      title: "Training & Development",
      options: [
        { name: "STEM TRAINING FOR GRADES 1–12", path: "/product-strategy" },

        {
          name: "Long-Term Training",
          path: "/product-development",
        },
        // { name: "AGILE DELIVERY", path: "/agile-delivery" },
        // { name: "TECHNICAL ARCHITECTURE", path: "/technical-architecture" },
        // { name: "QUALITY ASSURANCE", path: "/quality-assurance" },
        // { name: "DEVOPS & DEPLOYMENT", path: "/devops" },
      ],
    },
    {
      id: 3,
      number: "03",
      total: "03",
      title: "Data & AI",
      options: [
        { name: "CLOUD & DEVOPS", path: "/data-strategy" },
        { name: " INTERNET OF THINGS (IoT) & AIoT", path: "/machine-learning" },
        { name: " ADVANCED NETWORKS", path: "/artificial-intelligence" },
        { name: "AIR PURIFICATION TECHNOLOGIES", path: "/data-analytics" },
        { name: "DRONES & AI SURVILLENCE", path: "/business-intelligence" },
        { name: "SOLAR ENERGY & RENEWAL POWER", path: "/predictive-modeling" },
        //{ name: "SOLAR ENERGY & RENEWAL POWER", path: "/predictive-modeling" },
      ],
    },
  ];

  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2A2342] font-['Fira_Code']"
      // style={{ fontFamily: "Fira_code" }}
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
            <button
              className="border border-gray-600 px-6 py-2 rounded text-white hover:bg-gray-800"
              onClick={() => navigate("/")}
            >
              Continue
            </button>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6  ">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`bg-gray-100 cursor-pointer border-border  transition-all duration-300 overflow-hidden "
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-4">
                  {hoveredCard === service.id ? (
                    <div className="space-y-1 ">
                      {service.options.map((option, index) => (
                        <div key={index}>
                          <button
                            onClick={() => handleOptionClick(option.path)}
                            className="flex items-center justify-between w-full text-left py-2 px-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                          >
                            <span className="font-medium cursor-pointer hover:text-[#EA6220]">
                              {option.name}
                            </span>
                            <ArrowRight className="h-4 w-4 text-primary" />
                          </button>
                          {index < service.options.length - 1 && (
                            <div className="border-t border-border/50 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-between items-center h-full">
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
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <InlineScrollImages />
    </div>
  );
};

export default Services;
