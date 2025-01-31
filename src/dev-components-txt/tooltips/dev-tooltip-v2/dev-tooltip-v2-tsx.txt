"use client";
import React, { useId } from "react";
import { ITooltip, Tooltip } from "react-tooltip";

type DevTooltipV2 = {
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
  tipData: string;
} & Omit<ITooltip, "children" | "place" | "html" | "opacity" | "style">;

const DevTooltipV2 = ({
  children,
  place = "top",
  tipData,
  ...props
}: DevTooltipV2) => {
  const Id = useId();
  return (
    <>
      <Tooltip
        id={Id}
        place={place}
        opacity={1}
        {...props}
        style={{ backgroundColor: "transparent", padding: "0px" }}
      >
        <span className="bg-ACCENT text-sm p-0.5 px-2 rounded-full text-white z-50">
          {tipData}
        </span>
      </Tooltip>
      <div data-tooltip-id={Id}>{children}</div>
    </>
  );
};

export default DevTooltipV2;
