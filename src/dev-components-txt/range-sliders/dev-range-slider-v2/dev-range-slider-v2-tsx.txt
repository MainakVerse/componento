import React from "react";
import * as Slider from "@radix-ui/react-slider";

type RangeSliderProps = Omit<
  React.ComponentProps<typeof Slider.Root>,
  "children" | "className"
>;
const DevRangeSliderV2 = (props: RangeSliderProps) => {
  return (
    <Slider.Root
      {...props}
      className="relative flex items-center select-none touch-none w-full h-5 overflow-hidden rounded-full"
    >
      <Slider.Track className="relative grow rounded-full h-full bg-ACCENT/40 overflow-hidden">
        <Slider.Thumb
          className="block h-5 focus:outline-0 active:border-4 aspect-square border-2 shadow-[-1008px_0_0_1000px] shadow-ACCENT  bg-ACCENT transition-all rounded-full cursor-pointer  dark:border-LIGHT border-DARK"
          aria-label="Slider"
        />
      </Slider.Track>
    </Slider.Root>
  );
};

export default DevRangeSliderV2;
