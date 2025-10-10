"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  controlledChecked?: boolean;
  readOnlyControlled?: boolean;
  size?: "sm" | "md";
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled = false,
  controlledChecked,
  readOnlyControlled,
  size = "md",
  className = "",
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(!!props.checked);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setChecked(controlledChecked);
    }
  }, [controlledChecked]);

  useEffect(() => {
    if (props.checked !== undefined && controlledChecked === undefined) {
      setChecked(!!props.checked);
    }
  }, [props.checked, controlledChecked]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      
      if (disabled || readOnlyControlled || checked) return;
      
      const newChecked = true;
      
      if (controlledChecked === undefined) {
        setChecked(newChecked);
      }

      if (onChange) {
        const fakeEvent = {
          target: { 
            checked: newChecked,
            name: props.name,
            value: props.value 
          },
          preventDefault: () => {},
          stopPropagation: () => {}
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(fakeEvent);
      }
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (disabled || readOnlyControlled || checked) return;
    
    const newChecked = true;
    
    if (controlledChecked === undefined) {
      setChecked(newChecked);
    }

    if (onChange) {
      const fakeEvent = {
        target: { 
          checked: newChecked,
          name: props.name,
          value: props.value 
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    }
  };

  const isChecked = controlledChecked !== undefined ? controlledChecked : checked;

  // Size configurations
  const iconSize = size === "sm" ? 20 : 24;
  const iconClass = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const padding = size === "sm" ? "p-1" : "p-2";

  // Icon selection
  const getIconName = () => {
    const sizePrefix = size === "sm" ? "20" : "24";
    if (isChecked) {
      return `fluent:radio-button-${sizePrefix}-filled`;
    }
    return `fluent:radio-button-${sizePrefix}-regular`;
  };

  // Background color logic
  const getBackgroundColor = () => {
    if (disabled) return "bg-transparent dark:bg-transparent";
    if (isPressed) {
      if (isChecked) {
        return "bg-primary-200 dark:bg-dark-primary-200";
      }
      return "bg-base-300 dark:bg-dark-base-300";
    }
    if (isHovered) {
      if (isChecked) {
        return "bg-primary-100 dark:bg-dark-primary-100";
      }
      return "bg-base-200 dark:bg-dark-base-200";
    }
    return "bg-transparent dark:bg-transparent";
  };

  // Icon color logic
  const getIconColor = () => {
    if (isChecked) {
      return "text-primary-500 dark:text-dark-primary-500";
    }
    return "text-base-950 dark:text-dark-base-950";
  };

  // Label color logic
  const getLabelColor = () => {
    if (isChecked) {
      return "text-primary-500 dark:text-dark-primary-500";
    }
    return "text-base-950 dark:text-dark-base-950";
  };

  return (
    <label
      className={`flex items-center gap-2 w-fit ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } select-none`}
    >
      <input
        type="radio"
        checked={isChecked}
        disabled={disabled}
        onChange={() => {}}
        className="sr-only"
        id={props.id}
        name={props.name}
        {...props}
      />
      <div
        role="radio"
        tabIndex={disabled ? -1 : 0}
        aria-checked={isChecked ? "true" : "false"}
        aria-disabled={disabled ? "true" : "false"}
        className={`${padding} flex items-center justify-center rounded-full transition-all ${getBackgroundColor()} ${
          readOnlyControlled ? "cursor-default" : ""
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${className}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => !disabled && !readOnlyControlled && setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => !disabled && !readOnlyControlled && setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        <Icon
          icon={getIconName()}
          width={iconSize}
          height={iconSize}
          className={`${iconClass} ${getIconColor()}`}
        />
      </div>
      {label && (
        <p className={`label ${getLabelColor()}`}>
          {label}
        </p>
      )}
    </label>
  );
};

export default RadioButton;

interface RadioGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "md",
  orientation = "vertical",
  className = "",
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || controlledValue || ""
  );

  useEffect(() => {
    if (controlledValue !== undefined) {
      setSelectedValue(controlledValue);
    }
  }, [controlledValue]);

  const handleChange = (optionValue: string) => {
    if (controlledValue === undefined) {
      setSelectedValue(optionValue);
    }
    if (onChange) {
      onChange(optionValue);
    }
  };

  const currentValue = controlledValue !== undefined ? controlledValue : selectedValue;

  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"
      } ${orientation === "vertical" ? "gap-3" : "gap-4"} ${className}`}
      role="radiogroup"
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          name={name}
          value={option.value}
          size={size}
          disabled={option.disabled}
          controlledChecked={currentValue === option.value}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </div>
  );
};