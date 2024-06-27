"use client";

import { darkTheme } from "@/ui/theme/darkTheme";
import { lightTheme } from "@/ui/theme/lightTheme";
import { useAppSelector } from "@/lib/store/store";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactElement, ReactNode, useEffect } from "react";
import ReduxProvider from "./reduxProvider";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeToggleProvider({ children }: MenrvaThemeProviderProps) {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
    <ThemeProvider value={selectedTheme}>{children as any}</ThemeProvider>
  );
}
