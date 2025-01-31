import React from "react";

const DevSelectV2 = ({
  options,
  labelName,
  placeholder = "Select an option",
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {labelName && (
        <label className="p-1" htmlFor={labelName?.replace(" ", "-")}>
          {labelName}
        </label>
      )}
      <div className="p-1 w-full has-[:focus]:ring-[3px] transition-all ring-ACCENT/50 rounded-lg !outline-0 border border-ACCENT bg-LIGHT dark:bg-DARK">
        <select
          id={labelName?.replace(" ", "-")}
          {...props}
          className="bg-transparent !outline-0 w-full bg-LIGHT dark:bg-DARK"
        >
          <option value={placeholder} disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DevSelectV2;
