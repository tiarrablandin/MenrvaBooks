"use client";

import { useAppSelector } from "@/app/lib/store/store";
import { ReactNode, useEffect } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    console.log(`Before ${theme}`);
    document.body.classList.toggle("dark", theme === "dark");
    console.log(`After ${theme}`);
    // This ensures the class is correctly applied when the theme changes
  }, [theme]);

  return <>{children}</>; // Ensure children are rendered
}
