"use client";

import { useEffect } from "react";
import { getStoredTheme, getSystemTheme } from "@/lib/theme"; // Removed unused setStoredTheme import

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;

    function setTheme(theme: Theme) {
      const finalTheme: "light" | "dark" = theme === "system" && enableSystem
        ? (getSystemTheme() as "light" | "dark")
        : (theme as "light" | "dark");

      if (finalTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }

    const stored = getStoredTheme();
    setTheme(stored || defaultTheme);

    // Listen for changes (e.g., from a theme toggle button)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setTheme(getStoredTheme() || defaultTheme);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [enableSystem, defaultTheme]);

  return <>{children}</>;
}