"use client";
import React, { useEffect, useState } from "react";
import useZustStore from "../../utils/zust-store";
import ColorPopover from "./color-popover";
import { IoIosColorPalette } from "react-icons/io";
import ColorPckr from "./color-pckr";
import { BiReset } from "react-icons/bi";
import DevTooltipV1 from "../../../public/dev-components/tooltips/(dev-tooltip-v1)/dev-tooltip-v1";
import DevButtonV1 from "../../../public/dev-components/buttons/(dev-button-v1)/dev-button-v1";

interface Colors {
  hex: string;
  rgb: { r: number; g: number; b: number };
}

interface ThemePreset {
  name: string;
  accent: string;
  dark: string;
  light: string;
}

const darkColor = "#1f2937";
const lightColor = "#F5F8FF";

const presets: ThemePreset[] = [
  {
    name: "Blue Sky",
    accent: "#3b82f6",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Indigo Dream",
    accent: "#6366f1",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Purple Haze",
    accent: "#8b5cf6",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Lavender Mist",
    accent: "#a855f7",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Pink Blossom",
    accent: "#ec4899",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Rose Red",
    accent: "#f43f5e",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Aqua Blue",
    accent: "#0ea5e9",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Sunset Orange",
    accent: "#f97316",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Yellow Sunshine",
    accent: "#eab308",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Green Meadow",
    accent: "#84cc16",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Mint Green",
    accent: "#22c55e",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Emerald Sea",
    accent: "#10b981",
    dark: darkColor,
    light: lightColor,
  },
  {
    name: "Teal Oasis",
    accent: "#14b8a6",
    dark: darkColor,
    light: lightColor,
  },
];

