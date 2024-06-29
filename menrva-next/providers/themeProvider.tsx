'use client'

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme="system" enableSystem>{children as any}</ThemeProvider>
  );
}
