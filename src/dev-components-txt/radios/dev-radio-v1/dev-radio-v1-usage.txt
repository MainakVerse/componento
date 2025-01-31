"use client";
import React  from "react";
import DevRadioV1 from "./dev-radio-v1";

const DevRadioV1Usage = () => {
  const options=[{value:"reactjs", label:"React Js"}, {value:"angular", label:"Angular"}, {value:"vuejs", label:"Vue Js"}]

  return (
      <DevRadioV1
        options={options}
        className="flex gap-2 flex-col"
        defaultValue={options[1].value}
        onValueChange={(e) => console.log(e)}
      />
  );
};

export default DevRadioV1Usage;
