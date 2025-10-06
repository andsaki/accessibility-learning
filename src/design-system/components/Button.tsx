import React from 'react';
import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンのバリエーション */
  variant?: 'primary' | 'secondary' | 'outline';
  /** ボタンのサイズ */
  size?: 'sm' | 'md' | 'lg';
  /** ローディング状態 */
  isLoading?: boolean;
  /** テキストの前に表示するアイコン */
  icon?: React.ReactNode;
}

/**
 * アクセシブルなボタンコンポーネント
 *
 * 機能:
 * - キーボード操作対応（Enter、Space）
 * - スクリーンリーダー対応
 * - フォーカス表示
 * - ARIA属性サポート
 * - aria-busyによるローディング状態
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  disabled,
  type = 'button',
  ...props
}) => {
  // ベーススタイル: すべてのボタンに共通するスタイル
  const baseStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.base,
    fontWeight: typography.fontWeight.semibold,
    borderRadius: '0.375rem',
    border: 'none',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    transition: 'all 0.2s ease-in-out',
    opacity: disabled || isLoading ? 0.6 : 1, // 無効化時は透明度を下げる
    outline: 'none', // デフォルトのアウトラインを削除（カスタムフォーカススタイルを使用）
    position: 'relative',
  };

  // バリアントスタイル: primary、secondary、outlineの見た目を定義
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.primary[500],
      color: colors.text.inverse,
    },
    secondary: {
      backgroundColor: colors.neutral[200],
      color: colors.text.primary,
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary[500],
      border: `2px solid ${colors.primary[500]}`,
    },
  };

  // サイズスタイル: sm、md、lgのサイズを定義
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: `${spacing.xs} ${spacing.sm}`,
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: typography.fontSize.lg,
    },
  };

  // 最終的なスタイル: ベース、バリアント、サイズを統合
  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading} // スクリーンリーダーにローディング状態を伝える
      aria-disabled={disabled || isLoading} // 無効化状態を明示的に伝える
      style={styles}
      {...props}
      // フォーカス時のスタイル: デジタル庁スタイルの黄色背景
      onFocus={(e) => {
        e.currentTarget.style.backgroundColor = colors.focus.background;
        e.currentTarget.style.color = colors.focus.text;
        e.currentTarget.style.outline = `3px solid ${colors.focus.outline}`;
        e.currentTarget.style.outlineOffset = '2px';
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        // 元のスタイルに戻す
        e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor || '';
        e.currentTarget.style.color = variantStyles[variant].color || '';
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.outlineOffset = '0';
        props.onBlur?.(e);
      }}
    >
      {/* ローディング状態の表示 */}
      {isLoading && (
        <span role="status" aria-label="読み込み中">
          ⏳
        </span>
      )}
      {/* アイコンの表示（装飾的なのでaria-hidden） */}
      {!isLoading && icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
};
