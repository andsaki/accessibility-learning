import React from 'react';
import { colors, spacing, typography, accessibilityLevels } from '../tokens';
import type { WCAGLevel } from '../tokens';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンのバリエーション */
  variant?: 'primary' | 'secondary' | 'outline';
  /** ボタンのサイズ */
  size?: 'sm' | 'md' | 'lg';
  /** ローディング状態 */
  isLoading?: boolean;
  /** テキストの前に表示するアイコン */
  icon?: React.ReactNode;
  /** WCAGアクセシビリティレベル (A/AA/AAA) @default 'AA' */
  wcagLevel?: WCAGLevel;
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
  wcagLevel = 'AA',
  ...props
}) => {
  // WCAGレベルに応じたカラートークンを取得
  const levelColors = accessibilityLevels.button[wcagLevel];
  const levelFocus = accessibilityLevels.focus[wcagLevel];

  // キーボード操作によるフォーカスかどうかを追跡
  const [isKeyboardFocus, setIsKeyboardFocus] = React.useState(false);
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

  // バリアントスタイル: WCAGレベルとバリアントに応じた見た目を定義
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: disabled ? colors.button.primary.bgDisabled : levelColors.primary.bg,
      color: disabled ? colors.button.primary.textDisabled : levelColors.primary.text,
      border: `1px solid ${disabled ? colors.button.primary.bgDisabled : levelColors.primary.border}`,
    },
    secondary: {
      backgroundColor: disabled ? colors.button.secondary.bgDisabled : levelColors.secondary.bg,
      color: disabled ? colors.button.secondary.textDisabled : levelColors.secondary.text,
      border: `1px solid ${disabled ? colors.button.secondary.borderHover : levelColors.secondary.border}`,
    },
    outline: {
      backgroundColor: disabled ? colors.button.outline.bgDisabled : 'transparent',
      color: disabled ? colors.button.outline.textDisabled : levelColors.primary.bg,
      border: `2px solid ${disabled ? (colors.button.outline.borderDisabled || colors.border.default) : levelColors.primary.bg}`,
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

  // ホバー/アクティブ用のトークン
  const interactionColors = {
    primary: colors.button.primary,
    secondary: colors.button.secondary,
    outline: colors.button.outline,
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      style={{
        ...styles,
        // CSS変数でホバー/フォーカス色を定義
        ['--hover-bg' as string]: disabled || isLoading ? '' : interactionColors.bgHover,
        ['--hover-border' as string]: disabled || isLoading ? '' : interactionColors.borderHover || interactionColors.bgHover,
        ['--focus-bg' as string]: levelFocus.background,
        ['--focus-text' as string]: levelFocus.text,
        ['--focus-outline' as string]: levelFocus.outline,
        ['--focus-outline-width' as string]: levelFocus.outlineWidth,
        ['--focus-outline-offset' as string]: levelFocus.outlineOffset,
      }}
      onMouseDown={() => {
        // マウスクリックの場合はフォーカス表示しない
        setIsKeyboardFocus(false);
      }}
      onKeyDown={() => {
        // キーボード操作の場合はフォーカス表示する
        setIsKeyboardFocus(true);
      }}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={(e) => {
        // キーボードフォーカスの場合のみ表示
        if (isKeyboardFocus) {
          e.currentTarget.setAttribute('data-focused', 'true');
          // テキスト色がinheritの場合は専用の属性を追加
          if (levelFocus.text === 'inherit') {
            e.currentTarget.setAttribute('data-focus-text-inherit', 'true');
          }
        }
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        // フォーカス時のクラスを削除
        e.currentTarget.removeAttribute('data-focused');
        e.currentTarget.removeAttribute('data-focus-text-inherit');
        setIsKeyboardFocus(false);
        props.onBlur?.(e);
      }}
      {...props}
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
