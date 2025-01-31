import React from "react";
import * as Slider from "@radix-ui/react-slider";

const DevRangeSliderV1 = (props) => {
  return (
    <Slider.Root
      {...props}
      className="relative flex items-center select-none touch-none w-full h-5 rounded-full"
    >
      <Slider.Track className="relative grow rounded-full h-2 bg-ACCENT/40">
        <Slider.Range className="absolute bg-ACCENT rounded-full h-2 rounded-r-none" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 focus:outline-0 bg-ACCENT transition-all rounded-full border-2 cursor-pointer active:border-4 dark:border-LIGHT border-DARK"
        aria-label="Slider Thumb"
      />
      <Slider.Thumb
        className="block w-5 h-5 focus:outline-0 bg-ACCENT transition-all rounded-full border-2 cursor-pointer active:border-4 dark:border-LIGHT border-DARK"
        aria-label="Slider Thumb"
      />
    </Slider.Root>
  );
};

export default DevRangeSliderV1;
