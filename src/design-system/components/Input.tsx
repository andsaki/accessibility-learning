import React, { useId } from 'react';
import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** ラベルテキスト */
  label: string;
  /** エラーメッセージ */
  error?: string;
  /** ヘルプテキスト */
  helperText?: string;
  /** 入力欄のサイズ */
  size?: 'sm' | 'md' | 'lg';
  /** 必須項目かどうか */
  required?: boolean;
}

/**
 * アクセシブルな入力コンポーネント
 *
 * 機能:
 * - ラベルとinputの関連付け（for/id）
 * - エラー状態の適切な伝達（aria-invalid, aria-describedby）
 * - 必須項目の明示（aria-required）
 * - フォーカス表示
 * - WCAG AA準拠のカラーコントラスト
 */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  size = 'md',
  required = false,
  disabled = false,
  id,
  ...props
}) => {
  // ユニークなIDを自動生成（idが指定されていない場合）
  const autoId = useId();
  const inputId = id || autoId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  // サイズスタイル
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

  // ベーススタイル
  const inputStyles: React.CSSProperties = {
    width: '100%',
    fontFamily: typography.fontFamily.base,
    borderRadius: '0.375rem',
    border: `2px solid ${error ? colors.input.borderError : colors.input.border}`,
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: disabled ? colors.input.bgDisabled : colors.input.bg,
    color: disabled ? colors.input.textDisabled : colors.input.text,
    cursor: disabled ? 'not-allowed' : 'text',
    ...sizeStyles[size],
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: spacing.xs,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.input.label,
  };

  const helperTextStyles: React.CSSProperties = {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: error ? colors.input.errorText : colors.input.helperText,
    lineHeight: typography.lineHeight.normal,
  };

  const containerStyles: React.CSSProperties = {
    marginBottom: spacing.md,
  };

  // aria-describedbyの値を構築
  const getAriaDescribedBy = () => {
    const ids: string[] = [];
    if (error) ids.push(errorId);
    if (helperText && !error) ids.push(helperId);
    return ids.length > 0 ? ids.join(' ') : undefined;
  };

  return (
    <div style={containerStyles}>
      {/* ラベル: for属性でinputと関連付け */}
      <label htmlFor={inputId} style={labelStyles}>
        {label}
        {/* 必須項目の表示 */}
        {required && (
          <span
            style={{ color: colors.input.errorText, marginLeft: spacing.xs }}
            aria-label="必須"
          >
            *
          </span>
        )}
      </label>

      {/* 入力フィールド */}
      <input
        id={inputId}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={getAriaDescribedBy()}
        style={inputStyles}
        {...props}
        // フォーカス時のスタイル: 黄色背景
        onFocus={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = colors.focus.background;
            e.currentTarget.style.color = colors.focus.text;
            e.currentTarget.style.borderColor = colors.focus.outline;
            e.currentTarget.style.outline = `3px solid ${colors.focus.outline}`;
            e.currentTarget.style.outlineOffset = '2px';
          }
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          // 元のスタイルに戻す
          e.currentTarget.style.backgroundColor = disabled ? colors.input.bgDisabled : colors.input.bg;
          e.currentTarget.style.color = disabled ? colors.input.textDisabled : colors.input.text;
          e.currentTarget.style.borderColor = error ? colors.input.borderError : colors.input.border;
          e.currentTarget.style.outline = 'none';
          e.currentTarget.style.outlineOffset = '0';
          props.onBlur?.(e);
        }}
      />

      {/* エラーメッセージ: role="alert"で即座に読み上げ */}
      {error && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          style={helperTextStyles}
        >
          {error}
        </div>
      )}

      {/* ヘルプテキスト: エラーがない場合のみ表示 */}
      {helperText && !error && (
        <div id={helperId} style={helperTextStyles}>
          {helperText}
        </div>
      )}
    </div>
  );
};
