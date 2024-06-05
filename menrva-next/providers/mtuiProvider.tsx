"use client";

import { darkTheme } from "@/ui/theme/darkTheme";
import { lightTheme } from "@/ui/theme/lightTheme";
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