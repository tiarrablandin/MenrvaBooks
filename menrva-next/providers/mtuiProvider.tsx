"use client";

import { darkTheme } from "@/app/ui/theme/darkTheme";
import { lightTheme } from "@/app/ui/theme/lightTheme";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactElement, ReactNode } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
  theme: 'light' | 'dark';
}

export function MTUIProvider({ children, theme }: MenrvaThemeProviderProps) {
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider value={selectedTheme}>{children as ReactElement}</ThemeProvider>
  );
}