import React from "react";
import ComponentDataArray from "../../../public/component-data-array";
import countComponents from "@/utils/count-components";
import ComponentCard from "./component-card";

const RenderComponents = () => {
  return ComponentDataArray.map((item: any, index:number) => (
    <ComponentCard
      key={index}
      name={item.name}
      image={item.image}
      componentsNo={countComponents(item.componentData)}
      description={item.description}
    />
  ));
};

export default RenderComponents;
