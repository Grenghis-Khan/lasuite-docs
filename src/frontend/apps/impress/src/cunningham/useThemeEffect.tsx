import { useEffect } from 'react';

import { useCunninghamTheme } from './useCunninghamTheme';

/**
 * Hook that applies the current theme class to the HTML element
 * This ensures that CSS variables are properly applied based on the current theme
 */
export function useThemeEffect() {
  const { theme } = useCunninghamTheme();

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const htmlElement = document.documentElement;

    // Remove all existing theme classes
    htmlElement.classList.remove(
      'cunningham-theme--dark',
      'cunningham-theme--dsfr',
      'cunningham-theme--generic',
    );

    // Add the current theme class
    if (theme !== 'default') {
      htmlElement.classList.add(`cunningham-theme--${theme}`);
    }
  }, [theme]);
}
