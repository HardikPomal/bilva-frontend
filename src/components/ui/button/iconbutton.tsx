import { Icon } from "@iconify/react";
import React, { ButtonHTMLAttributes } from "react";

type IconButtonSize = "xs" | "sm" | "md" | "lg";
type IconButtonVariant = "solid" | "outline" | "ghost";
type IconButtonColor =
  | "primary"
  | "secondary"
  | "pending"
  | "success"
  | "danger"
  | "base";
type IconButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface BaseIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  color?: IconButtonColor;
  rounded?: IconButtonRounded;
}

interface IconButtonWithIcon extends BaseIconButtonProps {
  icon: string;
  label?: never;
  iconSize?: number;
}

interface IconButtonWithLabel extends BaseIconButtonProps {
  label: string;
  icon?: never;
  iconSize?: never;
}

type IconButtonProps = IconButtonWithIcon | IconButtonWithLabel;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      size = "md",
      variant = "solid",
      color = "primary",
      rounded = "md",
      className = "",
      disabled,
      ...restProps
    } = props;

    // Type guard and extract icon/label
    const icon = "icon" in props ? props.icon : undefined;
    const label = "label" in props ? props.label : undefined;
    const iconSize = "icon" in props ? props.iconSize : undefined;

    // Validate label length
    if (label && label.length > 2) {
      console.error("IconButton label must be maximum 2 characters");
      return null;
    }

    // Size classes with max width and height
    const sizeClasses = {
      xs: "size-7 min-w-7",
      sm: "size-8 min-w-8",
      md: "size-10 min-w-10",
      lg: "size-12 min-w-12",
    };

    // Icon sizes based on button size (if not explicitly provided)
    const defaultIconSizes = {
      xs: 20,
      sm: 20,
      md: 24,
      lg: 24,
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
        base: "text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 bg-transparent hover:bg-base-200 active:bg-base-300 disabled:hover:bg-transparent disabled:hover:text-base-950 dark:text-dark-base-950 dark:hover:text-dark-base-700 dark:active:text-dark-base-950 dark:outline dark:outline-dark-base-500 dark:hover:outline-dark-base-700 dark:active:outline-dark-base-800 dark:bg-transparent dark:hover:bg-dark-base-200 dark:active:bg-dark-base-300 dark:disabled:hover:bg-transparent dark:disabled:hover:text-dark-base-950",
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
      `${sizeClasses[size]} ${roundedBaseClasses[rounded]} ${outlineDisabledRounded} ${variantClasses[variant][color]} flex items-center justify-center ${className}`.trim();

    const finalIconSize = iconSize ?? defaultIconSizes[size];

    return (
      <button ref={ref} className={classes} disabled={disabled} {...restProps}>
        {icon && (
          <Icon icon={icon} width={finalIconSize} height={finalIconSize} />
        )}
        {label && <p className="p-text">{label}</p>}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
