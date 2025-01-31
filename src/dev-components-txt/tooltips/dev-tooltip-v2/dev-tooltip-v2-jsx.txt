"use client";
import React, { useId } from "react";
import {Tooltip } from "react-tooltip";

const DevTooltipV2 = ({
  children,
  place = "top",
  tipData,
  ...props
}) => {
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
