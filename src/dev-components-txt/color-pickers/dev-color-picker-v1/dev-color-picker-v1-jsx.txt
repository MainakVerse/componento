"use client";
import React from "react";
import { HexAlphaColorPicker } from "react-colorful";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

// Css
/*
.react-colorful {
  gap: 5px;
  width: 100% !important;
  height: 180px !important;
  border-radius: 0px;
}
.react-colorful__saturation {
  border-radius: 5px !important;
  width: 100%;
}
.react-colorful__hue,
.react-colorful__alpha {
  border-radius: 5px !important;
  width: 100%;

  height: 12px !important;
}
.react-colorful__hue-pointer,
.react-colorful__alpha-pointer,
.react-colorful__saturation-pointer {
  width: 15px !important;
  height: 15px !important;
}
*/
const DevColorPickerV1 = ({
  setColor,
  color = "#E26F1D",
}) => {
  return (
    <DevPopoverV1
      button={
        <button
          data-tooltip-id="colorful-picker-popover"
          className="min-w-32  min-h-8 rounded-md border-2 border-ACCENT focus:border-white"
          style={{
            background: color,
          }}
        />
      }
    >
      <div className="bg-LIGHT dark:bg-DARK p-1 rounded-lg w-[200px] space-y-2">
        <HexAlphaColorPicker
          color={color}
          onChange={(newColor) => setColor?.(newColor)}
        />
        <span className=" flex-col flex flex-1 text-sm text-center text-black dark:text-white">
          <input
            spellCheck={false}
            type="text"
            className="w-full px-1 outline-0 border-2 border-ACCENT rounded-md border-transparent focus:border-ACCENT bg-ACCENT/50"
            value={color}
            onChange={(e) => setColor?.(e.target.value)}
          />
        </span>
      </div>
    </DevPopoverV1>
  );
};

export default DevColorPickerV1;
