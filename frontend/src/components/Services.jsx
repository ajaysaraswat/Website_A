import DroneCard from "./ServiceDetail";

const droneCardData = [
  {
    titleLine1: "Drones &",
    titleLine2: "UAVs",
    description:
      "From agriculture to crowd control – our drones take smart automation to the skies",
    image: "./drone.png",
  },
  {
    titleLine1: "AI-Powered",
    titleLine2: "Surveillance",
    description:
      "Intelligent surveillance systems for public safety and infrastructure.",
    image: "./surveillance.jpg",
  },
  {
    titleLine1: "Smart",
    titleLine2: "Delivery Drones",
    description:
      "Fast and reliable last-mile logistics using autonomous aerial drones.",
    image: "./delivery.jpg",
  },
  {
    titleLine1: "Agricultural",
    titleLine2: "Drones",
    description:
      "Optimize crop yield with precision farming technologies in the sky.",
    image: "./agriculture.jpg",
  },
  {
    titleLine1: "Aerial",
    titleLine2: "Mapping",
    description:
      "High-resolution mapping solutions for engineering and urban planning.",
    image: "./mapping.jpg",
  },
];

export default function DroneServices() {
  const fullList = [...droneCardData, ...droneCardData]; // duplicate for seamless scroll

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2A2342] py-10 text-white font-['PP_Neue_Montreal'] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <div></div>
        <h1 className="text-4xl font-bold mb-4">Future Mind </h1>
        <h1 className="text-4xl font-bold mb-4">Services </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          As a one-stop Advisory & Delivery company, we help clients achieve
          ambitious goals in the digital economy.
        </p>
      </div>

      {/* Infinite Scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex w-max gap-8 px-4">
          {fullList.map((card, index) => (
            <div key={index} className="min-w-[300px] w-[300px]">
              <DroneCard
                titleLine1={card.titleLine1}
                titleLine2={card.titleLine2}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
