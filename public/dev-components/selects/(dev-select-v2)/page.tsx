"use client";
import React from "react";
import DevSelectV2 from "./dev-select-v2";

const DevSelectV2Usage = () => {
  const options = [
    { value: "React JS", label: "React JS" },
    { value: "Angular", label: "Angular" },
    { value: "Vue JS", label: "Vue JS" },
    { value: "Svelte", label: "Svelte" },
    { value: "Next JS", label: "Next JS" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Nuxt JS", label: "Nuxt JS" },
  ];
  return (
    <div className="max-w-xs w-full">
      <DevSelectV2
      options={options}
      onChange={(e) => console.log(e.target.value)}
      placeholder="Select a Framework.."
      labelName="Frameworks"
      defaultValue={options[2].value}
    />
  </div>
  );
};

export default DevSelectV2Usage;
