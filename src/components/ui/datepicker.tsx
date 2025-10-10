import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import IconButton from "./button/iconbutton";
import Button from "./button/button";

interface DatePickerProps {
  label?: string;
  helperText?: string;
  iconRight?: string;
  state?: "danger" | "disabled" | "success";
  labelAlignment?: "vertical" | "horizontal";
  variant?: "primary" | "secondary" | "success" | "danger" | "black" | "light";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string; // Format: YYYY-MM-DD or YYYY-MM
  onChange?: (date: string) => void;
  onEnterPress?: () => void;
  mode?: "date" | "month" | "year"; // New prop for different picker modes
  minDate?: string;
  maxDate?: string;
  showToday?: boolean;
  clearable?: boolean;
  format?:
    | "YYYY-MM-DD"
    | "DD/MM/YYYY"
    | "MM/DD/YYYY"
    | "YYYY-MM"
    | "MMM YYYY"
    | "MMMM YYYY"
    | "YYYY";
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder = "Select date",
  className,
  helperText,
  iconRight,
  state,
  disabled = false,
  labelAlignment = "vertical",
  value,
  onChange,
  onEnterPress,
  mode = "date",
  showToday = true,
  clearable = false,
  format = "YYYY-MM-DD",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!value);
  const [isHovered, setIsHovered] = useState(false);

  // Internal view state for navigation between date/month/year views
  const [currentView, setCurrentView] = useState<"date" | "month" | "year">(
    "date"
  );

  // Date navigation states
  const [currentDate, setCurrentDate] = useState(() => {
    if (value) {
      const date = new Date(value);
      return isNaN(date.getTime()) ? new Date() : date;
    }
    return new Date();
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    if (value) {
      const date = new Date(value);
      return isNaN(date.getTime()) ? null : date;
    }
    return null;
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
        setCurrentView("date"); // Reset view when closing
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update filled state when value changes
  useEffect(() => {
    setIsFilled(!!value);
    if (value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
        setCurrentDate(date);
      }
    }
  }, [value]);

  // Styling similar to Input component
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
        : isFocused || isHovered || isOpen
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
      : isFocused || isOpen
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

  const placeholderStyle: React.CSSProperties = {
    color:
      disabled || !value
        ? "var(--input-placeholder-default)"
        : "var(--input-placeholder-filled)",
  };

  const iconClasses = disabled
    ? "text-base-300 dark:text-dark-base-800 opacity-70"
    : isFilled || isOpen
    ? "text-base-950 dark:text-dark-base-900"
    : "text-base-400 dark:text-dark-base-700";

  const inputBaseClass = `w-full border rounded-lg transition-all ease-in duration-300 focus:outline-none text-sm leading-5 font-normal p-2.5 h-[44px] cursor-pointer`;

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const shortMonth = monthsShort[date.getMonth()];
    const fullMonth = months[date.getMonth()];

    switch (format) {
      case "DD/MM/YYYY":
        return `${day.toString().padStart(2, "0")}/${month
          .toString()
          .padStart(2, "0")}/${year}`;
      case "MM/DD/YYYY":
        return `${month.toString().padStart(2, "0")}/${day
          .toString()
          .padStart(2, "0")}/${year}`;
      case "YYYY-MM":
        return `${year}-${month.toString().padStart(2, "0")}`;
      case "MMM YYYY":
        return `${shortMonth} ${year}`;
      case "MMMM YYYY":
        return `${fullMonth} ${year}`;
      case "YYYY":
        return `${year}`;
      default:
        return `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`;
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    onChange?.(formattedDate);
    setIsOpen(false);
    setIsFocused(false);
    setCurrentView("date"); // Reset view
  };

  // Handle month selection (for month mode or internal navigation)
  const handleMonthSelect = (monthIndex: number) => {
    if (mode === "month") {
      const newDate = new Date(currentDate.getFullYear(), monthIndex, 1);
      handleDateSelect(newDate);
    } else {
      // Navigate to selected month in date view
      setCurrentDate(
        (prev) => new Date(prev.getFullYear(), monthIndex, prev.getDate())
      );
      setCurrentView("date");
    }
  };

  // Handle year selection (for year mode or internal navigation)
  const handleYearSelect = (year: number) => {
    if (mode === "year") {
      const newDate = new Date(year, 0, 1);
      handleDateSelect(newDate);
    } else {
      // Navigate to selected year and show month view
      setCurrentDate((prev) => new Date(year, prev.getMonth(), prev.getDate()));
      setCurrentView("month");
    }
  };

  // Navigation functions
  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const navigateYear = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(prev.getFullYear() + direction);
      return newDate;
    });
  };

  // Handle header clicks for view switching
  const handleHeaderClick = () => {
    if (currentView === "date") {
      setCurrentView("month");
    } else if (currentView === "month") {
      setCurrentView("year");
    }
  };

  // Check if icon should rotate (only for chevron icons)
  const shouldRotateIcon = (iconName?: string) => {
    if (!iconName) return false;
    return iconName.includes("chevron") && iconName.includes("fluent");
  };

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  // Handle input click
  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(true);
      // Reset view based on mode when opening
      if (mode === "month") {
        setCurrentView("month");
      } else if (mode === "year") {
        setCurrentView("year");
      } else {
        setCurrentView("date");
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (onEnterPress) {
        onEnterPress();
      } else {
        setIsOpen(!isOpen);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  // Render calendar grid
  const renderCalendar = () => {
    const days = getDaysInMonth(currentDate);
    const today = new Date();

    return (
      <div className="grid grid-cols-7">
        {/* Day headers */}
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <p
            key={`${day}-${i}`}
            className="text-center p-2 text-base-500 dark:text-dark-base-500"
          >
            {day}
          </p>
        ))}

        {/* Calendar days */}
        {days.map((day, index) => {
          if (!day) {
            return <div key={index} className="p-2"></div>;
          }

          const isSelected =
            selectedDate &&
            day.getDate() === selectedDate.getDate() &&
            day.getMonth() === selectedDate.getMonth() &&
            day.getFullYear() === selectedDate.getFullYear();

          const isToday =
            day.getDate() === today.getDate() &&
            day.getMonth() === today.getMonth() &&
            day.getFullYear() === today.getFullYear();

          return (
            <button
              key={index}
              onClick={() => handleDateSelect(day)}
              className={`p-2 p-text justify-center rounded-lg transition-all hover:bg-base-200 dark:hover:bg-dark-base-200 ${ isSelected ? "bg-primary-500 text-white hover:bg-primary-600" : isToday && showToday ? "bg-primary-500 dark:bg-dark-primary-500 text-base-50 dark:text-dark-base-50" : "text-base-950 dark:text-dark-base-950" }`}>
              {day.getDate()}
            </button>
          );
        })}
      </div>
    );
  };

  // Render month picker
  const renderMonthPicker = () => (
    <div className="grid grid-cols-3 gap-x-3 gap-y-4">
      {monthsShort.map((month, index) => {
        const isSelected =
          selectedDate &&
          index === selectedDate.getMonth() &&
          currentDate.getFullYear() === selectedDate.getFullYear();

        return (
          <button
            key={month}
            onClick={() => handleMonthSelect(index)}
            className={`px-3 py-2 rounded-lg p-text w-full justify-center transition-all ${ isSelected ? "bg-primary-500 text-white" : "hover:bg-base-100 dark:hover:bg-dark-base-300 text-base-900 dark:text-dark-base-900"}`}
          >
            {month}
          </button>
        );
      })}
    </div>
  );

  // Render year picker
  const renderYearPicker = () => {
    const currentYear = currentDate.getFullYear();
    const startYear = Math.floor(currentYear / 10) * 10;
    const years = Array.from({ length: 12 }, (_, i) => startYear + i);

    return (
      <div className="grid grid-cols-3 gap-x-3 gap-y-4">
        {years.map((year) => {
          const isSelected =
            selectedDate && year === selectedDate.getFullYear();

          return (
            <button
              key={year}
              onClick={() => handleYearSelect(year)}
              className={`px-3 py-2 rounded-lg p-text w-full justify-center transition-all ${ isSelected ? "bg-primary-500 text-white" : "hover:bg-base-100 dark:hover:bg-dark-base-300 text-base-900 dark:text-dark-base-900"}`}>
              {year}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`flex w-full group ${
        labelAlignment === "horizontal" ? "gap-2" : "flex-col gap-2"
      } ${className || ""}`}
      ref={dropdownRef}
    >
      {label && (
        <label
          style={labelStyle}
          className={`whitespace-nowrap flex-shrink-0 leading-7`}
        >
          <p>{label}</p>
        </label>
      )}

      <div className="relative w-full flex flex-col gap-2">
        <div
          ref={inputRef}
          onClick={handleInputClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          style={inputStyle}
          className={`${inputBaseClass} gap-3 pl-2.5 ${
            iconRight || clearable ? "" : "pr-2.5"
          } flex items-center justify-between`}
        >
          <span style={placeholderStyle} className="w-full truncate">
            {value ? formatDate(selectedDate) : placeholder}
          </span>

          {value && (
            <Icon
              icon="fluent:dismiss-circle-20-regular"
              className={`w-5 h-5 flex-shrink-0 text-base-400 dark:text-dark-base-700 hover:text-danger-700 dark:hover:text-dark-danger-600 transition-allduration-300 ease-in-out cursor-pointer ${iconClasses}`}
              onClick={(e) => {
                e.stopPropagation(); // prevent dropdown toggle
                onChange?.(""); // clear value
              }}
            />
          )}
          <Icon
            icon={iconRight || "fluent:calendar-empty-20-regular"}
            className={`w-5 h-5 ${iconClasses} ${
              isOpen && shouldRotateIcon(iconRight) ? "rotate-180" : ""
            } transition-transform duration-200`}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-base-50 dark:bg-dark-base-50 shadow-lg rounded-xl border border-base-300 dark:border-dark-base-300 p-4 animate-in fade-in-0 zoom-in-95 duration-200 flex flex-col gap-3">
            {/* Header with navigation */}
            <div className="w-full flex gap-2">
              <IconButton
                icon="fluent:chevron-left-20-regular"
                size="md"
                rounded="lg"
                variant="solid"
                color="base"
                className="p-2 hover:bg-base-100 dark:hover:bg-dark-base-300 rounded-full"
                onClick={() =>
                  currentView === "date"
                    ? navigateMonth(-1)
                    : currentView === "month"
                    ? navigateYear(-1)
                    : navigateYear(-10)
                }
              />

              
                <Button
                  variant="ghost"
                  color="base"
                  onClick={handleHeaderClick}
                  className="w-full justify-center"
                >
                  {currentView === "date" &&
                    `${
                      months[currentDate.getMonth()]
                    } ${currentDate.getFullYear()}`}
                  {currentView === "month" && currentDate.getFullYear()}
                  {currentView === "year" &&
                    `${Math.floor(currentDate.getFullYear() / 10) * 10} - ${
                      Math.floor(currentDate.getFullYear() / 10) * 10 + 9
                    }`}
                </Button>

              <IconButton
                icon="fluent:chevron-right-20-regular"
                size="md"
                rounded="lg"
                variant="solid"
                color="base"
                className="p-2 hover:bg-base-100 dark:hover:bg-dark-base-300 rounded-full"
                onClick={() =>
                  currentView === "date"
                    ? navigateMonth(1)
                    : currentView === "month"
                    ? navigateYear(1)
                    : navigateYear(10)
                }
              />
            </div>

            <hr className="text-base-300 dark:text-dark-base-300"/>

            {/* Content based on current view */}
            {currentView === "date" && renderCalendar()}
            {currentView === "month" && renderMonthPicker()}
            {currentView === "year" && renderYearPicker()}

            <hr className="text-base-300 dark:text-dark-base-300"/>

            {/* Today button */}
            {showToday && (
                <Button
                  variant="ghost"
                  color="primary"
                  onClick={() => {
                    const today = new Date();
                    setCurrentDate(today); // Navigate to today's date

                    if (mode === "date") {
                      handleDateSelect(today);
                      setCurrentView("date");
                    } else if (mode === "month") {
                      handleMonthSelect(today.getMonth());
                    } else if (mode === "year") {
                      handleYearSelect(today.getFullYear());
                    }
                  }}
                  rounded="lg"
                  leftIcon="fluent:calendar-date-20-regular"
                  className="w-full flex items-center justify-center"
                >
                  {mode === "month"
                    ? `This Month (${monthsShort[new Date().getMonth()]})`
                    : mode === "year"
                    ? `This Year (${new Date().getFullYear()})`
                    : "Today"}
                </Button>
            )}
          </div>
        )}

        {helperText && (
          <p className="text-sm" style={helperStyle}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
