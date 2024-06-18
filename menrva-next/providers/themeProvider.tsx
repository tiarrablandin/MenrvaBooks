import { cookies } from "next/headers";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "./coreProviders";
import { darkTheme } from "@/ui/theme/darkTheme";
import { lightTheme } from "@/ui/theme/lightTheme";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export async function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = cookies().get('theme')?.value as string;

  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (<ThemeProvider selectedTheme={theme === 'dark' ? darkTheme : lightTheme}>{children as ReactElement}</ThemeProvider>);
}
