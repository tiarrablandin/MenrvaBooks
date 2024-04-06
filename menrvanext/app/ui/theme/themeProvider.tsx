"use client";

import { useAppSelector } from "@/app/lib/store/store";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
import { ReactElement, ReactNode, useEffect } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = useAppSelector((state) => state.theme.theme);

  const customMTTheme = {
    tab: {
      styles: {
        base: {
          tab: {
            initial: {
              color: "text-white"
            }
          },
          indicator: {
            bg: "bg-eggplant",
          },

        }
      }
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <MTThemeProvider value={customMTTheme}>{children as ReactElement}</MTThemeProvider>; // Ensure children are rendered
}
