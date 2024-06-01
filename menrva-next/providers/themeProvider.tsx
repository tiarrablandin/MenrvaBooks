import { lightTheme } from "@/ui/theme/lightTheme";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "./coreProviders";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
    <ThemeProvider selectedTheme={lightTheme}>{children as ReactElement}</ThemeProvider>
  );
}
