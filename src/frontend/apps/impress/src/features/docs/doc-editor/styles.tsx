import { css } from 'styled-components';

/**
 * Global CSS for document icons in dark mode
 *
 * WHY JAVASCRIPT INJECTION INSTEAD OF STYLED-COMPONENTS?
 *
 * This CSS is injected directly into the DOM via JavaScript rather than using
 * styled-components because:
 *
 * 1. CSS SPECIFICITY ISSUES: The document icons are rendered by a third-party
 *    component (Box from a design system) with generated class names that have
 *    very high specificity. Styled-components CSS was being overridden.
 *
 * 2. CSS VARIABLE RESOLUTION: The design system's CSS variables for greyscale
 *    colors were not resolving correctly in dark mode (all returning the same
 *    light color), so we needed to use the working primary color variables.
 *
 * 3. HOT MODULE RELOAD ISSUES: Changes to styled-components CSS in this file
 *    were not being picked up by Next.js HMR, requiring full page refreshes.
 *
 * 4. IMMEDIATE APPLICATION: Direct DOM injection ensures the styles are applied
 *    immediately without waiting for CSS compilation or build processes.
 *
 * 5. BYPASS BUILD COMPLEXITY: Avoids potential issues with CSS-in-JS compilation,
 *    styled-components theming, or build tool configuration.
 *
 * The injected styles target the specific component class (.Box-sc-34780e96-0.bIxhtp)
 * and use the app's primary color variables for consistent theming.
 */
const globalDocumentIconStyles = `
  html.cunningham-theme--dark .Box-sc-34780e96-0.bIxhtp svg {
    color: var(--c--theme--colors--primary-100) !important;
  }
  
  html.cunningham-theme--dark .Box-sc-34780e96-0.bIxhtp svg path[fill='currentColor'] {
    fill: var(--c--theme--colors--primary-200) !important;
  }
  
  html.cunningham-theme--dark .Box-sc-34780e96-0.bIxhtp svg path[fill='white'] {
    fill: var(--c--theme--colors--primary-100) !important;
  }
  
  html.cunningham-theme--dark .Box-sc-34780e96-0.bIxhtp svg rect[stroke='currentColor'] {
    stroke: var(--c--theme--colors--primary-200) !important;
  }
`;

// Inject the global styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalDocumentIconStyles;
  document.head.appendChild(styleElement);
}

export const cssEditor = (readonly: boolean) => css`
  &,
  & > .bn-container,
  & .ProseMirror {
    height: 100%;
    padding-bottom: 2rem;

    /* BlockNote-specific styles are now handled by CSS variables in blocknote-theme.css */

    /* img.bn-visual-media[src*='-unsafe'] {
      pointer-events: none;
    } */

    /* Collaboration cursor styles are now handled by CSS variables in blocknote-theme.css */

    /**
     * Side menu
     */
    /*.bn-side-menu[data-block-type='heading'][data-level='1'] {
      height: 50px;
    }
    .bn-side-menu[data-block-type='heading'][data-level='2'] {
      height: 43px;
    }
    .bn-side-menu[data-block-type='heading'][data-level='3'] {
      height: 35px;
    }
    .bn-side-menu[data-block-type='divider'] {
      height: 38px;
    } */

    /* Block styling, typography, and links are now handled by CSS variables in blocknote-theme.css */
    /* .bn-block-group
      .bn-block-group
      .bn-block-outer:not([data-prev-depth-changed]):before {
      border-left: none;
    } */
  }

  /* Editor colors and blockquotes are now handled by CSS variables in blocknote-theme.css */

  /* & .bn-block-outer:not(:first-child) {
    &:has(h1) {
      margin-top: 32px;
    }
    &:has(h2) {
      margin-top: 24px;
    }
    &:has(h3) {
      margin-top: 16px;
    }
  } */

  /* Code styling is now handled by CSS variables in blocknote-theme.css */

  @media screen and (width <= 768px) {
    & .bn-editor {
      padding-right: 36px;
    }
  }

  @media screen and (width <= 560px) {
    & .bn-editor {
      ${readonly && `padding-left: 10px;`}
      padding-right: 10px;
    }
    .bn-side-menu[data-block-type='heading'][data-level='1'] {
      height: 46px;
    }
    .bn-side-menu[data-block-type='heading'][data-level='2'] {
      height: 40px;
    }
    .bn-side-menu[data-block-type='heading'][data-level='3'] {
      height: 40px;
    }
    & .bn-editor h1 {
      font-size: 1.6rem;
    }
    & .bn-editor h2 {
      font-size: 1.35rem;
    }
    & .bn-editor h3 {
      font-size: 1.2rem;
    }
    .bn-block-content[data-is-empty-and-focused][data-content-type='paragraph']
      .bn-inline-content:has(> .ProseMirror-trailingBreak:only-child)::before {
      font-size: 14px;
    }
  }

  /* Dark theme specific styles - now handled by BlockNote CSS variables */
  .cunningham-theme--dark & {
    /* Keep only essential custom styles that aren't handled by BlockNote theming */
    .collaboration-cursor-custom__label {
      color: var(--c--theme--colors--greyscale-text);
    }

    .collaboration-cursor-custom__base[data-active]
      .collaboration-cursor-custom__label {
      box-shadow: inset -2px 2px 6px rgba(255, 255, 255, 0.1);
    }
  }
`;
