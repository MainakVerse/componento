import React from "react";
import DevTabV3 from "./dev-tab-v3";

const DevTabV3Usage = () => {
  const tabData = [
    {
      title: "Tab 1",
      element: <p className="font-semibold text-center p-5"> This is Tab 1</p>,
    },
    {
      title: "Tab 2",
      element: <p className="font-semibold text-center p-5"> This is Tab 2</p>,
    },
    {
      title: "Tab 3",
      element: <p className="font-semibold text-center p-5"> This is Tab 3</p>,
    }
  ];
  return (
    <div className="max-w-sm w-full">
      <DevTabV3 tabData={tabData} />
    </div>
  );
};

export default DevTabV3Usage;
