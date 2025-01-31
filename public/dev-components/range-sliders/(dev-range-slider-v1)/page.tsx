"use client";
import React from "react";
import DevRangeSliderV1 from "./dev-range-slider-v1";

const DevRangeSliderV1Usage = () => {
  return (
    <div className="w-full bg-LIGHT dark:bg-DARK p-5 max-w-md rounded-md space-y-4 ">
      <DevRangeSliderV1
        min={10}
        max={100}
        step={5}
        defaultValue={[50]}
        onValueChange={(e) => console.log(e)}
      />
      <DevRangeSliderV1
        min={10}
        max={100}
        step={5}
        defaultValue={[50, 80]}
        onValueChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default DevRangeSliderV1Usage;
