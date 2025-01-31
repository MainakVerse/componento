"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
type DropDownProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  contentProps?: Omit<
    React.ComponentProps<typeof DropdownMenu.Content>,
    "side"
  >;
} & React.ComponentProps<typeof DropdownMenu.Root>;
//   /* Dropdown CSS animation  */
// .showDropDown{
//   animation: dropDownShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// @keyframes dropDownShow {
//   from {
//     opacity: 0;
//     transform:scale(0.9);
//   }
//   to {
//     opacity: 1;
//     transform:scale(1);
//   }
// }

const DevDropdownV1 = ({
  children,
  button,
  position = "bottom",
  contentProps,
  ...props
}: DropDownProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className="outline-0" asChild>
        {button}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          {...contentProps}
          sideOffset={3}
          side={position}
          className={`bg-LIGHT origin-[var(--radix-dropdown-menu-content-transform-origin)] z-50 showDropDown dark:bg-DARK rounded-lg border-ACCENT/30 border ${contentProps?.className}`}
        >
          <DropdownMenu.Item className="outline-0" asChild>
            {children}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DevDropdownV1;
