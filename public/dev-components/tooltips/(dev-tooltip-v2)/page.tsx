import React from "react";
import DevTooltipV2 from "./dev-tooltip-v2";

const DevTooltipV2Usage = () => {
  return (
    <DevTooltipV2 offset={2} tipData="I am tooltip">
      <h3 className="text-ACCENT ">Hover on me</h3>
    </DevTooltipV2>
  );
};

export default DevTooltipV2Usage;
