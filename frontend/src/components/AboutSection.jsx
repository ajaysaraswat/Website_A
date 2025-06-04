import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-5xl font-black mb-4">
                <span className="text-gray-800">ABOUT US</span>
                <span className="text-cyan-400"> /</span>
              </h2>
              <h3 className="text-3xl font-light text-gray-400 mb-8">
                A CREATIVE
                <br />
                DESIGN STUDIO
              </h3>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <span className="text-cyan-400 font-medium">/</span> Suspendisse
                interdum tortor augue, in tempus urna ultricies
              </p>

              <p className="leading-relaxed">
                Vivamus fringilla eu nisl non laoreet. Nunc nec faucibus arcu,
                quis pretium odio. Nullam non turpis imperdiet, venenatis felis
                id, fermentum urna.
              </p>

              <p className="text-cyan-400 font-medium">
                <span className="text-cyan-400">/</span> Praesent varius justo
                ac rhoncus convallis. Aenean congue
              </p>

              <p className="leading-relaxed">
                Quisque ultrices elementum quam eget eleifend. Fusce ac est ut
                nisl scelerisque imperdiet. Donec vel tristique neque, vel
                viverra mi.
              </p>

              <p className="font-medium text-gray-800">
                Nulla hendrerit posuere nisl vitae sollicitudin.
              </p>

              <p className="leading-relaxed">
                Duis diam urna, venenatis eu felis in, pulvinar consequat sem.
                Proin accumsan
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Creative workspace"
                className="w-full h-96 object-cover rounded-lg"
              />
              {/* Floating devices effect */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-12 bg-gray-800 rounded"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-8 bg-cyan-400 rounded"></div>
              </div>
            </div>

            {/* Paint splash */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-500 opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
