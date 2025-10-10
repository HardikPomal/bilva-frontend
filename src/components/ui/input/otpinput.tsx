"use client";
import { useState, useRef } from "react";

interface OtpInputProps {
  length?: number;
  helperText?: string;
  state?: "danger" | "success";
  disabled?: boolean;
  onChange?: (otpValue: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  helperText,
  state,
  disabled = false,
  onChange,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const updateOtp = (newOtp: string[]) => {
    setOtp(newOtp);
    if (onChange) onChange(newOtp.join(""));
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    updateOtp(newOtp);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, length)
      .split("");
    const newOtp = [...otp];
    pasteData.forEach((char, i) => {
      if (i < length) newOtp[i] = char;
    });
    updateOtp(newOtp);
    inputRefs.current[Math.min(pasteData.length - 1, length - 1)]?.focus();
  };

  const getStyle = (index: number): React.CSSProperties => {
    const isFocused = focusIndex === index;
    const isHovered = hoverIndex === index;
    const isFilled = otp[index] !== "";

    return {
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
        disabled || !otp[index]
          ? "var(--input-placeholder-default)"
          : "var(--input-placeholder-filled)",
    };
  };

  const getHelperStyle = (): React.CSSProperties => ({
    color:
      state === "danger"
        ? "var(--input-helper-text-error)"
        : state === "success"
        ? "var(--input-helper-text-success)"
        : "var(--input-helper-text-default)",
  });

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex gap-2 justify-center items-center w-full">
        {otp.slice(0, 3).map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            disabled={disabled}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onFocus={() => setFocusIndex(index)}
            onBlur={() => setFocusIndex(null)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onPaste={handlePaste}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            style={getStyle(index)}
            className={`
        w-12 h-12 text-center text-base font-medium border rounded-xl
        transition-all duration-300 ease-in-out focus:outline-none
        ${disabled ? "cursor-not-allowed" : ""}
      `}
          />
        ))}

        {/* Divider */}
        <div className="w-5 h-px bg-base-500 dark:bg-base-500"></div>

        {otp.slice(3).map((digit, index) => {
          const realIndex = index + 3;
          return (
            <input
              key={realIndex}
              type="text"
              inputMode="numeric"
              maxLength={1}
              disabled={disabled}
              value={digit}
              onChange={(e) => handleChange(realIndex, e.target.value)}
              onKeyDown={(e) => handleKeyDown(realIndex, e)}
              onFocus={() => setFocusIndex(realIndex)}
              onBlur={() => setFocusIndex(null)}
              onMouseEnter={() => setHoverIndex(realIndex)}
              onMouseLeave={() => setHoverIndex(null)}
              onPaste={handlePaste}
              ref={(el) => {
                if (el) inputRefs.current[realIndex] = el;
              }}
              style={getStyle(realIndex)}
              className={`
          w-12 h-12 text-center text-base font-medium border rounded-xl
          transition-all duration-300 ease-in-out focus:outline-none
          ${disabled ? "cursor-not-allowed" : ""}
        `}
            />
          );
        })}
      </div>

      {helperText && (
        <p className="text-xs text-center" style={getHelperStyle()}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default OtpInput;
