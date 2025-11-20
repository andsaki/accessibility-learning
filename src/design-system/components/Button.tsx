import React from "react";
import { button } from "../../../styled-system/recipes";
import { css, cx } from "@/styled-system/css";
import type { WCAGLevel } from "../tokens";
import { accessibilityLevels } from "../tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンのバリエーション */
  variant?: "primary" | "secondary" | "outline" | "danger";
  /** ボタンのサイズ */
  size?: "sm" | "md" | "lg";
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
 * - Panda CSSレシピによる型安全なスタイリング
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  disabled,
  type = "button",
  wcagLevel = "AA",
  className,
  ...props
}) => {
  // キーボード操作によるフォーカスかどうかを追跡
  const [isKeyboardFocus, setIsKeyboardFocus] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // WCAGレベルに応じたフォーカススタイルを取得
  const levelFocus = variant === 'danger'
    ? accessibilityLevels.dangerFocus[wcagLevel]
    : accessibilityLevels.focus[wcagLevel];

  // グローバルなキーボード/マウスの使用を検出
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardFocus(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardFocus(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Panda CSSレシピを使用してクラス名を生成
  const recipeClassName = button({ variant, size, wcagLevel });
  // WCAGレベルごとのフォーカスリングはアクセシビリティ情報から
  // 可変値を注入する必要があるため、レシピ側ではなく CSS 変数で制御する
  // （Pandaのrecipeはトークン/リテラル値しか持てず、実行時の任意値を渡せないため）
  const focusVarsClass = css({
    "--focus-bg": levelFocus.background,
    "--focus-text": levelFocus.text,
    "--focus-outline": levelFocus.outline,
    "--focus-outline-width": levelFocus.outlineWidth,
    "--focus-outline-offset": levelFocus.outlineOffset,
  });

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      className={cx(recipeClassName, focusVarsClass, className)}
      {...props}
      style={props.style}
      onFocus={(e) => {
        // キーボードフォーカスの場合のみ表示
        if (isKeyboardFocus) {
          e.currentTarget.setAttribute("data-focused", "true");
        }
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        // フォーカス時のクラスを削除
        e.currentTarget.removeAttribute("data-focused");
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
      {!isLoading && icon && (
        <span
          aria-hidden="true"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};
