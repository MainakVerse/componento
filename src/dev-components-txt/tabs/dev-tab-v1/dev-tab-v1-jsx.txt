"use client";
import React, { useState } from "react";

const DevTabV1 = ({ tabData }) => {
  const [state, setState] = useState(0);
  return (
    <section className="w-full space-y-1">
      <div
        style={{ gridTemplateColumns: `repeat(${tabData.length}, 1fr)` }}
        className={`gap-2 relative h-10 rounded-full bg-LIGHT border border-ACCENT/50 dark:bg-DARK grid`}
      >
        {tabData.map((elem, index) => (
          <button
          key={index}
            className={`p-2 outline-0 z-10 text-nowrap ${
              state === index && " text-ACCENT"
            }`}
            onClick={() => setState(index)}
          >
            {elem.title}
          </button>
        ))}
        <span
          style={{
            width: `calc(100%/${tabData.length})`,
            left: `calc(${state} * 100%/${tabData.length})`,
          }}
          className={`absolute border-2 border-LIGHT duration-300 dark:border-DARK transition-all inset-y-0  rounded-full bg-ACCENT/30`}
        />
      </div>
      <div className="bg-LIGHT w-full dark:bg-DARK  min-h-40 rounded-md">
        {tabData[state].element}
      </div>
    </section>
  );
};

export default DevTabV1;
