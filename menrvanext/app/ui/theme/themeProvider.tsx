"use client";

import { useAppSelector } from "@/app/lib/store/store";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
import { ReactElement, ReactNode, useEffect } from "react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

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
  return <MTThemeProvider value={selectedTheme}>{children as ReactElement}</MTThemeProvider>;
}
