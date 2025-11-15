import React from 'react';
import { spacing } from '../tokens';
import { primitive } from '../tokens/colors';

export type InfoBoxVariant = 'info' | 'warning' | 'success' | 'tip';

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
  /** カスタムスタイル */
  style?: React.CSSProperties;
}

const variantStyles: Record<
  InfoBoxVariant,
  { bg: string; border: string; color: string }
> = {
  info: {
    bg: primitive.blue[50],
    border: primitive.blue[300],
    color: primitive.blue[800],
  },
  warning: {
    bg: primitive.orange[50],
    border: primitive.orange[300],
    color: primitive.orange[900],
  },
  success: {
    bg: primitive.green[50],
    border: primitive.green[300],
    color: primitive.green[800],
  },
  tip: {
    bg: primitive.blue[50],
    border: primitive.blue[300],
    color: primitive.blue[800],
  },
};

/**
 * 情報ボックスコンポーネント
 *
 * ヒントや警告などの情報を強調して表示するためのコンポーネント
 */
export const InfoBox: React.FC<InfoBoxProps> = ({
  variant = 'info',
  title,
  icon,
  children,
  leftBorder = false,
  style,
}) => {
  const styles = variantStyles[variant];

  return (
    <div
      style={{
        padding: spacing.scale[4],
        backgroundColor: styles.bg,
        borderRadius: '8px',
        border: `1px solid ${styles.border}`,
        borderLeft: leftBorder ? `4px solid ${styles.border}` : `1px solid ${styles.border}`,
        color: styles.color,
        ...style,
      }}
    >
      {(title || icon) && (
        <div
          style={{
            fontWeight: 600,
            marginBottom: spacing.scale[2],
            color: styles.color,
          }}
        >
          {icon && <span style={{ marginRight: spacing.scale[2] }}>{icon}</span>}
          {title}
        </div>
      )}
      <div style={{ lineHeight: 1.6 }}>{children}</div>
    </div>
  );
};
