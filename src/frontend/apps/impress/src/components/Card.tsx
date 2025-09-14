import { PropsWithChildren } from 'react';
import { css } from 'styled-components';

import { useCunninghamTheme } from '@/cunningham';

import { Box, BoxType } from '.';

export const Card = ({
  children,
  $css,
  ...props
}: PropsWithChildren<BoxType>) => {
  return (
    <Box
      className={`--docs--card ${props.className || ''}`}
      $radius="4px"
      $css={css`
        background-color: var(--c--theme--colors--greyscale-000);
        border: 1px solid var(--c--theme--colors--greyscale-200);
        color: var(--c--theme--colors--greyscale-text);
        ${$css}
      `}
      {...props}
    >
      {children}
    </Box>
  );
};
