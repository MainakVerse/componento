// DevAutocompleteV1.tsx
"use client";
import React, { useRef } from "react";
import Downshift, { DownshiftProps } from "downshift";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

type Item = { value: string };
type AutocompleteProps = {
  items: Item[];
  onChange?: (e: Item | null) => void;
  defaultItem?: Item;
  labelName?: string;
} & Omit<
  DownshiftProps<Item>,
  "itemToString" | "initialInputValue" | "onChange"
>;

const DevAutocompleteV1 = ({
  items,
  onChange,
  defaultItem,
  labelName="Select an items",
  ...props
}: AutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Downshift
      onChange={(selectedItem) => {
        onChange?.(selectedItem);
        inputRef.current?.focus();
      }}
      itemToString={(item) => item?.value ?? ""}
      initialInputValue={defaultItem?.value}
      {...props}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        const inputProps = getInputProps({
          ref: inputRef,
        });

        return (
          <div>
            <DevPopoverV1
              contentProps={{
                sideOffset: 2,
                autoFocus: false,
                className: "w-[var(--radix-popover-trigger-width)]",
                onOpenAutoFocus: (e) => {
                  e.preventDefault();
                  inputRef.current?.focus();
                },
                onCloseAutoFocus: (e) => {
                  e.preventDefault();
                  inputRef.current?.focus();
                },
              }}
              open={isOpen}
              onOpenChange={(open) => {
                if (open) {
                  inputRef.current?.focus();
                }
              }}
              button={
                <label className="flex flex-col" {...getLabelProps()}>
                  <p className="text-sm">{labelName}</p>
                  <input
                    className="p-1 px-3 mt-1 rounded-md focus:ring-[3px] transition-all ring-ACCENT/50 !outline-0 border border-ACCENT bg-LIGHT dark:bg-DARK"
                    {...inputProps}
                  />
                </label>
              }
            >
              <ul
                className="w-full border border-ACCENT/30 space-y-1 max-h-52 overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-LIGHT dark:bg-DARK rounded-md overflow-hidden"
                {...getMenuProps()}
              >
                {items
                  .filter(
                    (item) =>
                      !inputValue ||
                      item.value
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <li
                      key={item.value}
                      {...getItemProps({
                        item,
                        index,
                        className: `p-0.5 px-3 cursor-pointer ${
                          highlightedIndex === index && "bg-ACCENT text-white"
                        } ${selectedItem === item && "bg-ACCENT/30"}`,
                      })}
                    >
                      {item.value}
                    </li>
                  ))}
              </ul>
            </DevPopoverV1>
          </div>
        );
      }}
    </Downshift>
  );
};

export default DevAutocompleteV1;
