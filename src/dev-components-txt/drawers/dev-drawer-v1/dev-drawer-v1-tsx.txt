"use client";
import React, { forwardRef, useImperativeHandle, useState, Ref } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

type DevDrawerProps = {
  openBtn: React.ReactNode;
  children: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  closeIcon?: boolean;
  title?: string;
};

export type DevDrawerRef = {
  setDrawer: (newState: boolean) => void;
};

const DevDrawerV1 = forwardRef<DevDrawerRef, DevDrawerProps>(
  (
    { children, closeIcon = false, position = "right", openBtn, title },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const extraCss = {
      right: "border-l",
      left: "border-r",
      top: "border-b",
      bottom: "border-t",
    };

    // This will help to set the state of the drawer from parent component
    useImperativeHandle(ref, () => ({
      setDrawer: (newState) => {
        setOpen(newState);
      },
    }));

    return (
      <>
        <div onClick={() => setOpen(true)}>{openBtn}</div>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          direction={position}
          duration={200}
          style={{ padding: 0, backgroundColor: "transparent" }}
          className={`!bg-LIGHT flex flex-col relative ${extraCss[position]} dark:!bg-DARK border-ACCENT/50 overflow-hidden`}
        >
          {title && (
            <h2 className="border-b flex-shrink-0 p-3 border-ACCENT/50">
              {title}
            </h2>
          )}
          {!closeIcon && (
            <button
              className="absolute top-0 right-0 text-xl !p-0.5 text-ACCENT/50 hover:text-ACCENT"
              onClick={() => setOpen(false)}
              aria-label="Close drawer"
            >
              🗙
            </button>
          )}
          <div className="flex-grow overflow-auto">{children}</div>
        </Drawer>
      </>
    );
  }
);

export default DevDrawerV1;
