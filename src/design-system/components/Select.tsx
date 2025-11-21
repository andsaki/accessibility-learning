import React, { useId } from 'react';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';
import { radii } from '../constants/radii';
import { accessibilityLevels } from '../constants/accessibility';
import type { WCAGLevel } from '../constants/accessibility';
import { token } from '@/styled-system/tokens';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** ラベルテキスト */
  label: string;
  /** エラーメッセージ */
  error?: string;
  /** ヘルプテキスト */
  helperText?: string;
  /** セレクトボックスのサイズ */
  size?: 'sm' | 'md' | 'lg';
  /** 必須項目かどうか */
  required?: boolean;
  /** 選択肢 */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /** プレースホルダー（空の選択肢） */
  placeholder?: string;
  /** WCAGアクセシビリティレベル (A/AA/AAA) @default 'AA' */
  wcagLevel?: WCAGLevel;
}

/**
 * アクセシブルなセレクトボックスコンポーネント
 *
 * 機能:
 * - ラベルとselectの関連付け（for/id）
 * - エラー状態の適切な伝達（aria-invalid, aria-describedby）
 * - 必須項目の明示（aria-required）
 * - フォーカス表示
 * - WCAG準拠のカラーコントラスト
 */
export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  size = 'md',
  required = false,
  disabled = false,
  options,
  placeholder,
  wcagLevel = 'AA',
  id,
  ...props
}) => {
  // ユニークなIDを自動生成（idが指定されていない場合）
  const autoId = useId();
  const selectId = id || autoId;
  const errorId = `${selectId}-error`;
  const helperId = `${selectId}-helper`;

  // WCAGレベルに応じたフォーカススタイルを取得
  const levelFocus = accessibilityLevels.focus[wcagLevel];

  // キーボード操作によるフォーカスかどうかを追跡
  const [isKeyboardFocus, setIsKeyboardFocus] = React.useState(false);

  // グローバルなキーボード/マウスの使用を検出
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardFocus(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardFocus(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // サイズスタイル
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: `${spacing.input.paddingY.sm} ${spacing.input.paddingX.sm}`,
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: `${spacing.input.paddingY.md} ${spacing.input.paddingX.md}`,
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: `${spacing.input.paddingY.lg} ${spacing.input.paddingX.lg}`,
      fontSize: typography.fontSize.lg,
    },
  };

  const selectColors = {
    border: token('colors.gray.300'),
    borderError: token('colors.red.500'),
    bg: token('colors.white'),
    bgDisabled: token('colors.gray.100'),
    text: token('colors.gray.900'),
    textDisabled: token('colors.gray.500'),
    label: token('colors.gray.700'),
    helper: token('colors.gray.600'),
    error: token('colors.red.600'),
  };

  // ベーススタイル
  const baseStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.base,
    borderRadius: radii.borderRadius.md,
    border: error
      ? `2px solid ${selectColors.borderError}`
      : `2px solid ${selectColors.border}`,
    backgroundColor: disabled ? selectColors.bgDisabled : selectColors.bg,
    color: disabled ? selectColors.textDisabled : selectColors.text,
    transition: 'border-color 0.2s, box-shadow 0.2s',
    width: '100%',
    cursor: disabled ? 'not-allowed' : 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(disabled ? selectColors.textDisabled : selectColors.text)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right ${spacing.scale[2]} center`,
    backgroundSize: '1.25rem',
    paddingRight: spacing.scale[8],
    ...sizeStyles[size],
  };

  // フォーカススタイル（キーボード操作時のみ適用）
  const focusStyles: React.CSSProperties = isKeyboardFocus
    ? {
        outline: `${levelFocus.outlineWidth} solid ${levelFocus.outline}`,
        outlineOffset: levelFocus.outlineOffset,
        backgroundColor: levelFocus.background,
        color: levelFocus.text,
      }
    : {};

  // aria-describedby属性の構築
  const describedBy = [
    error ? errorId : null,
    helperText ? helperId : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div style={{ marginBottom: spacing.scale[4] }}>
      {/* ラベル */}
      <label
        htmlFor={selectId}
        style={{
          display: 'block',
          marginBottom: spacing.scale[2],
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
          color: selectColors.label,
        }}
      >
        {label}
        {required && (
          <span
            style={{
              color: selectColors.error,
              marginLeft: spacing.scale[1],
            }}
            aria-label="必須"
          >
            *
          </span>
        )}
      </label>

      {/* セレクトボックス */}
      <select
        id={selectId}
        disabled={disabled}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy || undefined}
        aria-required={required}
        style={{
          ...baseStyles,
          ...focusStyles,
        }}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* エラーメッセージ */}
      {error && (
        <p
          id={errorId}
          role="alert"
          style={{
            marginTop: spacing.scale[1],
            fontSize: typography.fontSize.sm,
            color: selectColors.error,
          }}
        >
          {error}
        </p>
      )}

      {/* ヘルプテキスト */}
      {helperText && !error && (
        <p
          id={helperId}
          style={{
            marginTop: spacing.scale[1],
            fontSize: typography.fontSize.sm,
            color: selectColors.helper,
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
