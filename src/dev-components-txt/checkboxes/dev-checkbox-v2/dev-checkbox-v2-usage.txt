"use client";
import React from "react";
import DevCheckboxV2 from "./dev-checkbox-v2";

const DevCheckboxV2Usage = () => {
  return (
    <div className="bg-LIGHT border border-ACCENT/20 dark:bg-DARK p-3 rounded-lg flex gap-3">
      <DevCheckboxV2
        id="dev-checkbox-v-two"
        defaultChecked
        required
        onChange={(e) => console.log(e.target.checked)}
      />
      <label htmlFor="dev-checkbox-v-two"> Dev Checkbox</label>
    </div>
  );
};

export default DevCheckboxV2Usage;
