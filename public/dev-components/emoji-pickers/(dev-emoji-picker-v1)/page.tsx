"use client";
import React from "react";
import DevEmojiPickerV1 from "./dev-emoji-picker-v1";

const DevEmojiPickerV1Usage = () => {
  return <DevEmojiPickerV1 onSelect={(e) => console.log(e)} />;
};

export default DevEmojiPickerV1Usage;
