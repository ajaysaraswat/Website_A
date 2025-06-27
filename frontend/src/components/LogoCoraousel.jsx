import { LogoSection } from "./LogoSection";

const engagementLogos = [
  { name: "", image: "./images/ARTIA_Engagement.png" },
  {
    name: "",
    image: "./images/National_Disaster_Management_Authority_Engagement.png",
  },
  { name: "", image: "./images/TRAI_Engagement.png" },
  { name: "", image: "./images/NITI_Aayog_Engagement.png" },
  { name: "", image: "./second.png" },
  { name: "", image: "./third.png" },
];

const clientLogos = [
  { name: "", image: "./images/L&T_Client.png" },
  { name: "", image: "./images/Mazda_Client.png" },
  { name: "", image: "./images/Nagarro_Client.png" },
  { name: "", image: "./images/ICICI_Bank_Client.png" },
  { name: "", image: "./images/Tata Steel_Client.png" },
];

export const LogoCarousel = () => {
  return (
    <div
      className="min-h-screen bg-black flex flex-col justify-center py-20 px-4"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto w-full space-y-24">
        <LogoSection
          title="OUR KEY"
          subtitle="ENGAGEMENTS"
          sectionTitle="Ministries & Associations"
          logos={engagementLogos}
          direction="left"
        />

        <LogoSection
          title="OUR"
          subtitle="CLIENTS"
          sectionTitle=""
          logos={clientLogos}
          direction="right"
        />
      </div>
    </div>
  );
};
