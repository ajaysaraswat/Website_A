import { ArrowRight } from "lucide-react";

export default function DroneCard() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg text-white font-['PP_Neue_Montreal']">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('./drone.jpg')", // Replace with correct path
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div>
          <h3 className="text-3xl font-bold mb-2">Drones &</h3>
          <h3 className="text-3xl font-bold mb-2">UAVs</h3>
        </div>

        <div className="space-y-4">
          <p className="text-xl leading-relaxed text-white">
            From agriculture to crowd control – our drones take smart automation
            to the skies
          </p>
          <div className="flex items-center text-3xl font-bold cursor-pointer hover:underline">
            Learn more
            <span className="ml-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
