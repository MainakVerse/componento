import React from "react";

const DevToggleV1 = ({ labelName, ...props }) => {
  const toggleSize = {
    width: 3,
    height: 1.5,
  };
  return (
    <>
      <div
        style={{
          width: `${toggleSize.width}rem`,
          height: `${toggleSize.height}rem`,
        }}
        className={`
          "p-1 rounded-full relative grid ",
         ${props.checked || props.defaultChecked ? "bg-ACCENT" : "bg-ACCENT/50"}
        `}
      >
        <input
          type="checkbox"
          {...props}
          className="opacity-0 absolute cursor-pointer inset-0"
          id={labelName || "toggleBox"}
        />
        <span
          className="h-full absolute dark:bg-LIGHT bg-DARK aspect-square pointer-events-none transition-all duration-400 rounded-full"
          style={{
            transform:
              props.checked || props.defaultChecked
                ? `translateX(${
                    toggleSize.width - toggleSize.height
                  }rem) scale(0.7)`
                : "scale(0.7)",
          }}
        />
      </div>
      {labelName && (
        <label htmlFor={labelName || "toggleBox"}>{labelName}</label>
      )}
    </>
  );
};

export default DevToggleV1;
