"use client";
import React from "react";
import DevAutocomplete from "./dev-autocomplete-v1";

const DevAutocompleteV1Usage = () => {
  const items = [
    { value: "Apple" },
    { value: "Avocado" },
    { value: "Banana" },
    { value: "Blackberry" },
    { value: "Blueberry" },
    { value: "Cherry" },
    { value: "Coconut" },
    { value: "Date" },
    { value: "Dragonfruit" },
    { value: "Fig" },
    { value: "Figs" },
    { value: "Grape" },
    { value: "Grapefruit" },
    { value: "Guava" },
  ];

  return (
    <div className="max-w-lg self-start bg-LIGHT dark:bg-DARK p-2 rounded-md">
      <DevAutocomplete
        items={items}
        defaultItem={items[0]}
        labelName="Select fruits"
        onChange={(e) => alert(`You selected ${e?.value}`)}
      />
    </div>
  );
};

export default DevAutocompleteV1Usage;
