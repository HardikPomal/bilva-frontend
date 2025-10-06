"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

type TooltipColor =
  | "default"
  | "primary"
  | "secondary"
  | "pending"
  | "success"
  | "danger"
  | "base";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  label: string;
  color?: TooltipColor;
  position?: TooltipPosition;
  children: ReactNode;
  delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  label,
  color = "default",
  position = "top",
  children,
  delay = 200,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const bgVar = `var(--tooltip-bg-${color})`;
  const textVar = `var(--tooltip-label)`;

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setVisible(false);
  };

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses: Record<TooltipPosition, string> = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-1",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
    left: "left-full top-1/2 -translate-y-1/2 -ml-1",
    right: "right-full top-1/2 -translate-y-1/2 -mr-1",
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      aria-describedby={visible ? "tooltip" : undefined}
    >
      {children}

      {visible && (
        <div
          id="tooltip"
          role="tooltip"
          className={`absolute z-50 px-2 p-text py-1 rounded-md whitespace-nowrap shadow-md pointer-events-none animate-in fade-in duration-300 ${positionClasses[position]}`}
          style={{
            backgroundColor: bgVar,
            color: textVar,
          }}
        >
          {label}

          {/* Arrow */}
          <span
            className={`absolute size-2 rotate-45 ${arrowClasses[position]}`}
            style={{
              backgroundColor: bgVar,
            }}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
