import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

type AccordionProps = {
  AccordData: { title: string; content: string }[];
};

const DevAccordionV2 = ({ AccordData }: AccordionProps) => {
  return (
    <div className="w-full border border-ACCENT/30 divide-y divide-ACCENT/50 bg-LIGHT dark:bg-DARK rounded-xl overflow-hidden px-1">
      {AccordData.map((e, i) => (
        <div key={i} className="group p-2 px-5 space-y-1">
          <div className="relative">
            <input
              type="checkbox"
              id={`accordion-${i}`}
              className="peer sr-only"
            />
            <label
              htmlFor={`accordion-${i}`}
              className="flex hover:text-ACCENT z-10 relative justify-between items-center w-full text-left cursor-pointer"
            >
              <h2 className="text-md font-semibold">{e.title}</h2>
            </label>
            <IoChevronDownOutline className="text-xl absolute top-0.5 right-0 transform transition-transform duration-200 peer-checked:rotate-180" />
            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
              <p className="text-sm pt-2">{e.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevAccordionV2;
