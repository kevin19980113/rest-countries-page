import { ComponentProps, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  [
    "cursor-pointer transition-all 0.3s ease hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-slate-900 dark:active:bg-slate-950",
  ],
  {
    variants: {
      type: {
        default: ["rounded-lg"],
        ghost: ["rounded-md"],
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

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
