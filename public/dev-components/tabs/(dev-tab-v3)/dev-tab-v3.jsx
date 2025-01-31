"use client";
import React, { useState } from "react";


const DevTabV3 = ({ tabData }) => {
  const [state, setState] = useState(0);
  return (
    <section className="w-full">
      <div
        style={{ gridTemplateColumns: `repeat(${tabData.length}, 1fr)` }}
        className={`relative h-10 bg-LIGHT dark:bg-DARK grid`}
      >
        {tabData.map((elem, index) => (
          <button
          key={index}
            className={`p-2 outline-0 z-10 text-nowrap border-b-2 border-ACCENT ${state === index && " text-ACCENT !border-b-0"
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
          className={`absolute transition-all scale-[1.03] inset-y-0 border-2 border-b-0 border-ACCENT  `}
        />
      </div>
      <div className="bg-LIGHT w-full dark:bg-DARK min-h-40 grid">
        {tabData[state].element}
      </div>
    </section>
  );
};

export default DevTabV3;
