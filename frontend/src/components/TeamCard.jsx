// import React from "react";

// const TeamCard = () => {
//   return (
//     <div
//       className="max-w-sm h-[500px] bg-gray-900 text-white rounded overflow-hidden shadow-lg group transition-all duration-300"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       <div className="w-[70%] bg-amber-600 mx-auto">
//         {/* Image section: Shrinks on hover */}
//         <div className="h-[288px] group-hover:h-[200px] transition-all duration-300 overflow-hidden object-contain">
//           <img
//             src="./ajayb.jpg"
//             alt="Vineet Sharma"
//             className="w-full mx-auto h-full object-cover transition-all duration-300"
//           />
//         </div>

//         {/* Text content section */}
//         <div className="h-[212px] group-hover:h-[300px] transition-all duration-700 p-6 flex flex-col justify-start">
//           <h2 className="text-2xl font-semibold">Vineet Sharma</h2>

//           {/* Yellow title - shown only on hover */}
//           <p className="text-yellow-400 font-medium  text-base opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//             FOUNDER
//           </p>

//           <p className="text-gray-300 text-[15px] mt-2 leading-relaxed">
//             Vineet brings cutting-edge tech to India, big ideas to the table—
//             and if you let him, probably some Chinese proverbs too. He
//             strategizes like a chess master and thinks so much, we're pretty
//             sure his brain runs on unlimited data!
//           </p>

//           <p className="text-gray-400 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//             Bengaluru, IND
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;

// TeamCard.jsx
import React from "react";

const TeamCard = ({ name, role, image, bio }) => {
  return (
    <div
      className="max-w-sm h-[430px] md:h-[500px] bg-[#2A2342] text-white rounded-t-xl overflow-hidden group transition-all duration-300"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="mx-auto bg-gradient-to-b from-[#1A1A1A] to-[#2A2342]">
        {/* Image section */}
        <div className="h-[200px] md:h-[300px] group-hover:h-[160px] md:group-hover:h-[200px] transition-all duration-300 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* Text content */}
        <div className="h-[200px] md:h-[212px] group-hover:h-[240px] md:group-hover:h-[300px] transition-all duration-700 p-4 md:p-6 flex flex-col justify-start">
          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-semibold">{name}</h2>

          {/* Role */}
          <p className="text-[#ea4820] font-medium text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase">
            {role}
          </p>

          {/* Bio */}
          <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
            {bio}
          </p>

          {/* Location */}
          <p className="text-[#ea4820] text-sm md:text-base mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Bengaluru, IND
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
