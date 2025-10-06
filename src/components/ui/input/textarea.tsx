"use client";
import { useState, TextareaHTMLAttributes, useId, useRef, useLayoutEffect, useCallback, ChangeEvent } from "react";

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "defaultValue"> {
  label?: string;
  message?: string;
  state?: "danger" | "disabled" | "success";
  labelAlignment?: "vertical" | "horizontal";
  textareaSize?: "default" | "sm";
  radius?: "none" | "lg" | "xl";

  /**
   * Defines the maximum height in pixels for the textarea.
   * The textarea will automatically scroll if content exceeds this height.
   * Default is 200px.
   */
  maxHeight?: number; 

  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  className,
  message,
  state,
  disabled = false,
  labelAlignment = "vertical",
  textareaSize = "default",
  radius = "xl",
  value,
  onChange,
  id,
  name,
  maxHeight = 200,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const autoID = useId();
  const inputID = id ?? `textarea-${autoID}`;

  const autoResize = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const computedStyle = getComputedStyle(textarea);
      const minHeight = parseFloat(computedStyle.minHeight) || 80;
      textarea.style.height = '0px';
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.max(minHeight, Math.min(maxHeight, scrollHeight));
      textarea.style.height = `${newHeight}px`;
    }
  }, [maxHeight]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange?.(e);
    setIsFilled(!!newValue);
    if (textareaRef.current) {
      textareaRef.current.value = newValue;
      autoResize();
    }
  }, [onChange, autoResize]);

  useLayoutEffect(() => {
    setIsFilled(!!value);
    if (textareaRef.current) {
      textareaRef.current.value = value || '';
      autoResize();
    }
  }, [value, autoResize]);

  const textareaStyle: React.CSSProperties = {
    // Disable manual resize handle
    resize: "none", 

    // Background color logic
    backgroundColor:
      state === "danger"
        ? "var(--input-bg-error)"
        : state === "success"
        ? "var(--input-bg-success)"
        : isFilled
        ? "var(--input-bg-filled)"
        : "var(--input-bg-default)",
        
    // Border color logic
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
        
    // Text color logic (using the placeholder variables for text color)
    color:
      disabled || !isFilled
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
  
  // --- Tailwind Class Composition ---

  const sizePadding = textareaSize === "sm" ? "p-2" : "p-3";

  const radiusClass =
    radius === "none"
      ? "rounded-none border-0 border-b"
      : radius === "lg"
      ? "rounded-lg border"
      : "rounded-xl border";

  // Base classes: 
  // - w-full: takes full width
  // - min-h-[5rem]: ensures a minimum height of 80px (approx 3 lines)
  // - overflow-y-auto: allows scrolling when content exceeds maxHeight
  const textareaBaseClass = `w-full ${radiusClass} transition-all ease-in duration-300 focus:outline-none p-text ${sizePadding} min-h-[5rem] overflow-y-auto`;

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
        <textarea
          ref={textareaRef}
          id={inputID}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={handleOnChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={textareaStyle}
          className={textareaBaseClass}
          {...rest}
        />

        {/* Message below textarea */}
        {message && <p style={helperStyle}>{message}</p>}
      </div>
    </div>
  );
};

export default Textarea;