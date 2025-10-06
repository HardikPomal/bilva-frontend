"use client";
import { useState, InputHTMLAttributes, useEffect, useCallback, useRef } from "react";
import { Icon } from "@iconify/react";
import { useId } from "react";

// Initial delay before continuous counting starts (in ms)
const INITIAL_DELAY = 500; 
// Speed of continuous counting (in ms)
const INTERVAL_SPEED = 100;

interface CountInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange"> {
  label?: string;
  message?: string;
  leftIcon?: string;
  state?: "danger" | "disabled" | "success";
  labelAlignment?: "vertical" | "horizontal";
  
  // Custom numeric props
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  
  // Custom size prop
  inputSize?: "default" | "sm";

  // Radius prop
  radius?: "none" | "lg" | "xl";

  // Custom onChange for controlled number state
  onChange?: (value: number) => void;
}

const CountInput: React.FC<CountInputProps> = ({
  label,
  placeholder = "0",
  className,
  message,
  leftIcon,
  state,
  disabled = false,
  labelAlignment = "vertical",
  inputSize = "default",
  radius = "xl",
  value: propValue, 
  min = 0,
  max = 999,
  step = 1,
  onChange,
  id,
  name,
  ...rest
}) => {
  const [currentValue, setCurrentValue] = useState(propValue ?? min);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Refs for managing the continuous counting timers and the current value
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentValueRef = useRef(currentValue);

  // Sync internal state with propValue
  useEffect(() => {
    if (propValue !== undefined) {
        setCurrentValue(propValue);
    }
  }, [propValue]);

  // Sync the ref every time currentValue changes
  useEffect(() => {
    currentValueRef.current = currentValue;
  }, [currentValue]);
  
  const autoID = useId();
  const inputID = id ?? `count-input-${autoID}`;

  // Correct isFilled logic: only filled if value is NOT 0, undefined, or null
  const isFilled = currentValue !== 0 && currentValue !== undefined && currentValue !== null; 
  
  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);


  const handleChange = (newValue: number) => {
    let finalValue = newValue;

    if (min !== undefined && finalValue < min) {
      finalValue = min;
      clearTimers(); 
    }
    if (max !== undefined && finalValue > max) {
      finalValue = max;
      clearTimers(); 
    }
    
    setCurrentValue(finalValue);
    onChange?.(finalValue);
  };

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numValue = rawValue === '' || isNaN(parseInt(rawValue, 10)) 
        ? (rawValue === '' ? 0 : currentValue) 
        : parseInt(rawValue, 10);
    
    handleChange(numValue);
  };
  
  // Single action functions now use the ref to get the latest value
  const performIncrement = useCallback(() => {
    handleChange(currentValueRef.current + step);
  }, [step, min, max]);

  const performDecrement = useCallback(() => {
    handleChange(currentValueRef.current - step);
  }, [step, min, max]);


  // Handler to start the counting sequence
  const handleStartCount = useCallback((
    e: React.MouseEvent | React.TouchEvent, 
    action: () => void
  ) => {
    if (disabled) return;
    
    // Prevent default touch behavior on mobile
    if (e.type === 'touchstart') {
        e.preventDefault();
    }
    
    // 1. Perform the single action immediately on press/click
    action(); 

    clearTimers();

    // 2. Set a timeout for the initial delay
    timeoutRef.current = setTimeout(() => {
      // 3. Once the delay is over, start the continuous interval
      intervalRef.current = setInterval(() => {
        action(); // Continuous action using the function that references the ref
      }, INTERVAL_SPEED);
    }, INITIAL_DELAY);

  }, [disabled, clearTimers]);
  
  // Handler to stop the counting sequence (used for mouseUp/touchEnd/mouseLeave)
  const handleStopCount = useCallback(() => {
    clearTimers();
  }, [clearTimers]);


  // --- STYLING LOGIC (Reverted to original structure) ---

  // Input styles use theme variables from theme.css
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

  const iconBaseClasses = "w-5 h-5 absolute top-1/2 -translate-y-1/2";
  const iconClasses = disabled
    ? "text-base-300" 
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

  // Padding left is the same, padding right must account for the two w-10 buttons (80px + buffer)
  const paddingLeft = leftIcon
    ? inputSize === "sm"
      ? "pl-10"
      : "pl-10"
    : inputSize === "sm"
    ? "pl-2"
    : "pl-3";
    
  // Padding right to ensure text doesn't overlap the two w-10 buttons
  const paddingRight = inputSize === "sm" ? "pr-20" : "pr-24"; 
  
  // --- END STYLING LOGIC ---

  const decrementDisabled = disabled || currentValue <= min;
  const incrementDisabled = disabled || currentValue >= max;

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
            type="text" 
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={placeholder}
            disabled={disabled}
            value={currentValue.toString()}
            onChange={handleManualChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={inputStyle}
            // Add classes to hide default number input spin buttons
            className={`p-text appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${inputBaseClass} ${paddingLeft} ${paddingRight}`}
            {...rest}
          />

          {/* Controls Wrapper - positioned right, full height */}
          <div
            className={`absolute right-0 top-0 h-full flex items-center z-10 transition-colors duration-200 
            ${disabled ? "pointer-events-none" : ""}`}
            style={{ 
              // Apply border radius to the button wrapper
              borderRadius: radius === "xl" ? '0 12px 12px 0' : radius === "lg" ? '0 8px 8px 0' : '0', 
            }}
          >
            {/* Decrement Button (-) */}
            <div
              className={`w-10 h-full flex items-center justify-center cursor-pointer transition-colors duration-200 
                text-base-950 dark:text-dark-base-950
                hover:text-primary-700 dark:hover:text-dark-primary-700 
                ${decrementDisabled ? "opacity-50 pointer-events-none" : ""}`}
              
              onMouseDown={(e) => handleStartCount(e, performDecrement)}
              onMouseUp={handleStopCount}
              onMouseLeave={handleStopCount}
              onTouchStart={(e) => handleStartCount(e, performDecrement)}
              onTouchEnd={handleStopCount}
            >
              <Icon icon="fluent:subtract-20-regular" className="w-4 h-4" />
            </div>

            {/* Increment Button (+) */}
            <div
              className={`w-10 h-full flex items-center justify-center cursor-pointer transition-colors duration-200 
                text-base-950 dark:text-dark-base-950
                hover:text-primary-700 dark:hover:text-dark-primary-700 
                ${incrementDisabled ? "opacity-50 pointer-events-none" : ""}`}
                
              onMouseDown={(e) => handleStartCount(e, performIncrement)}
              onMouseUp={handleStopCount}
              onMouseLeave={handleStopCount}
              onTouchStart={(e) => handleStartCount(e, performIncrement)}
              onTouchEnd={handleStopCount}
            >
              <Icon icon="fluent:add-20-regular" className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Message outside input wrapper */}
        {message && <p style={helperStyle}>{message}</p>}
      </div>
    </div>
  );
};

export default CountInput;