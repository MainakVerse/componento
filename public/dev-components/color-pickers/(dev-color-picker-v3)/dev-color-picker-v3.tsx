"use client";
import {useEffect, useState } from "react";
import ColorPicker, { Color, ColorObject } from "react-pick-color";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

type ColorPickerProps = {
  defaultColor?: {
    rgb?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    hex?: string;
  };
  onChange?: (color: ColorObject) => void;
};


const DevColorPickerV3 = ({ defaultColor = { hex: "#E26F1D" }, onChange }: ColorPickerProps) => {
  const [color, setColor] = useState<ColorObject | any>(defaultColor);

  const onChangeHandler = (e: ColorObject) => {
    setColor(e);
    onChange?.(e);
  };
  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor])
  return (
    <DevPopoverV1
        button={
          <button
            data-tooltip-id="color-picker-popover"
            className="min-w-32 min-h-8 rounded-md border-2 border-ACCENT focus:border-white"
            style={{
              backgroundColor: color.hexa ? color.hexa : color.hex,
            }}
          />
        }
      >
        <div>
              <ColorPicker
                presets={[
                  "#f44336",
                  "#e91e63",
                  "#9c27b0",
                  "#673ab7",
                  "#3f51b5",
                  "#2196f3",
                  "#00bcd4",
                  "#009688",
                ]}
                theme={{
                  background: "#1E293B",
                  inputBackground: "#1B384C",
                  borderColor: "#0E7490",
                  borderRadius: "8px",
                  color: "white",
                }}
                color={color.rgb || color.hex}
                onChange={onChangeHandler}
              />
            </div>
      </DevPopoverV1>
  );
};

export default DevColorPickerV3;
