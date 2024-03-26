// components/ThemeToggle.tsx or in your _app.tsx
import { useAppDispatch, useAppSelector } from '../../lib/store/store';
import { useEffect } from 'react';
import { toggleTheme } from '../../lib/store/themeSlice';

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
    <button onClick={handleToggleTheme}>Toggle Theme</button>
  );
};

export default ThemeToggle;
