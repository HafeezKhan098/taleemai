import { cn } from "@/lib/utils";
import type { ButtonProps, ButtonSize, ButtonVariant } from "@/types";

const sizeClass: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  ghost:   "btn-ghost",
};

export function Button({
  variant   = "primary",
  size      = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}