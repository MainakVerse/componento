import React, { forwardRef } from "react";

const DevInputV1 = forwardRef(
  (
    {
      variant = "base",
      size = "md",
      labelName,
      className,
      icon,
      rounded = "full",
      reverseIcon = false,
      ...props
    },
    ref
  ) => {
    const commonStyle = `w-full flex border border-ACCENT transition-all ring-ACCENT/50 items-center ${
      icon && " gap-2 "
    },
    ${reverseIcon && "flex-row-reverse"}`;

    const inputVariants = {
      base: "bg-LIGHT dark:bg-DARK",
      bordered: "bg-transparent",
      faded: "bg-ACCENT/20 text-ACCENT",
      underline:
        "border-0 !ring-0 !border-ACCENT/50 border-b-4 relative after:content-[''] after:absolute after:h-1 after:bg-ACCENT after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0 has-[:focus]:after:scale-x-100",
    };

    const inputRoundness = {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
      full: "rounded-full",
    };

    const inputSizes = {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    };

    const inputSize = inputSizes[size] || inputSizes.md;
    const inputVariant = inputVariants[variant] || inputVariants.base;
    const inputRound = inputRoundness[rounded] || inputRoundness.full;

    return (
      <div>
        {labelName && (
          <label htmlFor={labelName} className="text-sm block m-1">
            {labelName}
          </label>
        )}

        <div
          className={cn(
            "has-[:focus]:ring",
            inputSize,
            commonStyle,
            inputRound,
            inputVariant,
            className
          )}
        >
          <span className="text-xl text-ACCENT">{icon}</span>
          <input
            ref={ref}
            id={labelName && labelName}
            {...props}
            className="autofill:duration-[5000s] autofill:delay-0 autofill:ease-in-out bg-transparent rounded text-sm outline-0 w-full"
          />
        </div>
      </div>
    );
  }
);

export default DevInputV1;
