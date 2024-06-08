'use client';

import setTheme from '@/lib/actions/setTheme';
import { MoonIcon, SunIcon, Switch } from '@/providers/coreProviders';
import { useCallback, useEffect, useRef, useState } from 'react';

const ThemeToggle: React.FC<{ theme: string }> = ({ theme }) => {
  const [isDark, setIsDark] = useState(theme === 'dark');
  const initialized = useRef(false);

  const initTheme = useCallback(async () => {
    if (!initialized.current && theme === 'dark' && document !== undefined) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      await setTheme('dark');
    } else if (!initialized.current) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      await setTheme('light');
    }
    initialized.current = true;
  }, [theme]);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  const handleToggleTheme = async () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      await setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      await setTheme('light');
    }
  };

  return (
    <div className="flex items-center w-28  lg:mr-2">
      <SunIcon className={`h-9 w-9 mr-2 dark:text-parchment/70 text-eggplant`} />
      <Switch
        color="blue"
        checked={isDark}
        onChange={handleToggleTheme}
        className="w-10 bg-parchment/70 dark:bg-parchment/70"
        containerProps={{
          className: "mr-3"
        }}
        circleProps={{
          className: "before:hidden  border-none bg-eggplant dark:bg-rose dark:left-1 ",
        }}
        ripple={false}
      />
      <MoonIcon className={`h-8 w-8 ml-2 dark:text-rose text-parchment/70`} />
    </div>
  );
};

export default ThemeToggle;
