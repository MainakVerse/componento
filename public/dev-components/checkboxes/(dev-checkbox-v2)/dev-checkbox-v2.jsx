import React from "react";
import { HiCheck } from "react-icons/hi";


const DevCheckboxV2 = ({ ...props }) => {
  return (
    <span className="border-2 ring-ACCENT/50 relative transition-all border-ACCENT text-white w-6 h-6 grid place-content-center rounded-md cursor-pointer has-[:checked]:bg-ACCENT bg-ACCENT/30 has-[:checked]:ring-[3px]">
      <input
        type="checkbox"
        className="peer z-10 opacity-0 cursor-pointer absolute inset-0"
        {...props}
      />
      <HiCheck className="h-full w-full hidden peer-checked:block" />
    </span>
  );
};

export default DevCheckboxV2;
