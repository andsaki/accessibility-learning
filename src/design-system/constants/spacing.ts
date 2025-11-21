import { token } from '@/styled-system/tokens';

export const spacing = {
  scale: {
    0: token('spacing.0'),
    0.5: token('spacing.0.5'),
    0.75: token('spacing.0.75'),
    1: token('spacing.1'),
    2: token('spacing.2'),
    3: token('spacing.3'),
    4: token('spacing.4'),
    5: token('spacing.5'),
    6: token('spacing.6'),
    8: token('spacing.8'),
    10: token('spacing.10'),
    12: token('spacing.12'),
    16: token('spacing.16'),
    20: token('spacing.20'),
    24: token('spacing.24'),
    32: token('spacing.32'),
    40: token('spacing.40'),
    48: token('spacing.48'),
    56: token('spacing.56'),
    64: token('spacing.64'),
  },
  semantic: {
    none: token('spacing.0'),
    xs: token('spacing.1'),
    sm: token('spacing.2'),
    md: token('spacing.4'),
    lg: token('spacing.6'),
    xl: token('spacing.8'),
    '2xl': token('spacing.12'),
    '3xl': token('spacing.16'),
    '4xl': token('spacing.24'),
  },
  button: {
    paddingX: {
      sm: token('spacing.3'),
      md: token('spacing.4'),
      lg: token('spacing.6'),
    },
    paddingY: {
      sm: token('spacing.2'),
      md: token('spacing.3'),
      lg: token('spacing.4'),
    },
    gap: token('spacing.2'),
  },
  input: {
    paddingX: {
      sm: token('spacing.3'),
      md: token('spacing.4'),
      lg: token('spacing.5'),
    },
    paddingY: {
      sm: token('spacing.2'),
      md: token('spacing.3'),
      lg: token('spacing.4'),
    },
    gap: token('spacing.2'),
  },
  card: {
    padding: {
      sm: token('spacing.4'),
      md: token('spacing.6'),
      lg: token('spacing.8'),
    },
    gap: token('spacing.4'),
  },
  layout: {
    container: {
      paddingX: token('spacing.4'),
      maxWidth: '1200px',
    },
    section: {
      paddingY: {
        sm: token('spacing.8'),
        md: token('spacing.12'),
        lg: token('spacing.16'),
      },
    },
    stack: {
      gap: {
        sm: token('spacing.2'),
        md: token('spacing.4'),
        lg: token('spacing.6'),
      },
    },
  },
} as const;
