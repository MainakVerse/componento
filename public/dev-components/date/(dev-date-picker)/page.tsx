'use client'
import React from "react";
import DevDatePicker from "./dev-date-picker";

const DevDatePickerUsage = () => {
  return (
    <DevDatePicker
      defaultValue={new Date()}
      onChange={(date) => console.log(date)}
    />
  );
};

export default DevDatePickerUsage;
