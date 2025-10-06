"use client";

import { Icon } from "@iconify/react";
import React from "react";

type BadgeVariant = "filled" | "duo";
type BadgeColor =
  | "primary"
  | "secondary"
  | "pending"
  | "success"
  | "danger"
  | "base";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  label: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = "filled",
  color = "primary",
  leftIcon,
  rightIcon,
  iconSize = 20,
  label,
  className = "",
  ...props
}) => {
  // Map variants to CSS variable tokens
  const bgVar =
    variant === "filled"
      ? `var(--badge-filled-bg-${color})`
      : `var(--badge-duo-bg-${color})`;

  const labelVar =
    variant === "filled"
      ? `var(--badge-filled-label)`
      : `var(--badge-duo-label-${color})`;

  const style: React.CSSProperties = {
    backgroundColor: bgVar,
    color: labelVar,
  };

  const baseClasses = `inline-flex items-center justify-center gap-1 px-1 py-0.5 rounded-lg w-fit h-fit ${className}`.trim();

  return (
    <div className={baseClasses} style={style} {...props}>
      {leftIcon && <Icon icon={leftIcon} width={iconSize} height={iconSize} />}
      <span className="">{label}</span>
      {rightIcon && <Icon icon={rightIcon} width={iconSize} height={iconSize} />}
    </div>
  );
};

export default Badge;
