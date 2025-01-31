import * as React from "react";

const cn = (...classes: (string | undefined | null | false)[]) => {
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
  icon: "h-9 w-9 p-0"
};

type ButtonBaseProps = {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
  rounded?: keyof typeof buttonStyles.roundness;
  asIcon?: boolean;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">;
type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Link = "a"; // You can change this to import Link from 'next/link' for Next.js

const DevButtonV1 = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
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
      return (
        <Link
          className={buttonClasses}
          {...(props as ButtonAsLink)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        />
      );
    }

    return (
      <button
        className={buttonClasses}
        {...(props as ButtonAsButton)}
        ref={ref as React.Ref<HTMLButtonElement>}
      />
    );
  }
);

DevButtonV1.displayName = "DevButton";

export default DevButtonV1;