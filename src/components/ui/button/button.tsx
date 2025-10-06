import { Icon } from "@iconify/react";
import React, { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColor =
  | "primary"
  | "secondary"
  | "pending"
  | "success"
  | "danger"
  | "base";
type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  rounded?: ButtonRounded;
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      variant = "solid",
      color = "primary",
      rounded = "md",
      leftIcon,
      rightIcon,
      iconSize = 20,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      xs: "px-1 py-0.5",
      sm: "px-2 py-1",
      md: "px-3 py-2",
      lg: "px-4 py-3",
    };

    // Base rounded classes
    const roundedBaseClasses = {
      none: "rounded-none",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-md",
      xl: "rounded-2xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    };

    // Disabled rounded classes
    const roundedDisabledClasses = {
      none: "disabled:hover:rounded-none cursor-not-allowed",
      sm: "disabled:hover:rounded cursor-not-allowed",
      md: "disabled:hover:rounded-md cursor-not-allowed",
      lg: "disabled:hover:rounded-md cursor-not-allowed",
      xl: "disabled:hover:rounded-2xl cursor-not-allowed",
      "2xl": "disabled:hover:rounded-2xl cursor-not-allowed",
      full: "disabled:hover:rounded-full cursor-not-allowed",
    };

    // Variant-specific color classes
    const variantClasses = {
      solid: {
        primary:
          "text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 disabled:hover:bg-primary-500 dark:text-dark-base-50 dark:bg-dark-primary-500 dark:hover:bg-dark-primary-700 dark:active:bg-dark-primary-800 dark:disabled:hover:bg-dark-primary-500",
        secondary:
          "text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 disabled:hover:bg-secondary-500 dark:text-dark-base-50 dark:bg-dark-secondary-500 dark:hover:bg-dark-secondary-700 dark:active:bg-dark-secondary-800 dark:disabled:hover:bg-dark-secondary-500",
        pending:
          "text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 disabled:hover:bg-pending-500 dark:text-dark-base-50 dark:bg-dark-pending-500 dark:hover:bg-dark-pending-700 dark:active:bg-dark-pending-800 dark:disabled:hover:bg-dark-pending-500",
        success:
          "text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 disabled:hover:bg-success-500 dark:text-dark-base-50 dark:bg-dark-success-500 dark:hover:bg-success-700 dark:active:bg-dark-success-800 dark:disabled:hover:bg-dark-success-500",
        danger:
          "text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 disabled:hover:bg-danger-500 dark:text-dark-base-50 dark:bg-dark-danger-500 dark:hover:bg-dark-danger-700 dark:active:bg-dark-danger-800 dark:disabled:hover:bg-dark-danger-500",
        base: "text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 disabled:hover:bg-base-950 dark:text-dark-base-50 dark:bg-dark-base-950 dark:hover:bg-dark-base-700 dark:active:bg-dark-base-800 dark:disabled:hover:bg-dark-base-950",
      },
      outline: {
        primary:
          "text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:hover:bg-transparent disabled:hover:text-primary-500 dark:text-dark-primary-500 dark:hover:text-dark-primary-700 dark:active:text-dark-primary-800 dark:outline dark:outline-dark-primary-500 dark:hover:outline-dark-primary-700 dark:active:outline-dark-primary-800 dark:bg-transparent dark:hover:bg-dark-primary-100 dark:active:bg-dark-primary-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-primary-500",
        secondary:
          "text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:hover:bg-transparent disabled:hover:text-secondary-500 dark:text-dark-secondary-500 dark:hover:text-dark-secondary-700 dark:active:text-dark-secondary-800 dark:outline dark:outline-dark-secondary-500 dark:hover:outline-dark-secondary-700 dark:active:outline-dark-secondary-800 dark:bg-transparent dark:hover:bg-dark-secondary-100 dark:active:bg-dark-secondary-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-secondary-500",
        pending:
          "text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:hover:bg-transparent disabled:hover:text-pending-500 dark:text-dark-pending-500 dark:hover:text-dark-pending-700 dark:active:text-dark-pending-800 dark:outline dark:outline-dark-pending-500 dark:hover:outline-dark-pending-700 dark:active:outline-dark-pending-800 dark:bg-transparent dark:hover:bg-dark-pending-100 dark:active:bg-dark-pending-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-pending-500",
        success:
          "text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 bg-transparent hover:bg-success-100 active:bg-success-200 disabled:hover:bg-transparent disabled:hover:text-success-500 dark:text-dark-success-500 dark:hover:text-dark-success-700 dark:active:text-dark-success-800 dark:outline dark:outline-dark-success-500 dark:hover:outline-dark-success-700 dark:active:outline-dark-success-800 dark:bg-transparent dark:hover:bg-dark-success-100 dark:active:bg-dark-success-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-success-500",
        danger:
          "text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:hover:bg-transparent disabled:hover:text-danger-500 dark:text-dark-danger-500 dark:hover:text-dark-danger-700 dark:active:text-dark-danger-800 dark:outline dark:outline-dark-danger-500 dark:hover:outline-dark-danger-700 dark:active:outline-dark-danger-800 dark:bg-transparent dark:hover:bg-dark-danger-100 dark:active:bg-dark-danger-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-danger-500",
        base: "text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-950 hover:outline-base-700 active:outline-base-950 bg-transparent hover:bg-base-200 active:bg-base-300 disabled:hover:bg-transparent disabled:hover:text-base-950 dark:text-dark-base-950 dark:hover:text-dark-base-700 dark:active:text-dark-base-950 dark:outline dark:outline-dark-base-950 dark:hover:outline-dark-base-700 dark:active:outline-dark-base-950 dark:bg-transparent dark:hover:bg-dark-base-200 dark:active:bg-dark-base-300 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-base-950",
      },
      ghost: {
        primary:
          "text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:hover:bg-transparent disabled:hover:text-primary-500 dark:text-dark-primary-500 dark:hover:text-dark-primary-700 dark:active:text-dark-primary-800 dark:active:outline-dark-primary-800 dark:bg-transparent dark:hover:bg-dark-primary-100 dark:active:bg-dark-primary-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-primary-500",
        secondary:
          "text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:hover:bg-transparent disabled:hover:text-secondary-500 dark:text-dark-secondary-500 dark:hover:text-dark-secondary-700 dark:active:text-dark-secondary-800 dark:active:outline-dark-secondary-800 dark:bg-transparent dark:hover:bg-dark-secondary-100 dark:active:bg-dark-secondary-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-secondary-500",
        pending:
          "text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:hover:bg-transparent disabled:hover:text-pending-500 dark:text-dark-pending-500 dark:hover:text-dark-pending-700 dark:active:text-dark-pending-800 dark:active:outline-dark-pending-800 dark:bg-transparent dark:hover:bg-dark-pending-100 dark:active:bg-dark-pending-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-pending-500",
        success:
          "text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 bg-transparent hover:bg-success-100 active:bg-success-200 disabled:hover:bg-transparent disabled:hover:text-success-500 dark:text-dark-success-500 dark:hover:text-dark-success-700 dark:active:text-dark-success-800 dark:active:outline-dark-success-800 dark:bg-transparent dark:hover:bg-dark-success-100 dark:active:bg-dark-success-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-success-500",
        danger:
          "text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:hover:bg-transparent disabled:hover:text-danger-500 dark:text-dark-danger-500 dark:hover:text-dark-danger-700 dark:active:text-dark-danger-800 dark:active:outline-dark-danger-800 dark:bg-transparent dark:hover:bg-dark-danger-100 dark:active:bg-dark-danger-200 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-danger-500",
        base: "text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 bg-transparent hover:bg-base-200 active:bg-base-300 disabled:hover:bg-transparent disabled:hover:text-base-950 dark:text-dark-base-950 dark:hover:text-dark-base-700 dark:active:text-dark-base-950 dark:active:outline-dark-base-800 dark:bg-transparent dark:hover:bg-dark-base-200 dark:active:bg-dark-base-300 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-base-950",
      },
    };

    // Special handling for outline variant disabled rounded
    const outlineDisabledRounded =
      variant === "outline" && (rounded === "full" || rounded === "2xl")
        ? "disabled:rounded-2xl"
        : roundedDisabledClasses[rounded];

    const classes =
      `${sizeClasses[size]} ${roundedBaseClasses[rounded]} ${outlineDisabledRounded} ${variantClasses[variant][color]} w-fit h-fit flex items-center gap-1 ${className}`.trim();

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {leftIcon && (
          <Icon icon={leftIcon} width={iconSize} height={iconSize} />
        )}
        {children && <span className="p-text">{children}</span>}
        {rightIcon && (
          <Icon icon={rightIcon} width={iconSize} height={iconSize} />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
