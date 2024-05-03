import { useEffect } from 'react';

export function useTheme(theme: string) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
}