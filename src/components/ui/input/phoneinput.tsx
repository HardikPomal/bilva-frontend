"use client";
import { useState, useEffect, useRef, InputHTMLAttributes, useId } from "react";
import { Icon } from "@iconify/react";
import Input from "./input";

interface Country {
  name: string;
  dialCode: string;
  flag: string;
  format?: string;
}

interface PhoneInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "onChange"
  > {
  label?: string;
  message?: string;
  state?: "danger" | "disabled" | "success";
  labelAlignment?: "vertical" | "horizontal";
  inputSize?: "default" | "sm";
  radius?: "none" | "lg" | "xl";
  onChange?: (value: string, country: Country) => void;
  defaultCountry?: string;
}

// Country data with dial codes and flags (using Iconify emojione flag icons)

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  placeholder = "Enter phone number",
  className,
  message,
  state,
  disabled = false,
  labelAlignment = "vertical",
  inputSize = "default",
  radius = "xl",
  value = "",
  onChange,
  id,
  name,
  defaultCountry = "India",
  ...rest
}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    import("@/data/countries.json").then((module) => {
      setCountries(module.default as Country[]);
    });
  }, []);

  const [phoneNumber, setPhoneNumber] = useState(value?.toString() || "");
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "India",
    dialCode: "+91",
    flag: "emojione-v1:flag-for-india",
  });

  // Once countries are loaded, set default
  useEffect(() => {
    if (countries.length > 0) {
      const found =
        countries.find((c: Country) => c.name === defaultCountry) ||
        countries[0];
      setSelectedCountry(found);
    }
  }, [countries, defaultCountry]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // ✨ NEW STATE: Flag to stop auto-detection after manual selection.
  const [isCountryManuallySelected, setIsCountryManuallySelected] = useState(false); 

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const autoID = useId();
  const inputID = id ?? `input-${autoID}`;

  // Detect country from phone number
  const detectCountryFromNumber = (number: string) => {
    if (!number) return;

    // Sort countries by dial code length (longest first) for accurate matching
    const sortedCountries = [...countries].sort(
      (a, b) => b.dialCode.length - a.dialCode.length
    );

    for (const country of sortedCountries) {
      const dialCodeWithoutPlus = country.dialCode.substring(1);
      if (number.startsWith(dialCodeWithoutPlus)) {
        setSelectedCountry(country);
        break;
      }
    }
  };

  // Handle numeric input only
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
    setIsFilled(!!numericValue);

    // Auto-detect country from entered number
    // ✨ FIX: Only run auto-detection if the country hasn't been manually selected.
    // Allow detection if the field is empty, in case a user pastes a full new number.
    if (!isCountryManuallySelected || !numericValue) {
        detectCountryFromNumber(numericValue);
    }

    // Call parent onChange with full international format
    onChange?.(numericValue, selectedCountry);
  };

  // Handle country selection
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery("");
    // ✨ FIX: Set the flag to lock the manual choice.
    setIsCountryManuallySelected(true); 
    inputRef.current?.focus();
    onChange?.(phoneNumber, country);
  };

  // Filter countries based on search
  const filteredCountries = countries.filter(
    (country: Country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      disabled || !phoneNumber
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

  const sizePadding = inputSize === "sm" ? "p-2" : "p-3";
  const sizeHeight = inputSize === "sm" ? "h-10" : "h-11";

  const radiusClass =
    radius === "none"
      ? "rounded-none border-0 border-b"
      : radius === "lg"
      ? "rounded-lg border"
      : "rounded-xl border";

  const inputBaseClass = `w-full ${radiusClass} transition-all ease-in duration-300 focus:outline-none text-sm leading-5 font-normal ${sizePadding} ${sizeHeight}`;

  const countryTextClasses = disabled
    ? "text-base-300"
    : isFilled
    ? "text-base-950 dark:text-dark-base-900"
    : "text-base-600 dark:text-dark-base-600";

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
          className={`p-text  whitespace-nowrap text-base-950 dark:text-dark-base-950 flex-shrink-0 leading-7 ${
            labelAlignment === "horizontal" ? "pt-2" : ""
          }`}
        >
          {label}
        </label>
      )}

      <div className="w-full flex flex-col gap-2">
        <div className="relative w-full" ref={dropdownRef}>
          {/* Country selector */}
          <div
            className={`absolute w-24 left-0 top-0 bottom-0 flex items-center gap-1 pl-3 pr-3 transition-colors rounded-l-xl z-10 ${
              disabled
                ? "cursor-not-allowed"
                : "cursor-pointer group transition-all duration-300 ease-in-out"
            }`}
            onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
          >
            <Icon icon={selectedCountry.flag} width={20} height={20} />
            <span
              className={`p-text ${
                disabled
                  ? "" // Disabled: No hover/focus effects
                  : "group-hover:text-primary-700 dark:group-hover:text-dark-primary-700"
              } transition-all duration-300 ease-in-out ${countryTextClasses}`}
            >
              {selectedCountry.dialCode}
            </span>
            <Icon
              icon="fluent:chevron-down-20-regular"
              className={`w-4 h-4 ${
                disabled
                  ? "" // Disabled: No hover/focus effects
                  : "group-hover:text-primary-700 dark:group-hover:text-dark-primary-700"
              } transition-all duration-300 ease-in-out ${countryTextClasses} transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Vertical divider */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--input-border-default)] z-10"
            style={{
              left: inputSize === "sm" ? "76px" : "96px",
              borderColor: inputStyle.borderColor,
            }}
          />

          <input
            ref={inputRef}
            id={inputID}
            name={name}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={placeholder}
            disabled={disabled}
            value={phoneNumber}
            onChange={handlePhoneChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={inputStyle}
            className={`p-text ${inputBaseClass} pl-28 pr-3`}
            {...rest}
          />

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className="absolute p-2 flex flex-col gap-2 left-0 w-full bg-base-50 dark:bg-dark-base-50 border border-base-200 dark:border-dark-base-200 rounded-xl shadow-lg max-h-64 overflow-hidden z-50"
              style={{ top: "calc(100% + 5px)" }}
            >
              {/* Search input */}
              <Input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                radius="lg"
              />

              {/* Country list */}
              <div className="overflow-y-auto max-h-52">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <div
                      key={country.flag}
                      onClick={() => handleCountrySelect(country)}
                      className={`flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-base-100 rounded dark:hover:bg-dark-base-100 transition-colors ${
                        selectedCountry.flag === country.flag
                          ? "bg-base-100 dark:bg-dark-base-100"
                          : ""
                      }`}
                    >
                      <Icon icon={country.flag} width={20} height={20} />
                      <span className="flex-1 text-sm text-base-950 dark:text-dark-base-900">
                        {country.name}
                      </span>
                      <span className="text-sm text-base-600 dark:text-dark-base-600">
                        {country.dialCode}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-4 text-center text-sm text-base-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {message && <p style={helperStyle}>{message}</p>}
      </div>
    </div>
  );
};

export default PhoneInput;