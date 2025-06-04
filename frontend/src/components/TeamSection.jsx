import React, { useState } from "react";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "ALEXANDRA DOE",
      role: "Web designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Ut in orci ac tortor sodales ultricies et vitae ante. Nulla condimentum nec libero vel luctus. Donec odio libero, ornare ac quam ac, rutrum ornare mi.",
      social: {
        twitter: "#",
        facebook: "#",
        skype: "#",
      },
    },
    {
      id: 2,
      name: "JASON DOE",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Creative designer with passion for modern web aesthetics and user experience design.",
      social: {
        twitter: "#",
        facebook: "#",
        skype: "#",
      },
    },
    {
      id: 3,
      name: "ANDREA DOE",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Project manager ensuring smooth workflow and client satisfaction across all projects.",
      social: {
        twitter: "#",
        facebook: "#",
        skype: "#",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-4">
                <span className="text-gray-800">OUR TEAM</span>
                <span className="text-cyan-400"> /</span>
              </h2>
              <h3 className="text-3xl font-light text-gray-400 mb-8">
                WE ARE THE BEST
              </h3>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <span className="text-cyan-400 font-medium">/</span> Suspendisse
                interdum tortor augue, in tempus urna ultricies
              </p>

              <p className="leading-relaxed">
                Vivamus fringilla eu nisl non laoreet. Maecenas ac velit
                condimentum, condimentum ante at, sodales justo. Vivamus
                suscipit nunc ut condimentum feugiat. Praesent imperdiet
                sollicitudin pulvinar. Pellentesque interdum sem a ligula
                scelerisque bibendum. Donec aliquam mattis neque quis pretium
                pellentesque
              </p>
            </div>

            {/* Team member thumbnails */}
            <div className="flex space-x-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="relative cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent group-hover:border-cyan-400 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs font-medium text-gray-800">
                      {member.name}
                    </p>
                    <p className="text-xs text-cyan-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Team Member */}
          <div className="relative">
            {selectedMember ? (
              <div className="bg-white rounded-full shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-8 border-gray-100">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-4">
                  {selectedMember.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300 cursor-pointer">
                    T
                  </div>
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300 cursor-pointer">
                    F
                  </div>
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300 cursor-pointer">
                    S
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-full shadow-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mb-6">
                  <p className="text-white text-lg font-medium">
                    Click on a team member
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Meet Our Team
                </h3>
                <p className="text-gray-600">
                  Select a team member to learn more about them
                </p>
              </div>
            )}

            {/* Paint splash */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-cyan-500 opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
