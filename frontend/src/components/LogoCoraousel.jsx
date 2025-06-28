import { LogoSection } from "./LogoSection";

const engagementLogos = [
  { name: "", image: "./optimized/Rimages/ARTIA_Engagement.webp" },
  {
    name: "",
    image: "./optimized/Rimages/National Disaster Management Authority Engagement.webp",
  },
  { name: "", image: "./optimized/Rimages/TRAI_Engagement.webp" },
  { name: "", image: "./optimized/Rimages/NITI Aayog_Engagement.webp" },
  { name: "", image: "./optimized/second.webp" },
  { name: "", image: "./optimized/third.webp" },
];

const clientLogos = [
  { name: "", image: "./optimized/Rimages/L&T_Client.webp" },
  { name: "", image: "./optimized/Rimages/Mazda_Client.webp" },
  { name: "", image: "./optimized/Rimages/Nagarro_Client.webp" },
  { name: "", image: "./optimized/Rimages/ICICI Bank_Client.webp" },
  { name: "", image: "./optimized/Rimages/Tata Steel_Client.webp" },
  { name: "", image: "./optimized/Rimages/Yes Bank_Client.webp" },
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
