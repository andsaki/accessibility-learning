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
  style: string;
}

export const borders: BorderTokens = {
  width: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '3px',
    thicker: '4px',
  },
  style: 'solid',
} as const;
