import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";
type SelectProps = {
  options: { value: string; label: string }[];
  placeholder?: string;
  labelName?: string;
  contentProps?: Omit<
    React.ComponentProps<typeof Select.Content>,
    "side" | "sideOffset" | "position"
  >;
} & React.ComponentProps<typeof Select.Root>;

// select css
/*
.showOptions {
  animation: optionShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes optionShow {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
*/

const DevSelectV3 = ({
  options,
  labelName,
  placeholder = "Select an option",
  contentProps,
  ...props
}: SelectProps) => {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex outline-0 text-nowrap space-x-2 items-center justify-between w-full p-1.5 px-3 rounded-md bg-LIGHT dark:bg-DARK border focus:ring-[3px] ring-ACCENT/50 transition-all border-ACCENT">
        <Select.Value className="text-white" placeholder={placeholder} />
        <FaChevronDown className="text-sm" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={5}
          className={`z-50 origin-[var(--radix-select-content-transform-origin)] showOptions w-[var(--radix-select-trigger-width)] min-w-[var(--radix-content-available-width)] max-h-48 overflow-hidden bg-LIGHT border border-ACCENT/30 dark:bg-DARK rounded-md shadow-lg ${contentProps?.className}`}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-5 bg-transparent hover:text-ACCENT cursor-pointer">
            <FaChevronDown className="text-sm rotate-180 opacity-80" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              {labelName && (
                <Select.Label className="p-1.5 px-3 text-sm text-ACCENT">
                  {labelName}
                </Select.Label>
              )}
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex mt-0.5 items-center p-1.5 px-3 text-sm rounded select-none hover:!bg-ACCENT/30 focus:bg-ACCENT outline-0 cursor-pointer"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center"></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-5 bg-transparent hover:text-ACCENT cursor-pointer">
            <FaChevronDown className="text-sm opacity-80" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default DevSelectV3;
