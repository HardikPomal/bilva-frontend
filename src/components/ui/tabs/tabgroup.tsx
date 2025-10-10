"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

type ColorVariant = "default" | "primary" | "secondary" | "pending" | "success" | "danger" | "base";
type RadiusVariant = "none" | "lg" | "xl";
type SizeVariant = "xs" | "sm" | "md";

interface Tab {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab?: string;
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  color?: ColorVariant;
  radius?: RadiusVariant;
  size?: SizeVariant;
  className?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  color = "default",
  radius = "xl",
  size = "sm",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || controlledActiveTab || tabs[0]?.id || ""
  );
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const currentActiveTab = controlledActiveTab !== undefined ? controlledActiveTab : activeTab;

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;

    if (controlledActiveTab === undefined) {
      setActiveTab(tabId);
    }
    if (onChange) {
      onChange(tabId);
    }
  };

  // Size configurations
  const sizeClasses = {
    xs: { padding: "p-0.5", gap: "gap-0.5", iconSize: 16, containerPadding: "p-1" },
    sm: { padding: "p-1", gap: "gap-1", iconSize: 16, containerPadding: "p-1" },
    md: { padding: "p-2", gap: "gap-2", iconSize: 16, containerPadding: "p-1" },
  };

  const { padding, gap, iconSize, containerPadding } = sizeClasses[size];

  // Radius configurations
  const radiusClasses = {
    none: { container: "rounded-none", button: "rounded-none" },
    lg: { container: "rounded-lg", button: "rounded-lg" },
    xl: { container: "rounded-xl", button: "rounded-lg" },
  };

  const { container: containerRadius, button: buttonRadius } = radiusClasses[radius];

  // Container background color
  const getContainerBg = () => {
    if (color === "default" || color === "base") {
      return "bg-base-100 dark:bg-dark-base-100";
    }
    return `bg-${color}-100 dark:bg-dark-${color}-100`;
  };

  // Color configurations
  const getTabClasses = (tabId: string, disabled?: boolean) => {
    const isActive = currentActiveTab === tabId;
    const isHovered = hoveredTab === tabId && !isActive && !disabled;

    if (disabled) {
      return {
        bg: "bg-transparent dark:bg-transparent opacity-50",
        text: `text-${color === "default" ? "base" : color}-700 dark:text-dark-${color === "default" ? "base" : color}-700`,
        shadow: "",
      };
    }

    if (isActive) {
      if (color === "default") {
        return {
          bg: "bg-base-50 dark:bg-dark-base-50",
          text: "text-base-950 dark:text-dark-base-950",
          shadow: "shadow-sm",
        };
      } else if (color === "base") {
        return {
          bg: "bg-base-950 dark:bg-dark-base-950",
          text: "text-base-50 dark:text-dark-base-50",
          shadow: "shadow-sm",
        };
      } else {
        return {
          bg: `bg-${color}-500 dark:bg-dark-${color}-500`,
          text: "text-base-50 dark:text-dark-base-50",
          shadow: "shadow-sm",
        };
      }
    }

    if (isHovered) {
      if (color === "default" || color === "base") {
        return {
          bg: "bg-base-200 dark:bg-dark-base-200",
          text: "text-base-800 dark:text-dark-base-800",
          shadow: "",
        };
      } else {
        return {
          bg: `bg-${color}-200 dark:bg-dark-${color}-200`,
          text: `text-${color}-800 dark:text-dark-${color}-800`,
          shadow: "",
        };
      }
    }

    // Default state
    if (color === "default" || color === "base") {
      return {
        bg: "bg-transparent dark:bg-transparent",
        text: "text-base-700 dark:text-dark-base-700",
        shadow: "",
      };
    } else {
      return {
        bg: "bg-transparent dark:bg-transparent",
        text: `text-${color}-700 dark:text-dark-${color}-700`,
        shadow: "",
      };
    }
  };

  return (
    <div
      className={`tab_group flex ${gap} ${containerPadding} ${getContainerBg()} ${containerRadius} w-fit ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const tabClasses = getTabClasses(tab.id, tab.disabled);
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={currentActiveTab === tab.id}
            aria-disabled={tab.disabled}
            disabled={tab.disabled}
            className={`flex ${gap} ${padding} w-fit items-center ${buttonRadius} ${tabClasses.bg} ${tabClasses.shadow} transition-all duration-200 ease-in-out ${
              tab.disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            onMouseEnter={() => !tab.disabled && setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            {tab.icon && (
              <Icon
                icon={tab.icon}
                width={iconSize}
                height={iconSize}
                className={`${tabClasses.text} transition-colors duration-200`}
              />
            )}
            <span className={`label body-text ${tabClasses.text} transition-colors duration-200`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabGroup;