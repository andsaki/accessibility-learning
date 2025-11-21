import { token } from '@/styled-system/tokens';

export const typography = {
  fontFamily: {
    base: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans JP"',
      'sans-serif',
    ].join(', '),
    mono: ['Menlo', 'Monaco', '"Courier New"', 'monospace'].join(', '),
    serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'].join(', '),
  },
  fontSize: {
    xs: token('fontSizes.xs'),
    sm: token('fontSizes.sm'),
    base: token('fontSizes.base'),
    lg: token('fontSizes.lg'),
    xl: token('fontSizes.xl'),
    '2xl': token('fontSizes.2xl'),
    '3xl': token('fontSizes.3xl'),
    '4xl': token('fontSizes.4xl'),
    '5xl': token('fontSizes.5xl'),
    '6xl': token('fontSizes.6xl'),
  },
  fontWeight: {
    light: token('fontWeights.light'),
    normal: token('fontWeights.normal'),
    medium: token('fontWeights.medium'),
    semibold: token('fontWeights.semibold'),
    bold: token('fontWeights.bold'),
    extrabold: token('fontWeights.extrabold'),
  },
  lineHeight: {
    none: token('lineHeights.none'),
    tight: token('lineHeights.tight'),
    snug: token('lineHeights.snug'),
    normal: token('lineHeights.normal'),
    relaxed: token('lineHeights.relaxed'),
    loose: token('lineHeights.loose'),
  },
  letterSpacing: {
    tighter: token('letterSpacings.tighter'),
    tight: token('letterSpacings.tight'),
    normal: token('letterSpacings.normal'),
    wide: token('letterSpacings.wide'),
    wider: token('letterSpacings.wider'),
    widest: token('letterSpacings.widest'),
  },
} as const;
