/**
 * Border トークン
 *
 * ボーダーの太さとスタイルを定義します
 */

export interface BorderTokens {
  width: {
    none: string;
    thin: string;
    base: string;
    thick: string;
    thicker: string;
  };
  style: {
    solid: string;
    dashed: string;
    dotted: string;
    none: string;
  };
}

export const borders: BorderTokens = {
  width: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '3px',
    thicker: '4px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none',
  },
} as const;
