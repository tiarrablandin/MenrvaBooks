// components/ThemeToggle.tsx or in your _app.tsx
import { useAppDispatch, useAppSelector } from '../../lib/store/store';
import { useEffect } from 'react';
import { toggleTheme } from '../../lib/store/themeSlice';
import { MoonIcon, SunIcon, Switch } from '@/providers';

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
    <div className="flex items-center justify-between w-28 ml-auto -mr-48 lg:mr-0">
      <SunIcon className={`h-8 w-8 ${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'}`} />
      <Switch
        color="blue"
        checked={theme === 'dark'}
        onChange={handleToggleTheme}
        className="w-10"
        containerProps={{
          className: "mr-3"
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        ripple={false}
      />
      <MoonIcon className={`h-7 w-7 ${theme === 'dark' ? 'text-indigo-500' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle;
