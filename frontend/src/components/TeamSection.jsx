import React, { lazy, useEffect } from "react";
import TeamCard from "./TeamCard";
//const TeamCard = lazy(() => import("./TeamCard"));
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const teamMembers = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings cutting-edge tech to India, big ideas to the table, and—if you let him—probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Chief Executive Officer",
    image: "/optimized/sanjana.webp",
    bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah.. Let's talk about FOOD now!",
  },

  {
    id: 3,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/optimized/tithika.webp",
    bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, 'I haven't been everywhere. But it's on the list'",
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
    name: "Anjali Chaurasia",
    role: "Lead Recruiter - Technology Ecosystem",
    image: "/optimized/anjali.jpg",
    bio: "Anjali is building the culture of this company by bringing the right players and partners. Check her schedule, because she is always 'Get ready, (jet)set, and go.'",
  },

  {
    id: 6,
    name: "Lt Col Narender Singh",
    role: "Defence Innovations Consultant",
    image: "/optimized/narend.jpg",
    bio: " big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },

  {
    id: 7,
    name: "Srilalitha M Srinivasan",
    role: "Communications Expert",
    image: "/optimized/sri.webp",
    bio: "big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
  {
    id: 8,
    name: "Aryavarta Singh",
    role: "Robotics Expert",
    image: "/optimized/aryavarta.webp",
    bio: "big ideas to the table, and if you let him probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we're pretty sure his brain runs on unlimited data!",
  },
];

const Team = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="relative w-full min-h-screen">
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
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-10">
          <div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={member.bio}
                  />
                </div>
              ))}
            </div>
          </div>
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
    </>
  );
};

export default Team;
