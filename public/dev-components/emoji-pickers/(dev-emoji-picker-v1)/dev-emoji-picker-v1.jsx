"use client";
import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";
const DevEmojiPickerV1 = ({
  onSelect,
}) => {
  return (
    <DevPopoverV1
      button={
        <button className="p-1 rounded-full px-3 bg-ACCENT/40 outline outline-ACCENT active:scale-90 transition-all">
          😊 Select Emojis
        </button>
      }
    >
      <Picker data={data} onEmojiSelect={(e) => onSelect(e.native)} />
    </DevPopoverV1>
  );
};

export default DevEmojiPickerV1;
