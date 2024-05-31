"use client";

import { darkTheme } from "@/app/ui/theme/darkTheme";
import { lightTheme } from "@/app/ui/theme/lightTheme";
import { useAppSelector } from "@/lib/store/store";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactElement, ReactNode, useEffect } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
      <ThemeProvider selectedTheme={selectedTheme}>{children as ReactElement}</ThemeProvider>
  );
}
