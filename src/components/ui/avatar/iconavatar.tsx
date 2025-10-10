import { Icon } from "@iconify/react";
import React from "react";

interface IconAvatarProps {
  color?:
    | "default"
    | "base"
    | "primary"
    | "secondary"
    | "success"
    | "pending"
    | "danger";
  variant?: "solid" | "outline-solid" | "outline-dashed";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "full" | "lg";
  icon?: string;
  badge?: boolean | number;
  online?: boolean;
  offline?: boolean;
  assignable?: boolean;
}

const IconAvatar: React.FC<IconAvatarProps> = ({
  color = "default",
  variant = "solid",
  size = "md",
  rounded = "full",
  icon = "fluent:person-20-regular",
  badge = false,
  online = false,
  offline = false,
  assignable = false,
}) => {
  // Size configurations
  const sizeConfig = {
    xs: {
      padding: "p-0.5",
      iconSize: 20,
      badgeSize: "size-2",
      badgePosition: "-top-0.5 -right-0.5",
      statusSize: "size-2",
      statusPosition: "-bottom-0.5 -right-0.5",
      assignSize: "size-5",
      assignPosition: "-bottom-2 -right-2",
      badgeCountSize: "size-5",
      badgeCountPosition: "-top-2 -right-2",
    },
    sm: {
      padding: "p-1",
      iconSize: 20,
      badgeSize: "size-2.5",
      badgePosition: "-top-0.5 -right-0.5",
      statusSize: "size-2.5",
      statusPosition: "-bottom-0.5 -right-0.5",
      assignSize: "size-5",
      assignPosition: "-bottom-2 -right-2",
      badgeCountSize: "size-5",
      badgeCountPosition: "-top-2 -right-2",
    },
    md: {
      padding: "p-2",
      iconSize: 20,
      badgeSize: "size-5",
      badgePosition: "-top-2 -right-2",
      statusSize: "size-2",
      statusPosition: "bottom-0 right-0",
      assignSize: "size-5",
      assignPosition: "-bottom-1 -right-1",
      badgeCountSize: "size-5",
      badgeCountPosition: "-top-2 -right-2",
    },
    lg: {
      padding: "p-3",
      iconSize: 20,
      badgeSize: "size-5",
      badgePosition: "-top-1 -right-1",
      statusSize: "size-3",
      statusPosition: "bottom-0 right-0",
      assignSize: "size-5",
      assignPosition: "-bottom-1 -right-1",
      badgeCountSize: "size-5",
      badgeCountPosition: "-top-1 -right-1",
    },
    xl: {
      padding: "p-4",
      iconSize: 20,
      badgeSize: "size-5",
      badgePosition: "-top-1 -right-1",
      statusSize: "size-3.5",
      statusPosition: "bottom-0 right-0",
      assignSize: "size-5",
      assignPosition: "-bottom-1 -right-1",
      badgeCountSize: "size-5",
      badgeCountPosition: "-top-1 -right-1",
    },
  };

  const hasBadgeCount = typeof badge === "number";
  const badgeCount = hasBadgeCount ? badge : undefined;

  // Color configurations with hover classes
  const getColorClasses = () => {
    const colorMap = {
      default: {
        solid: {
          bg: "bg-base-500 dark:bg-dark-base-500 hover:bg-base-700 dark:hover:bg-dark-base-700",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-base-500 dark:outline-dark-base-500 hover:outline-base-950 dark:hover:outline-dark-base-950 bg-transparent",
          icon: "text-base-500 dark:text-dark-base-500 group-hover:text-base-950 dark:group-hover:text-dark-base-950",
        },
        dashed: {
          bg: "border border-dashed border-base-500 dark:border-dark-base-500 hover:border-base-950 dark:hover:border-dark-base-950 bg-transparent",
          icon: "text-base-500 dark:text-dark-base-500 group-hover:text-base-950 dark:group-hover:text-dark-base-950",
        },
      },
      base: {
        solid: {
          bg: "bg-base-950 dark:bg-dark-base-950 hover:bg-base-700 dark:hover:bg-dark-base-700",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-base-950 dark:outline-dark-base-950 hover:outline-base-500 dark:hover:outline-dark-base-500 bg-transparent",
          icon: "text-base-950 dark:text-dark-base-950 group-hover:text-base-800 dark:group-hover:text-dark-base-800",
        },
        dashed: {
          bg: "border border-dashed border-base-950 dark:border-dark-base-950 hover:border-base-500 dark:hover:border-dark-base-500 bg-transparent",
          icon: "text-base-950 dark:text-dark-base-950 group-hover:text-base-800 dark:group-hover:text-dark-base-800",
        },
      },
      primary: {
        solid: {
          bg: "bg-primary-600 dark:bg-dark-primary-600 hover:bg-primary-800 dark:hover:bg-dark-primary-800",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-primary-600 dark:outline-dark-primary-600 hover:outline-primary-800 dark:hover:outline-dark-primary-800 bg-transparent",
          icon: "text-primary-600 dark:text-dark-primary-600 group-hover:text-primary-800 dark:group-hover:text-dark-primary-800",
        },
        dashed: {
          bg: "border border-dashed border-primary-600 dark:border-dark-primary-600 hover:border-primary-800 dark:hover:border-dark-primary-800 bg-transparent",
          icon: "text-primary-600 dark:text-dark-primary-600 group-hover:text-primary-800 dark:group-hover:text-dark-primary-800",
        },
      },
      secondary: {
        solid: {
          bg: "bg-secondary-600 dark:bg-dark-secondary-600 hover:bg-secondary-800 dark:hover:bg-dark-secondary-800",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-secondary-600 dark:outline-dark-secondary-600 hover:outline-secondary-800 dark:hover:outline-dark-secondary-800 bg-transparent",
          icon: "text-secondary-600 dark:text-dark-secondary-600 group-hover:text-secondary-800 dark:group-hover:text-dark-secondary-800",
        },
        dashed: {
          bg: "border border-dashed border-secondary-600 dark:border-dark-secondary-600 hover:border-secondary-800 dark:hover:border-dark-secondary-800 bg-transparent",
          icon: "text-secondary-600 dark:text-dark-secondary-600 group-hover:text-secondary-800 dark:group-hover:text-dark-secondary-800",
        },
      },
      success: {
        solid: {
          bg: "bg-success-600 dark:bg-dark-success-600 hover:bg-success-800 dark:hover:bg-dark-success-800",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-success-600 dark:outline-dark-success-600 hover:outline-success-800 dark:hover:outline-dark-success-800 bg-transparent",
          icon: "text-success-600 dark:text-dark-success-600 group-hover:text-success-800 dark:group-hover:text-dark-success-800",
        },
        dashed: {
          bg: "border border-dashed border-success-600 dark:border-dark-success-600 hover:border-success-800 dark:hover:border-dark-success-800 bg-transparent",
          icon: "text-success-600 dark:text-dark-success-600 group-hover:text-success-800 dark:group-hover:text-dark-success-800",
        },
      },
      pending: {
        solid: {
          bg: "bg-pending-600 dark:bg-dark-pending-600 hover:bg-pending-800 dark:hover:bg-dark-pending-800",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-pending-600 dark:outline-dark-pending-600 hover:outline-pending-800 dark:hover:outline-dark-pending-800 bg-transparent",
          icon: "text-pending-600 dark:text-dark-pending-600 group-hover:text-pending-800 dark:group-hover:text-dark-pending-800",
        },
        dashed: {
          bg: "border border-dashed border-pending-600 dark:border-dark-pending-600 hover:border-pending-800 dark:hover:border-dark-pending-800 bg-transparent",
          icon: "text-pending-600 dark:text-dark-pending-600 group-hover:text-pending-800 dark:group-hover:text-dark-pending-800",
        },
      },
      danger: {
        solid: {
          bg: "bg-danger-600 dark:bg-dark-danger-600 hover:bg-danger-800 dark:hover:bg-dark-danger-800",
          icon: "text-base-50 dark:text-dark-base-50",
        },
        outline: {
          bg: "outline outline-danger-600 dark:outline-dark-danger-600 hover:outline-danger-800 dark:hover:outline-dark-danger-800 bg-transparent",
          icon: "text-danger-600 dark:text-dark-danger-600 group-hover:text-danger-800 dark:group-hover:text-dark-danger-800",
        },
        dashed: {
          bg: "border border-dashed border-danger-600 dark:border-dark-danger-600 hover:border-danger-800 dark:hover:border-dark-danger-800 bg-transparent",
          icon: "text-danger-600 dark:text-dark-danger-600 group-hover:text-danger-800 dark:group-hover:text-dark-danger-800",
        },
      },
    };

    const colorClasses = colorMap[color];
    let bgClass = "";
    let iconColorClass = "";

    if (variant === "solid") {
      bgClass = colorClasses.solid.bg;
      iconColorClass = colorClasses.solid.icon;
    } else if (variant === "outline-solid") {
      bgClass = colorClasses.outline.bg;
      iconColorClass = colorClasses.outline.icon;
    } else if (variant === "outline-dashed") {
      bgClass = colorClasses.dashed.bg;
      iconColorClass = colorClasses.dashed.icon;
    }

    return { bgClass, iconColorClass };
  };

  const config = sizeConfig[size];
  const { bgClass, iconColorClass } = getColorClasses();
  const roundedClass = rounded === "full" ? "rounded-full" : "rounded-lg";

  return (
    <div className="relative w-fit group">
      <div className={`avatar ${bgClass} ${config.padding} ${roundedClass} transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer`}>
        <Icon
          icon={icon}
          width={config.iconSize}
          height={config.iconSize}
          className={`${iconColorClass} transition-colors duration-200`}
        />
      </div>

      {/* Badge (simple dot or with count) */}
      {badge && !badgeCount && (
        <span
          className={`${config.badgeSize} bg-danger-500 dark:bg-dark-danger-500 rounded-full absolute ${config.badgePosition}`}
        ></span>
      )}

      {/* Badge with count */}
      {badgeCount && (
        <span
          className={`${config.badgeCountSize} bg-danger-500 dark:bg-dark-danger-500 rounded-full absolute ${config.badgeCountPosition} p-px flex items-center justify-center`}
        >
          <span className="text-base-50 dark:text-dark-base-50 body-text">
            {badgeCount}
          </span>
        </span>
      )}

      {/* Online status */}
      {online && (
        <span
          className={`${config.statusSize} bg-success-500 dark:bg-dark-success-500 outline outline-base-50 dark:outline-dark-base-50 rounded-full absolute ${config.statusPosition}`}
        ></span>
      )}

      {/* Offline status */}
      {offline && (
        <span
          className={`${config.statusSize} bg-base-400 dark:bg-dark-base-400 outline outline-base-50 dark:outline-dark-base-50 rounded-full absolute ${config.statusPosition}`}
        ></span>
      )}

      {/* Assign icon (only visible on hover if assignable) */}
      {assignable && (
        <span
          className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${config.assignSize} bg-danger-500 dark:bg-dark-danger-500 rounded-full absolute ${config.assignPosition} flex items-center justify-center`}
        >
          <Icon
            icon="fluent:add-16-filled"
            width={16}
            height={16}
            className="text-base-50 dark:text-dark-base-50"
          />
        </span>
      )}
    </div>
  );
};

export default IconAvatar;