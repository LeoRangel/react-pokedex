import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '../types';

type AppContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    // If there is no theme value in localStorage, set light value
    const storageTheme = localStorage.getItem('theme');
    return (storageTheme ?? 'light') as Theme;
  });

  useEffect(() => {
    // Set new theme value in localStorage
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
