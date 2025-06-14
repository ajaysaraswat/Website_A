import { useNavigate } from "react-router-dom";

const Nature = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
        >
          ← Back to Cards
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Nature
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nature"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
            </div>

            <div className="text-left space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the breathtaking beauty of our natural world. From
                majestic mountains to serene forests, nature offers endless
                inspiration.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/30">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">
                    Forests
                  </h3>
                  <p className="text-gray-400">
                    Ancient woodlands teeming with life and mystery.
                  </p>
                </div>

                <div className="p-4 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                    Mountains
                  </h3>
                  <p className="text-gray-400">
                    Towering peaks that touch the sky and inspire awe.
                  </p>
                </div>

                <div className="p-4 bg-teal-900/30 rounded-lg border border-teal-500/30">
                  <h3 className="text-lg font-semibold text-teal-300 mb-2">
                    Oceans
                  </h3>
                  <p className="text-gray-400">
                    Vast waters covering our blue planet with wonder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
