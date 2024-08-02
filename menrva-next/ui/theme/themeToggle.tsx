'use client';

import setMenrvaTheme from '@/lib/actions/setMenrvaTheme';
import { MoonIcon, SunIcon, Switch } from '@/providers/coreProviders';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useRef, useState } from 'react';

const ThemeToggle: React.FC<{}> = ({ }) => {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const initialized = useRef(false);

  // const setThemeCookie = async (theme: string) => {
  //   const res = await fetch('/api/theme/setTheme', { method: "POST", body: JSON.stringify(theme) });
  //   const data = await res.json();
  // };

  // const getThemeCookie = async () => {
  //   const res = await fetch('/api/theme/getTheme');
  //   const data = await res.json();
  //   return data;
  // };

  const initTheme = useCallback(async () => {
    if (!initialized.current) {
      // const themeCookie = await getThemeCookie();

      if (theme === 'dark') {
        setIsDark(true);
        // if (themeCookie.theme === undefined) { setThemeCookie('dark'); }
      } else if (theme === 'light') {
        setIsDark(false);
        // if (themeCookie.theme === undefined) { setThemeCookie('light'); }
      }
      initialized.current = true;
      setMenrvaTheme(theme ? theme : "light")
      setMounted(true);
    }
  }, [theme]);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  const handleToggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    setTheme(newTheme);
    setMenrvaTheme(newTheme)
    // setThemeCookie(newTheme);
  };

  return (
    <div className="flex items-center w-28 lg:mr-2">
      <SunIcon className={`h-9 w-9 mr-2 dark:text-gray-500 text-yellow-500`} />
      <Switch
        color="blue"
        checked={isDark}
        onChange={handleToggleTheme}
        className="w-10 bg-rose dark:bg-rose/40"
        containerProps={{
          className: "mr-3"
        }}
        circleProps={{
          className: `before:hidden border-none ${mounted ? 'bg-eggplant dark:bg-rose dark:left-0' : 'bg-gray-500 ml-[14px]'}`,
        }}
        ripple={false}
      />
      <MoonIcon className={`h-8 w-8 ml-2 dark:text-indigo-600 text-gray-600`} />
    </div>
  );
};

export default ThemeToggle;
