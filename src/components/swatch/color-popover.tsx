//TSX code
"use client";
import React from "react";
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";

type PopoverProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  closeIcon?: boolean;
  place?: "top" | "bottom" | "left" | "right";
};
const ColorPopover = ({
  children,
  button,
  closeIcon,
  place = "bottom",
}: PopoverProps) => {
  return(
    <Root>
    <Trigger asChild>{button}</Trigger>
    <Portal>
      <Content
        side={place}
        sideOffset={2}
        className={`*:!border-0 origin-[var(--radix-popover-content-transform-origin)] z-50 showPopover rounded-lg bg-[#F5F8FF] dark:bg-[#1f2937] border border-[#06b6d4]/30 ${
          closeIcon && "pt-4"
        }`}
      >
        {closeIcon && (
          <Close className="text-[#06b6d4] rounded-full p-0.5 absolute top-0.5 right-0.5 text-sm">
            🗙
          </Close>
        )}
        {children}
      </Content>
    </Portal>
  </Root>
  )
};

export default ColorPopover;
