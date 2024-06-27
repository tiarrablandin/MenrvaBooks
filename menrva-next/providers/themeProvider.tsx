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
  return (
    // <>
    //   {children ? <ThemeProvider selectedTheme={theme === 'dark' ? darkTheme : lightTheme}>{children as ReactElement}</ThemeProvider> : <></>}
    // </>
    <ThemeProvider value={theme === 'dark' ? darkTheme : lightTheme}>{children as any}</ThemeProvider>);
  // )
}
