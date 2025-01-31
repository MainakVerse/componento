"use client";
import React from "react";
import DevDrawerV2 from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";
import DevPopoverV1 from "../(dev-popover-v1)/dev-popover-v1";

type PopoverProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  position?: "left" | "right" | "top" | "bottom";
};
const DevPopoverV2 = ({ children, button, position="bottom" }: PopoverProps) => {
  return window.innerWidth < 768 ? (
    <DevDrawerV2
      isOverlay={false}
      accommodate={true}
      position="bottom"
      openBtn={button}
    >
      {children}
    </DevDrawerV2>
  ) : (
    <DevPopoverV1
      contentProps={{ sideOffset: 2 }}
      position={position}
      button={button}
    >
      {children}
    </DevPopoverV1>
  );
};

export default DevPopoverV2;
