import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  icon?: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onChange,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || items[0]?.id
  );

  const activeTab =
    controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;

    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }

    onChange?.(tabId);
  };

  const activeTabContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2 border-b border-base-200 dark:border-dark-base-800">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id, item.disabled)}
              disabled={isDisabled}
              className={`flex gap-2 px-1 py-2 items-center border-b-2 transition-all duration-200 ${ isActive ? "border-primary-500 dark:border-dark-primary-500" : "border-transparent dark:border-transparent" } ${ isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer" } ${ !isActive && !isDisabled? "hover:border-transparent group dark:hover:border-transparent" : "" }`}>
              {item.icon && (
                <Icon
                  icon={item.icon}
                  width={20}
                  height={20}
                  className={`transition-colors duration-200 ${ isActive ? "text-primary-500 dark:text-dark-primary-500" : "text-base-500 dark:text-dark-base-500" } ${ !isActive && !isDisabled ? "group-hover:text-primary-500 dark:group-hover:text-dark-primary-500" : "" }`}/>
              )}
              <p
                className={`label transition-colors duration-200 ${ isActive ? "text-primary-500 dark:text-dark-primary-500" : "text-base-500 dark:text-dark-base-500" } ${ !isActive && !isDisabled ? "group-hover:text-primary-500 dark:group-hover:text-dark-primary-500" : "" }`}>
                {item.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTabContent && (
        <div className="py-6">
          {activeTabContent}
        </div>
      )}
    </div>
  );
};

export default Tabs;