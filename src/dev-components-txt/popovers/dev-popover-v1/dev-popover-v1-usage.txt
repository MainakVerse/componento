import React from "react";
import DevPopoverV1 from "./dev-popover-v1";

const DevPopoverV1Usage = () => {
  return (
    <DevPopoverV1
      contentProps={{ sideOffset: 2 }}
      defaultOpen={true}
      button={
        <button className="p-1 px-3 bg-ACCENT text-white rounded-lg">
          Open
        </button>
      }
    >
      <p className="p-3 px-5">Popover Content</p>
    </DevPopoverV1>
  );
};

export default DevPopoverV1Usage;
