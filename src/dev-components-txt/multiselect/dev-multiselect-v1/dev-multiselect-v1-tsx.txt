import React from "react";
import Select, { Props as ReactSelectProps } from "react-select";

type DevMultiselectV1Props = Omit<
  ReactSelectProps,
  "isMulti" | "classNames" | "className"
>;

const DevMultiselectV1: React.FC<DevMultiselectV1Props> = (props) => {
  return (
    <div className="max-w-sm w-full">
      <Select
        {...props}
        isMulti
        className="bg-LIGHT w-full rounded-xl border border-ACCENT outline-0 dark:bg-DARK has-[:focus]:ring ring-ACCENT/50 transition-all "
        classNames={{
          control: () => "!ring-0 !rounded-none !border-0 !bg-transparent ",
          option: ({ isFocused, isSelected }) =>
            `rounded-lg !cursor-pointer !p-1 !px-2 ${
              isSelected
                ? "!bg-ACCENT text-white"
                : isFocused
                ? "!bg-ACCENT/20 !text-ACCENT"
                : ""
            }`,
          menu: () => "!bg-LIGHT dark:!bg-DARK !rounded-xl p-1.5",
          menuList: () => "space-y-1",
          singleValue: () => "!text-black dark:!text-white",
          input: () => "!text-black dark:!text-white",
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => "!text-ACCENT !cursor-pointer",
          multiValue: () => "!bg-ACCENT/20 !rounded-lg !text-ACCENT",
          multiValueLabel: () => "!text-ACCENT",
          multiValueRemove: () => "!bg-ACCENT/20 !rounded-r-lg !text-ACCENT",
        }}
      />
    </div>
  );
};

export default DevMultiselectV1;
