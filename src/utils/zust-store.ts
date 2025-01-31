import { create } from "zustand";

interface Colors {
  hex: string;
  rgb: { r: number; g: number; b: number };
}
interface ZustState {
  ACCENT: Colors;
  LIGHT: Colors;
  DARK: Colors;
  AccentLabel: string;
  LightLabel: string;
  DarkLabel: string;
}

const useZustStore = create<ZustState>()((set) => ({
  ACCENT: { hex: "#06b6d4", rgb: { r: 6, g: 182, b: 212 } },
  LIGHT: { hex: "#F5F8FF", rgb: { r: 245, g: 248, b: 255} },
  DARK: { hex: "#1f2937", rgb: { r: 31, g: 41, b: 55 } },
  AccentLabel: "[#06b6d4]",
  LightLabel: "[#F5F8FF]",
  DarkLabel: "[#1f2937]",
}));

export default useZustStore;
