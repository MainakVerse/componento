import React from "react";
import { LuSearch } from "react-icons/lu";
import DevLaserInput from "./dev-input-v2";

const DevInputV2Usage = () => {
  return (
    <div className="md:max-w-xl w-full ">
      <DevLaserInput
        icon={<LuSearch className="text-accent text-xl" />}
        type="text"
        rounded="full"
        size="md"
        placeholder="Enter name"
      />
    </div>
  );
};

export default DevInputV2Usage;
