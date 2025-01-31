import React from "react";
import DevAccordionV2 from "./dev-accordion-v2";

const DevAccordionV2Usage = () => {
  const AccordData = [
    {
      title: "Accordion #1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
  ];
  return (
    <div className="md:max-w-xl w-full ">
      <DevAccordionV2 AccordData={AccordData} />
    </div>
  );
};

export default DevAccordionV2Usage;

