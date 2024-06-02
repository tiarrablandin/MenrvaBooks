import { lightTheme } from "@/ui/theme/lightTheme";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "./coreProviders";
import { cookies } from "next/headers";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export async function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const theme = cookies().get('theme')?.value as string;
  // const res = await fetch("/api/validateToken");


  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
    <ThemeProvider selectedTheme={lightTheme}>{children as ReactElement}</ThemeProvider>
  );
}
