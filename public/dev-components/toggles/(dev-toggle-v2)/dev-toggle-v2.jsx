import React from "react";

const DevToggleV2 = ({ labelName, ...props }) => {
  const toggleSize = {
    width: 3,
    height: 1.5,
  };
  return (
    <>
      <div
        style={{
          width: toggleSize.width + "rem",
          height: toggleSize.height + "rem",
        }}
        className="p-1 relative grid items-center"
      >
        <hr
          className={`
            ${props.checked || props.defaultChecked ? "bg-ACCENT" : "bg-ACCENT/50"}
            " w-full rounded-full border-none "
          `}
          style={{
            height: toggleSize.height + 50 + "%",
          }}
        />
        <input
          type="checkbox"
          {...props}
          className="opacity-0 absolute cursor-pointer inset-0"
          id={labelName || "toggleBox"}
        />
        <span
          className="h-full absolute bg-DARK dark:bg-LIGHT border-2 border-ACCENT aspect-square pointer-events-none transition-all duration-400 rounded-full"
          style={{
            transform:
              props.checked || props.defaultChecked
                ? "translateX(" +
                  (toggleSize.width - toggleSize.height) +
                  "rem)"
                : "none",
          }}
        />
      </div>
      {labelName && (
        <label htmlFor={labelName || "toggleBox"}>{labelName}</label>
      )}
    </>
  );
};

export default DevToggleV2;
