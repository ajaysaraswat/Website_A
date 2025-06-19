import React from "react";
import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Vineet brings cutting-edge tech to India, big ideas to the table, and—if you let him—probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we’re pretty sure his brain runs on unlimited data!",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah… let’s talk about FOOD now!",
  },
  {
    id: 3,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, “I haven’t been everywhere. But it’s on the list”.",
  },
  {
    id: 4,
    name: "Gaurab Ganguly",
    role: " Non-Executive Strategic Advisor",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Gaurab mentors teams with visionary guidance. A coffee lover, code whisperer, and all-around tech philosopher.",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full px-8 py-10 bg-[#2A2342] overflow-hidden text-white">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('./ourteam.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="space-y-10">
          <div>
            <h2 className="text-6xl font-bold tracking-tight text-[#EA6220] text-center">
              OUR TEAM
            </h2>
            <h3 className="text-2xl text-center text-white mt-3 font-light">
              Driven by Purpose, Powered by Innovation
            </h3>
          </div>

          <div className="text-gray-700 space-y-5">
            <div className="overflow-hidden whitespace-nowrap w-full relative h-10">
              <style>
                {`
                  @keyframes marquee {
                    0%   { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                  }
                `}
              </style>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8">
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

        <div className="flex justify-center mt-4">
          <button
            className="items-center mt-12 border border-[#EA6220] px-6 py-2 rounded text-white hover:bg-[#EA6220]"
            onClick={() => navigate("/team")}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
