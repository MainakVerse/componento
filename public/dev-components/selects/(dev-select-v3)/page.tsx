"use client";
import React from "react";
import DevSelectV3 from "./dev-select-v3";

const DevSelectV3Usage = () => {
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
      <DevSelectV3
      options={options}
      onValueChange={(e) => console.log(e)}
      defaultValue={options[2].value}
      placeholder="Select a Framework.."
      labelName="Frameworks"
    />
  </div>
  );
};

export default DevSelectV3Usage;


