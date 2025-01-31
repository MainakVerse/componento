import React from "react";
import DevDropdown from "./dev-dropdown-v2";

const DevDropdownV2Usage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-light opacity-70">Responsive for mobile</h3>
      <DevDropdown
        button={
          <button className="p-1 px-3 bg-ACCENT text-white rounded-lg">
            Open
          </button>
        }
      >
        <p className="p-3 px-5">Dropdown Content</p>
      </DevDropdown>
    </div>
  );
};

export default DevDropdownV2Usage;
