"use client";
import React, { useState } from "react";
import ReactMovable from "./react-movable";

const ReactMovableUsage = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item4"]);
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-xs space-x-1 m-2">
        <span>Updated Array:</span>
        {items.map((e, i) => (
          <span
            className="bg-ACCENT/30 text-nowrap p-1 px-2 rounded-full"
            key={i}
          >
            {e}
          </span>
        ))}
      </div>
      <div className="w-60 h-auto px-2 rounded-lg border border-ACCENT/20 bg-LIGHT dark:bg-DARK">
        <ReactMovable items={items} onChange={setItems} />
      </div>
    </div>
  );
};

export default ReactMovableUsage;
