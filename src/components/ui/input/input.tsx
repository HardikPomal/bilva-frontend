"use client";
import { useState, InputHTMLAttributes, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useId } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  message?: string;
  leftIcon?: string;
  rightIcon?: string;
  rightIcon2?: string;
  state?: "danger" | "disabled" | "success";
  labelAlignment?: "vertical" | "horizontal";
  variant?: "primary" | "secondary" | "success" | "danger" | "black" | "light";
  onEnterPress?: () => void;

  // Custom size prop
  inputSize?: "default" | "sm";

  // Radius prop
  radius?: "none" | "lg" | "xl";

  // For handling shortcuts
  shortcutKey?: string;
  onShortcutPress?: () => void;

  // For visual display
  shortcutBase?: string;
  shortcutKeyDisplay?: string;
}

// ✅ Helper: matches key combos like "ctrl+k" or "alt+shift+s"
const matchShortcut = (e: KeyboardEvent, shortcut?: string) => {
  if (!shortcut) return false;
  const keys = shortcut.toLowerCase().split("+");

  const ctrl = keys.includes("ctrl") ? e.ctrlKey : true;
  const alt = keys.includes("alt") ? e.altKey : true;
  const shift = keys.includes("shift") ? e.shiftKey : true;
  const meta = keys.includes("meta") ? e.metaKey : true;

  const key = keys[keys.length - 1];
  return ctrl && alt && shift && meta && e.key.toLowerCase() === key;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  className,
  message,
  leftIcon,
  rightIcon,
  rightIcon2,
  state,
  disabled = false,
  labelAlignment = "vertical",
  inputSize = "default",
  radius = "xl",
  value,
  onChange,
  onEnterPress,
  id,
  name,
  shortcutKey,
  onShortcutPress,
  shortcutBase,
  shortcutKeyDisplay,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const autoID = useId();
  const inputID = id ?? `input-${autoID}`;

  // ✅ Global shortcut listener
  useEffect(() => {
    if (!shortcutKey || !onShortcutPress) return;

    const handler = (e: KeyboardEvent) => {
      if (matchShortcut(e, shortcutKey)) {
        e.preventDefault();
        onShortcutPress();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [shortcutKey, onShortcutPress]);

  const inputStyle: React.CSSProperties = {
    backgroundColor:
      state === "danger"
        ? "var(--input-bg-error)"
        : state === "success"
        ? "var(--input-bg-success)"
        : isFilled
        ? "var(--input-bg-filled)"
        : "var(--input-bg-default)",
    borderColor:
      state === "danger"
        ? "var(--input-border-error)"
        : state === "success"
        ? "var(--input-border-success)"
        : isFocused || isHovered
        ? "var(--input-border-hover)"
        : isFilled
        ? "var(--input-border-filled)"
        : "var(--input-border-default)",
    color:
      disabled || !value
        ? "var(--input-placeholder-default)"
        : "var(--input-placeholder-filled)",
  };

  const labelStyle: React.CSSProperties = {
    color: disabled
      ? "var(--input-label-default)"
      : state === "danger"
      ? "var(--input-label-error)"
      : state === "success"
      ? "var(--input-label-success)"
      : isFocused
      ? "var(--input-label-focus)"
      : "var(--input-label-default)",
  };

  const helperStyle: React.CSSProperties = {
    color:
      state === "danger"
        ? "var(--input-helper-text-error)"
        : state === "success"
        ? "var(--input-helper-text-success)"
        : "var(--input-helper-text-default)",
  };

  const iconBaseClasses = "w-5 h-5 absolute top-1/2 -translate-y-1/2";
  const iconClasses = disabled
    ? "text-base-300 opacity-70"
    : isFilled
    ? "text-base-950 dark:text-dark-base-900"
    : "text-base-400 dark:text-dark-base-700";

  // Adjust padding & height based on size
  const sizePadding = inputSize === "sm" ? "p-2" : "p-3";
  const sizeHeight = inputSize === "sm" ? "h-10" : "h-11";

  // Get border radius class based on radius prop
  const radiusClass =
    radius === "none"
      ? "rounded-none border-0 border-b"
      : radius === "lg"
      ? "rounded-lg border"
      : "rounded-xl border";

  const inputBaseClass = `w-full ${radiusClass} transition-all ease-in duration-300 focus:outline-none text-sm leading-5 font-normal ${sizePadding} ${sizeHeight}`;

  // Padding left/right adjustments
  const paddingLeft = leftIcon
    ? inputSize === "sm"
      ? "pl-10"
      : "pl-10"
    : inputSize === "sm"
    ? "pl-2"
    : "pl-3";

  const paddingRight =
    shortcutBase && shortcutKeyDisplay
      ? rightIcon && rightIcon2
        ? inputSize === "sm"
          ? "pr-44"
          : "pr-48"
        : rightIcon || rightIcon2
        ? inputSize === "sm"
          ? "pr-36"
          : "pr-40"
        : inputSize === "sm"
        ? "pr-20"
        : "pr-24"
      : rightIcon && rightIcon2
      ? inputSize === "sm"
        ? "pr-16"
        : "pr-18"
      : rightIcon || rightIcon2 || type === "password"
      ? inputSize === "sm"
        ? "pr-8"
        : "pr-10"
      : inputSize === "sm"
      ? "pr-2"
      : "pr-3";

  // Shortcut badge position - adjust based on whether right icons exist
  const shortcutPosition =
    rightIcon && rightIcon2
      ? inputSize === "sm"
        ? "right-18"
        : "right-20"
      : rightIcon || rightIcon2
      ? inputSize === "sm"
        ? "right-10"
        : "right-12"
      : "right-2";

  // rightIcon2 position - between shortcut and rightIcon
  const rightIcon2Position = rightIcon
    ? inputSize === "sm"
      ? "right-10"
      : "right-12"
    : "right-3";

  // Right icon always stays at right-3
  const rightIconPosition = "right-3";

  return (
    <div
      className={`flex w-full group ${
        labelAlignment === "horizontal" ? "gap-2" : "flex-col gap-2"
      } ${className || ""} ${disabled ? "opacity-70" : ""}`}
    >
      {label && (
        <label
          htmlFor={inputID}
          style={labelStyle}
          className={`p-text whitespace-nowrap flex-shrink-0 leading-7 ${
            labelAlignment === "horizontal" ? "pt-2" : ""
          }`}
        >
          {label}
        </label>
      )}

      <div className="w-full flex flex-col gap-2">
        {/* Input wrapper - icons position relative to this */}
        <div className="relative w-full">
          {leftIcon && (
            <Icon
              className={`left-3 ${iconBaseClasses} ${iconClasses}`}
              icon={leftIcon}
            />
          )}

          <input
            id={inputID}
            name={name}
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={(e) => {
              onChange?.(e);
              setIsFilled(!!e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={inputStyle}
            className={`p-text ${inputBaseClass} ${paddingLeft} ${paddingRight}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onEnterPress) onEnterPress();
              if (
                shortcutKey &&
                onShortcutPress &&
                matchShortcut(e.nativeEvent, shortcutKey)
              ) {
                e.preventDefault();
                onShortcutPress();
              }
            }}
          />

          {/* Password toggle */}
          {type === "password" && (
            <Icon
              icon={
                showPassword
                  ? "fluent:eye-off-20-regular"
                  : "fluent:eye-20-regular"
              }
              className={`right-3 cursor-pointer ${iconBaseClasses} ${iconClasses}`}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}

          {/* Normal right icon */}
          {rightIcon && type !== "password" && (
            <Icon
              icon={rightIcon}
              className={`${rightIconPosition} ${iconBaseClasses} ${iconClasses}`}
            />
          )}

          {/* Right icon 2 */}
          {rightIcon2 && type !== "password" && (
            <Icon
              icon={rightIcon2}
              className={`${rightIcon2Position} ${iconBaseClasses} ${iconClasses}`}
            />
          )}

          {/* Shortcut badge */}
          {shortcutBase && shortcutKeyDisplay && (
            <div
              className={`absolute ${shortcutPosition} top-1/2 -translate-y-1/2 flex items-center gap-2 z-10`}
            >
              <div className="bg-base-600 dark:bg-dark-base-600 flex items-center gap-1 p-1 rounded-md">
                <Icon
                  icon="fluent:key-command-16-regular"
                  className="size-4 text-base-50 dark:text-dark-base-50"
                />
                <span className="body-text uppercase text-base-50 dark:text-dark-base-50">
                  {shortcutBase}
                </span>
              </div>
              <span className="body-text uppercase text-base-50 dark:text-dark-base-50 bg-base-600 dark:bg-dark-base-600 flex items-center justify-center gap-1 p-1 rounded-md size-7">
                {shortcutKeyDisplay}
              </span>
            </div>
          )}
        </div>

        {/* Message outside input wrapper */}
        {message && <p style={helperStyle}>{message}</p>}
      </div>
    </div>
  );
};

export default Input;
