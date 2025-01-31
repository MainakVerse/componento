"use client";
import { useTheme } from "next-themes";
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
      <button
        className="text-accent text-2xl bg-secondary/50 p-1 rounded-full"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <MdWbSunny /> : <IoMdMoon />}
      </button>
  );
}
