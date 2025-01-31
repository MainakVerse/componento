"use client";
import React from "react";
import DevDrawerV2, {
  DrawerTrigger,
} from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";
import DevDropdownV1 from "../(dev-dropdown-v1)/dev-dropdown-v1";

const DevDropdownV2 = ({
  children,
  button,
  position = "bottom",
}) => {
  return window.innerWidth < 768 ? (
    <DevDrawerV2
      isOverlay={false}
      accommodate={true}
      position="bottom"
      openBtn={button}
    >
      <DrawerTrigger>{children}</DrawerTrigger>
    </DevDrawerV2>
  ) : (
    <DevDropdownV1 button={button} position={position}>
      {children}
    </DevDropdownV1>
  );
};

export default DevDropdownV2;
