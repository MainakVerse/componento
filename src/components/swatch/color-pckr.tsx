//TSX code
"use client";
import { ColorResult, Sketch } from "@uiw/react-color";
import { useEffect, useState } from "react";
import ColorPopover from "./color-popover";


type DevColorPickerProps = {
  defaultColor?: {
    rgb?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    hex?: string;
  };
  onChange?: (color: ColorResult) => void;
};

const ColorPckr = ({
  defaultColor = { hex: "#E26F1D" },
  onChange,
}: DevColorPickerProps) => {
  const [color, setColor] = useState<ColorResult | any>(defaultColor);

  const onChangeHandler = (e: ColorResult) => {
    setColor(e);
    onChange?.(e);
  };

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor])
  
  return (
    <ColorPopover
      button={
        <button
          data-tooltip-id="color-picker-popover"
          className="rounded-md h-10 aspect-square border-2 border-accentNeon/70 focus:border-white"
          style={{
            backgroundColor: color.hex,
          }}
        />
      }
    >

      <div className="colorSwatch">
        <Sketch
          color={color.hex}
          onChange={onChangeHandler}
          presetColors={["#2563eb", "#4f46e5", "#7c3aed", "#9333ea", "#f97316"]}
        />
      </div>
    </ColorPopover>
  );
};

export default ColorPckr;
