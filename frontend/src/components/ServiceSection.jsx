import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: "🎥",
      title: "VIDEO PRODUCTION",
      description:
        "Proin accumsan augue a risus laoreet, sed malesuada lacus faucibus.",
    },
    {
      icon: "🚀",
      title: "STRATEGIC BRANDING",
      description:
        "Pellentesque massa quam, pharetra sit amet odio vitae, ornare fermentum",
    },
    {
      icon: "🖼️",
      title: "WEBSITE DESIGN",
      description:
        "Aenean laoreet non odio vel auctor. Quisque malesuada feugiat metus",
    },
    {
      icon: "🎮",
      title: "GAME DESIGN",
      description:
        "Proin accumsan augue a risus laoreet, sed malesuada lacus faucibus.",
    },
  ];

  const stats = [
    { icon: "🧩", title: "Creative Work", value: "150+" },
    { icon: "👥", title: "Satisfied Clients", value: "89%" },
    { icon: "📅", title: "Working Days", value: "365" },
    { icon: "☕", title: "Cups Of Coffee", value: "2,847" },
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-white group hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-xl text-gray-300">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
