"use client";
import clsx from "clsx";
import React, { useState } from "react";

type LaserInputProps = {
  scale?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "full";
  laserColor?: string;
  laserActiveOnClick?: boolean;
  reverseIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
} & React.ComponentProps<"input">;

const LaserInput = ({
  scale = "sm",
  rounded = "full",
  laserActiveOnClick = true,
  reverseIcon = false,
  icon,
  className,
  ...props
}: LaserInputProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [childPosition, setChildPosition] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const [childColor, setChildColor] = useState(
    `bg-gradient-to-r from-transparent via-accentNeon to-transparent`
  );
  const handleMouseMove = (e: React.MouseEvent) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parentRect.left - 50;

    if (x < 0) {
      setChildPosition(0);
      setChildColor(
        `bg-gradient-to-r from-accentNeon via-accentNeon to-transparent`
      );
    } else if (x > parentRect.width - 100) {
      setChildPosition(parentRect.width - 96);
      setChildColor(
        `bg-gradient-to-r from-transparent via-accentNeon to-accentNeon`
      );
    } else {
      setChildPosition(x);
      setChildColor(
        `bg-gradient-to-r from-transparent via-accentNeon to-transparent`
      );
    }
  };
  const InputSizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };
  const InputRoundness = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-xl",
    full: "rounded-full",
  };
  const InputSize = InputSizes[scale] || InputSizes.md;
  const InputRounded = InputRoundness[rounded] || InputRoundness.md;

  return (
    <div
      className={clsx(
        InputSize,
        InputRounded,
        "relative w-full overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <span
        className={clsx(
          "absolute top-0 bottom-0 rounded-lg ",
          active ? "bg-accentNeon" : childColor,
          isHovered || (active && laserActiveOnClick) ? "block" : "hidden",
          active ? "w-full  transition-all  duration-200 opacity-50" : "w-24"
        )}
        style={{
          left: `${active ? 0 : childPosition}px`,
        }}
      />

      <div
        className={clsx(
          InputRounded,
          "absolute text-sm px-2 inset-[2px] flex items-center justify-center flex-grow border border-accentNeon/50 bg-rtlLight dark:bg-rtlDark gap-2  outline outline-accentNeon/20",
          className,
          reverseIcon && "flex-row-reverse"
        )}
      >
        {icon && <span className={clsx("z-10 accentNeon")}>{icon}</span>}
        <input
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          spellCheck="false"
          {...props}
          className="w-full outline-0 bg-transparent"
        />
      </div>
    </div>
  );
};

export default LaserInput;
