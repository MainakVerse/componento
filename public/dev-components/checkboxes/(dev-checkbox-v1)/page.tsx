"use client";
import React from "react";
import DevCheckboxV1 from "./dev-checkbox-v1";

const DevCheckboxV1Usage = () => {
  return (
    <div className="bg-LIGHT border border-ACCENT/20 dark:bg-DARK p-3 rounded-lg flex gap-3">
      <DevCheckboxV1
        id="dev-checkbox"
        defaultChecked
        required
        onCheckedChange={(e) => console.log(e)}
      />
      <label htmlFor="dev-checkbox"> Dev Checkbox</label>
    </div>
  );
};

export default DevCheckboxV1Usage;
