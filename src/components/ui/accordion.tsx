"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./button/button";
import IconButton from "./button/iconbutton";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  onToggle,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={`accordion flex flex-col p-2 rounded-2xl outline-1 outline-base-300 dark:outline-base-600 ${className} ${isExpanded ? "gap-2" : ""}`}>
      <div
        className="accordion_title flex gap-2 p-2 items-center cursor-pointer select-none"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <h5 className="w-full text-base-950 dark:text-dark-base-950">
          {title}
        </h5>
        <div className="action">
          <IconButton
            variant="ghost"
            color="base"
            size="sm"
            rounded="full"
            icon="fluent:chevron-down-20-regular"
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>

      <div
        className={`accordion_content overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-2 border-t border-base-300 dark:border-base-600">
          <div className="text-base-900 dark:text-base-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
