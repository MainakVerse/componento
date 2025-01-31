import React from "react";
import Marquee, { MarqueeProps } from "react-fast-marquee";

const BrandCarousel = ({
  brands,
  ...props
}: { brands: React.ReactNode[] } & MarqueeProps) => {
  return (
    <Marquee {...props} className="marquee-container w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_white_150px,white_calc(100%-150px),_transparent_100%)]">
      {brands.map((brand, index) => (
        <div
          key={`first-${index}`}
          className="flex bg-LIGHT dark:bg-DARK border border-ACCENT/30 items-center justify-center mx-8 min-w-[180px] h-24 rounded-lg"
        >
          {brand}
        </div>
      ))}
    </Marquee>
  );
};

export default BrandCarousel;
