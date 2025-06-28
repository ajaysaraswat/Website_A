import React, { useState } from "react";

const TeamCard = ({ name, role, image, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative w-full min-w-[250px] max-w-[300px] bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 
        hover:scale-105 hover:z-50 ${isExpanded ? 'z-50' : 'z-10'}
        hover:shadow-xl group`}
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5">
        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {name}
        </h2>

        {/* Role */}
        <p className="text-[#ea4820] font-medium text-sm sm:text-base uppercase mb-3">
          {role}
        </p>

        {/* Bio - Visible on hover/click */}
        <div
          className={`overflow-hidden transition-all duration-300 
            ${isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100"}`}
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {bio}
          </p>

          {/* Location */}
          <p className="text-[#ea4820] text-sm sm:text-base mt-4">
            Bengaluru, IND
          </p>
        </div>
      </div>

      {/* Expand/Collapse Indicator */}
      <div
        className={`absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center text-[#ea4820] transition-transform duration-300 
          ${isExpanded || 'group-hover' ? "transform rotate-180" : ""}`}
      >
        ▼
      </div>
    </div>
  );
};

export default TeamCard;
