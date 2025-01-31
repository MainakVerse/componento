"use client";
import {Sketch } from "@uiw/react-color";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

// Css 
/*
.w-color-sketch {
  @apply !rounded-lg *:!border-slate-500/50 !pb-1.5 !bg-LIGHT dark:!bg-DARK; 
}

.w-color-sketch div:not(.w-color-swatch),
.w-color-sketch input {
  @apply !rounded-md  font-medium dark:!text-white !text-black;
}
*/

const DevColorPickerV2 = ({
  color={ hexa: "#E26F1D" },
  setColor
}) => {

  return (
      <DevPopoverV1
        button={
          <button
            data-tooltip-id="color-picker-popover"
            className="min-w-32 min-h-8 rounded-md border-2 border-ACCENT focus:border-white"
            style={{
              backgroundColor: color.hexa,
            }}
          />
        }
      >
        <div>
          <Sketch
            color={color.hexa}
            onChange={setColor}
            presetColors={["#E26F1D", "#F17013", "#F8C471"]}
          />
        </div>
      </DevPopoverV1>
  );
};

export default DevColorPickerV2;
