import { LogoSection } from "./LogoSection";
import image1 from "../assets/logos/ARTIA_Engagement.svg";

const engagementLogos = [
  { name: "", image: "./Rimages/ARTIA_Engagement.webp" },
  {
    name: "",
    image: "./Rimages/National Disaster Management Authority Engagement.webp",
  },
  { name: "", image: "./Rimages/TRAI_Engagement.webp" },
  { name: "", image: "./Rimages/NITI Aayog_Engagement.webp" },
  { name: "", image: "./second.png" },
  { name: "", image: "./third.png" },
];

const clientLogos = [
  { name: "", image: "/Rimages/L&T_Client.webp" },
  { name: "", image: "./Rimages/Mazda_Client.webp" },
  { name: "", image: "./Rimages/Nagarro_Client.webp" },
  { name: "", image: "./Rimages/ICICI Bank_Client.webp" },
  { name: "", image: "./Rimages/Tata Steel_Client.webp" },
  { name: "", image: "./Rimages/Yes Bank_Client.webp" },
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
