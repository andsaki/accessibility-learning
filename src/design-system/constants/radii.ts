import { token } from '@/styled-system/tokens';

export const radii = {
  borderRadius: {
    none: token('radii.none'),
    sm: token('radii.sm'),
    base: token('radii.base'),
    md: token('radii.md'),
    lg: token('radii.lg'),
    xl: token('radii.xl'),
    '2xl': token('radii.2xl'),
    '3xl': token('radii.3xl'),
    full: token('radii.full'),
  },
} as const;
