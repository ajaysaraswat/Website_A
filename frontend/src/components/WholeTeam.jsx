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
    bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah.. Let’s talk about FOOD now!",
  },
  {
    id: 3,
    name: "Naveen B",
    role: "Head of QA",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f78cf1d7b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Naveen specializes in QA with experience of 25+ years and he is our guy who tells us- ” I’m not just reporting bugs, I’m telling a story about how the app failed”. So go FIX IT.",
  },
  {
    id: 4,
    name: "Sankalp G",
    role: "Head of Trainings",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Sankalp is an IIT Bombay software and hardware engineer who leads Skill Development for us. He aims to make the nation skilled in the next gen technologies.",
  },
  {
    id: 5,
    name: "Sharath M",
    role: "Head of Products",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Sharath is an expert in Products/Platforms, Blockchain & IoT, with a passion for developing next-gen technologies. And his favourite joke is “A product guy tries to walk into a bar but can’t because the door isn’t scheduled until next release.”",
  },
  {
    id: 6,
    name: "Vishwajeet Chauhan",
    role: "Digital Transformation Expert - Communication",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Vishwajeet specializes in data and communications. He is working towards building an ecosystem for a Digital India. If communication is your topic- He’s your guy.",
  },
  {
    id: 7,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, “I haven’t been everywhere. But it’s on the list”.",
  },
  {
    id: 8,
    name: "Anjali Chaurasia",
    role: "Lead Recruiter - Technology Ecosystem",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Anjali is building the culture of this company by bringing the right players and partners. Check her schedule, because she is always “Get ready, (jet)set, and go.”",
  },
  {
    id: 9,
    name: "Vishal Garg",
    role: "Lead Research Analyst",
    image:
      "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Vishal creates old, Practical ideas that fit the moment and rings them to life, helping the team shape smart strategies to drive Instrek’s innovative solutions forward.",
  },
];

const WholeTeam = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-12 w-full px-8 py-10 bg-[#2A2342] ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="items-center mt-12 border border-[#EA6220] px-6 py-2 rounded text-white hover:bg-[#EA6220]"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default WholeTeam;
