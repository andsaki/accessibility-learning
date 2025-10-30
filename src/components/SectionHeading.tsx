import React from 'react';
import { spacing } from '../design-system/tokens';
import { primitive } from '../design-system/tokens/colors';

export interface SectionHeadingProps {
  /** 見出しの前に表示する絵文字 */
  emoji?: string;
  /** 見出しテキスト */
  children: React.ReactNode;
  /** 見出しレベル (h2, h3, h4) @default 'h3' */
  level?: 'h2' | 'h3' | 'h4';
  /** カスタムスタイル */
  style?: React.CSSProperties;
}

/**
 * 絵文字付き見出しコンポーネント
 *
 * App.tsxで頻繁に使用される「絵文字 + 見出し」パターンを統一
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  emoji,
  children,
  level = 'h3',
  style = {},
}) => {
  const headingStyle: React.CSSProperties = {
    color: primitive.gray[900],
    marginBottom: spacing.scale[4],
    ...style,
  };

  const content = (
    <>
      {emoji && <span style={{ marginRight: spacing.scale[2] }}>{emoji}</span>}
      {children}
    </>
  );

  // レベルに応じて適切な要素を返す
  switch (level) {
    case 'h2':
      return <h2 style={headingStyle}>{content}</h2>;
    case 'h3':
      return <h3 style={headingStyle}>{content}</h3>;
    case 'h4':
      return <h4 style={headingStyle}>{content}</h4>;
    default:
      return <h3 style={headingStyle}>{content}</h3>;
  }
};
