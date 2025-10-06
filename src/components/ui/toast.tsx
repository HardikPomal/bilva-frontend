"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/button/button";
import IconButton from "@/components/ui/button/iconbutton";

// ========================
// Types
// ========================
type ToastColor = "primary" | "secondary" | "success" | "danger" | "pending";
type ToastVariant = "filled" | "duo";
type ToastRadius = "none" | "lg" | "2xl" | "3xl";
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface ToastAction {
  label: string;
  onClick: () => void;
  leftIcon?: string;
  rightIcon?: string;
  variant?: "solid" | "outline" | "ghost";
  rounded?: "none" | "lg" | "2xl";
}

export interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  color?: ToastColor;
  variant?: ToastVariant;
  radius?: ToastRadius;
  gradient?: boolean;
  borderLeft?: boolean;
  duration?: number;
  position?: ToastPosition;
  primaryAction?: ToastAction;
  secondaryAction?: ToastAction;
}

type ToastInternal = ToastProps & {
  id: string;
  position: ToastPosition;
  isExiting: boolean;
};

// ========================
// Context
// ========================
interface ToastContextProps {
  show: (opts: ToastProps) => void;
  remove: (id: string) => void;
}
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

// ========================
// Provider + Toast system
// ========================
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastInternal[]>([]);

  const show = useCallback((opts: ToastProps) => {
    const id = opts.id ?? crypto.randomUUID();
    const duration = opts.duration ?? 4000;
    const position = opts.position ?? "top-right";

    const toast: ToastInternal = { ...opts, id, position, isExiting: false };
    setToasts((prev) => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        remove(id);
      }, duration);
    }
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index === -1) return prev;
      const newToasts = [...prev];
      newToasts[index] = { ...newToasts[index], isExiting: true };
      setTimeout(() => {
        setToasts((p) => p.filter((t) => t.id !== id));
      }, 300);
      return newToasts;
    });
  }, []);

  // Group by position
  const grouped = toasts.reduce<Record<ToastPosition, ToastInternal[]>>(
    (acc, t) => {
      const pos = t.position as ToastPosition;
      acc[pos] = [...(acc[pos] ?? []), t];
      return acc;
    },
    {} as Record<ToastPosition, ToastInternal[]>
  );

  return (
    <ToastContext.Provider value={{ show, remove }}>
      {children}
      {/* Render per-position containers */}
      {Object.entries(grouped).map(([pos, items]) => (
        <div key={pos} className={getWrapperClasses(pos as ToastPosition)}>
          {items.map((t) => (
            <ToastCard key={t.id} {...t} onDismiss={() => remove(t.id)} />
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
}

// ========================
// Toast Card
// ========================
function ToastCard({
  title,
  description,
  icon,
  color = "primary",
  variant = "filled",
  radius = "lg",
  gradient = false,
  borderLeft = false,
  primaryAction,
  secondaryAction,
  onDismiss,
  isExiting = false,
  position = "top-right",
}: ToastInternal & { onDismiss?: () => void }) {
  const colorMap = {
    primary: {
      duoBg: "bg-primary-100 dark:bg-dark-primary-100",
      duoTextIconTitle: "text-primary-800 dark:text-dark-primary-800",
      duoTextDesc: "text-base-950 dark:text-dark-base-950",
      duoOutline: "outline outline-primary-300 dark:outline-dark-primary-300",
      duoBorder: "border-l-4 border-primary-300 dark:border-dark-primary-300",
      duoGradientText: "text-base-950 dark:text-dark-base-950",
      duoGradientOutline:
        "outline outline-primary-400 dark:outline-dark-primary-400",
      filledBg: "bg-primary-600 dark:bg-dark-primary-600",
      filledText: "text-base-50 dark:text-dark-base-50",
      border: "border-l-4 border-primary-500 dark:border-dark-primary-500",
    },
    secondary: {
      duoBg: "bg-secondary-100 dark:bg-dark-secondary-100",
      duoTextIconTitle: "text-secondary-800 dark:text-dark-secondary-800",
      duoTextDesc: "text-base-950 dark:text-dark-base-950",
      duoOutline: "outline outline-secondary-300 dark:outline-dark-secondary-300",
      duoBorder: "border-l-4 border-secondary-300 dark:border-dark-secondary-300",
      duoGradientText: "text-base-950 dark:text-dark-base-950",
      duoGradientOutline:
        "outline outline-secondary-400 dark:outline-dark-secondary-400",
      filledBg: "bg-secondary-600 dark:bg-dark-secondary-600",
      filledText: "text-base-50 dark:text-dark-base-50",
      border: "border-l-4 border-secondary-500 dark:border-dark-secondary-500",
    },
    success: {
      duoBg: "bg-success-100 dark:bg-dark-success-100",
      duoTextIconTitle: "text-success-800 dark:text-dark-success-800",
      duoTextDesc: "text-base-950 dark:text-dark-base-950",
      duoOutline: "outline outline-success-300 dark:outline-dark-success-300",
      duoBorder: "border-l-4 border-success-300 dark:border-dark-success-300",
      duoGradientText: "text-base-950 dark:text-dark-base-950",
      duoGradientOutline:
        "outline outline-success-400 dark:outline-dark-success-400",
      filledBg: "bg-success-600 dark:bg-dark-success-600",
      filledText: "text-base-50 dark:text-dark-base-50",
      border: "border-l-4 border-success-500 dark:border-dark-success-500",
    },
    danger: {
      duoBg: "bg-danger-100 dark:bg-dark-danger-100",
      duoTextIconTitle: "text-danger-800 dark:text-dark-danger-800",
      duoTextDesc: "text-base-950 dark:text-dark-base-950",
      duoOutline: "outline outline-danger-300 dark:outline-dark-danger-300",
      duoBorder: "border-l-4 border-danger-300 dark:border-dark-danger-300",
      duoGradientText: "text-base-950 dark:text-dark-base-950",
      duoGradientOutline:
        "outline outline-danger-400 dark:outline-dark-danger-400",
      filledBg: "bg-danger-600 dark:bg-dark-danger-600",
      filledText: "text-base-50 dark:text-dark-base-50",
      border: "border-l-4 border-danger-500 dark:border-dark-danger-500",
    },
    pending: {
      duoBg: "bg-pending-100 dark:bg-dark-pending-100",
      duoTextIconTitle: "text-pending-800 dark:text-dark-pending-800",
      duoTextDesc: "text-base-950 dark:text-dark-base-950",
      duoOutline: "outline outline-pending-300 dark:outline-dark-pending-300",
      duoBorder: "border-l-4 border-pending-300 dark:border-dark-pending-300",
      duoGradientText: "text-base-950 dark:text-dark-base-950",
      duoGradientOutline:
        "outline outline-pending-400 dark:outline-dark-pending-400",
      filledBg: "bg-pending-600 dark:bg-dark-pending-600",
      filledText: "text-base-50 dark:text-dark-base-50",
      border: "border-l-4 border-pending-500 dark:border-dark-pending-500",
    },
  } as const;

  const cm = colorMap[color];
  const radiusMap = {
    none: "rounded-none",
    lg: "rounded-lg",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  } as const;

  let bgClass: string;
  let textIconTitle: string;
  let textDesc: string;
  let borderOrOutline: string = "";

  if (gradient) {
    if (variant === "filled") {
      bgClass = `bg-gradient-to-r from-${color}-700 to-${color}-400 dark:from-dark-${color}-700 dark:to-dark-${color}-400`;
      textIconTitle = cm.filledText;
      textDesc = cm.filledText;
      if (borderLeft) {
        borderOrOutline = cm.border;
      }
    } else {
      bgClass = `bg-gradient-to-r from-${color}-100 to-${color}-300 dark:from-dark-${color}-100 dark:to-dark-${color}-300`;
      textIconTitle = cm.duoGradientText;
      textDesc = cm.duoGradientText;
      if (borderLeft) {
        borderOrOutline = cm.duoBorder;
      } else {
        borderOrOutline = cm.duoGradientOutline;
      }
    }
  } else {
    if (variant === "filled") {
      bgClass = cm.filledBg;
      textIconTitle = cm.filledText;
      textDesc = cm.filledText;
      if (borderLeft) {
        borderOrOutline = cm.border;
      }
    } else {
      bgClass = cm.duoBg;
      textIconTitle = cm.duoTextIconTitle;
      textDesc = cm.duoTextDesc;
      if (borderLeft) {
        borderOrOutline = cm.duoBorder;
      } else {
        borderOrOutline = cm.duoOutline;
      }
    }
  }

  const entryAnimationClass = getEntryAnimationClass(position);
  const exitAnimationClass = isExiting ? getExitAnimationClass(position) : "";
  const animationClasses = `${entryAnimationClass} ${exitAnimationClass}`;

  const classes = `flex gap-3 lg:gap-4 p-3 lg:p-4 shadow-lg ${radiusMap[radius]} ${bgClass} ${borderOrOutline} relative hover:scale-[1.02] duration-200 ease-in-out transition-transform w-fit pointer-events-auto ${animationClasses}`.trim();

  const actionColor = variant === "filled" || gradient ? "base" : color;

  return (
    <div className={classes}>
      {icon && (
        <Icon
          icon={icon!}
          className={`size-5 lg:size-6 flex-shrink-0 ${textIconTitle}`}
        />
      )}
      <div className="message flex flex-col gap-3 max-w-[400px] flex-1">
        {title && (
          <h6 className={`font-medium ${textIconTitle}`}>{title}</h6>
        )}
        {description && <p className={textDesc}>{description}</p>}
        {(primaryAction || secondaryAction) && (
          <div className="action_buttons flex gap-4">
            {primaryAction && (
              <Button
                variant={primaryAction.variant ?? "solid"}
                color={actionColor}
                rounded={primaryAction.rounded ?? "none"}
                leftIcon={primaryAction.leftIcon}
                rightIcon={primaryAction.rightIcon}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant={secondaryAction.variant ?? "outline"}
                color={actionColor}
                rounded={secondaryAction.rounded ?? "none"}
                leftIcon={secondaryAction.leftIcon}
                rightIcon={secondaryAction.rightIcon}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
      {onDismiss && (
        <IconButton
          icon="fluent:dismiss-20-regular"
          size="sm"
          rounded="none"
          variant="ghost"
          color={actionColor}
          onClick={onDismiss}
        />
      )}
    </div>
  );
}

// ========================
// Helpers
// ========================
function getWrapperClasses(position: ToastPosition): string {
  const base = "fixed z-50 flex flex-col gap-3 p-2 pointer-events-none";
  switch (position) {
    case "top-left":
      return `${base} top-[20px] md:top-[24px] lg:top-[50px] left-4 items-start`;
    case "top-center":
      return `${base} top-[20px] md:top-[24px] lg:top-[50px] left-1/2 -translate-x-1/2 items-center`;
    case "top-right":
      return `${base} top-[20px] md:top-[24px] lg:top-[50px] right-0 sm:right-4 items-end`;
    case "middle-left":
      return `${base} top-1/2 -translate-y-1/2 left-4 items-start`;
    case "middle-center":
      return `${base} top-1/2 left-1/2 -translate-x-1/2 w-full sm:w-auto -translate-y-1/2 items-center`;
    case "middle-right":
      return `${base} top-1/2 -translate-y-1/2 right-0 sm:right-4 items-end`;
    case "bottom-left":
      return `${base} bottom-[20px] md:bottom-[24px] lg:bottom-[50px] left-0 sm:left-4 items-start`;
    case "bottom-center":
      return `${base} bottom-[20px] md:bottom-[24px] lg:bottom-[50px] left-1/2 -translate-x-1/2 items-center`;
    case "bottom-right":
      return `${base} bottom-[20px] md:bottom-[24px] lg:bottom-[50px] right-0 sm:right-4 items-end`;
    default:
      return `${base} top-[20px] md:top-[24px] lg:top-[50px] right-0 sm:right-4 items-end`;
  }
}

function getEntryAnimationClass(position: ToastPosition): string {
  switch (position) {
    case "top-left":
    case "middle-left":
    case "bottom-left":
      return "animate-slide-right";
    case "top-right":
    case "middle-right":
    case "bottom-right":
      return "animate-slide-left";
    case "top-center":
      return "animate-slide-down";
    case "bottom-center":
      return "animate-slide-up";
    case "middle-center":
      return "animate-fade-in";
    default:
      return "animate-slide-left";
  }
}

function getExitAnimationClass(position: ToastPosition): string {
  switch (position) {
    case "top-left":
    case "middle-left":
    case "bottom-left":
      return "animate-slide-out-left";
    case "top-right":
    case "middle-right":
    case "bottom-right":
      return "animate-slide-out-right";
    case "top-center":
      return "animate-slide-out-up";
    case "bottom-center":
      return "animate-slide-out-down";
    case "middle-center":
      return "animate-fade-out";
    default:
      return "animate-slide-out-right";
  }
}