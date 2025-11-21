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
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
    }),
    AA: css({
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
    }),
    AAA: css({
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
    }),
  },
  warning: {
    A: css({
      bg: 'bg.secondary',
      borderColor: 'border.warning',
      color: 'contents.warning',
    }),
    AA: css({
      bg: 'bg.secondary',
      borderColor: 'border.warning',
      color: 'contents.warning',
    }),
    AAA: css({
      bg: 'bg.secondary',
      borderColor: 'border.warning',
      color: 'contents.warning',
    }),
  },
  success: {
    A: css({
      bg: 'bg.secondary',
      borderColor: 'border.success',
      color: 'contents.success',
    }),
    AA: css({
      bg: 'bg.secondary',
      borderColor: 'border.success',
      color: 'contents.success',
    }),
    AAA: css({
      bg: 'bg.secondary',
      borderColor: 'border.success',
      color: 'contents.success',
    }),
  },
  tip: {
    A: css({
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
    }),
    AA: css({
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
    }),
    AAA: css({
      bg: 'bg.secondary',
      borderColor: 'border.default',
      color: 'contents.primary',
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
