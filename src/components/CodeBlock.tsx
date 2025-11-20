import { useState } from 'react';
import type { ReactNode } from 'react';
import { spacing, radii } from '../design-system/tokens';
import { useTheme } from '../design-system/theme';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  /**
   * 表示するコード
   */
  code: string;
  /**
   * プログラミング言語（表示用ラベル）
   */
  language?: string;
  /**
   * コードブロックの説明やコメント
   */
  description?: ReactNode;
  /**
   * コピーボタンを表示するか
   * @default true
   */
  showCopyButton?: boolean;
  /**
   * 行番号を表示するか
   * @default false
   */
  showLineNumbers?: boolean;
  /**
   * aria-label (スクリーンリーダー用のラベル)
   */
  ariaLabel?: string;
}

/**
 * CodeBlock コンポーネント
 *
 * シンタックスハイライト付きのコードブロックを表示します。
 * アクセシビリティに配慮し、コピー機能や説明文の表示に対応しています。
 *
 * @example
 * ```tsx
 * <CodeBlock
 *   code={`<button aria-label="閉じる">
 *   <XIcon />
 * </button>`}
 *   language="html"
 *   description="スクリーンリーダーが読み上げる内容: ボタン → 閉じる → クリック可能"
 * />
 * ```
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  description,
  showCopyButton = true,
  showLineNumbers = false,
  ariaLabel,
}) => {
  const { colors } = useTheme();
  const primitive = colors.primitive;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');

  // シンタックスハイライト用の簡易パーサー
  const highlightCode = (text: string) => {
    const tokens: { type: string; value: string }[] = [];

    // HTML/JSXタグ
    const tagRegex = /<\/?[\w-]+|\/?>|=/g;
    // 文字列リテラル
    const stringRegex = /"[^"]*"|'[^']*'/g;
    // コメント
    const commentRegex = /\/\/[^\n]*|\/\*[\s\S]*?\*\//g;
    // キーワード
    const keywordRegex = /\b(const|let|var|function|return|if|else|import|export|interface|type|aria-\w+)\b/g;
    // CSSセレクタ・プロパティ
    const cssSelectorRegex = /^[\s]*\.[\w-]+|^[\s]*#[\w-]+|^[\s]*[\w-]+(?=\s*\{)/gm;
    const cssPropertyRegex = /[\w-]+(?=\s*:)/g;
    // CSS値（色、数値など）
    const cssValueRegex = /#[0-9a-fA-F]{3,6}|\b\d+px\b|\b\d+rem\b|\b\d+%\b/g;

    let lastIndex = 0;
    const matches: { index: number; length: number; type: string }[] = [];

    // すべてのマッチを収集
    let match;
    while ((match = tagRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'tag' });
    }
    while ((match = stringRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'string' });
    }
    while ((match = commentRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'comment' });
    }
    while ((match = keywordRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'keyword' });
    }
    while ((match = cssSelectorRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'selector' });
    }
    while ((match = cssPropertyRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'property' });
    }
    while ((match = cssValueRegex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, type: 'value' });
    }

    // インデックスでソート
    matches.sort((a, b) => a.index - b.index);

    // 重複を除去（優先順位: comment > string > tag > keyword）
    const filteredMatches: typeof matches = [];
    for (let i = 0; i < matches.length; i++) {
      const current = matches[i];
      const hasOverlap = filteredMatches.some(
        (m) => current.index >= m.index && current.index < m.index + m.length
      );
      if (!hasOverlap) {
        filteredMatches.push(current);
      }
    }

    // トークン化
    filteredMatches.forEach((match) => {
      if (match.index > lastIndex) {
        tokens.push({ type: 'text', value: text.slice(lastIndex, match.index) });
      }
      tokens.push({ type: match.type, value: text.slice(match.index, match.index + match.length) });
      lastIndex = match.index + match.length;
    });

    if (lastIndex < text.length) {
      tokens.push({ type: 'text', value: text.slice(lastIndex) });
    }

    return tokens;
  };

  const getTokenColor = (type: string) => {
    switch (type) {
      case 'tag':
        return primitive.pink[300]; // タグ: ピンク
      case 'string':
        return primitive.green[300]; // 文字列: 緑
      case 'comment':
        return primitive.gray[500]; // コメント: グレー
      case 'keyword':
        return primitive.blue[300]; // キーワード: 青
      case 'selector':
        return primitive.pink[300]; // CSSセレクタ: ピンク
      case 'property':
        return primitive.blue[300]; // CSSプロパティ: 青
      case 'value':
        return primitive.orange[300]; // CSS値: オレンジ
      default:
        return primitive.gray[100]; // デフォルト: 白っぽい
    }
  };

  const renderHighlightedLine = (line: string) => {
    const tokens = highlightCode(line);
    return tokens.map((token, i) => (
      <span key={i} style={{ color: getTokenColor(token.type) }}>
        {token.value}
      </span>
    ));
  };

  return (
    <div
      role="region"
      aria-label={ariaLabel || `${language || 'コード'}ブロック`}
      style={{
        borderRadius: radii.borderRadius.md,
        overflow: 'hidden',
        border: `1px solid ${colors.border.subtle}`,
      }}
    >
      {/* ヘッダー */}
      {(language || showCopyButton) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: `${spacing.scale[2]} ${spacing.scale[3]}`,
            backgroundColor: primitive.gray[800],
            borderBottom: `1px solid ${primitive.gray[700]}`,
          }}
        >
          {language && (
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: primitive.gray[300],
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {language}
            </span>
          )}
          {showCopyButton && (
            <button
              onClick={handleCopy}
              aria-label={copied ? 'コピーしました' : 'コードをコピー'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.scale[1],
                padding: `${spacing.scale[1]} ${spacing.scale[2]}`,
                backgroundColor: copied ? primitive.green[700] : primitive.gray[700],
                color: primitive.white,
                border: 'none',
                borderRadius: radii.borderRadius.sm,
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.currentTarget.style.backgroundColor = primitive.gray[600];
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.currentTarget.style.backgroundColor = primitive.gray[700];
                }
              }}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>コピーしました</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>コピー</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* コードブロック */}
      <div
        style={{
          backgroundColor: primitive.gray[900],
          padding: spacing.scale[4],
          overflowX: 'auto',
        }}
      >
        <pre
          style={{
            margin: 0,
            fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            fontSize: '14px',
            lineHeight: '1.6',
          }}
        >
          <code
            style={{
              display: 'block',
            }}
          >
            {showLineNumbers ? (
              lines.map((line, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: spacing.scale[3],
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: primitive.gray[600],
                      userSelect: 'none',
                      minWidth: '2em',
                      textAlign: 'right',
                    }}
                  >
                    {index + 1}
                  </span>
                  <span>{renderHighlightedLine(line)}</span>
                </div>
              ))
            ) : (
              lines.map((line, index) => (
                <div key={index}>{renderHighlightedLine(line)}</div>
              ))
            )}
          </code>
        </pre>
      </div>

      {/* 説明文 */}
      {description && (
        <div
          style={{
            padding: spacing.scale[3],
            backgroundColor: primitive.gray[900],
            borderTop: `1px solid ${primitive.gray[800]}`,
            color: primitive.gray[400],
            fontSize: '13px',
            lineHeight: '1.6',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
};
