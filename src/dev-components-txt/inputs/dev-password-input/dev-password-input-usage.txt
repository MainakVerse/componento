"use client";
import React from "react";
import DevPasswordInput from "./dev-password-input";

const DevPasswordInputUsage = () => {
  return (
    <DevPasswordInput
      onChange={(e) => console.log(e.target.value)}
      placeholder="Enter Password"
    />
  );
};

export default DevPasswordInputUsage;
