import React from "react";
import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting edge tech to India, big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "CEO",
    image: "/optimized/sanjana.webp",
    bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah… let's talk about FOOD now!",
  },
  {
    id: 3,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/optimized/tithika.webp",
    bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, I haven't been everywhere. But it's on the list",
  },
  {
    id: 4,
    name: "Gaurab Ganguly",
    role: " Non-Executive Strategic Advisor",
    image: "/optimized/gaurab.webp",
    bio: "Gaurab mentors teams with visionary guidance. A coffee lover, code whisperer, and all-around tech philosopher.",
  },
  {
    id: 5,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting edge tech to India, big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 6,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting edge tech to India, big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 7,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting edge tech to India, big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 8,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting edge tech to India, big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div
      id="team"
      className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-white overflow-hidden"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('./optimized/ourteamR.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ea4820]">
            OUR TEAM
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 font-light max-w-3xl mx-auto text-white">
            Driven by Purpose, Powered by Innovation
          </h3>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>

        {/* Know More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/team")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ea4820] hover:bg-[#ea4820]/90 transition-all duration-300"
          >
            Know More About Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
