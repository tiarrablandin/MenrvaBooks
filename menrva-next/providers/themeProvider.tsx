import { cookies } from "next/headers";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "./coreProviders";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export async function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = cookies().get('theme')?.value as string;

  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
    <ThemeProvider selectedTheme={theme}>{children as ReactElement}</ThemeProvider>
  );
}
