"use client";
import React, { useState } from "react";

const DevClipboardV1 = ({
  textClip,
  beforeCopy = "Copy",
  afterCopy = "Copied",
  className,
}) => {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textClip);
      if (setCopy) {
        setCopy(true);
        setTimeout(() => setCopy(false), 1000); // Reset copied state after 1 seconds
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button className={className} onClick={copyToClipboard}>
      {copy ? afterCopy : beforeCopy}
    </button>
  );
};

export default DevClipboardV1;
