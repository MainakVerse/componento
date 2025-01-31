"use client";
import React from "react";
import DevChipInput from "./dev-chip-input";

const DevChipInputUsage = () => {
  const tags=[
    { key: 1, name: "Dev components" },
    { key: 2, name: "Next js" },
    { key: 3, name: "React js" },
    { key: 4, name: "Tailwind css" },
    { key: 5, name: "Node js" },
    { key: 6, name: "Express js" },
    { key: 7, name: "MongoDB" },
  ];
  return (
    <div className="w-full">
      <DevChipInput
        defaultValues={tags}
        trigger={"Enter"}
        onChange={(tags) => console.log(tags)}
        tagLength={14}
        textLength={20}
      />
    </div>
  );
};

export default DevChipInputUsage;
