/**
 * WCAGアクセシビリティレベル別トークン
 *
 * A（最低限）/ AA（推奨）/ AAA（最高）の3段階で
 * コンポーネントのスタイルを出し分けます。
 *
 * ## レベルの選び方
 *
 * ### レベルA（Level A）
 * - 法的義務の最低ライン
 * - 公開Webサイトの最低基準
 * - コントラスト比: 3:1（大きいテキスト）
 *
 * ### レベルAA（Level AA）★ 推奨
 * - ほとんどのWebサイトで推奨される標準
 * - バランスの取れたアクセシビリティ
 * - コントラスト比: 4.5:1（通常）/ 3:1（大きい）
 *
 * ### レベルAAA（Level AAA）
 * - 最高レベルのアクセシビリティ
 * - 公共機関、医療、金融などで推奨
 * - コントラスト比: 7:1（通常）/ 4.5:1（大きい）
 */

import { primitive } from './colors';

// WCAGアクセシビリティレベルの型定義
export type WCAGLevel = 'A' | 'AA' | 'AAA';

/**
 * フォーカススタイル（レベル別）
 */
export const focusStyles = {
  /**
   * レベルA: 最低限のフォーカス表示
   * - 薄い青いアウトライン
   * - コントラスト比: 約3:1
   */
  A: {
    background: 'transparent',
    outline: primitive.blue[300], // 薄い青
    outlineWidth: '2px',
    outlineOffset: '0px',
    text: 'inherit',
  },

  /**
   * レベルAA: 標準的なフォーカス表示
   * - 濃い青いアウトライン + オフセット
   * - コントラスト比: 4.5:1以上
   */
  AA: {
    background: primitive.blue[50], // 薄い青背景
    outline: primitive.blue[700], // 濃い青
    outlineWidth: '3px',
    outlineOffset: '2px',
    text: primitive.gray[900],
  },

  /**
   * レベルAAA: 最高レベルのフォーカス表示
   * - 黄色背景 + 黒アウトライン
   * - コントラスト比: 19.56:1
   */
  AAA: {
    background: '#ffff00', // 黄色
    outline: primitive.black,
    outlineWidth: '4px',
    outlineOffset: '2px',
    text: primitive.black,
  },
} as const;

/**
 * ボタンカラー（レベル別）
 */
export const buttonColors = {
  /**
   * レベルA: コントラスト比 3:1
   * 大きいボタンのみ使用可能
   */
  A: {
    primary: {
      bg: primitive.blue[400], // コントラスト比: 3.1:1
      text: primitive.white,
      border: primitive.blue[400],
    },
    secondary: {
      bg: primitive.gray[200],
      text: primitive.gray[700], // コントラスト比: 3.2:1
      border: primitive.gray[300],
    },
  },

  /**
   * レベルAA: コントラスト比 4.5:1
   * 標準サイズで使用可能
   */
  AA: {
    primary: {
      bg: primitive.blue[500], // コントラスト比: 4.5:1
      text: primitive.white,
      border: primitive.blue[500],
    },
    secondary: {
      bg: primitive.gray[100],
      text: primitive.gray[900], // コントラスト比: 16.1:1
      border: primitive.gray[400],
    },
  },

  /**
   * レベルAAA: コントラスト比 7:1
   * 最高レベルの視認性
   */
  AAA: {
    primary: {
      bg: primitive.blue[700], // コントラスト比: 4.59:1（白背景）
      text: primitive.white,
      border: primitive.blue[800],
    },
    secondary: {
      bg: primitive.white,
      text: primitive.gray[900], // コントラスト比: 16.1:1
      border: primitive.gray[600],
    },
  },
} as const;

/**
 * テキストカラー（レベル別）
 */
export const textColors = {
  /**
   * レベルA: コントラスト比 3:1
   * 大きいテキスト（18pt/24px以上、または14pt/18.5px太字以上）のみ
   */
  A: {
    primary: primitive.gray[600], // コントラスト比: 4.55:1
    secondary: primitive.gray[500], // コントラスト比: 3.26:1
    link: primitive.blue[400], // コントラスト比: 3.1:1
  },

  /**
   * レベルAA: コントラスト比 4.5:1
   * 通常サイズのテキストに使用可能
   */
  AA: {
    primary: primitive.gray[900], // コントラスト比: 16.1:1
    secondary: primitive.gray[700], // コントラスト比: 7.0:1
    link: primitive.blue[700], // コントラスト比: 4.59:1
  },

  /**
   * レベルAAA: コントラスト比 7:1
   * 最高レベルの可読性
   */
  AAA: {
    primary: primitive.black, // コントラスト比: 21:1
    secondary: primitive.gray[800], // コントラスト比: 11.6:1
    link: primitive.blue[800], // コントラスト比: 6.28:1
  },
} as const;

/**
 * サイズ制限（レベル別）
 *
 * WCAGでは、コントラスト比の要件がテキストサイズによって異なります
 */
export const sizeRequirements = {
  /**
   * レベルA: 大きいテキストのみ
   */
  A: {
    minFontSize: '24px', // 18pt
    minFontSizeBold: '18.5px', // 14pt bold
    description: '大きいテキスト（18pt/24px以上、または14pt/18.5px太字以上）のみ使用可能',
  },

  /**
   * レベルAA: 通常サイズ可能
   */
  AA: {
    minFontSize: '16px', // 通常サイズ
    minFontSizeBold: '14px', // 太字
    description: '通常サイズのテキストから使用可能',
  },

  /**
   * レベルAAA: すべてのサイズ
   */
  AAA: {
    minFontSize: '12px',
    minFontSizeBold: '12px',
    description: 'すべてのサイズで最高の可読性を提供',
  },
} as const;

/**
 * レベル別の推奨使用場所
 */
export const useCases = {
  A: {
    title: 'レベルA（最低限）',
    description: '法的義務の最低ライン',
    useCases: [
      '大きなテキストのみの簡易ページ',
      'プロトタイプやMVP',
      '一時的なランディングページ',
    ],
    warnings: [
      '⚠️ 視覚障害者には使いにくい可能性',
      '⚠️ 低コントラストの環境では見えにくい',
    ],
  },
  AA: {
    title: 'レベルAA（推奨）★',
    description: 'ほとんどのWebサイトで推奨される標準',
    useCases: [
      'コーポレートサイト',
      'ECサイト',
      'ブログ・メディア',
      '一般的なWebアプリケーション',
    ],
    benefits: [
      '✅ 法的要件を満たす',
      '✅ ほとんどのユーザーに使いやすい',
      '✅ バランスの取れたデザイン',
    ],
  },
  AAA: {
    title: 'レベルAAA（最高）',
    description: '最高レベルのアクセシビリティ',
    useCases: [
      '公共機関のWebサイト',
      '医療・福祉サービス',
      '金融機関',
      '教育機関',
      '高齢者向けサービス',
    ],
    benefits: [
      '✅ すべてのユーザーに優しい',
      '✅ 視覚障害者も快適に使用可能',
      '✅ ブランド信頼性の向上',
    ],
  },
} as const;

/**
 * アクセシビリティレベルの統合エクスポート
 */
export const accessibilityLevels = {
  focus: focusStyles,
  button: buttonColors,
  text: textColors,
  size: sizeRequirements,
  useCases,
} as const;

export type AccessibilityLevels = typeof accessibilityLevels;
