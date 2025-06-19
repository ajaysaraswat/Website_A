import { ArrowRight } from "lucide-react";

export default function DroneCard({
  titleLine1,
  titleLine2,
  description,
  image,
}) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg  text-white ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('${image}')`, // Replace with correct path
          fontFamily: "'PP Neue Montreal', sans-serif",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div>
          <h3 className="text-3xl font-bold mb-2">{titleLine1}</h3>
          <h3 className="text-3xl font-bold mb-2">{titleLine2}</h3>
        </div>

        <div className="space-y-4">
          <p className="text-xl leading-relaxed text-white">{description}</p>
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
