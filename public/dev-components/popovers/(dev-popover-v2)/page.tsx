import React from "react";
import DevPopoverV2 from "./dev-popover-v2";

const DevPopoverV2Usage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-light opacity-70">Responsive for mobile</h3>
      <DevPopoverV2
        button={
          <button className="p-1 px-3 bg-ACCENT text-white rounded-lg">
            Open
          </button>
        }
      >
        <p className="p-3 px-5">Popover Content</p>
      </DevPopoverV2>
    </div>
  );
};

export default DevPopoverV2Usage;
