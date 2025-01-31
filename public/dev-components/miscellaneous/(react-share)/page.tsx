"use client";
import React from "react";
import ReactShare from "./react-share";

const ReactShareUsage = () => {
  return (
    <div>
      <h2 className="ml-1 font-semibold">Share the component</h2>
      <ReactShare
        size={37}
        defaultUrl="https://dev-components.vercel.app/"
        onChange={(url) => console.log(url)}
      />
    </div>
  );
};

export default ReactShareUsage;
