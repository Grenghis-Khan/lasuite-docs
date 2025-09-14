import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components';

import { Box } from '@/components';
import { useCunninghamTheme } from '@/cunningham';
import { Header } from '@/features/header';
import { HEADER_HEIGHT } from '@/features/header/conf';
import { LeftPanel } from '@/features/left-panel';
import { MAIN_LAYOUT_ID } from '@/layouts/conf';
import { useResponsiveStore } from '@/stores';

type MainLayoutProps = {
  backgroundColor?: 'white' | 'grey';
};

export function MainLayout({
  children,
  backgroundColor = 'white',
}: PropsWithChildren<MainLayoutProps>) {
  const { isDesktop } = useResponsiveStore();
  const currentBackgroundColor = !isDesktop ? 'white' : backgroundColor;
  const { t } = useTranslation();

  return (
    <Box className="--docs--main-layout">
      <Header />
      <Box
        $direction="row"
        $margin={{ top: `${HEADER_HEIGHT}px` }}
        $width="100%"
      >
        <LeftPanel />
        <Box
          as="main"
          aria-label={t('Main content')}
          id={MAIN_LAYOUT_ID}
          $align="center"
          $flex={1}
          $width="100%"
          $height={`calc(100dvh - ${HEADER_HEIGHT}px)`}
          $padding={{
            all: isDesktop ? 'base' : '0',
          }}
          $css={css`
            overflow-y: auto;
            overflow-x: clip;
            background-color: ${currentBackgroundColor === 'white'
              ? 'var(--c--theme--colors--greyscale-000)'
              : 'var(--c--theme--colors--greyscale-050)'};
            color: var(--c--theme--colors--greyscale-text);
          `}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
