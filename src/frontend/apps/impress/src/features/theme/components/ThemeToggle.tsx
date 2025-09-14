import { Button } from '@openfun/cunningham-react';
import { useTranslation } from 'react-i18next';

import { useCunninghamTheme } from '@/cunningham';

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useCunninghamTheme();

  const toggleTheme = () => {
    // Cycle through themes: generic -> dark -> generic
    if (theme === 'generic') {
      setTheme('dark');
    } else {
      setTheme('generic');
    }
  };

  const getThemeIcon = () => {
    return theme === 'dark' ? 'light_mode' : 'dark_mode';
  };

  const getThemeLabel = () => {
    return theme === 'dark' ? t('Light mode') : t('Dark mode');
  };

  return (
    <Button
      icon={getThemeIcon()}
      onClick={toggleTheme}
      title={getThemeLabel()}
      aria-label={getThemeLabel()}
    />
  );
}
