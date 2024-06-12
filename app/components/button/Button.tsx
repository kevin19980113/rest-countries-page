import { ComponentProps, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva([], {
  variants: {
    type: {
      default: ["rounded-lg bg-primary-100 dark:bg-darkPrimary-800 shadow-md"],
      ghost: [
        "rounded-md hover:bg-primary active:bg-secondary dark:hover:bg-darkPrimary-900 dark:active:bg-darkPrimary-950",
      ],
    },
  },
  defaultVariants: {
    type: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({
  children,
  className,
  type,
  ...props
}: ButtonProps) {
  return (
    <button className={twMerge(buttonStyles({ type }), className)} {...props}>
      {children}
    </button>
  );
}
