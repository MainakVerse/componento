"use client";
import React from "react";
import DevMultiselectV1 from "./dev-multiselect-v1";

const DevMultiselectV1Usage = () => {
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
    <DevMultiselectV1
      options={options}
      defaultValue={[options[2], options[3], options[4]]}
      onChange={(e) => console.log(e)}
    />
  );
};

export default DevMultiselectV1Usage;
