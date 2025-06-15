import React from "react";

const InlineScrollImages = () => {
  const images = ["./first.png", "./second.png", "./third.png", "./forth.png"];

  return (
    <div className="w-full flex justify-center items-center bg-transparent py-4">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`team-${idx}`}
              className="h-25 w-auto flex-1 max-w-[170px] object-contain bg-white p-2 rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InlineScrollImages;
