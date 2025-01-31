"use client";
import React from "react";
import { Drawer } from "vaul";

export const DrawerTrigger = ({ children }) => {
  return <Drawer.Trigger asChild>{children}</Drawer.Trigger>;
};

export default function DevDrawerV2({
  children = null,
  accommodate = false,
  isOverlay = true,
  title,
  openBtn = null,
  position = "right",
  ...props
}) {
  const getPositionClasses = {
    left: `left-0 inset-y-0 w-72 h-full border-r rounded-r-xl`,
    right: `right-0 inset-y-0 w-72 h-full border-l rounded-l-xl`,
    top: `top-0 left-0 right-0 w-full min-h-[40vh] max-h-[80vh] border-b rounded-b-xl`,
    bottom: `bottom-0 inset-x-0 min-h-[40vh] max-h-[80vh] w-full border-t rounded-t-xl`,
  };
  return (
    <Drawer.Root direction={position} {...props}>
      {/*This Trigger can be used to toggle the drawer anywhere */}
      <Drawer.Trigger asChild>{openBtn}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className={`fixed inset-0 ${
            isOverlay ? "bg-black/50" : "bg-transparent"
          } z-50`}
        />
        <Drawer.Content
          className={`z-50 bg-LIGHT shadow-[0px_200px_0px_0px] dark:shadow-DARK shadow-LIGHT border-ACCENT/50 dark:bg-DARK fixed flex flex-col  ${
            getPositionClasses[position]
          } ${
            accommodate &&
            (position === "top" || position === "bottom") &&
            " !min-h-fit"
          }`}
        >
          {title && (
            <h2 className="border-b p-3 border-ACCENT/50 text-ACCENT font-semibold flex-shrink-0">
              {title}
            </h2>
          )}
          <div className="overflow-y-auto flex-grow h-full">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
