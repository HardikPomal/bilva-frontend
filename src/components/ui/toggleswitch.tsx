
import React, { useState } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked: controlledChecked,
  onChange,
  disabled = false,
  defaultChecked = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  
  // Use controlled value if provided, otherwise use internal state
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    
    // Update internal state if uncontrolled
    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }
    
    // Call onChange callback
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`relative w-[38px] h-5 rounded-xl p-0.5 transition-colors duration-200 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${ isChecked ? 'bg-primary-500 dark:bg-dark-primary-500 hover:bg-primary-600 dark:hover:bg-dark-primary-600 active:bg-primary-700 dark:active:bg-dark-primary-700 disabled:bg-primary-500 disabled:dark:bg-dark-primary-500' : 'bg-base-400 dark:bg-dark-base-400 hover:bg-base-500 dark:hover:bg-dark-base-500 active:bg-base-600 dark:active:bg-dark-base-600 disabled:bg-base-400 disabled:dark:bg-dark-base-400' } ${disabled ? 'hover:bg-inherit active:bg-inherit' : ''}`}
    >
      <span
        className={`block size-4 min-w-4 min-h-4 rounded-full bg-base-50 dark:bg-dark-base-50 transition-transform duration-200 ease-in-out ${isChecked ? 'translate-x-[18px]' : 'translate-x-0'}`}
      />
    </button>
  );
};

export default ToggleSwitch;