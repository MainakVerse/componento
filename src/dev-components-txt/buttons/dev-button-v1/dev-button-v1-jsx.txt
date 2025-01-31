import * as React from "react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.9rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    solid: "bg-ACCENT text-white hover:bg-ACCENT/90",
    light: "text-ACCENT hover:bg-ACCENT/50 hover:text-white",
    border: "border text-ACCENT border-2 border-ACCENT",
    flat: "border-ACCENT/5 bg-ACCENT/30 text-ACCENT backdrop-blur-sm",
    ghost:
      "text-ACCENT hover:bg-ACCENT hover:text-white border-2 border-ACCENT",
  },
  sizes: {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 py-2",
    lg: "h-10 px-8",
  },
  roundness: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
  },
  icon: "h-9 w-9 p-0",
};

const DevButtonV1 = React.forwardRef(
  (
    {
      className,
      variant = "solid",
      size = "md",
      rounded = "md",
      asIcon = false,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(
      buttonStyles.base,
      buttonStyles.variants[variant],
      asIcon ? buttonStyles.icon : buttonStyles.sizes[size],
      buttonStyles.roundness[rounded],
      className
    );

    if ("href" in props) {
      return <a className={buttonClasses} {...props} ref={ref} />;
    }

    return <button className={buttonClasses} {...props} ref={ref} />;
  }
);

DevButtonV1.displayName = "DevButton";

export default DevButtonV1;
