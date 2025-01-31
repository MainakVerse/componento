"use client";
import React, { useState } from "react";


const DevTabV2 = ({ tabData }) => {
  const [state, setState] = useState(0);
  return (
    <section className="w-full space-y-1">
      <div
        style={{ gridTemplateColumns: `repeat(${tabData.length}, 1fr)` }}
        className={`gap-2 relative h-10 rounded-sm bg-LIGHT dark:bg-DARK grid`}
      >
        {tabData.map((elem, index) => (
          <button
          key={index}
            className={`p-2 outline-0 z-10 text-nowrap ${state === index && " text-ACCENT"
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
          className={`absolute transition-all inset-y-0 border-t-2 border-ACCENT bg-gradient-to-b from-ACCENT/30 to-transparent rounded-sm`}
        />
      </div>
      <div className="bg-LIGHT w-full dark:bg-DARK  min-h-40 rounded-sm">
        {tabData[state].element}
      </div>
    </section>
  );
};

export default DevTabV2;
