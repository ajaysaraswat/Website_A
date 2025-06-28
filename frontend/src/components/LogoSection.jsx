import { InfiniteLogoScroll } from "./InfinitelogoScroll";

export const LogoSection = ({
  title,
  subtitle,
  sectionTitle,
  logos,
  direction,
}) => {
  return (
    <div
      className="text-center space-y-12"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Main Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-semibold mt-4 text-white tracking-wider">
          {title}{" "}
          <span className="bg-gradient-to-r from-[#ea4820] to-orange-600 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          {sectionTitle}
        </h2>
      </div>

      {/* Infinite Logo Scroll */}
      <InfiniteLogoScroll logos={logos} direction={direction} />
    </div>
  );
};
