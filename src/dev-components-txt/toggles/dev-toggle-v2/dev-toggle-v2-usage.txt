"use client";
import React, { useState } from "react";
import DevToggleV2 from "./dev-toggle-v2";

const DevToggleV2Usage = () => {
  const [check, setCheck] = useState(true)
  return (
    <div className="bg-LIGHT dark:bg-DARK p-3 rounded-lg flex gap-3">
      <DevToggleV2
        labelName="Dev Switch"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
    </div>
  );
};

export default DevToggleV2Usage;
