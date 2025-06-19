import { ArrowRight } from "lucide-react";

export default function DroneCard({
  titleLine1,
  titleLine2,
  description,
  image,
}) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('${image}')`, // Replace with correct path
          fontFamily: "'PP Neue Montreal', sans-serif",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
        <div>
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
            {titleLine1}
          </h3>
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
            {titleLine2}
          </h3>
        </div>

        <div className="space-y-2 md:space-y-4">
          <p className="text-sm md:text-xl leading-relaxed text-white">
            {description}
          </p>
          <div className="flex items-center text-lg md:text-2xl font-semibold cursor-pointer hover:underline">
            Learn more
            <span className="ml-2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
