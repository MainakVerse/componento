import React from "react";
import * as Popover from "@radix-ui/react-popover";

//   /* Popover animation  */
// .showPopover{
//   animation: popoverShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// @keyframes popoverShow {
//   from {
//     opacity: 0;
//     transform:scale(0.9);
//   }
//   to {
//     opacity: 1;
//     transform:scale(1);
//   }
// }
const DevPopoverV1= ({
  children,
  button,
  contentProps,
  position = "bottom",
  ...props
}) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>{button}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={position}
          className={`outline-0 origin-[var(--radix-popover-content-transform-origin)] z-50 showPopover rounded-lg bg-LIGHT dark:bg-DARK border border-ACCENT/30 ${contentProps?.className}`}
          {...contentProps}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DevPopoverV1;
