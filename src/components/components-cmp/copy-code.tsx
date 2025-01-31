"use client";
import React from "react";

type copyCodeProps = {
  textToCopy: string;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const CopyCode = ({ textToCopy, setCopied, children }: copyCodeProps) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return <span onClick={handleCopy}>{children}</span>;
};

export default CopyCode;
