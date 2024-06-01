// components/ThemeToggle.tsx or in your _app.tsx
import { toggleTheme } from '@/lib/store/features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { MoonIcon, SunIcon, Switch } from '@/providers/coreProviders';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
      <div className="flex items-center w-28  lg:mr-2">
        <SunIcon className={`h-9 w-9 mr-2 ${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'}`} />
        <Switch
          color="blue"
          checked={theme === 'dark'}
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
        <MoonIcon className={`h-8 w-8 ml-1 ${theme === 'dark' ? 'text-indigo-500' : 'text-gray-400'}`} />
      </div>
  );
};

export default ThemeToggle;
