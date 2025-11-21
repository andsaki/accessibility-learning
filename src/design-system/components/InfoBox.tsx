import React from 'react';
import { css, cx } from '@/styled-system/css';

export type InfoBoxVariant = 'info' | 'warning' | 'success' | 'tip';
export type WCAGLevel = 'A' | 'AA' | 'AAA';

export interface InfoBoxProps {
  /** バリアント（色テーマ） */
  variant?: InfoBoxVariant;
  /** タイトル */
  title?: string;
  /** アイコン（絵文字など） */
  icon?: string;
  /** 子要素 */
  children: React.ReactNode;
  /** 左ボーダーを表示 */
  leftBorder?: boolean;
  /** WCAGレベル（A, AA, AAA） */
  wcagLevel?: WCAGLevel;
  /** カスタムスタイル */
  style?: React.CSSProperties;
  /** カスタムクラス */
  className?: string;
}

// ベーススタイル
const baseStyle = css({
  p: 4,
  rounded: 'base',
  borderWidth: 'thin',
  borderStyle: 'solid',
});

// バリアントとWCAGレベルに応じたスタイル
const variantStyles = {
  info: {
    A: css({
      bg: 'blue.50',
      borderColor: 'blue.200',
      color: 'blue.700',
    }),
    AA: css({
      bg: 'blue.50',
      borderColor: 'blue.300',
      color: 'blue.800',
    }),
    AAA: css({
      bg: 'blue.50',
      borderColor: 'blue.500',
      color: 'blue.900',
    }),
  },
  warning: {
    A: css({
      bg: 'orange.50',
      borderColor: 'orange.200',
      color: 'orange.800',
    }),
    AA: css({
      bg: 'orange.50',
      borderColor: 'orange.300',
      color: 'orange.900',
    }),
    AAA: css({
      bg: 'orange.50',
      borderColor: 'orange.500',
      color: 'orange.900',
    }),
  },
  success: {
    A: css({
      bg: 'green.50',
      borderColor: 'green.200',
      color: 'green.700',
    }),
    AA: css({
      bg: 'green.50',
      borderColor: 'green.300',
      color: 'green.800',
    }),
    AAA: css({
      bg: 'green.50',
      borderColor: 'green.500',
      color: 'green.900',
    }),
  },
  tip: {
    A: css({
      bg: 'blue.50',
      borderColor: 'blue.200',
      color: 'blue.700',
    }),
    AA: css({
      bg: 'blue.50',
      borderColor: 'blue.300',
      color: 'blue.800',
    }),
    AAA: css({
      bg: 'blue.50',
      borderColor: 'blue.500',
      color: 'blue.900',
    }),
  },
};

// 左ボーダーのスタイル
const leftBorderStyle = css({
  borderLeftWidth: 'base',
});

// タイトルスタイル
const titleStyle = css({
  fontWeight: 600,
  mb: 2,
});

// アイコンスタイル
const iconStyle = css({
  mr: 2,
});

// コンテンツスタイル
const contentStyle = css({
  lineHeight: 1.6,
});

/**
 * 情報ボックスコンポーネント
 *
 * ヒントや警告などの情報を強調して表示するためのコンポーネント
 *
 * WCAG準拠:
 * - Level A: 最低限のコントラスト
 * - Level AA: 推奨（デフォルト）
 * - Level AAA: 最高レベルのコントラスト
 */
export const InfoBox: React.FC<InfoBoxProps> = ({
  variant = 'info',
  title,
  icon,
  children,
  leftBorder = false,
  wcagLevel = 'AA',
  style,
  className,
}) => {
  const variantStyle = variantStyles[variant][wcagLevel];

  return (
    <div
      className={cx(
        baseStyle,
        variantStyle,
        leftBorder && leftBorderStyle,
        className
      )}
      style={style}
    >
      {(title || icon) && (
        <div className={titleStyle}>
          {icon && <span className={iconStyle}>{icon}</span>}
          {title}
        </div>
      )}
      <div className={contentStyle}>{children}</div>
    </div>
  );
};
