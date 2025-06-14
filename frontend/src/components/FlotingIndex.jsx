import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlotingIndex = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Technology",
      description:
        "Explore the latest innovations in technology, from AI to quantum computing. Discover cutting-edge solutions that shape our digital future.",
      image: "./ajayb.jpg",
      route: "/technology",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Nature",
      description:
        "Immerse yourself in the beauty of natural landscapes. From serene forests to majestic mountains, experience the wonders of our planet.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      route: "/nature",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Architecture",
      description:
        "Marvel at stunning architectural designs that blend form and function. Discover innovative structures that redefine our urban spaces.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      route: "/architecture",
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#121212] overflow-hidden relative">
      {/* Animated background particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#EA6220] via-white to-[#EA6220] bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in delay-300">
            Hover to explore • Click to discover
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative cursor-pointer transition-all duration-500 ease-out
                  ${
                    hoveredCard === card.id
                      ? "transform scale-140 z-50"
                      : hoveredCard !== null
                      ? "transform scale-75 opacity-50"
                      : "transform scale-100"
                  }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(card.route)}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                {/* Card */}
                <div
                  className={`relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl
                    bg-gradient-to-br ${card.gradient}
                    transition-all duration-500 ease-out
                    ${
                      hoveredCard === card.id ? "shadow-4xl" : "shadow-2xl"
                    } hover:shadow-purple-500/25`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredCard === card.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 transition-all duration-300">
                      {card.title}
                    </h3>

                    {/* Description - only show on hover */}
                    <div
                      className={`transition-all duration-500 ease-out overflow-hidden ${
                        hoveredCard === card.id
                          ? "max-h-32 opacity-100 transform translate-y-0"
                          : "max-h-0 opacity-0 transform translate-y-4"
                      }`}
                    >
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="mt-3 inline-flex items-center text-xs font-semibold text-yellow-300">
                        Click to explore →
                      </div>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                      hoveredCard === card.id
                        ? "border-white/50 shadow-lg shadow-white/25"
                        : "border-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom instruction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"></div>
      </div>

      {/* CSS for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
        `}
      </style>
    </div>
  );
};

export default FlotingIndex;
