'use client'

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MenrvaThemeProviderProps {
  children: ReactNode;
}

export function MenrvaThemeProvider({ children }: MenrvaThemeProviderProps) {
  const initialized = useRef(false);
  const [selectedTheme, setSelectedTheme] = useState('light');

  useEffect(() => {
    const initialize = async () => {
      const res = await fetch('api/theme/getTheme');
      const theme = await res.json();
      setSelectedTheme(theme);
      initialized.current = true;
    }

    if (!initialized.current) {
      initialize();
    }
  }, [initialized, setSelectedTheme])

  // ******************* IGNORE THIS ERROR!!!!!!!!!!!!!!
  return (
    // <>
    //   {children ? <ThemeProvider selectedTheme={theme === 'dark' ? darkTheme : lightTheme}>{children as ReactElement}</ThemeProvider> : <></>}
    // </>
    <ThemeProvider attribute='class' defaultTheme={selectedTheme}>{children as any}</ThemeProvider>);
  // )
}
