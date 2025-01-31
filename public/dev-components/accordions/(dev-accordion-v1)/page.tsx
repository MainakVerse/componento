import React from "react";
import DevAccordionV1 from "./dev-accordion-v1";

const DevAccordionV1Usage = () => {
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
      <DevAccordionV1 type="single" AccordData={AccordData} />
    </div>
  );
};

export default DevAccordionV1Usage;
