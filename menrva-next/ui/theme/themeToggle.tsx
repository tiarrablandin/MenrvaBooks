'use client';

import setTheme from '@/lib/actions/setTheme';
import { MoonIcon, SunIcon, Switch } from '@/providers/coreProviders';
import { useRef, useState } from 'react';

const ThemeToggle: React.FC<{ theme: string }> = ({ theme }) => {
  const [isDark, setIsDark] = useState(theme === 'dark');
  const initialized = useRef(false);

  const initTheme = async () => {
    document.documentElement.classList.toggle('dark', true);
    setIsDark(true);
    await setTheme('dark');
  }

  if (!initialized.current && theme === 'dark') {
    initTheme();
    initialized.current = true;
  }

  const handleToggleTheme = async () => {
    if (theme === 'light') {
      document.documentElement.classList.toggle('dark', true);
      setIsDark(true);
      await setTheme('dark');
    } else {
      document.documentElement.classList.toggle('dark', false);
      setIsDark(false);
      await setTheme('light');
      const res = await setTheme('light');
    }
    // dispatch(toggleTheme());
  };

  return (
    // <ReduxProvider>
    <div className="flex items-center w-28  lg:mr-2">
      <SunIcon className={`h-9 w-9 mr-2 ${isDark ? 'text-gray-400' : 'text-yellow-500'}`} />
      <Switch
        color="blue"
        checked={isDark}
        onChange={handleToggleTheme}
        className="w-10 bg-old-lace dark:bg-eggplant"
        containerProps={{
          className: "mr-3"
        }}
        circleProps={{
          className: "before:hidden  border-none bg-eggplant dark:bg-old-lace dark:left-1 ",
        }}
        ripple={false}
      />
      <MoonIcon className={`h-8 w-8 ml-1 ${isDark ? 'text-indigo-500' : 'text-gray-400'}`} />
    </div>
    // {/* </ReduxProvider> */}
  );
};

export default ThemeToggle;