const ColorSwatch = () => {
  const { ACCENT, DARK, LIGHT, AccentLabel, DarkLabel, LightLabel } =
    useZustStore();
  const { rgb: accentRGB, hex: accentHex } = ACCENT;
  const { rgb: darkRGB, hex: darkHex } = DARK;
  const { rgb: lightRGB, hex: lightHex } = LIGHT;

  // Helper function to convert hex to rgb
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const changeTheme = (color: string, value: Colors, labelName: string) => {
    useZustStore.setState({
      [color]: {
        hex: value.hex,
        rgb: { r: value.rgb.r, g: value.rgb.g, b: value.rgb.b },
      },
    });
    changeLabel(labelName, `[${value.hex}]`);
  };

  const applyPreset = (preset: ThemePreset) => {
    const accentRgb = hexToRgb(preset.accent);
    const darkRgb = hexToRgb(preset.dark);
    const lightRgb = hexToRgb(preset.light);

    if (accentRgb && darkRgb && lightRgb) {
      useZustStore.setState({
        ACCENT: { hex: preset.accent, rgb: accentRgb },
        DARK: { hex: preset.dark, rgb: darkRgb },
        LIGHT: { hex: preset.light, rgb: lightRgb },
        AccentLabel: `[${preset.accent}]`,
        DarkLabel: `[${preset.dark}]`,
        LightLabel: `[${preset.light}]`,
      });
    }
  };

  const changeLabel = (label: string, value: string) => {
    useZustStore.setState({ [label]: value.trim() });
  };

  const resetSwatch = () => {
    useZustStore.setState({
      ACCENT: { hex: "#06b6d4", rgb: { r: 6, g: 182, b: 212 } },
      LIGHT: { hex: "#F5F8FF", rgb: { r: 245, g: 248, b: 255 } },
      DARK: { hex: "#1f2937", rgb: { r: 31, g: 41, b: 55 } },
      AccentLabel: "[#06b6d4]",
      LightLabel: "[#F5F8FF]",
      DarkLabel: "[#1f2937]",
    });
  };

  useEffect(() => {
    applyTheme();
  }, [ACCENT, DARK, LIGHT]);

  const applyTheme = () => {
    const root = document.documentElement;
    root.style.setProperty(
      "--ACCENT",
      `${accentRGB.r},${accentRGB.g},${accentRGB.b}`
    );
    root.style.setProperty("--DARK", `${darkRGB.r},${darkRGB.g},${darkRGB.b}`);
    root.style.setProperty(
      "--LIGHT",
      `${lightRGB.r},${lightRGB.g},${lightRGB.b}`
    );
  };

  return (
    <ColorPopover
      button={
        <div>
          <button className="themeButton p-1 px-4 rounded-md after:bg-rtlLight dark:after:bg-rtlDark flex items-center justify-center gap-1">
            Color Scheme
            <IoIosColorPalette className="text-lg" />
          </button>
        </div>
      }
    >
      <div className="*:p-2 space-y-4">
        {/* Presets Section */}
        <div className="space-y-2 border-b border-accentNeon/30">
          <h3 className="text-sm font-medium">Presets</h3>
          <div className="grid grid-cols-5 gap-2">
            {presets.map((preset) => (
              <DevTooltipV1 key={preset.name} tipData={preset.name}>
                <button
                  onClick={() => applyPreset(preset)}
                  className="w-8 h-8 rounded-lg border border-ACCENT/20 overflow-hidden hover:scale-110 transition-transform"
                  style={{ background: preset.accent }}
                >
                  <div
                    className="h-1/2 w-full opacity-80"
                    style={{ background: preset.light }}
                  />
                  <div
                    className="h-1/2 w-full opacity-80"
                    style={{ background: preset.dark }}
                  />
                </button>
              </DevTooltipV1>
            ))}
          </div>
        </div>

        {/* Original Controls */}
        <div className="grid grid-cols-[1fr_40px] gap-2">
          <div className="grid grid-cols-1 gap-2 *:text-nowrap">
            <h3>
              Variables
              <p className="text-xs opacity-70">as custom placeholder</p>
            </h3>
            <label htmlFor="accent">
              <p className="text-sm opacity-70">Accent</p>
              <input
                value={AccentLabel}
                onChange={(e) => changeLabel("AccentLabel", e.target.value)}
                type="text"
                className="outline-0 w-full bg-transparent focus:ring-2 transition-all ring-accentNeon/50 p-1 px-2 rounded-md border border-accentNeon text-sm"
              />
            </label>
            <label htmlFor="accent">
              <p className="text-sm opacity-70">Dark mode</p>
              <input
                type="text"
                value={DarkLabel}
                onChange={(e) => changeLabel("DarkLabel", e.target.value)}
                className="outline-0 w-full bg-transparent focus:ring-2 transition-all ring-accentNeon/50 p-1 px-2 rounded-md border border-accentNeon text-sm"
              />
            </label>
            <label htmlFor="accent">
              <p className="text-sm opacity-70">Light mode</p>
              <input
                type="text"
                value={LightLabel}
                onChange={(e) => changeLabel("LightLabel", e.target.value)}
                className="outline-0 w-full bg-transparent focus:ring-2 transition-all ring-accentNeon/50 p-1 px-2 rounded-md border border-accentNeon text-sm"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-1 place-items-center">
            <div className="flex items-center gap-1 flex-col-reverse">
              <DevTooltipV1 tipData="Reset">
                <button
                  className="text-xl text-accentNeon active:-rotate-90 transition-all"
                  onClick={() => resetSwatch()}
                >
                  <BiReset />
                </button>
              </DevTooltipV1>
              <h3>Colors</h3>
            </div>
            <ColorPckr
              defaultColor={{ hex: accentHex }}
              onChange={(e) => changeTheme("ACCENT", e, "AccentLabel")}
            />
            <ColorPckr
              defaultColor={{ hex: darkHex }}
              onChange={(e) => changeTheme("DARK", e, "DarkLabel")}
            />
            <ColorPckr
              defaultColor={{ hex: lightHex }}
              onChange={(e) => changeTheme("LIGHT", e, "LightLabel")}
            />
          </div>
        </div>
      </div>
    </ColorPopover>
  );
};

export default ColorSwatch;
