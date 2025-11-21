import { token } from '@/styled-system/tokens';

export const borders = {
  none: 'none',
  default: `${token('borderWidths.thin')} solid ${token('colors.border.default')}`,
  width: {
    none: token('borderWidths.none'),
    thin: token('borderWidths.thin'),
    base: token('borderWidths.base'),
    thick: token('borderWidths.thick'),
    thicker: token('borderWidths.thicker'),
  },
} as const;
